<?php

$query = "SELECT * FROM `images` ORDER BY `views` DESC";

$result = $mysqli->query($query);
$gallery = '<div class="images">';

while ($row = $result->fetch_assoc()) {
	$gallery .= <<<IMAGE
	<div class='image'>
		<a href='?image={$row['id']}'>
			<img src='images/min/{$row['filename']}' alt='{$row['alt']}' title='{$row['title']}'>
		</a>
		<p>Views: {$row['views']}</p>
	</div>
IMAGE;
}

$gallery .= '</div>';

$content .= $gallery;

?>

