<?php
//====================================// Session
session_name("mzApp");
session_start();
//====================================// Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
header("Cache-Control: no-cache, must-revalidate");
header("Content-Type: text/html; charset=utf-8");
date_default_timezone_set('UTC');
http_response_code(200);
//====================================// Require
require_once("classes/mzApp.php");
//====================================// mzApp
mzApp::init();
//====================================// HTML
?>
<!DOCTYPE html>
<html lang="en" mzroute="<?= mzApp::$URL_ROUTE ?>">

<head>
    <base href="<?= mzApp::$URL_BASE ?>" />
    <!-- meta -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
    <link rel="icon" href="" id="mztab-icon" />
    <!-- MZ -->
    <link rel="stylesheet" href="_assets/_mzApp/css/main.css" />
    <script src="_assets/_mzApp/js/functions.js"></script>
    <style id="mzhead-style" type="text/css"></style>
    <!-- Lib -->
    <script type="module" src="_assets/lib/main.js"></script>
</head>

<body>
    <mzroot></mzroot>
    <mzmodals></mzmodals>
</body>

</html>