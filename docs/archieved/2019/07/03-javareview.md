---
title: Java8那些忘却的事
date: 2019-07-03 15:15:00
lang: zh-Hans
tags:
    - Java
    - Tomcat
    
categories: 
    - Java
---

我学习Java已经是十年以前的事情了。距离最后一次使用Java也是五年前的事了，以至于我以为这辈子不会再使用Java了，开发网页可以用PHP，数据处理可以用Python，就连从前不得不使用Java开发的Android应用竟然也有了替代品Kotlin。这些工具都让开发更加简洁，特别是个人开发的时候，PHP给人的感觉是项目可以做完，而Java总是能把小型项目开发成中型项目，把中型项目开发成大型项目。

最近参加培训，竟然又把Java系统性地学了一遍，然后用最后半个月的时间和一个五人团队完整的跑了一遍瀑布模型。说实话对Java的印象有所改观。Java虽然语法严格，但其接口、抽象类、强数据类型等检查机制，通过IDE加持，在团队开发中起到了不坏的效果。另外值得欣慰的是，我十年前学过的知识到现在竟然还没有过时，我稍微感到一些安心。

当然还是有很多忘掉的内容，本文用来整理这些内容。

<!-- more -->

# 问题背景

Java8那些忘却的事

# CMD Mode

#### Compile and Run Java in CMD

```bash
# compile
$ javac Hello.java
# run
$ java Hello
```

#### Parameters

```bash
# export as java package
$ java --jar Hello
# run
$ java Hello
```

# Basic Grammar

#### Naming rule

```java
Class TheClassNameUsingPascalCase{

    public static final int TheConstant;

    int theVariateUsingCamelCase;

    void theFunctionNameUsingCamelCase(int theVariateUsingCamelCase){

    }

}

```

#### Variate Default Value

```java

short, byte, int, long a = 0;
float, double a = 0.0;
char a = '\u0000';
boolean a = false
Other a = null;

```

#### Metric Variable

```java

0.1F; //A float variable
100000000L; //A long variable

```

#### Array

```java

int arr[] = {10, 20, 30, 40};

for (int i : arr){
    sout(i);
}

sout(arr.length);

```

#### Comment

```java
// comment

/* 
   comment1 
   comment2
*/

/**
   document1 
   document2
*/

```

# Class and Object

#### StringBuffer : for String modification

```java
public static void main(String args[]){
    StringBuffer sBuffer = new StringBuffer("google：");
    sBuffer.append("www");
    sBuffer.append(".google");
    sBuffer.append(".com");
    System.out.println(sBuffer);
}

```

# JVM

- CLASSPATH: a path of class files (Library)


# Type

- Autoboxing: Boxing a basic type into reference type
```java
Integer i = 100;
==
Integer i = new Integer(100);
```

- Unboxing: Unbox a reference type to basic type
```java
Integer i = 100;
rs = i + 200;
==
rs = i.value() + 200;
```



#### Object.hashCode() : Hash code of the class

```java



```

# Inheritance

#### instanceof :

```java
ParentClass p1 = new ParentClass();
Object o = (Object)p1;
if (o instanceof ParentClass){
    ParentClass p2 = (ParentClass)o;
}
```

#### IsA, HasA

Human is a Animal :
Human has a Head :

```java
class Human extends Animal{
    private Head head;
}
```

# Interface

#### An Interface can extends another interface or other interfaces.

# Exception

#### Exception Class Structure

```json
{
    "Throwable": {
        "Exception": {
            "RunTimeException": {}
        },
        "Error":{}
    }
}
```

#### RunTimeException: Do not checked by compiler.

# Collection

#### Generics:
```java
public class SomeClass<T>{
    private T t;
    private List<T> list = new List<T>();
    public T someMethod(T arg){
        return new T(arg);
    }
}
```

#### enumeration: implements iterator

#### HashMap Iterate:

