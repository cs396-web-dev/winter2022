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

## 2. Installation
* Getting started: https://www.postgresqltutorial.com/postgresql-getting-started/

### Mac
* Download 14.1
* https://www.postgresqltutorial.com/install-postgresql-macos/
* Take all the defaults
* Port: 5432
* Do not forget the DB Admin password you assign

### Windows
* https://www.postgresqltutorial.com/install-postgresql/
* Take all the defaults
* Port: 5432
* Do not forget the DB Admin password you assign


If, for some reason, port 5432 is taken, just use the suggested port given by the installer (but make a note of it).

My local admin password is 12345

## 3. Configuration

### pgAdmin -- GUI Interface
Open PGAdmin, load database (just follow the tutorial). You get the DVD database.

### psql -- Command Line Interface
Open your Terminal or command prompt and type `psql`. If the command was recognized, jump to section 4 (overview of commands). Otherwise, you'll have to add it to your path.

#### Mac Instructions
1. Find the location of your `psql` executable on your computer by typing the following into the terminal: `locate psql | grep /bin`
1. Copy the path (for Sarah, it's located at `/Library/PostgreSQL/14/bin/psql`)
1. Create shortcut in your `~/.bash_profile` (located in your home directory) by editing the file in a text editor and then adding the following line:<br>`alias psql='/Library/PostgreSQL/14/bin/psql'` (but use ***your*** bin/psql path)
1. Type `source ~/.bash_profile` to load your changes
1. When you're done, type `psql` on your command line and it should work.

#### Windows Instructions
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

### 1. List all of the films
YYY

### 2. List all of the cities in the country of Spain
YYY

## 6. Connect you database to Flask
Should we try connecting DB to flask?

## 7. What to turn in
