---
layout: assignment-two-column
title: Databases with PostgreSQL
type: lab
abbreviation: Lab 3
draft: 1
points: 5
num: 3
due_date: 2022-01-21
---

What is this: https://postgresapp.com/


## 1. Introduction
Why are we installing PostgreSQL and learning about it?
<!-- <a href="" target="_blank"></a> -->

## 2. Installation
The following installation instructions are based on the  <a href="https://www.postgresqltutorial.com/postgresql-getting-started/" target="_blank">PostgreSQL Getting Started Guide</a>. Please do the following:

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

* Download lab03.zip (above) and unzip it
* Create a database called `photo_app_lab3` (following the procedure outlined in <a href="https://www.postgresqltutorial.com/load-postgresql-sample-database/" target="_blank">these instructions</a>. 
* Load the `photo_app_lab03.tar` into the empty `photo_app_lab3` database (to create the table structure and table data).

<!-- pg_dump -U postgres -p 5432 -Ft photo-app > ~/Desktop/photo_app_lab03.tar
postgres=# CREATE DATABASE photo_app_lab03;
pg_restore -U postgres -d photo_app_lab03 ~/Desktop/photo_app_lab03.tar -->

Some notes:

### 1. PGAdmin
PGAdmin is a GUI tool for managing PostgreSQL databases. 

### 2. psql
psql is the command line interface for interacting with PostgreSQL databases. Open your Terminal or command prompt and type `psql`. 
* If the `psql` command was recognized, jump to section 4 (overview of commands). * Otherwise, you'll have to add it to your path by following the instructions below.

#### Adding psql to your path: Mac instructions
Note: you only have to do this if the `psql` command was NOT recognized on your Terminal.
1. Find the location of your `psql` executable on your computer by typing the following into the terminal: `locate psql | grep /bin`
1. Copy the path (for Sarah, it's located at `/Library/PostgreSQL/14/bin/psql`)
1. Create shortcut in your `~/.bash_profile` (located in your home directory) by editing the file in a text editor and then adding the following line:<br>`alias psql='/Library/PostgreSQL/14/bin/psql'` (but use ***your*** bin/psql path)
1. Type `source ~/.bash_profile` to load your changes
1. When you're done, type `psql` on your command line and it should work.

#### Adding psql to your path: Windows instructions
Note: you only have to do this if the `psql` command was NOT recognized on your command prompt.
Follow <a href="https://sqlbackupandftp.com/blog/setting-windows-path-for-postgres-tools" target="_blank">this tutorial</a>. Notes:
1. You will first need to find where your PostgreSQL bin has been installed on your computer. Should be something like: `C:\Program Files\PostgreSQL\14\bin`
1. Once you do, you will append the path to your PostgreSQL bin to your PATH environment variable.
1. Once you save your changes, be sure to restart your command prompt.
1. Finally, type `psql` on your command line and it should work.

## 4. Overview of Commands

### Using the command line interface
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
Once you're connected to a database...

| Clause | Example | Documentation |
|--|--|--|
| SELECT | SELECT * FROM customer;<br>SELECT first_name, email FROM customer;  | <a href="https://www.postgresqltutorial.com/postgresql-select/" target="_blank">SELECT tutorial</a> |
| ORDER BY | SELECT * FROM customer ORDER BY last_name;<br>SELECT * FROM customer ORDER BY last_name desc; | <a href="" target="_blank">more</a> |
| INNER JOIN | ...but there are other joins too | <a href="" target="_blank">more</a> |
| GROUP BY | Note that if you're grouping by n columns, you can only have n+1 columns in the select | <a href="" target="_blank">more</a> |

### SQL Commands for Updating


### SQL Commands for Inserting


### SQL Commands for Deleting

## 5. Exercises

### Querying Data
Please write the SELECT statements to answer the following questions:

#### 1. All the users in the database
Should return the following data:

{:.overflow}
```
 id | first_name | last_name  |    username    |            email            |              image_url               |             thumb_url              
----+------------+------------+----------------+-----------------------------+--------------------------------------+------------------------------------
  1 | Carrie     | Jones      | johnwelch      | juan57@yahoo.com            | https://picsum.photos/id/59/300/200  | https://picsum.photos/id/182/30/30
  2 | Julie      | Porter     | eric82         | sfuller@hotmail.com         | https://picsum.photos/id/71/300/200  | https://picsum.photos/id/131/30/30
  3 | Sean       | Cuevas     | jessica99      | amy97@yahoo.com             | https://picsum.photos/id/150/300/200 | https://picsum.photos/id/194/30/30
  4 | Ruben      | Pham       | gdavis         | jacqueline11@yahoo.com      | https://picsum.photos/id/90/300/200  | https://picsum.photos/id/65/30/30
  5 | Scott      | Lowe       | carterscott    | mathewserin@hotmail.com     | https://picsum.photos/id/158/300/200 | https://picsum.photos/id/69/30/30
  6 | David      | Morris     | caseylisa      | terry22@gmail.com           | https://picsum.photos/id/167/300/200 | https://picsum.photos/id/116/30/30
  7 | Steven     | Miller     | xwright        | msmith@hotmail.com          | https://picsum.photos/id/149/300/200 | https://picsum.photos/id/106/30/30
  8 | Joseph     | Moran      | tracy94        | spalmer@yahoo.com           | https://picsum.photos/id/32/300/200  | https://picsum.photos/id/99/30/30
  9 | Bradley    | Mendoza    | maria31        | amandabell@yahoo.com        | https://picsum.photos/id/158/300/200 | https://picsum.photos/id/36/30/30
 10 | Angel      | Hudson     | robertsmaria   | nwalton@hotmail.com         | https://picsum.photos/id/111/300/200 | https://picsum.photos/id/140/30/30
 11 | Michael    | Payne      | carrollanthony | taustin@gmail.com           | https://picsum.photos/id/131/300/200 | https://picsum.photos/id/168/30/30
 12 | Ashley     | Hernandez  | cherylmckee    | hmcgee@gmail.com            | https://picsum.photos/id/25/300/200  | https://picsum.photos/id/94/30/30
 13 | William    | Mitchell   | tiffanykennedy | malonetony@yahoo.com        | https://picsum.photos/id/38/300/200  | https://picsum.photos/id/79/30/30
 14 | Lauren     | Morales    | ssimon         | betty09@yahoo.com           | https://picsum.photos/id/107/300/200 | https://picsum.photos/id/101/30/30
 15 | Bethany    | Gutierrez  | pgomez         | cervantesbrenda@hotmail.com | https://picsum.photos/id/32/300/200  | https://picsum.photos/id/191/30/30
 16 | Julia      | Ruiz       | hbecker        | imorgan@yahoo.com           | https://picsum.photos/id/28/300/200  | https://picsum.photos/id/176/30/30
 17 | Karen      | Wells      | thompsonsarah  | oarmstrong@yahoo.com        | https://picsum.photos/id/111/300/200 | https://picsum.photos/id/187/30/30
 18 | Kevin      | Villarreal | katherine85    | pittmanjason@yahoo.com      | https://picsum.photos/id/161/300/200 | https://picsum.photos/id/67/30/30
 19 | James      | Buchanan   | randysutton    | phillipsharold@yahoo.com    | https://picsum.photos/id/159/300/200 | https://picsum.photos/id/64/30/30
 20 | Michael    | Harris     | hinesrandall   | davidgross@hotmail.com      | https://picsum.photos/id/114/300/200 | https://picsum.photos/id/94/30/30
 21 | Robert     | Davenport  | garzajoseph    | dakotatorres@gmail.com      | https://picsum.photos/id/183/300/200 | https://picsum.photos/id/128/30/30
 22 | Allen      | Lee        | tramirez       | conneramy@yahoo.com         | https://picsum.photos/id/185/300/200 | https://picsum.photos/id/187/30/30
 23 | Denise     | Roberson   | robertcarter   | mendozabianca@yahoo.com     | https://picsum.photos/id/112/300/200 | https://picsum.photos/id/80/30/30
 24 | Anthony    | Crawford   | seth44         | garrett02@hotmail.com       | https://picsum.photos/id/179/300/200 | https://picsum.photos/id/171/30/30
 25 | Jennifer   | Valenzuela | averyjeffery   | anthony65@hotmail.com       | https://picsum.photos/id/148/300/200 | https://picsum.photos/id/136/30/30
 26 | Robert     | Avila      | laurajohnson   | haileybrown@gmail.com       | https://picsum.photos/id/27/300/200  | https://picsum.photos/id/129/30/30
 27 | Julie      | Nunez      | piercemichele  | pamela21@yahoo.com          | https://picsum.photos/id/56/300/200  | https://picsum.photos/id/131/30/30
 28 | Mark       | Day        | kevinodonnell  | gregory78@gmail.com         | https://picsum.photos/id/166/300/200 | https://picsum.photos/id/151/30/30
 29 | Christian  | White      | navarrobarbara | jonking@hotmail.com         | https://picsum.photos/id/99/300/200  | https://picsum.photos/id/178/30/30
 30 | Anthony    | Webster    | cbeltran       | johnstonmary@yahoo.com      | https://picsum.photos/id/124/300/200 | https://picsum.photos/id/61/30/30
 (30 rows)
```

#### 1. Just the id, first_name, and last_name for all users in the database
Should return the following data:

{:.overflow}
```
 id | first_name | last_name  
----+------------+------------
  1 | Carrie     | Jones
  2 | Julie      | Porter
  3 | Sean       | Cuevas
  4 | Ruben      | Pham
  5 | Scott      | Lowe
  6 | David      | Morris
  7 | Steven     | Miller
  8 | Joseph     | Moran
  9 | Bradley    | Mendoza
 10 | Angel      | Hudson
 11 | Michael    | Payne
 12 | Ashley     | Hernandez
 13 | William    | Mitchell
 14 | Lauren     | Morales
 15 | Bethany    | Gutierrez
 16 | Julia      | Ruiz
 17 | Karen      | Wells
 18 | Kevin      | Villarreal
 19 | James      | Buchanan
 20 | Michael    | Harris
 21 | Robert     | Davenport
 22 | Allen      | Lee
 23 | Denise     | Roberson
 24 | Anthony    | Crawford
 25 | Jennifer   | Valenzuela
 26 | Robert     | Avila
 27 | Julie      | Nunez
 28 | Mark       | Day
 29 | Christian  | White
 30 | Anthony    | Webster
(30 rows)
```

#### 3. Just the id, first_name, and last_name for all users in the database orderd by last_name
Should return the following data:

{:.overflow}
```
 id | first_name | last_name  
----+------------+------------
 26 | Robert     | Avila
 19 | James      | Buchanan
 24 | Anthony    | Crawford
  3 | Sean       | Cuevas
 21 | Robert     | Davenport
 28 | Mark       | Day
 15 | Bethany    | Gutierrez
 20 | Michael    | Harris
 12 | Ashley     | Hernandez
 10 | Angel      | Hudson
  1 | Carrie     | Jones
 22 | Allen      | Lee
  5 | Scott      | Lowe
  9 | Bradley    | Mendoza
  7 | Steven     | Miller
 13 | William    | Mitchell
 14 | Lauren     | Morales
  8 | Joseph     | Moran
  6 | David      | Morris
 27 | Julie      | Nunez
 11 | Michael    | Payne
  4 | Ruben      | Pham
  2 | Julie      | Porter
 23 | Denise     | Roberson
 16 | Julia      | Ruiz
 25 | Jennifer   | Valenzuela
 18 | Kevin      | Villarreal
 30 | Anthony    | Webster
 17 | Karen      | Wells
 29 | Christian  | White
(30 rows)
```

### 2. List all of the cities in the country of Spain
YYY

## 6. Connect you database to Flask
Should we try connecting DB to flask?

## 7. What to turn in
