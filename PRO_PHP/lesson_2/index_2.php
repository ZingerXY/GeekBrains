<?php

/** Трейт для реализации класса "Одиночки" */
trait SingletonTrait {

	private static $instance;

	private function __construct() {}

	public static function getInstance() {
		if (empty(self::$instance)) {
			self::$instance = new self();
		}

		return self::$instance;
	}
}

/** Класс "Одиночка" */
class SingletonClass {
	use SingletonTrait;
}

$singletonOne = SingletonClass::getInstance();
$singletonTwo = SingletonClass::getInstance();

var_dump($obj_1 === $obj_2);