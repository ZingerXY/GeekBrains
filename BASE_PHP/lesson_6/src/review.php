<?php

include_once 'config.php';

$mysqli = new mysqli(HOST, USER, PASSWORD, DB);

$query = "SELECT * FROM `reviews` WHERE public = 1  ORDER BY `date` DESC";

$result = $mysqli->query($query);
$reviews = '<div class="reviews">';

while ($row = $result->fetch_assoc()) {
	$reviews .= <<<REVIEW
	<div class='review'>
		<h3>{$row['name']} <span class='date'>{$row['date']}</span></h3>
		<p>{$row['review']}</p>
	</div>
REVIEW;
}

$reviews .= '</div>';


if (isset($_POST['addReview'])) {
	list('firstname' => $name, 'review' => $review) = $_POST;
	$name = addslashes(htmlspecialchars($name));
	$review = addslashes(htmlspecialchars($review));
	$addImageQuery = "INSERT INTO `reviews` (`name`, `review`) VALUES ('$name', '$review')";
	if (!$mysqli->query($addImageQuery)) {
		$reviews .= $addImageQuery . '<br>';
		$reviews .= $mysqli->error;
	};
}