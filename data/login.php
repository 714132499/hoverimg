<?php
	header("content-type:application/json;charset=utf-8");
	$name=$_REQUEST['name'];
	$pwd=$_REQUEST['pwd'];
	$conn=mysqli_connect('127.0.0.1','root','','login');
	$sql="set names utf8";
	mysqli_query($conn,$sql);
	$sql="insert into msgs values(null,'$name','$pwd')";
	$result=mysqli_query($conn,$sql);
	if($result){
		echo "success";
		location.href="index.html"
	}else{
	echo "flase"
	}
?>