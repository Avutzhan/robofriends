Reference for typescript conversion https://github.com/aneagoie/robofriends-typescript-completed

```angular2html
mysql> create database injection;
Query OK, 1 row affected (0.00 sec)

mysql> use injection;
Database changed

mysql> create table slqinjection (id integer, email varchar(255));
Query OK, 0 rows affected (0.04 sec)

mysql> show tables;
+---------------------+
| Tables_in_injection |
+---------------------+
| slqinjection        |
+---------------------+
1 row in set (0.00 sec)

mysql> describe slqinjection;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| id    | int(11)      | YES  |     | NULL    |       |
| email | varchar(255) | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
2 rows in set (0.02 sec)

mysql> insert into slqinjection (email) values ('lol');
Query OK, 1 row affected (0.02 sec)

mysql> show tables;
+---------------------+
| Tables_in_injection |
+---------------------+
| slqinjection        |
+---------------------+
1 row in set (0.01 sec)

mysql> select * from slqinjection;
+------+-------+
| id   | email |
+------+-------+
| NULL | lol   |
+------+-------+
1 row in set (0.00 sec)

mysql> insert into slqinjection (email) values (; drop table slqinjection; --);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 1
Query OK, 0 rows affected (0.04 sec)

ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '--)' at line 1

mysql> show tables;
Empty set (0.00 sec)

My First SQL Injection to my local database i dropped slqinjection table like a hicker miker 
```

https://www.hacksplaining.com/exercises/sql-injection
