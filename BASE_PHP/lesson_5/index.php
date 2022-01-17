<?php

/* Отладка */
// ini_set('error_reporting', E_ALL);
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);

const IMAGES = './images/';
const IMAGES_MIN = './images/min/';

include_once 'config.php';
$mysqli = new mysqli(HOST, USER, PASSWORD, DB);
$content = '';

if (isset($_GET['addimage'])) {
	include_once './php/addImages.php';
} elseif (isset($_GET['image'])) {
	include_once './php/image.php';
} else {
	include_once './php/gallery.php';
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Gallary</title>
	<style type="text/css">
		* {
			margin: 0;
			padding: 0;
		}

		.menu {
			display: flex;
		}

		.menu>div {
			margin: 5px;
		}

		.content {
			margin: 10px;
		}

		.images {
			display: flex;
			flex-wrap: wrap;
		}

		.images>.image {
			margin: 5px;
		}
	</style>
</head>

<body>
	<div class='menu'>
		<div><a href='index.php'>Галерея</a></div>
		<?php /*<div><a href='index.php?addimage'>Загрузить изображение</a></div>*/ ?>
	</div>
	<div class="content">
		<?= $content ?>
	</div>
</body>

</html>