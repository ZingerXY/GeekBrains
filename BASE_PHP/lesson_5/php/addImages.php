<?php

include_once 'uploadFile.php';

$message = '';
$addImages = '';

if (isset($_FILES['photo'])) {
	$photo = $_FILES['photo'];
	$resultUpload = uploadFile($photo);
	list('message' => $message, 'fileName' => $fileName) = $resultUpload; 
	if ($fileName) {
		list('title' => $title, 'alt' => $alt) = $_POST;
		$addImageQuery = "INSERT INTO `images` (`filename`, `title`, `alt`) VALUES ('$fileName', '$title', '$alt')";
		$mysqli->query($addImageQuery);
	}
	$addImages .= "<p><b>$message</b></p>";
}

$addImages .= '<form action="index.php?addimage" method="post" enctype="multipart/form-data">
	<input type="file" name="photo" accept="image/*"></br>
	<input type="text" name="title" placeholder="title"></br>
	<input type="text" name="alt" placeholder="alt"></br>
	<input type="submit" value="Отправить">
</form>';

$content .= $addImages;

?>


