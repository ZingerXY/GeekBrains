<?php

	function template($name, $data) {
		$template = file_get_contents('./template/' . $name . '.htm');
		foreach ($data as $key => $value) {
			$template = str_replace('{' . $key . '}', $value, $template);
		}
		return $template;
	}