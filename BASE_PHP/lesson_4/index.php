<?php

const IMAGES = './images/';
const IMAGES_SMALL = './images_small/';

header('Content-Type: text/html; charset=utf-8');

include 'models/uploadFile.php';

$images = array_slice(scandir(IMAGES_SMALL), 2);
$galary = '';
for ($i = 0; $i < count($images); $i++) { 
	$galary .= "<a href='images/{$images[$i]}' target='_blank'>";
	$galary .= "<img src='images_small/{$images[$i]}'>";
	$galary .= "</a>";
}
?>

<form action="index.php" method="post" enctype="multipart/form-data">
	<input type="file" name="photo" accept="image/*">
	<input type="submit" value="Отправить">
</form>

<div class="images">
	<?= $galary?>
</div>

<pre>
<?php
// Для отладки
// print_r($_FILES);
// print_r(scandir(IMAGES_SMALL));
// print_r(array_slice(scandir(IMAGES_SMALL), 2));
?>
</pre>