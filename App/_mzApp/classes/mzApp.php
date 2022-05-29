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
}