<?php

$a = 1;
$b = 2;
$a ^= $b ^= $a ^= $b;
var_dump(['$a' => $a, '$b' => $b]);
