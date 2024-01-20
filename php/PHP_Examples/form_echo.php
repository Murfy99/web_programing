<html>
<body>

<?php

	$get_keys = array_keys($_GET);
	$post_keys = array_keys($_POST);

	$get_size = count($get_keys);
	if($get_size > 0){
		echo "Following name=value pairs are submitted by GET<br />";
		for($i = 0; $i < $get_size; $i++){
			echo $get_keys[$i] . ' = "' . $_GET[$get_keys[$i]] . '" <br />';
		}
	}
	else{
		Echo "Nothing is submitted by GET<br />";
	}
	
	$post_size = count($post_keys);
	if($post_size > 0){
		echo "<br />Following name=value pairs are submitted by POST<br />";
		for($i = 0; $i < $post_size; $i++){
			echo $post_keys[$i] . ' = "' . $_POST[$post_keys[$i]] . '" <br />';
		}
	}
	else{
		Echo "<br />Nothing is submitted by POST<br />";
	}


?>

</body>
</html>
