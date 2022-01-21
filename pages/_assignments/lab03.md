---
layout: assignment-two-column
title: Databases with PostgreSQL
type: lab
abbreviation: Lab 3
draft: 0
points: 5
num: 3
due_date: 2022-01-21
---

## 1. Introduction
### Why are we learning to use a relational database? 

Relational databases offer a standardized way to store and query structured data using SQL (Structured Query Language). Many website backends use some form of a relational database. We will be using <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> as our database, though there are many other options, including Oracle, Microsoft's SQL Server, MySQL, SQLite, and more! 

In two weeks, we will be configuring a database "in the cloud," and querying it by asking python to issue various SQL commands. Today, we will just be getting familiar with some of the basic SQL syntax.

### What is SQL?
SQL is a declarative programming language that functions at a higher level of abstraction than, say, Python or JavaScript. Using SQL, you tell the database what data operations you want it to execute, but the underlying database system figures out how to actually go about manipulating / retrieving the data. Here is an example of a SQL query that retrieved data from two tables, `users` and `posts`, in order to figure out which user has the most posts:

{:.overflow}
```
SELECT users.username, count(posts.id) as post_count
FROM posts
INNER JOIN users ON
    posts.user_id = users.id
GROUP BY users.username
ORDER BY count(posts.id) desc;



     username      | post_count 
-------------------+-----------
 matthew_cook      |    12
 pamela_rivas      |    12
 nicholas_kerr     |    12
 edwin_rodriguez   |    12
 timothy_green     |    11
 amanda_brown      |    10
 benjamin_duran    |    10
 nicholas_fleming  |    10
 carolyn_james     |    10
 dana_turner       |     9
 douglas_baker     |     9
 jennifer_spencer  |     9
 david_barrett     |     9
 franklin_anderson |     9
 julie_mueller     |     8
 dennis_chan_iv    |     8
 craig_miller      |     8
 jeffrey_conner    |     8
 natalie_miller    |     8
 marcia_newton     |     8
 michael_fox       |     8
 donna_brown       |     7
 carlos_johnson    |     7
 thomas_choi       |     6
 cody_young        |     6
 sarah_wong        |     6
 michelle_nichols  |     6
 kristy_norris     |     6
 daniel_stanley    |     6
 luis_cameron      |     6
(30 rows)
```

With very few lines of "declarative" code, we have merged two data structures together, selected a few attributes, counted the posts by user, and sorted the post_counts in decending order. It's useful to think about how you might do something like this manually, with python, if you had 2 lists of dictionaries (doable, but it would take a lot longer).

Another nice thing about SQL is that these queries can be optimized to be very efficient (though this is well beyond the scope of this course). If you want to learn more, consider taking:

* COMP_SCI 217, taught by Prof. Huiling Hu. While the course does not count for the CS major, I highly recommend it if you are interested in learning more about SQL databases.
* COMP_SCI 339, taught by Prof. Peter Dinda & Prof. Jennie Rogers. This course gives you a sense of how databases work "under the hood" (i.e., what happens after the SQL query is issued).


## 2. Installation
In order to complete today's lab, you will need to install PostgreSQL on your laptop. These installation instructions are based on the  <a href="https://www.postgresqltutorial.com/postgresql-getting-started/" target="_blank">PostgreSQL Getting Started Guide</a>. Please do the following:

* <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">DownloadPostgreSQL 14.1</a> for either Windows or Mac
* Follow the OS-Specific instructions to install and verify your PostgreSQL installation:
    * <a href="https://www.postgresqltutorial.com/install-postgresql/" target="_blank">Windows</a>
    * <a href="https://www.postgresqltutorial.com/install-postgresql-macos/" target="_blank">Mac</a>
* A few notes as you run the installer:
    * **DO NOT FORGET** the DB Admin password you assign for the `postgres` account
    * Take all the defaults, and use a default port of `5432`
    * If, for some reason, port 5432 is taken, just use the suggested port given by the installer (and make a note of it)
    * You don't need to install the "Stack Builder"

## 3. Configuration
<a class="nu-button" href="/winter2022/course-files/labs/lab03.zip">lab03.zip<i class="fas fa-download" aria-hidden="true"></i></a>

* Download lab03.zip (above) and unzip it, and move it into your `webdev-labs` folder / git repo.
* Follow the procedure outlined in <a href="https://www.postgresqltutorial.com/load-postgresql-sample-database/" target="_blank">these instructions</a>, but make the following modifications:
    * Create a database called `photo_app_lab3`, using either the command line interface or the PGAdmin GUI interface.
    * Load the `photo_app_lab03.tar` (in the lab03 folder you just downloaded) into the empty `photo_app_lab3` database (to create the table structure and table data).

<!-- pg_dump -U postgres -p 5432 -Ft photo-app > ~/Desktop/photo_app_lab03.tar
postgres=# CREATE DATABASE photo_app_lab03;
pg_restore -U postgres -d photo_app_lab03 ~/Desktop/photo_app_lab03.tar -->

You have a few options for interacting with your database: 

### 1. PGAdmin
PGAdmin is a GUI tool for managing PostgreSQL databases. 

