<?php
header('Content-Type: text/html; charset=utf-8');

/**
 * Задание 1,2,3,4
 */
class Goods {
	private $id;
	private $name;
	private $price;

	public function __construct($id, $name, $price) {
		$this->id = $id;
		$this->name = $name;
		$this->price = $price;
	}

	public function getId() : int {
		return $this->id;
	}

	public function setId($value) {
		$this->id = $value;
	}

	public function getName() : string {
		return $this->name;
	}

	public function setName($value) {
		$this->name = $value;
	}

	public function getPrice() : int {
		return $this->price;
	}

	public function setPrice($value) {
		$this->price = $value;
	}

	public function getInfo() : string {
		return "Товар {$this->getName()} стоит {$this->getPrice()}<br>";
	}

	public function showInfo() {
		echo $this->getInfo();
	}
}

class PenGoods extends Goods {
	private $color;
	public function __construct($id, $name, $price, $color) {
		parent::__construct($id, $name, $price);
		$this->color = $color;
	}

	public function setColor($value) {
		$this->color = $value;
	}

	public function getColor(): string {
		return $this->color;
	}

	public function getInfo() : string {
		return parent::getInfo() . "Цвет товара {$this->getColor()}<br>";
	}
}

$item = new Goods(1, 'Маска', 400);
$item->showInfo();

$penItem = new PenGoods(2, 'Карандаш', 123, 'red');
$penItem->showInfo();


/**
 * Задание 5, 6, 7
 */

/*
class A {
	public function foo() {
		static $x = 0;
		echo ++$x;
	}
}
$a1 = new A();
$a2 = new A();
$a1->foo();
$a2->foo();
$a1->foo();
$a2->foo();

Выведет 1234 так как значение статического свойства хранит состояние класса, а не объекта;

*/

/*
class A {
	public function foo() {
		static $x = 0;
		echo ++$x;
	}
}
class B extends A {
}
$a1 = new A();
$b1 = new B();
$a1->foo();
$b1->foo();
$a1->foo();
$b1->foo();

Выведет 1122 так как каждый класс хранит свои статические свойств отдельно;

*/
