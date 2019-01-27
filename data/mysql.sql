drop database if exists login;
set names utf8;
create database login character set utf8;
use login;
create table msgs(
uid int primary key auto_increment,
name varchar(25),
pwd varchar(32)
);
 insert into msgs values(null,"Tom","123456789");
 insert into msgs values(null,"Jon","987456789");
 insert into msgs values(null,"Lory","456123789");
 insert into msgs values(null,"Kom","123456789");
 insert into msgs values(null,"Sonn","123456789");
 select * from msgs;

