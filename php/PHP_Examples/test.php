<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>This is a heading</h1>
     <?php
    echo "<pre>";
    print_r($_SERVER);
    echo "</pre>";
    print "$_SERVER[PHP_SELF]";
    ?>


</body>
</html>