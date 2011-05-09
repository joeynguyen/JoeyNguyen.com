<?php
if(isset($_POST['submit'])) {

$to = "me@joeynguyen.com";
$subject = "Contact Form Submission from JoeyNguyen.com";
$name_field = $_POST['name'];
$email_field = $_POST['email'];
$website_field = $_POST['website'];
$message = $_POST['message'];
 
$body = "From: $name_field\n E-Mail: $email_field\n Website: $website_field\n Message:\n $message";
$continue = "/index.html"; 
mail($to, $subject, $body);

} else {

echo "blarg!";

}
?> 

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta name="robots" content="noindex,nofollow" />
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<title>Website of Joey Nguyen</title>
<link rel="stylesheet" href="jn-css/stylesheet.css" type="text/css" media="screen" />
<link rel="stylesheet" href="jn-css/keyboard.css" type="text/css" media="screen" charset="utf-8" />
<link href='http://fonts.googleapis.com/css?family=Cherry+Cream+Soda' rel='stylesheet' type='text/css'>
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-22848919-1']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>

</head>
<body>

<audio id="keyPressSound" preload="auto" style="display: none;">
	<source src="jn-files/keypress.ogg" type="audio/ogg" />
	<source src="jn-files/keypress.mp3" type="audio/mpeg" />
</audio>
<div id="top">
	<div id="navigation">
		<ul>
			<li id="resources"><a href="resources.html">
				<span>r</span><span>e</span><span>s</span><span>o</span><span>u</span><span>r</span><span>c</span><span>e</span><span>s</span>
			</a>
				<ul>
					<li><a href="#">Websites</a></li>
					<li><a href="#">Mac</a></li>
					<li><a href="#">Firefox</a></li>
				</ul>	
			</li>
			<li id="play"><a href="play.html">
				<span>p</span><span>l</span><span>a</span><span>y</span>
			</a></li>
<!--
			<li id="about"><a href="about.html">
				<span>a</span><span>b</span><span>o</span><span>u</span><span>t</span>
			</a></li>
-->
			<li id="home"><a href="index.html">
				<span>h</span><span>o</span><span>m</span><span>e</span>
			</a></li>		
		</ul>
	</div> <!-- end navigation -->
</div> <!-- end top -->
<div id="wrapper">



<!-- START CONTENT HERE!!!!!!!!!! --> 

	<div id="content">

		<h1>Thank you <?php print stripslashes($_REQUEST['name']); ?></h1>
		<p>Your message has been sent</p>
		<a href="<?php print $continue; ?>">Click here to return to the home page.</a>

	</div> <!-- end content -->

<!-- END CONTENT HERE!!!!!!!!!! -->





</div> <!-- end wrapper -->

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
<script type="text/javascript">
if (typeof jQuery == 'undefined')
{
    document.write(unescape("%3Cscript src='jn-scripts/jquery-1.5.1.min.js' type='text/javascript'%3E%3C/script%3E"));
}
</script>
<script type="text/javascript" src="jn-scripts/keypress.js"></script>
<script type="text/javascript" src="jn-scripts/script.js"></script>
<script type="text/javascript" src="jn-scripts/jquery.validate.min.js"></script>
<script type="text/javascript" src="jn-scripts/jquery.easing.1.3.js"></script>
</body>
</html>
