<?php

/** Сложение */
function sum($a, $b)
{
	return $a + $b;
}
/** Разность */
function diff($a, $b)
{
	return $a - $b;
}
/** Произведение */
function mult($a, $b)
{
	return $a * $b;
}
/** Деление */
function div($a, $b)
{
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
function mathOperation($arg1, $arg2, $operation)
{
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
