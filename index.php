<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>Northeastern University Lambda Phi Epsilon</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link rel="icon" href="images/favicon.png" type="image/x-icon" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script src="js/jquery-1.11.2.min.js"></script>
<script src="js/transition.js"></script>

<!-- Slideshow -->
<script src="http://www.google.com/jsapi" type="text/javascript"></script> 
<link href="css/slideshow.css" rel="stylesheet" type="text/css" />
<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" />

</head>

<body>
<div id="wrapper">

<div id="sidebar">
	<a href="\lambdaphiepsilon">
		<div id="logo">
			<h1>&#923;&#934;&#917;</h1>
			<p>Northeastern University</p>
		</div>
	</a>
	<div id="nav">
		<ul>
			<li class="activemenubutton"><a href="#newsfeed"><div class="menubutton">Home</div></a></li>
			<li><a href="#mission"><div class="menubutton">Mission</div></a></li>
			<li><a href="#story"><div class="menubutton">Our Story</div></a></li>
			<li><a href="#family"><div class="menubutton">Our Family</div></a>
			<li><a href="#eboards"><div class="menubutton">Executive Boards</div></a></li>
			<li><a href="#chapters"><div class="menubutton">&#923;&#934;&#917; Chapters</div></a></li>
		</ul>
	</div>
</div>

<div id="main">
<div id="header">
	<div id="title"><h1>Newsfeed</h1></div>
	<div class="wrap">
		<div id="icons">
			<p>
			<a target="_blank" class="top" href="https://www.facebook.com/"><img src="img/facebook.png" class="icon"></a>
			<a target="_blank" class="top" href="https://twitter.com/"><img src="img/twitter.png" class="icon"></a>
			<a target="_blank" class="top" target="_blank" href="#" onclick="window.open('http://neu.orgsync.com/org/neulambdas/Moments','','width=720,height=480,scrollbars=no,resizable=no,location=no,menubar=no,toolbar=no')"><img src="img/albums.png" class="icon"></a>
			<a target="_blank" class="top" href="mailto:neulambdas@gmail.com"><img src="img/contact.png" class="icon"></a>
			</p>
		</div>
	</div>
</div>
<div id="content">

<div class="subcontent active" id="newsfeed">
<?php require 'newsfeed.php'; ?>
</div>
<div class="subcontent" id="mission">
<?php require 'mission.php'; ?>
</div>
<div class="subcontent" id="story">
<?php require 'story.php'; ?>
</div>
<div class="subcontent" id="family">
<?php require 'family.php'; ?>
</div>
<div class="subcontent" id="eboards">
<?php require 'eboards.php'; ?>
</div>
<div class="subcontent" id="chapters">
<?php require 'chapters.php'; ?>
</div>
<div class="subcontent" id="contact">
<?php //require 'contact.php'; ?>
</div>

</div>

</div>
</body>