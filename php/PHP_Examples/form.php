<html>
<body>

<?php
	@($grade = $_POST["grade"]);
	@($lang  = $_POST["lang"]);

	if(!empty($grade))
		echo "You are ". $grade;
	else
		echo "I don't know your grade";

	echo "<br />";

	echo "You are master in ";
	for($i = 1; $i <= 6; $i++)
		if(isset($_POST["skill_".$i]))
			echo $_POST["skill_".$i]. " ";

	echo "<br />";
	if(!empty($lang))
		echo "You love ". $lang;

	@($name = $_GET["name"]);
	@($fam  = $_GET["fam"]);
	@($title  = $_GET["title"]);

	if((! empty($name) > 0) && (! empty($fam) > 0) && (! empty($title) > 0)){
		echo "A message by GET <br />";
		echo "<h2> Welcome " . $title ." ". $name ." ". $fam ." </h2>";
	}

	echo "<br />";
	
?>

</body>
</html>
