<?php

/** Исправление русских имен файлов */
function fixFileName($fileName)
{
	$letters = [
		'а' => 'a',    'б' => 'b',    'в' => 'v',    'г' => 'g',    'д' => 'd',
		'е' => 'e',    'ё' => 'e',    'ж' => 'zh',   'з' => 'z',    'и' => 'i',
		'й' => 'y',    'к' => 'k',    'л' => 'l',    'м' => 'm',    'н' => 'n',
		'о' => 'o',    'п' => 'p',    'р' => 'r',    'с' => 's',    'т' => 't',
		'у' => 'u',    'ф' => 'f',    'х' => 'h',    'ц' => 'c',    'ч' => 'ch',
		'ш' => 'sh',   'щ' => 'sch',  'ь' => '',     'ы' => 'y',    'ъ' => '',
		'э' => 'e',    'ю' => 'yu',   'я' => 'ya',

		'А' => 'A',    'Б' => 'B',    'В' => 'V',    'Г' => 'G',    'Д' => 'D',
		'Е' => 'E',    'Ё' => 'E',    'Ж' => 'Zh',   'З' => 'Z',    'И' => 'I',
		'Й' => 'Y',    'К' => 'K',    'Л' => 'L',    'М' => 'M',    'Н' => 'N',
		'О' => 'O',    'П' => 'P',    'Р' => 'R',    'С' => 'S',    'Т' => 'T',
		'У' => 'U',    'Ф' => 'F',    'Х' => 'H',    'Ц' => 'C',    'Ч' => 'Ch',
		'Ш' => 'Sh',   'Щ' => 'Sch',  'Ь' => '',     'Ы' => 'Y',    'Ъ' => '',
		'Э' => 'E',    'Ю' => 'Yu',   'Я' => 'Ya',
	];
	return str_replace(' ', '_', strtr($fileName, $letters));
}
/** Изменение размеров изображения */
function resizeImage($height, $width, $src, $newSrc, $type)
{
	switch ($type) {
		case 'image/jpeg':
			$img = imagecreatefromjpeg($src);
			$resizeImage = imagescale($img, $height, $width);
			imagejpeg($resizeImage, $newSrc);
			break;
		case 'image/png':
			$img = imagecreatefrompng($src);
			$resizeImage = imagescale($img, $height, $width);
			imagepng($resizeImage, $newSrc);
			break;
		case 'image/gif':
			$img = imagecreatefromgif($src);
			$resizeImage = imagescale($img, $height, $width);
			imagegif($resizeImage, $newSrc);
			break;
	}
}
/** Загрузка изображения */
function uploadFile($photo) {
	$allowedFormat = ['image/jpeg', 'image/png', 'image/gif'];
	$fixfileName = fixFileName($photo['name']);

	if ($photo['error']) {
		return ['message' => 'Ошибка загрузки файла!', 'fileName' => false];
	} elseif ($photo['size'] > 1000000) {
		return ['message' => 'Файл слишком большой', 'fileName' => false];
	} elseif (!in_array($photo['type'], $allowedFormat)) {
		return ['message' => 'Не правильный тип файла!', 'fileName' => false];
	} elseif (!move_uploaded_file($photo['tmp_name'], IMAGES . $fixfileName)) {
		return ['message' => 'Ошибка загрузки файла!', 'fileName' => false];
	}
	resizeImage(150, 150, IMAGES . $fixfileName, IMAGES_MIN . $fixfileName, $photo['type']);

	return  ['message' => 'Файл успешно загружен!', 'fileName' => $fixfileName];
}