```java
for(Map.Entry<String, String> entry : weekdays.entrySet()) {
    System.out.println(entry.getKey() + " => " + entry.getValue());
}
```

# Documentation

#### format
```java
/**
 * This is a sample
 */
public class Sample(){
    /**
    * Say "Hello"
    */
    public void hello() {
        System.out.println("Hello");
    }
}
```

#### tags
```java
/**
 * @author 作者
 * @version 版本号
 *  当前版本号
 * @since 版本号
 *  前置版本号
 * @see 参考标签
 * @deprecated 说明
 *  说明过期的情况 
 */
```

#### Sample

```java
/** This class shows a Sample
 * @version 1.0
 * @author Chenyi Liao
 */
public class Sample(){

}
```

#### generator
```bash
$ javadoc -d <output dir> <source.java>
```
# Access

|| Same Class | Same Package | Sub-class | Different Class |
| ---- | ---- | ---- | ---- | ---- |
| public | ○ | ○ | ○ | ○ |
| protected | ○ | ○ | ○ | × |
| (default) | ○ | ○ | × | × |
| private | ○ | × | × | × |

# Overload and Override

- Override: between super class and sub-class. If a class inherits a method from its superclass, then there is a chance to override the method provided that it is not marked final.
- Overload (Overloading): in the same class.

#JUnit

#### setUP() and tearDown()

- setUP():  run before all test methods.
- tearDown(): run after all test methods.

# Serialize

```java
import java.io.Serializable;

public class Employee implements Serializable{

}
```

# Java Web Application

## Folder Structure

- DocumentRoot: the root directory for web server
  - ContextRoot: JSP files, HTML...
  - WEB-INF: web.xml Classes...
    - lib: JAR files
    - classes: not opening to the Internet. Java Classes
    - web.xml

## Forced close tomcat in CMD (Windows)

```bash
$ netstat -nao
$ taskkill /F /pid 3144
```

## Tomcat Reload Automatically when source-code modified

In server.xml, there is a:
```xml
<Context docBase="labhttp" path="/labhttp" reloadable="false" source="org.eclipse.jst.jee.server:labhttp"/></Host>
```
Modify it as:
```xml
<Context docBase="labhttp" path="/labhttp" reloadable="true" source="org.eclipse.jst.jee.server:labhttp"/></Host>
```
which can be reload automatically.

## Cookie

```java
Cookie[] cookies = request.getCookies();
for (Cookie cookie : cookies){
    String name = cookie.getName();
    String value = cookie.getValue();
    String utfValue = URLDecoder.decode(cookie.getValue(), "UTF-8");
}
```

## JSP & Servlet

### JAVA code
```java
<% 
String msg = "helloworld";
%>
```

### Ouput1:
```java
<%=msg%>
```

### Ouput2:
```java
<%
out.println("HelloWorld");
%>
```

### Definition:
```java
<%!
int b = 1;
%>
<%!
private int add(int a, int b){
    return a + b;
}
%>
```

### Page Directive:
```java
<%@ page
    [ language="java" ]
    [ extends="package.class" ]
    [ import="{package.class | package.*}, ..." ]
    [ session="true|false" ]
    [ buffer="none|8kb|sizekb" ]
    [ autoFlush="true|false" ]
    [ isThreadSafe="true|false" ]
    [ info="text" ]
    [ errorPage="relativeURL" ]
    [ contentType="mimeType [ ; charset=characterSet ]" |
        "text/html ; charset=ISO-8859-1" ]
    [ isErrorPage="true|false" ]
    [ pageEncoding="characterSet | ISO-8859-1" ]
    [ isELIgnored="true|false"]
%>
```

#### taglib:
```java
<%@ taglib prefix="c" url="http://java.sun.com/jstl/core"%>
<c:forEach begin="1" end="9" var="i">
    <c:out value="${i}" />
</c:forEach>
```

### Dispatcher

