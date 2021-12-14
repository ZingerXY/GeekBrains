<?php
	$a = 5;
	$b = '05';
	var_dump($a == $b);							// Почему true? В данном случае происходит неявлное приведение типа переменной $b к числовому значению 5
	var_dump((int)'012345');					// Почему 12345? Происходит приведение строки '012345' к числу 12345, строковый 0 отбрасывается
	var_dump((float)123.0 === (int)123.0);		// Почему false? Используется строгое сравнение которое возращает false если тип переменных различается
	var_dump((int)0 === (int)'hello, world');	// Почему true? Так как строка не содержит чисел в начале, то она приводится к 0, используется строгое сравнение, но типы перемнных не различаются поэтому 0 === 0 => true
?>