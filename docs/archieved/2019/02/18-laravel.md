---
title: Laravel命令快查
date: 2019-02-18 12:54:00
lang: zh-Hans
tags:
    - PHP
    - Laravel
categories: 
    - 开发 Development
    - PHP
---

心血来潮学了一下Laravel，本文记录一些常用的Laravel语法。
<!-- more -->

## 参考资料

- [Laravel 5.7 文档](https://laravelacademy.org/laravel-5_7)

## Database and Eloquent

建立数据库迁移文件：
php artisan make:migration flight --create=flight

同时建立模型和数据库迁移文件：
```bash
php artisan make:model Flight --migration
php artisan make:model Flight -m
```

建表： [Blueprint](https://laravel.com/api/5.7/Illuminate/Database/Schema/Blueprint.html)
```php
Schema::create('users', function (Blueprint $table) {
    $table->increments('id');
    $table->string('name');
    $table->string('email')->unique();
    $table->timestamp('email_verified_at')->nullable();
    $table->string('password');
    $table->rememberToken();
    $table->timestamps();
    // forengn key
    $table->foreign('user_id')->references('id')->on('users');   
});
```

修改表：
```php
Schema::table('users', function (Blueprint $table) {
    $table->string('nickname', 100)->after('name')->nullable()->comment('用户昵称');
    // index
    $table->primary('id');
    $table->index('name');
    $table->unique('email');
});
```

执行迁移：
```bash
php artisan migrate
```

生成填充器：
```bash
php artisan make:seeder UsersTableSeeder
```

编写填充器：
```bash
DB::table('users')->insert([
    'name' => str_random(10),
    'email' => str_random(10).'@gmail.com',
    'password' => bcrypt('secret'),
]);
```

填充数据：
```bash
php artisan db:seed --class=UsersTableSeeder
```

原生SQL：
```bash
//增加
$name = str_random(10);
$email = str_random(10) . '@163.com';
$password = bcrypt('secret');
$flag = DB::insert('insert into `users` (`name`, `email`, `password`) values (?, ?, ?)', [$name, $email, $password]);

//删除
$id = 8;
$affectedRows = DB::delete('delete from `users` where id = ?', [$id]);

//修改
$name = str_random(8);
$id = 8;
$affectedRows = DB::update('update `users` set `name` = ? where id = ?', [$name, $id]);

//查询
$name = '学院君';
$users = DB::select('select * from `users` where `name` = ?', [$name]);
```

SQL构建器：
```php
//增加
$userId = DB::table('users')->insertGetId([
    'name' => str_random(10),
    'email' => str_random(8) . '@qq.com',
    'password' => bcrypt('secret')
]);

//删除
$affectedRows = DB::table('users')->delete();
$affectedRows = DB::table('users')->truncate(); //重制ID

//修改
$id = 11;
$affectedRows = DB::table('users')->where('id', '>', $id)->update(['name' => str_random(8)]);

//查询
$name = '学院君';
$users = DB::table('users')->select('id', 'name', 'email')->where('name', $name)->get();
DB::table('posts')->where('views', 0)->get();      # 此处等号可以省略
DB::table('posts')->where('views', '>', 0)->get();  
DB::table('posts')->where('views', '<>', 0)->get();
// - and
DB::table('posts')->where([
    ['id', '<', 10],
    ['views', '>', 0]
])->get();
// - or
DB::table('posts')->where('id', '<', 10)->orWhere('views', '>', 0)->get();
```

建立模型：
```bash
php artisan make:model Post
```

ORM映射：
```php
class Post extends Model
{
    // 表名
    protected $table = 'post';
    // 是否包含自增ID
    protected $incrementing = True;
    // 主键值类型
    protected $keyType = int;

    // 是否创建 'created_at' and 'updated_at' timestamps 
    public $timestamps = True;

    // Customize names of 'created_at' and 'updated_at'
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    // Customize database link in config/database.php
    // protected $connection = 'mysql';

    //UNIX时间戳
    protected $dateFormat = 'U';
}
```

ORM查询：
```php
//插入
$post = new App\Post;
$post->title = '测试文章标题';
$post->content = '测试文章内容';
$post->user_id = 1;
$post->save();

//删除
$post = Post::find(31);
$post->delete();

//修改
$post = Post::find(31);
$post->title = '测试文章标题更新';
$post->save();

//查询
$posts = Post:all();
// - chunk分块
Post::chunk(10, function ($posts) {
   foreach ($posts as $post) {
       if ($post->views == 0) {
           continue;
       } else {
           dump($post->title . ':' . $post->views);
       }
   }
});
// - Lazy查询
foreach (Post::cursor() as $post) {
    dump($post->title . ':' . $post->content);
}

```