### 2. psql
psql is the command line interface for interacting with PostgreSQL databases. Open your Terminal or command prompt and type `psql -U postgres`. 
* If the `psql -U postgres` command was recognized, jump to section 4 (overview of commands). Otherwise, you'll have to add it to your path by following the instructions below.

#### Adding psql to your path: Mac instructions
Note: you only have to do this if the `psql -U postgres` command was NOT recognized on your Terminal.
1. Find the location of your `psql` executable on your computer by typing the following into the terminal: `locate psql | grep /bin`
1. Copy the path (for Sarah, it's located at `/Library/PostgreSQL/14/bin/psql`)
1. Figure out which shell you're using by typing: `echo $SHELL`.
1. Depending on the shell version you're using, open *one* of the files below (in your home directory) in a text editor:
    * for bash, edit one of these:
        * `~/.bashrc`
        * `~/.bash_profile` 
    * for zsh edit one of these:
        * `~/.zshrc`
        * `~/.zprofile`

1. In the file you just opened, add the following line:<br>`PATH=$PATH:/Library/PostgreSQL/14/bin` (but use ***your*** bin/psql path) to the end.
1. Source the file you just edited by typing `source ~/.bashrc` (or whatever file you just edited). This will load your updated path variable and make it accessible to your shell.
1. When you're done, type `psql -U postgres` on your command line and it should work.


You can read more about each shell here:
* <a href="https://www.baeldung.com/linux/bashrc-vs-bash-profile-vs-profile" target="_blank">bash</a>
* <a href="https://apple.stackexchange.com/questions/388622/zsh-zprofile-zshrc-zlogin-what-goes-where" target="_blank">zsh</a>


#### Adding psql to your path: Windows instructions
Note: you only have to do this if the `psql -U postgres` command was NOT recognized on your command prompt.
Follow <a href="https://sqlbackupandftp.com/blog/setting-windows-path-for-postgres-tools" target="_blank">this tutorial</a>. Notes:
1. You will first need to find where your PostgreSQL bin has been installed on your computer. Should be something like: `C:\Program Files\PostgreSQL\14\bin`
1. Once you do, you will append the path to your PostgreSQL bin to your PATH environment variable.
1. Once you save your changes, be sure to restart your command prompt.
1. Finally, type `psql -U postgres` on your command line and it should work.

## 4. Overview of Commands

### Administrative commands if you use the command line interface
To enter the postgreSQL shell, type: `psql -U postgres` (connecting as the postgres superuser). Once you're in the psql shell, try using the following commands:

| Command | Explanation | Description |
|--|--|--|
| `\q` | Exits the postgres shell | |
| `\l` | Lists all the available databases | |
| `\c <dbname> <username>` | Connect to specific database | `\c dvdrental postgres` |
| `\dt` | Lists all of the tables in the database you're connected to |
| `\d <table_name>` | Describes the structure (i.e., "schema") of a table | `\d customer` |
| `\du` | List all users and their roles | |
| space bar | If you query data in a table that has multiple pages, the space bar will show you the next set of records.  | |
| q | If you query data in a table that has multiple pages, and you want to go back to the psql prompt. | |

Consult <a href="https://www.postgresqltutorial.com/psql-commands/" target="_blank">this guide</a> for more details.

### SQL Commands for Selecting
After you've connected to a database, you can query and manipulate data. Selecting is the most complex part of the SQL language. Some of the most commonly used commands in a select statement are listed below:

| Clause | Example | Documentation |
|--|--|--|
| SELECT | SELECT statement that retrieves data from a single table:<br><br>SELECT * FROM customer;<br>SELECT id, caption FROM posts;  | <a href="https://www.postgresqltutorial.com/postgresql-select/" target="_blank">SELECT docs</a> |
| ORDER BY | The ORDER BY clause allows you to sort rows returned by a SELECT clause in ascending or descending order based on a sort expression:<br><br>SELECT * FROM users ORDER BY last_name;<br>SELECT * FROM users ORDER BY last_name desc; | <a href="https://www.postgresqltutorial.com/postgresql-order-by/" target="_blank">ORDER BY docs</a> |
| WHERE | The WHERE clause uses a condition to filter the rows returned from the SELECT clause:<br><br>SELECT * FROM users WHERE id = 3;<br>SELECT * FROM users WHERE id > 10; | <a href="https://www.postgresqltutorial.com/postgresql-where/" target="_blank">WHERE docs</a> |
| INNER JOIN | Joins two tables where the values of two columns are equal. For instance, if we want to know the usernames of the people who Thomas Choi (id=3) is following, we would join the `following` table to the `users` table as follows:<br><br>SELECT following.id, users.username<br>FROM following<br>INNER JOIN users ON following.following_id = users.id<br>WHERE following.user_id = 3; | <a href="https://www.postgresqltutorial.com/postgresql-inner-join/" target="_blank">INNER JOIN docs</a> |
| GROUP BY | The Group By statement allows you aggregate your data  (e.g. sum, count, etc.) by groupings. For instance, if you want to know how many posts each user has made or how many likes each post has, the GROUP BY function can help:<br><br>SELECT user_id, count(\*) FROM bookmarks GROUP BY user_id ORDER BY count(*) desc; | <a href="https://www.postgresqltutorial.com/postgresql-group-by/" target="_blank">GROUP BY docs</a> |

### SQL Commands for Updating
Updating allows you to alter records in a table. The syntax is as follows:

```sql
UPDATE table_name
SET column1 = value1,
    column2 = value2,
    ...
WHERE condition;

-- specific example:
UPDATE courses
SET published_date = '2020-08-01' 
WHERE course_id = 3;
```

A common mistake is forgetting to include the where clause. Without it, the update will be made to EVERY RECORD of your table.

<a href="https://www.postgresqltutorial.com/postgresql-update/" target="_blank">UPDATE docs</a>

### SQL Commands for Inserting
Inserting allows you to add records to a table. The syntax is as follows:

```sql
INSERT INTO table_name(column1, column2, …)
VALUES (value1, value2, …);

-- Specific example:
INSERT INTO links (url, name)
VALUES('https://www.postgresqltutorial.com','PostgreSQL Tutorial');
```
<a href="https://www.postgresqltutorial.com/postgresql-insert/" target="_blank">INSERT docs</a>

### SQL Commands for Deleting
The DELETE statement allows you to delete one or more rows from a table.

```sql
DELETE FROM table_name
WHERE condition;

-- specific example:
DELETE FROM links
WHERE id = 10;
```

Note: if you forget to include the where clause, you will delete every record in your table by accident.

<a href="https://www.postgresqltutorial.com/postgresql-delete/" target="_blank">UPDATE docs</a>

## 5. Your Task

For each of the exercises below, write the SQL statement that achieves the goal described in the prompt. When you've figured it out, paste the statement (or statements) into the answers.sql file beneath the corresponding exercise number.

### 1. Selecting all columns
Write a query to retrieve all of the records in the `users` table. It should return the following data:

{:.overflow}
```
 id | first_name | last_name |     username      |            email             |              image_url               |             thumb_url              
----+------------+-----------+-------------------+------------------------------+--------------------------------------+------------------------------------
  1 | Carlos     | Johnson   | carlos_johnson    | carlos_johnson@yahoo.com     | https://picsum.photos/id/170/300/200 | https://picsum.photos/id/150/30/30
  2 | Nicholas   | Kerr      | nicholas_kerr     | nicholas_kerr@hotmail.com    | https://picsum.photos/id/191/300/200 | https://picsum.photos/id/32/30/30
  3 | Thomas     | Choi      | thomas_choi       | thomas_choi@hotmail.com      | https://picsum.photos/id/62/300/200  | https://picsum.photos/id/77/30/30
  4 | Benjamin   | Duran     | benjamin_duran    | benjamin_duran@gmail.com     | https://picsum.photos/id/185/300/200 | https://picsum.photos/id/104/30/30
  5 | Kristy     | Norris    | kristy_norris     | kristy_norris@hotmail.com    | https://picsum.photos/id/167/300/200 | https://picsum.photos/id/28/30/30
  6 | Edwin      | Rodriguez | edwin_rodriguez   | edwin_rodriguez@yahoo.com    | https://picsum.photos/id/165/300/200 | https://picsum.photos/id/94/30/30
  7 | Julie      | Mueller   | julie_mueller     | julie_mueller@hotmail.com    | https://picsum.photos/id/100/300/200 | https://picsum.photos/id/111/30/30
  8 | Nicholas   | Fleming   | nicholas_fleming  | nicholas_fleming@hotmail.com | https://picsum.photos/id/76/300/200  | https://picsum.photos/id/123/30/30
  9 | Daniel     | Stanley   | daniel_stanley    | daniel_stanley@yahoo.com     | https://picsum.photos/id/130/300/200 | https://picsum.photos/id/84/30/30
 10 | Craig      | Miller    | craig_miller      | craig_miller@gmail.com       | https://picsum.photos/id/122/300/200 | https://picsum.photos/id/81/30/30
 11 | Marcia     | Newton    | marcia_newton     | marcia_newton@yahoo.com      | https://picsum.photos/id/182/300/200 | https://picsum.photos/id/133/30/30
 12 | David      | Barrett   | david_barrett     | david_barrett@gmail.com      | https://picsum.photos/id/172/300/200 | https://picsum.photos/id/128/30/30
 13 | Timothy    | Green     | timothy_green     | timothy_green@hotmail.com    | https://picsum.photos/id/30/300/200  | https://picsum.photos/id/40/30/30
 14 | Jeffrey    | Conner    | jeffrey_conner    | jeffrey_conner@hotmail.com   | https://picsum.photos/id/44/300/200  | https://picsum.photos/id/128/30/30
 15 | Jennifer   | Spencer   | jennifer_spencer  | jennifer_spencer@yahoo.com   | https://picsum.photos/id/137/300/200 | https://picsum.photos/id/26/30/30
 16 | Matthew    | Cook      | matthew_cook      | matthew_cook@gmail.com       | https://picsum.photos/id/160/300/200 | https://picsum.photos/id/149/30/30
 17 | Carolyn    | James     | carolyn_james     | carolyn_james@hotmail.com    | https://picsum.photos/id/197/300/200 | https://picsum.photos/id/189/30/30
 18 | Sarah      | Wong      | sarah_wong        | sarah_wong@hotmail.com       | https://picsum.photos/id/85/300/200  | https://picsum.photos/id/166/30/30
 19 | Donna      | Brown     | donna_brown       | donna_brown@hotmail.com      | https://picsum.photos/id/150/300/200 | https://picsum.photos/id/179/30/30
 20 | Michelle   | Nichols   | michelle_nichols  | michelle_nichols@yahoo.com   | https://picsum.photos/id/166/300/200 | https://picsum.photos/id/124/30/30
 21 | Douglas    | Baker     | douglas_baker     | douglas_baker@gmail.com      | https://picsum.photos/id/95/300/200  | https://picsum.photos/id/77/30/30
 22 | Amanda     | Brown     | amanda_brown      | amanda_brown@yahoo.com       | https://picsum.photos/id/176/300/200 | https://picsum.photos/id/22/30/30
 23 | Dennis     | Chan IV   | dennis_chan_iv    | dennis_chan_iv@hotmail.com   | https://picsum.photos/id/113/300/200 | https://picsum.photos/id/155/30/30
 24 | Natalie    | Miller    | natalie_miller    | natalie_miller@gmail.com     | https://picsum.photos/id/70/300/200  | https://picsum.photos/id/112/30/30
 25 | Pamela     | Rivas     | pamela_rivas      | pamela_rivas@yahoo.com       | https://picsum.photos/id/164/300/200 | https://picsum.photos/id/25/30/30
 26 | Cody       | Young     | cody_young        | cody_young@gmail.com         | https://picsum.photos/id/148/300/200 | https://picsum.photos/id/148/30/30
 27 | Michael    | Fox       | michael_fox       | michael_fox@yahoo.com        | https://picsum.photos/id/30/300/200  | https://picsum.photos/id/197/30/30
 28 | Franklin   | Anderson  | franklin_anderson | franklin_anderson@gmail.com  | https://picsum.photos/id/36/300/200  | https://picsum.photos/id/196/30/30
 29 | Dana       | Turner    | dana_turner       | dana_turner@yahoo.com        | https://picsum.photos/id/159/300/200 | https://picsum.photos/id/182/30/30
 30 | Luis       | Cameron   | luis_cameron      | luis_cameron@gmail.com       | https://picsum.photos/id/57/300/200  | https://picsum.photos/id/168/30/30
(30 rows)
```

### 2. Selecting some columns
Write a query to retrieve the id, first_name, and last_name of each record in the `users` table. It should return the following data:

{:.overflow}
```
 id | first_name | last_name 
----+------------+-----------
  1 | Carlos     | Johnson
  2 | Nicholas   | Kerr
  3 | Thomas     | Choi
  4 | Benjamin   | Duran
  5 | Kristy     | Norris
  6 | Edwin      | Rodriguez
  7 | Julie      | Mueller
  8 | Nicholas   | Fleming
  9 | Daniel     | Stanley
 10 | Craig      | Miller
 11 | Marcia     | Newton
 12 | David      | Barrett
 13 | Timothy    | Green
 14 | Jeffrey    | Conner
 15 | Jennifer   | Spencer
 16 | Matthew    | Cook
 17 | Carolyn    | James
 18 | Sarah      | Wong
 19 | Donna      | Brown
 20 | Michelle   | Nichols
 21 | Douglas    | Baker
 22 | Amanda     | Brown
 23 | Dennis     | Chan IV
 24 | Natalie    | Miller
 25 | Pamela     | Rivas
 26 | Cody       | Young
 27 | Michael    | Fox
 28 | Franklin   | Anderson
 29 | Dana       | Turner
 30 | Luis       | Cameron
(30 rows)
```

### 3. Sorting
Write a query to retrieve the id, first_name, and last_name of each record in the `users` table sorted by last_name. Use an `ORDER BY` clause. Your query should return the following data:

{:.overflow}
```
 id | first_name | last_name 
----+------------+-----------
 28 | Franklin   | Anderson
 21 | Douglas    | Baker
 12 | David      | Barrett
 19 | Donna      | Brown
 22 | Amanda     | Brown
 30 | Luis       | Cameron
 23 | Dennis     | Chan IV
  3 | Thomas     | Choi
 14 | Jeffrey    | Conner
 16 | Matthew    | Cook
  4 | Benjamin   | Duran
  8 | Nicholas   | Fleming
 27 | Michael    | Fox
 13 | Timothy    | Green
 17 | Carolyn    | James
  1 | Carlos     | Johnson
  2 | Nicholas   | Kerr
 10 | Craig      | Miller
 24 | Natalie    | Miller
  7 | Julie      | Mueller
 11 | Marcia     | Newton
 20 | Michelle   | Nichols
  5 | Kristy     | Norris
 25 | Pamela     | Rivas
  6 | Edwin      | Rodriguez
 15 | Jennifer   | Spencer
  9 | Daniel     | Stanley
 29 | Dana       | Turner
 18 | Sarah      | Wong
 26 | Cody       | Young
(30 rows)
```

### 4. Filtering
Write a query to retrieve the id, user_id, and image_url for the `posts` created by Cody Young (id=26). Use a `WHERE CLAUSE`. Your query should return the following data:

{:.overflow}
```
 id  |              image_url               | user_id 
-----+--------------------------------------+---------
 219 | https://picsum.photos/id/100/600/430 |      26
 220 | https://picsum.photos/id/164/600/430 |      26
 221 | https://picsum.photos/id/167/600/430 |      26
 222 | https://picsum.photos/id/175/600/430 |      26
 223 | https://picsum.photos/id/128/600/430 |      26
 224 | https://picsum.photos/id/129/600/430 |      26
(6 rows)
```

### 5. Filtering: logical operators
Write a query to retrieve the id, image_url, and user_id for the `posts` created by either Cody Young (id=26) or David Barrett (id=12). It should return the following data:

{:.overflow}
```
 id  |              image_url               | user_id 
-----+--------------------------------------+---------
  94 | https://picsum.photos/id/124/600/430 |      12
  95 | https://picsum.photos/id/122/600/430 |      12
  96 | https://picsum.photos/id/173/600/430 |      12
  97 | https://picsum.photos/id/20/600/430  |      12
  98 | https://picsum.photos/id/185/600/430 |      12
  99 | https://picsum.photos/id/110/600/430 |      12
 100 | https://picsum.photos/id/66/600/430  |      12
 101 | https://picsum.photos/id/95/600/430  |      12
 102 | https://picsum.photos/id/137/600/430 |      12
 219 | https://picsum.photos/id/100/600/430 |      26
 220 | https://picsum.photos/id/164/600/430 |      26
 221 | https://picsum.photos/id/167/600/430 |      26
 222 | https://picsum.photos/id/175/600/430 |      26
 223 | https://picsum.photos/id/128/600/430 |      26
 224 | https://picsum.photos/id/129/600/430 |      26
(15 rows)
```

### 6. Using functions in a select statement
Write a query that uses the `count` function in the SELECT clause to figure out how many posts there are in the `posts` table. Your query should return the following:

{:.overflow}
```
 count 
-------
   256
(1 row)
```

### 7. Aggregating data
Write a query that uses the `count` function and a `GROUP BY` clause to find out how many comments each user has made. Order by the number of comments, descending. Your query should return the following:

{:.overflow}
```
 user_id | count 
---------+-------
      14 |    69
       3 |    69
       7 |    57
      16 |    57
      21 |    54
       4 |    53
      20 |    49
      27 |    48
      15 |    47
      22 |    46
      29 |    45
      26 |    42
      24 |    41
      13 |    41
      23 |    41
      10 |    40
      12 |    40
      30 |    39
       9 |    38
       8 |    38
      18 |    37
      28 |    36
      17 |    35
       2 |    33
       6 |    33
      19 |    31
      11 |    30
       1 |    24
      25 |    18
       5 |    11
(30 rows)
```

### 8. Joining: two tables
Write a query to retrieve the id, image_url, and user_id for the `posts` created by either Cody Young (id=26) or David Barrett (id=12) -- just like in #5. However, this time you will also join on the `users` table in order to also include `username`, `first_name`, and `last_name`. You will join the tables where the `user.id` matches `posts.user_id`. Your query should return the following:

{:.overflow}
```
 id  |              image_url               | user_id |   username    | first_name | last_name 
-----+--------------------------------------+---------+---------------+------------+-----------
  94 | https://picsum.photos/id/124/600/430 |      12 | david_barrett | David      | Barrett
  95 | https://picsum.photos/id/122/600/430 |      12 | david_barrett | David      | Barrett
  96 | https://picsum.photos/id/173/600/430 |      12 | david_barrett | David      | Barrett
  97 | https://picsum.photos/id/20/600/430  |      12 | david_barrett | David      | Barrett
  98 | https://picsum.photos/id/185/600/430 |      12 | david_barrett | David      | Barrett
  99 | https://picsum.photos/id/110/600/430 |      12 | david_barrett | David      | Barrett
 100 | https://picsum.photos/id/66/600/430  |      12 | david_barrett | David      | Barrett
 101 | https://picsum.photos/id/95/600/430  |      12 | david_barrett | David      | Barrett
 102 | https://picsum.photos/id/137/600/430 |      12 | david_barrett | David      | Barrett
 219 | https://picsum.photos/id/100/600/430 |      26 | cody_young    | Cody       | Young
 220 | https://picsum.photos/id/164/600/430 |      26 | cody_young    | Cody       | Young
 221 | https://picsum.photos/id/167/600/430 |      26 | cody_young    | Cody       | Young
 222 | https://picsum.photos/id/175/600/430 |      26 | cody_young    | Cody       | Young
 223 | https://picsum.photos/id/128/600/430 |      26 | cody_young    | Cody       | Young
 224 | https://picsum.photos/id/129/600/430 |      26 | cody_young    | Cody       | Young
(15 rows)
```

### 9. More joining practice: two tables
Write a query that displays post information for all of the users that Cody Young (id=26) is following. To do this, you will have to join the `posts` table with the `following` table.

{:.overflow}
```
 id  |          pub_date          | following_id 
-----+----------------------------+--------------
   1 | 2022-01-16 19:49:59.338592 |            1
   2 | 2022-01-16 09:49:59.389814 |            1
   3 | 2022-01-17 23:49:59.43206  |            1
   4 | 2022-01-15 16:49:59.450073 |            1
   5 | 2022-01-15 06:49:59.520447 |            1
   6 | 2022-01-16 08:49:59.540029 |            1
   7 | 2022-01-18 17:49:59.563683 |            1
  94 | 2022-01-18 05:50:04.614535 |           12
  95 | 2022-01-18 15:50:04.645306 |           12
  96 | 2022-01-16 18:50:04.758953 |           12
  97 | 2022-01-18 14:50:04.856231 |           12
  98 | 2022-01-18 16:50:04.910521 |           12
  99 | 2022-01-17 13:50:04.945556 |           12
 100 | 2022-01-17 07:50:05.012626 |           12
 101 | 2022-01-15 14:50:05.060122 |           12
 102 | 2022-01-16 22:50:05.148199 |           12
 103 | 2022-01-18 01:50:05.186361 |           13
 104 | 2022-01-16 07:50:05.22283  |           13
 105 | 2022-01-17 04:50:05.310753 |           13
 106 | 2022-01-16 05:50:05.33481  |           13
 107 | 2022-01-17 03:50:05.43016  |           13
 108 | 2022-01-16 08:50:05.514302 |           13
 109 | 2022-01-15 15:50:05.626383 |           13
 110 | 2022-01-18 03:50:05.674304 |           13
 111 | 2022-01-17 14:50:05.795317 |           13
 112 | 2022-01-14 19:50:05.895353 |           13
 113 | 2022-01-15 05:50:05.948964 |           13
 131 | 2022-01-17 12:50:07.124519 |           16
 132 | 2022-01-18 10:50:07.181248 |           16
 133 | 2022-01-18 15:50:07.253562 |           16
 134 | 2022-01-15 13:50:07.353007 |           16
 135 | 2022-01-16 23:50:07.381796 |           16
 165 | 2022-01-15 12:50:09.521067 |           19
 136 | 2022-01-15 06:50:07.455755 |           16
 137 | 2022-01-15 20:50:07.506087 |           16
 138 | 2022-01-15 06:50:07.631378 |           16
 139 | 2022-01-18 09:50:07.668556 |           16
 140 | 2022-01-16 20:50:07.78522  |           16
 141 | 2022-01-17 16:50:07.888295 |           16
 142 | 2022-01-17 07:50:08.028376 |           16
 143 | 2022-01-18 03:50:08.141552 |           17
 144 | 2022-01-17 23:50:08.167676 |           17
 145 | 2022-01-16 18:50:08.256564 |           17
 146 | 2022-01-15 08:50:08.321174 |           17
 147 | 2022-01-17 23:50:08.383926 |           17
 148 | 2022-01-14 19:50:08.40832  |           17
 149 | 2022-01-17 00:50:08.47081  |           17
 150 | 2022-01-17 19:50:08.510554 |           17
 151 | 2022-01-16 09:50:08.595553 |           17
 152 | 2022-01-15 09:50:08.667342 |           17
 153 | 2022-01-18 14:50:08.693409 |           18
 154 | 2022-01-15 02:50:08.754157 |           18
 155 | 2022-01-17 17:50:08.853955 |           18
 156 | 2022-01-16 09:50:08.897141 |           18
 157 | 2022-01-14 23:50:08.916805 |           18
 158 | 2022-01-14 20:50:08.977119 |           18
 159 | 2022-01-17 08:50:09.023252 |           19
 160 | 2022-01-18 16:50:09.05199  |           19
 161 | 2022-01-16 21:50:09.180214 |           19
 162 | 2022-01-15 13:50:09.288283 |           19
 163 | 2022-01-17 11:50:09.389454 |           19
 164 | 2022-01-16 20:50:09.497756 |           19
 172 | 2022-01-18 02:50:09.983476 |           21
 173 | 2022-01-16 18:50:10.012769 |           21
 174 | 2022-01-17 01:50:10.130459 |           21
 175 | 2022-01-16 07:50:10.151029 |           21
 176 | 2022-01-18 06:50:10.226    |           21
 177 | 2022-01-17 00:50:10.319263 |           21
 178 | 2022-01-18 07:50:10.367263 |           21
 179 | 2022-01-18 11:50:10.468473 |           21
 180 | 2022-01-17 11:50:10.52098  |           21
 191 | 2022-01-16 01:50:11.209679 |           23
 192 | 2022-01-18 19:50:11.271058 |           23
 193 | 2022-01-15 10:50:11.324761 |           23
 194 | 2022-01-16 00:50:11.428904 |           23
 195 | 2022-01-17 00:50:11.482381 |           23
 196 | 2022-01-14 23:50:11.565005 |           23
 197 | 2022-01-16 04:50:11.611325 |           23
 198 | 2022-01-18 16:50:11.696798 |           23
 207 | 2022-01-14 17:50:12.385196 |           25
 208 | 2022-01-17 12:50:12.418725 |           25
 209 | 2022-01-15 15:50:12.437399 |           25
 210 | 2022-01-14 19:50:12.532036 |           25
 211 | 2022-01-15 05:50:12.631375 |           25
 212 | 2022-01-17 02:50:12.774108 |           25
 213 | 2022-01-15 16:50:12.865382 |           25
 214 | 2022-01-14 23:50:12.946519 |           25
 215 | 2022-01-18 05:50:13.012151 |           25
 216 | 2022-01-17 10:50:13.041148 |           25
 217 | 2022-01-16 09:50:13.143907 |           25
 218 | 2022-01-18 16:50:13.173061 |           25
(91 rows)
```


### 10. More joining practice: three tables (Optional)
Write a query that displays the same information as in the previous exercise, but adds an additional column that displays the username of the person who created the post. To do this, you will have to join on a third table, `users`, to retrieve the usernames. Please also sort the posts by the `pub_date` in decending order (much like a feed might work).

{:.overflow}
```
 id  |          pub_date          | following_id |    username    
-----+----------------------------+--------------+----------------
 192 | 2022-01-18 19:50:11.271058 |           23 | dennis_chan_iv
   7 | 2022-01-18 17:49:59.563683 |            1 | carlos_johnson
 218 | 2022-01-18 16:50:13.173061 |           25 | pamela_rivas
 198 | 2022-01-18 16:50:11.696798 |           23 | dennis_chan_iv
 160 | 2022-01-18 16:50:09.05199  |           19 | donna_brown
  98 | 2022-01-18 16:50:04.910521 |           12 | david_barrett
 133 | 2022-01-18 15:50:07.253562 |           16 | matthew_cook
  95 | 2022-01-18 15:50:04.645306 |           12 | david_barrett
 153 | 2022-01-18 14:50:08.693409 |           18 | sarah_wong
  97 | 2022-01-18 14:50:04.856231 |           12 | david_barrett
 179 | 2022-01-18 11:50:10.468473 |           21 | douglas_baker
 132 | 2022-01-18 10:50:07.181248 |           16 | matthew_cook
 139 | 2022-01-18 09:50:07.668556 |           16 | matthew_cook
 178 | 2022-01-18 07:50:10.367263 |           21 | douglas_baker
 176 | 2022-01-18 06:50:10.226    |           21 | douglas_baker
 215 | 2022-01-18 05:50:13.012151 |           25 | pamela_rivas
  94 | 2022-01-18 05:50:04.614535 |           12 | david_barrett
 143 | 2022-01-18 03:50:08.141552 |           17 | carolyn_james
 110 | 2022-01-18 03:50:05.674304 |           13 | timothy_green
 172 | 2022-01-18 02:50:09.983476 |           21 | douglas_baker
 103 | 2022-01-18 01:50:05.186361 |           13 | timothy_green
 147 | 2022-01-17 23:50:08.383926 |           17 | carolyn_james
 144 | 2022-01-17 23:50:08.167676 |           17 | carolyn_james
   3 | 2022-01-17 23:49:59.43206  |            1 | carlos_johnson
 150 | 2022-01-17 19:50:08.510554 |           17 | carolyn_james
 155 | 2022-01-17 17:50:08.853955 |           18 | sarah_wong
 141 | 2022-01-17 16:50:07.888295 |           16 | matthew_cook
 111 | 2022-01-17 14:50:05.795317 |           13 | timothy_green
  99 | 2022-01-17 13:50:04.945556 |           12 | david_barrett
 208 | 2022-01-17 12:50:12.418725 |           25 | pamela_rivas
 131 | 2022-01-17 12:50:07.124519 |           16 | matthew_cook
 180 | 2022-01-17 11:50:10.52098  |           21 | douglas_baker
 163 | 2022-01-17 11:50:09.389454 |           19 | donna_brown
 216 | 2022-01-17 10:50:13.041148 |           25 | pamela_rivas
 159 | 2022-01-17 08:50:09.023252 |           19 | donna_brown
 142 | 2022-01-17 07:50:08.028376 |           16 | matthew_cook
 100 | 2022-01-17 07:50:05.012626 |           12 | david_barrett
 105 | 2022-01-17 04:50:05.310753 |           13 | timothy_green
 107 | 2022-01-17 03:50:05.43016  |           13 | timothy_green
 212 | 2022-01-17 02:50:12.774108 |           25 | pamela_rivas
 174 | 2022-01-17 01:50:10.130459 |           21 | douglas_baker
 195 | 2022-01-17 00:50:11.482381 |           23 | dennis_chan_iv
 177 | 2022-01-17 00:50:10.319263 |           21 | douglas_baker
 149 | 2022-01-17 00:50:08.47081  |           17 | carolyn_james
 135 | 2022-01-16 23:50:07.381796 |           16 | matthew_cook
 102 | 2022-01-16 22:50:05.148199 |           12 | david_barrett
 161 | 2022-01-16 21:50:09.180214 |           19 | donna_brown
 164 | 2022-01-16 20:50:09.497756 |           19 | donna_brown
 140 | 2022-01-16 20:50:07.78522  |           16 | matthew_cook
   1 | 2022-01-16 19:49:59.338592 |            1 | carlos_johnson
 173 | 2022-01-16 18:50:10.012769 |           21 | douglas_baker
 145 | 2022-01-16 18:50:08.256564 |           17 | carolyn_james
  96 | 2022-01-16 18:50:04.758953 |           12 | david_barrett
 217 | 2022-01-16 09:50:13.143907 |           25 | pamela_rivas
 156 | 2022-01-16 09:50:08.897141 |           18 | sarah_wong
 151 | 2022-01-16 09:50:08.595553 |           17 | carolyn_james
   2 | 2022-01-16 09:49:59.389814 |            1 | carlos_johnson
 108 | 2022-01-16 08:50:05.514302 |           13 | timothy_green
   6 | 2022-01-16 08:49:59.540029 |            1 | carlos_johnson
 175 | 2022-01-16 07:50:10.151029 |           21 | douglas_baker
 104 | 2022-01-16 07:50:05.22283  |           13 | timothy_green
 106 | 2022-01-16 05:50:05.33481  |           13 | timothy_green
 197 | 2022-01-16 04:50:11.611325 |           23 | dennis_chan_iv
 191 | 2022-01-16 01:50:11.209679 |           23 | dennis_chan_iv
 194 | 2022-01-16 00:50:11.428904 |           23 | dennis_chan_iv
 137 | 2022-01-15 20:50:07.506087 |           16 | matthew_cook
 213 | 2022-01-15 16:50:12.865382 |           25 | pamela_rivas
   4 | 2022-01-15 16:49:59.450073 |            1 | carlos_johnson
 209 | 2022-01-15 15:50:12.437399 |           25 | pamela_rivas
 109 | 2022-01-15 15:50:05.626383 |           13 | timothy_green
 101 | 2022-01-15 14:50:05.060122 |           12 | david_barrett
 162 | 2022-01-15 13:50:09.288283 |           19 | donna_brown
 134 | 2022-01-15 13:50:07.353007 |           16 | matthew_cook
 165 | 2022-01-15 12:50:09.521067 |           19 | donna_brown
 193 | 2022-01-15 10:50:11.324761 |           23 | dennis_chan_iv
 152 | 2022-01-15 09:50:08.667342 |           17 | carolyn_james
 146 | 2022-01-15 08:50:08.321174 |           17 | carolyn_james
 138 | 2022-01-15 06:50:07.631378 |           16 | matthew_cook
 136 | 2022-01-15 06:50:07.455755 |           16 | matthew_cook
   5 | 2022-01-15 06:49:59.520447 |            1 | carlos_johnson
 211 | 2022-01-15 05:50:12.631375 |           25 | pamela_rivas
 113 | 2022-01-15 05:50:05.948964 |           13 | timothy_green
 154 | 2022-01-15 02:50:08.754157 |           18 | sarah_wong
 214 | 2022-01-14 23:50:12.946519 |           25 | pamela_rivas
 196 | 2022-01-14 23:50:11.565005 |           23 | dennis_chan_iv
 157 | 2022-01-14 23:50:08.916805 |           18 | sarah_wong
 158 | 2022-01-14 20:50:08.977119 |           18 | sarah_wong
 210 | 2022-01-14 19:50:12.532036 |           25 | pamela_rivas
 148 | 2022-01-14 19:50:08.40832  |           17 | carolyn_james
 112 | 2022-01-14 19:50:05.895353 |           13 | timothy_green
 207 | 2022-01-14 17:50:12.385196 |           25 | pamela_rivas
(91 rows)
```


### 11. Inserting records
Cody (id=26) wants to bookmark a few of his posts (specifically, post ids 219, 220, and 221). Write three INSERT statements that add the appropriate entries in the `bookmarks` table. The table requires a valid `user_id` and a valid `post_id`.

### 12. Deleting records
Cody changed his mind and now wants to delete his bookmarks for post ids 219, 220, and 221. Write three DELETE statements that remove the three entries that were just added to the database.

### 13. Updating records
Cody has a new email address: cyoung2022@gmail.com. Write an UPDATE statement that updates Cody's email address in the `users` table.


### 14. More Querying Practice (Optional)
Write a query that displays the `id` and `caption` of every blog post that Cody has published, along with a count of how many comments each post has.

{:.overflow}
```
 id  | user_id | count |                        concat                        
-----+---------+-------+------------------------------------------------------
 219 |      26 |     9 | Grow class know system occur citizen actually lar...
 224 |      26 |     7 | Yes religious produce and truth specific explain ...
 220 |      26 |     6 | Because age public note security end throw admit ...
 222 |      26 |     5 | Tell cultural happen fund seem offer form hospita...
 223 |      26 |     4 | Peace life less man shoulder participant main yea...
 221 |      26 |     3 | Above manager them language record fire inside ch...
(6 rows)
```

## What to turn in
To submit Lab 3:

### 1. Push all of your files to GitHub
Please copy the latest version of your files to GitHub by issuing the following commands:

```shell
git add .    # to check in your lab03 files
git commit -am 'Commiting my completed lab03 files'
git status   # to make sure that all of your files are being tracked
git push     # sends your files to GitHub
```

### 2. Paste a link to your repo on Canvas
Paste a link to your `webdev-labs` GitHub repository into the Canvas textbox for <a href="https://canvas.northwestern.edu/courses/157233/assignments/1017803" target="_blank">Lab 3</a>.