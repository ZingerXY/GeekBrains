<?php

$loginMessage = '';
$login = '';
$paswordHash = '';

if (isset($_REQUEST['login'])) {
	$login = $mysqli->escape_string($_REQUEST['login']);
}

if (isset($_REQUEST['do_registration'])) {
	$paswordHash = password_hash($_REQUEST['password'], PASSWORD_BCRYPT);
	$queryReg = "INSERT INTO users SET login='$login', password = '$paswordHash'";
	if ($mysqli->query($queryReg)) {
		$loginMessage = 'Регистрация прошла успешно';
	} elseif ($mysqli->errno == 1062) {
		$loginMessage = 'Такой пользователь уже зарегистрирован';
	} else {
		$loginMessage = 'Ошибка регистрации';
	}
}

if (isset($_REQUEST['do_login'])) {
	$queryUser = "SELECT * FROM `users` WHERE login = '$login'";
	$userResult = $mysqli->query($queryUser);
	if ($userResult && $user = $userResult->fetch_assoc()) {
		if (password_verify($_REQUEST['password'], $user['password'])) {
			$_SESSION['user'] = $user;
			$_SESSION['login_sucsess'] = true;
			$loginMessage = 'Вход выполнен успешно';
		}
	} else {
		$loginMessage = 'Пользователь не найден';
	}
}

if (isset($_REQUEST['do_logout'])) {
	unset($_SESSION['user']);
	$_SESSION['login_sucsess'] = false;
}