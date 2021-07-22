'use strict'

document.querySelector('button')
	.addEventListener('click', event => {
		const textarea = document.querySelector('textarea');
		const regexp = /(\W?)'(.*?)'(\W)/g;
		textarea.value = textarea.value.replace(regexp, '$1"$2"$3');
	});

function checkInput(input, regExp, msg) {
	if (!regExp.test(input.value)) {
		input.classList.add('error');
		input.nextElementSibling.innerText = msg;
		return true;
	}
	return false;
}

document.querySelector('form')
	.addEventListener('submit', event => {
		const form = event.target;
		const submit = form.querySelector('input[type="submit"]');
		form.querySelectorAll('input').forEach(input => {
			input.classList.remove('error');
			input.nextElementSibling.innerText = '';
		});
		submit.nextElementSibling.innerText = "";
		let noSend = false;

		const inputName = form.querySelector('input[name="name"]');
		noSend ||= checkInput(inputName, /^[A-Za-zА-Яа-я]+$/, "Имя должно быть не пустым и содержать только буквы");

		const inputTel = form.querySelector('input[name="tel"]');
		noSend ||= checkInput(inputTel, /^\+7\(\d{3}\)\d{3}-\d{4}$/, "Телефон должен иметь вид +7(000)000-0000");

		const inputMail = form.querySelector('input[name="mail"]');
		noSend ||= checkInput(inputMail, /^[\w\.-]*@mail.ru$/, "E-mail должен иметь вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru");

		const inputText = form.querySelector('input[name="text"]');
		noSend ||= checkInput(inputText, /^.*$/, "Текст произвольный");

		if (noSend) {
			event.preventDefault();
			submit.nextElementSibling.innerText = "Данные формы не верные";
		}
	});