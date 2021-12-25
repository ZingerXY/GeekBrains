<?php
header('Content-Type: text/html; charset=utf-8');
/** 
 * 1. Объявить две целочисленные переменные $a и $b и задать им произвольные начальные значения. 
 * Затем написать скрипт, который работает по следующему принципу:
 * если $a и $b положительные, вывести их разность;
 * если $а и $b отрицательные, вывести их произведение;
 * если $а и $b разных знаков, вывести их сумму;
 * Ноль можно считать положительным числом.
 */

$a = rand(-10, 10);
$b = rand(-10, 10);
echo 'a: '. $a . ', b: ' . $b . '</br>';
switch (true) {
	case $a > 0 && $b > 0:
		echo 'diff: ' . ($a - $b);
		break;
	case $a < 0 && $b < 0:
		echo 'multiply: ' . ($a * $b);
		break;
	default:
		echo 'sum: ' . ($a + $b);
		break;
}

echo '</br>';
/** 
 * 2. Присвоить переменной $а значение в промежутке [0..15]. 
 * С помощью оператора switch организовать вывод чисел от $a до 15. 
 * Задание по желанию - доработайте решение и используйте рекурсивную функцию
 */

 $a = rand(0, 15);
echo $a . '</br>';
switch ($a) {
	case 0:
		echo("0, ");
	case 1:
		echo("1, ");
	case 2:
		echo("2, ");
	case 3:
		echo("3, ");
	case 4:
		echo("4, ");
	case 5:
		echo("5, ");
	case 6:
		echo("6, ");
	case 7:
		echo("7, ");
	case 8:
		echo("8, ");
	case 9:
		echo("9, ");
	case 10:
		echo("10, ");
	case 11:
		echo("11, ");
	case 12:
		echo("12, ");
	case 13:
		echo("13, ");
	case 14:
		echo("14, ");
	case 15:
		echo("15, ");
}
echo '</br>';

function show($a) {
	if ($a > 15) {
		return;
	}
	echo $a . ", ";
	show($a + 1);
}

show($a);

echo '</br>';
/** 
 * 3. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
 * Обязательно использовать оператор return.
 */

/** Сложение */
function sum($a, $b) {
	return $a + $b;
}
/** Разность */
function diff($a, $b) {
	return $a - $b;
}
/** Произведение */
function mult($a, $b) {
	return $a * $b;
}
/** Деление */
function div($a, $b) {
	return $a / $b;
}

/**
 * 4. Реализовать функцию с тремя параметрами: 
 * function mathOperation($arg1, $arg2, $operation), 
 * где $arg1, $arg2 – значения аргументов, 
 * $operation – строка с названием операции. 
 * В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) 
 * и вернуть полученное значение (использовать switch).
 */
function mathOperation($arg1, $arg2, $operation) {
	$result = 0;
	switch ($operation) {
		case 'sum':
			$result = sum($arg1, $arg2);
			break;
		case 'diff':
			$result = diff($arg1, $arg2);
			break;
		case 'mult':
			$result = mult($arg1, $arg2);
			break;
		case 'div':
			$result = div($arg1, $arg2);
			break;
		default:
			break;
	}
	return $result;
}

// echo mathOperation(10, 3, 'sum');

echo '</br>';
/**
 * 5. Посмотреть на встроенные функции PHP. 
 * Используя имеющийся HTML-шаблон, вывести текущий год в подвале при помощи встроенных функций PHP. 
 * Делать не нужно. Сделано в первом ДЗ!
 */


/**
 * 6. *С помощью рекурсии организовать функцию возведения числа в степень. 
 * Формат: function power($val, $pow), где $val – заданное число, $pow – степень. 
 * Степень int и >0
 */

function power($val, $pow) {
	if ($pow <= 1) {
		return $val;
	}
	return $val * power($val, $pow - 1);
}

echo '2 ^ 8 = ' . power(2, 8);
echo '</br>';
/**
 * 7. *Написать функцию, которая вычисляет текущее время 
 * и возвращает его в формате с правильными склонениями, например:
 * 22 часа 15 минут
 * 21 час 43 минуты
 */

function whatTime() {
	$langConstHour = ['час', 'часа', 'часов'];
	$langConstMinute = ['минута', 'минуты', 'минут'];

	$hour = date("H");
	$minute = date("i");
	echo $hour . ' ' . curName($hour, $langConstHour) . ' ' . $minute . ' ' . curName($minute, $langConstMinute);
}

function curName($n, $langConst) {
	switch (substr($n, -1)) {
		case "1":
			return $langConst[0];
		case "2":
		case "3":
		case "4":
			return $langConst[1];
		default:
			return $langConst[2];
	}
}

whatTime();
