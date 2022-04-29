<?php
/* 1.0.0 */
class mzApp
{
    //====================================// constants
    public const VERSION = "1";
    //====================================// HTACCESS
    private const HTACCESS_FILE = "../.htaccess";
    private const HTACCESS_CONTENT = "content/HTACCESS_CONTENT.txt";
    //====================================// LIB
    private const LIB_DIR = "../lib/";
    private const LIB_FILE = "../lib/main.js";
    private const LIB_CONTENT = "content/LIB_CONTENT.txt";
    //====================================// URL
    private const GETKEY = "mzAppURL";
    static public string $URL_GET = "";
    static public string $URL_ROUTE = "";
    static public string $URL_BASE = "";
    //====================================// run
    static public function init(): void
    {
        //====================================// URL
        mzApp::$URL_GET = (!empty($_GET[mzApp::GETKEY]) ? $_GET[mzApp::GETKEY] : "");
        // ROUTE
        mzApp::$URL_ROUTE = "/" . @explode("?", mzApp::$URL_GET)[0];
        // BASE
        mzApp::$URL_BASE = "./";
        $r = @explode("/", ltrim(mzApp::$URL_ROUTE, "/"));
        if (count($r) > 1) mzApp::$URL_BASE = str_repeat("../", count($r) - 1);
        //====================================// HTACCESS
        if (!is_file(mzApp::HTACCESS_FILE) && is_file(mzApp::HTACCESS_CONTENT)) {
            fopen(mzApp::HTACCESS_FILE, "w");
            file_put_contents(mzApp::HTACCESS_FILE, file_get_contents(mzApp::HTACCESS_CONTENT));
        }
        //====================================// LIB
        if (!is_file(mzApp::LIB_FILE) && is_file(mzApp::LIB_CONTENT)) {
            if (!is_dir(mzApp::LIB_DIR)) mkdir(mzApp::LIB_DIR, 0777, true);
            fopen(mzApp::LIB_FILE, "w");
            file_put_contents(mzApp::LIB_FILE, file_get_contents(mzApp::LIB_CONTENT));
        }
    }

    //====================================// run
    static public function run(): void
    {
        echo '
<!DOCTYPE html>
<html lang="en" mzapp-route="' . mzApp::$URL_ROUTE . '">
    <head>
        <base href="' . mzApp::$URL_BASE . '">
        <!-- meta -->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
        <link rel="icon" href="" id="mzapp-tab-icon">
        <!-- _mzApp -->
        <script src="_assets/_mzApp/js/mzApp.js"></script>
        <script src="_assets/_mzApp/js/mzUI.js"></script>
        <script src="_assets/_mzApp/js/mzWidgets.js"></script>
        <script src="_assets/_mzApp/js/mzMisc.js"></script>
        <link rel="stylesheet" href="_assets/_mzApp/css/main.css" />
        <!-- myApp -->
        <script type="module" src="_assets/lib/main.js"></script>
    </head>

    <body>
        <mzapp-root></mzapp-root>
        <mzapp-modals></mzapp-modals>
    </body>
</html>';
        exit();
    }
    //========================================// end Class

}
