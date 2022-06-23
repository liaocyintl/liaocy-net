---
title: PostgreSQL那些忘却的事
date: 2019-05-27 09:25:00
lang: zh-Hans
tags:
    - SQL
    - PostgreSQL
    
categories: 
    - 开发 Development
    - SQL
---

Postgres的叫法好像有好几个，PostgreSQL、Postgres、PostgresDB等等，身边有人用过，是因为Postgres有一个地理信息插件PostGIS，据说Postgres对于地理信息的处理有独到之处，因此他们做GIS的人用的比较多。我之前几乎没怎么用过Postgres，一直习惯用MySQL，最近用MariaDB多一些。这次培训碰巧学到了，基本语法还是标准的SQL，本文用于记录一些我记得不太清楚的，以及Postgres特有的语法。
<!-- more -->

# Basic Commands (PSQL)

#### psql -U postgres :  Access to DBMS engine

#### \l : show databases

#### \c {database name}: use database

#### \d : show tables

#### \d {table name} : show table structure

#### \q : quit

#### \i {SQL file} : run the SQL file

# DML

#### \pset null NULL : show null as 'NULL' when SELECT

#### @ or \ : ESCAPE
e.g.:
```
# SELECT * FROM a WHERE A LIKE "%10@%%" //means extract record where includes 10%
```

#### UNION / UNION ALL: combine the result-set of two or more SELECT statements vertically
e.g.:
```SQL
SELECT country FROM Websites
UNION
SELECT country FROM apps
ORDER BY country;
```

```SQL
SELECT country FROM Websites
UNION ALL
SELECT country FROM apps
ORDER BY country;
```

#### All joins:
e.g.:
```SQL
LEFT JOIN b ON <conditions>
RIGHT JOIN b ON <conditions>
INNER JOIN b ON
```

#### :: : type conversion (Only for postgres)
e.g.:
```SQL
SELECT '2013-05-03'::date;
```
result:
```
    date
------------
 2018-01-01
```

#### ALL : 父查询中的结果集大于子查询中每一个结果集中的值,则为真
e.g.:
```
SELECT * FROM T2 WHERE N > ALL (SELECT N FROM T1)
```

#### ANY,SOME : 父查询中的结果集大于子查询中任意一个结果集中的值,则为真
e.g.:
```
SELECT * FROM T2 WHERE N > ANY(SELECT N FROM T1)
SELECT * FROM T2 WHERE N > SOME(SELECT N FROM T1)
```

#### ANY, IN : ANY 与子查询IN相同
e.g.:

```
SELECT * FROM T2 WHERE N = ANY (SELECT N FROM T1)
SELECT * FROM T2 WHERE N IN (SELECT N FROM T1)
```

#### ANY, NOT IN

#### ' " and `
- ' : definition of a variate
- " : definition of a column name
- ` : definition of a column name (MySQL)

#### Transaction
e.g.:
```SQL

\set AUTOCOMMIT off -- shutdown autocommit
\echo :AUTOCOMMIT

BEGIN; -- or [start transaction]
INSERT INTO hoge VALUE('hoge');
SELECT * FROM hoge; -- results hoge
ROLLBACK;
SELECT * FROM hoge; -- results nothing

INSERT INTO hoge VALUES('hoge2');
SAVEPOINT hoge2;
SELECT * FROM hoge; -- results hoge2
DELETE FROM hoge2 WHERE name = 'hoge2';
SELECT * FROM hoge; -- results nothing

ROLLBACK TO hoge2; -- goto SAVEPOINT hoge2
SELECT * FROM hoge; -- results hoge2

COMMIT; -- transaction end
```

attention: The lock is started then first INSERT, UPDATE, or DELETE but not START;

# DDL

#### CREATE TEMPORARY table... : create a in-memory-database

#### SERIAL : Auto-increased ID in postgres
e.g.:
```SQL
create table sample (
  id SERIAL PRIMARY KEY,
  "value" integer
) ;
```

```SQL
CREATE SEQUENCE orders_seq;
INSERT INTO XXX VALUES(NEXTVAL(orders_seq));

CURRVAL(orders_seq) -- current value
SELECT SETVAL(orders_seq, value); -- set a value for orders_seq
DROP SEQUENCE orders_seq;
```

#### Foreign key

```SQL
CREATE TABLE hoge4(
    id SERIAL PRIMARY KEY, 
    staff_id INT FOREIGN KEY REFERENCES staff(pno)
);
```

#### ALTER

format:
```SQL
ALTER TABLE <table name> RENAME TO <new table name> -- change table name
```

e.g.:
```SQL
ALTER TABLE hoge4 RENAME TO hoge5; -- change table name.
ALTER TABLE hoge4 ADD addr varchar(50); -- add a column "addr" at the end of table hoge4.
ALTER TABLE hoge4 DROP addr; -- drop column "addr" in the table hoge4.
ALTER TABLE hoge4 DROP CONSTRAINT people_pkey; -- drop a constraint "people_pkey" in the table hoge4.
ALTER TABLE hoge4 ALTER addr DROP NOT NULL; -- drop "NOT NULL" attribute of column "addr" in the table hoge4.
DROP TABLE hoge4; -- drop the table hoge4;
```

#### View
Format:
```SQL
CREATE VIEW xxx_view AS
    SELECT .......;
```

#### Index
format:
```SQL
CREATE INDEX <index_name> ON <table_name> (<column1, column2>); -- create a index

DROP INDEX <index_name>; -- drop a index


```

# DCL

#### Role

```SQL
CREATE ROLE training LOGIN PASSWORD 'training';
ALTER ROLE training RENAME TO dbtraining;
ALTER ROLE dbtraining PASSWORD 'password';
ALTER ROLE dbtraining WITH SUPERUSER CREATEDB CREATEROLE;

DROP ROLE dbtraining;
```

#### GRAND

```SQL
GRANT ALL ON DATABASE mydb00 TO dbtraining;
GRANT <privilege1>, <privilege2> ON <table_name> TO <user_name>
```
