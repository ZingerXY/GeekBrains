<?php

$imageContent = '';

$imageId = $_GET['image'];
$querySelectImage = "SELECT * FROM `images` WHERE id = '$imageId'";

$result = $mysqli->query($querySelectImage);
$image = $result->fetch_assoc();
if ($image) {
	list('title' => $title, 'filename' => $fileName, 'alt' => $alt, 'title' => $title, 'views' => $views) = $image;
	$imageContent .= <<<IMAGE
	<div class='image'>
		<h2>{$image['title']}</h2>
		<img src='images/{$image['filename']}' alt='{$image['alt']}' title='{$image['title']}'>
		<p>Views: {$image['views']}</p>
	</div>
IMAGE;
	$views++;
	$queryUpdateViews = "UPDATE `images` SET `views` = '$views' WHERE `id` = $imageId";
	$mysqli->query($queryUpdateViews);
} else {
	$imageContent .= "<p>Нет такого изображения</p>";
}

$content .= $imageContent;