- [reference](https://www.cnblogs.com/lulipro/p/7471987.html)

Servlet:
```java
public class UsersServlet extends HttpServlet {
    private static final long serialVersionUID = 1L ;

    protected void doGet (HttpServletRequest request, HttpServletResponse response) throws ServletException , IOException {
        /*****************一般实际开发这些用户数据都是从数据库查出来的*********/
        List <User > users = new ArrayList <> ();
        User u1 = new User () ;
        u1 .setAge ( 20) ;
        u1 .setName ( "Bob") ;
        User u2 = new User () ;
        u2 .setAge ( 21) ;
        u2 .setName ( "Tony") ;
        users .add ( u1) ;
        users .add ( u2) ;
        /*********************************************/
        request .setAttribute ( "users", users) ;   //对request 进制预处理准备工作
        request .getRequestDispatcher ( "users.jsp").forward( request , response );//转发到users.jsp，让他去具体响应
    } 
}
```

JSP:
```java
<%@ page   contentType= "text/html; charset=UTF-8" pageEncoding ="UTF-8" trimDirectiveWhitespaces= "true"
          session ="true" %>
<%@ taglib prefix= "c" uri = "http://java.sun.com/jstl/core_rt"   %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv = "Content-Type" content ="text/html; charset=UTF-8">
        <title> Users List</title>
    </head>
    <body>

        < c:forEach var ="user" items= " ${users}" >
        UserName:${user.name}  UserAge:${user.age}  <br />
        </ c:forEach>
    </body>
</html>
```


## JDBC

### PreparedStatement

```java
PreparedStatement pstmt = con.prepareStatement("INSERT INTO table VALUES(?,?)");
pstmt.setInt(1, 11);
pstmt.setString(2, "abc");
ResultSet res = pstmt.executeQuery();

//or

Integer count = pstmt.executeUpdate();

```

### Transaction

```java
conn.setAutoCommit(false);
try{
    stmt.executeUpdate("sql1");
    stmt.executeUpdate("sql2");
    conn.commit();
} catch(Exception ex){
    conn.rollback();
} finally{
    conn.setAutoCommit(true);
}
```

### Datatype: Java VS RDBMS

| Java | RDBMS |
| --- | --- |
| String | CHAR VARCHAR |
| java.math.BigDecimal | NUMERIC |
| boolean | BIT |
| byte | TINYINT |
| short | SMALLINT |
| int | INTEGER |
| long | BIGINT |
| float | REAL |
| double | DOUBLE |
| byte[] | BINARY VARBINARY |
| java.sql.Date | DATE |
| java.sql.Time | TIME |
| java.sql.Timestamp | TIMESTAMP |

# MVC
## Create Database and Tables

```sql
create table customer(id serial, name varchar(100));
```

## Bean:

Create Bean class according to 

```java : CustomerBean.java
public class CustomerBean implements Serializable(){
    private int id;
    private String name;
    // setter, getter
}
```

## DAO: Data Access Objects

```java : IDao.java
interface ICustomerDao{
    void insert(Customer customer);
    void update(Customer customer);
    void delete(Customer customer);

    List<Customer> findAll(Customer customer);
    Customer findById(int customerId);
}
```

```java : CustomerDao.java
public class CustomerDao implements ICustomerDao{
    Connection con = null;
    PreparedStatement pstmt = null;
    ResultSet res = null;

    CustomerDao{
        con = DBManager.getConnection("xxxxx");
    }
}
```

## Servlet :
```java
String name = request.getParameter("name");

Customer customer = new Customer(name);

request.setAttribute("customer", customer);
forward("customer", "xx.jsp");
```

## JSP

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

The name is : ${customer.name}
```

### Foreach

```jsp
<%
  String[] strs = {
    "最初の行",
    "真ん中の行",
    "最後の行",
  };
  request.setAttribute("list", strs);
%>
<table>
  <c:forEach var="v" items="${list}" varStatus="st">
    <tr><td>${st.count}番目</td><td>${v}</td></tr>
  </c:forEach>
</table>
```