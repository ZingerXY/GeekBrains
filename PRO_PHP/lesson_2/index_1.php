<?php

/** Базовый класс товара */
abstract class Product {

	/** @const Процент прибыли от товара */
	const PERCENT_INCOME = 15;

	/** Возвращает итоговую стоимость товара */
	abstract public function totalCost();

	/** Возварщает доход от продажи товара */
	abstract public function salesIncome();

}

/** Класс цифрового товара */
class DigitalProduct extends Product {

	const PRICE = 1000;
	private $amount;

	public function __construct($amount) {
		self::setAmount($amount);
	}

	/**
	 * Возвращает стоимость единицы товара
	 * @return int
	 */
	public function getPrice() {
		return self::PRICE;
	}

	/**
	 * Возвращает колличество товара
	 * @return int
	 */
	public function getAmount() {
		return $this->amount;
	}

	/**
	 * Задает колличество товара
	 * @param int $amount колличество товара
	 */
	public function setAmount($amount = 0) {
		$this->amount = $amount;
	}

	/**
	 * Возвращает итоговую стоимость товара с учетом колличества товара
	 * @return int
	 */
	public function totalCost() {
		return self::PRICE * $this->amount;
	}

	/**
	 * Возварщает доход от продажи товара
	 * @return float
	 */
	public function salesIncome() {
		return  $this->totalCost() / 100 * parent::PERCENT_INCOME;
	}
}

/** Класс физического товара */
class PhysicalProduct extends DigitalProduct {

	/**
	 * Возвращает стоимость единицы товара
	 * @return int
	 */
	public function getPrice() {
		return parent::PRICE * 2;
	}

	/**
	 * Возвращает итоговую стоимость товара с учетом колличества товара
	 * @return int
	 */
	public function totalCost()
	{
		return $this->getPrice() * parent::getAmount();
	}

	/**
	 * Возварщает доход от продажи товара
	 * @return float
	 */
	public function salesIncome()
	{
		return $this->totalCost() / 100 * parent::PERCENT_INCOME;
	}
}

/** Класс весового товара */
class WeightProduct extends Product {

	/** @var int $price стоимость единицы веса товара */
	private $price;

	/** @var int $wieght вес товара */
	private $wieght;

	public function __construct($price, $wieght) {
		self::setPrice($price);
		self::setWieght($wieght);
	}

	/**
	 * Устанавливает стоимость единицы веса товара
	 * @param int $price стоимость единицы веса товара
	 */
	public function setPrice($price) {
		$this->price = $price;
	}

	/**
	 * Устанавливает вес товара
	 * @param int $wieght вес товара
	 */
	public function setWieght($wieght) {
		$this->wieght = $wieght;
	}

	/**
	 * Возвращает итоговую стоимость товара с учетом веса товара
	 * @return int
	 */
	public function totalCost() {
		return $this->price * $this->wieght;
	}

	/**
	 * Возварщает доход от продажи товара
	 * @return float
	 */
	public function salesIncome() {
		return $this->totalCost() / 100 * parent::PERCENT_INCOME;
	}
}


$digitalProcuct = new DigitalProduct(5);
echo $digitalProcuct->salesIncome();

$physicalProduct = new PhysicalProduct(5);
echo $physicalProduct->salesIncome();

$weightProduct = new WeightProduct(1000, 5);
echo $productWeight->salesIncome();