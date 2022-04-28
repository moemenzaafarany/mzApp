<?php
/* 1.0.0 */
class mzApp
{
    //====================================// constants
    public const VERSION = "1";
    //====================================// HTACCESS
    private const HTACCESS_FILE = "../.htaccess";
    private const HTACCESS_CONTENT = "# mzApp generated APACHE SETTINGS DO NOT EDIT\nOptions -Indexes\nRewriteEngine On\nOptions -Multiviews\nRewriteRule ^_assets/(.*)$ $1 [QSA,END]\nRewriteRule ^(.*)$ index.php?mzAppURL=$1 [QSA,END]";
    //====================================// URL
    private const GETKEY = "mzAppURL";
    static public string $URL_GET = "";
    static public string $URL_ROUTE = "";
    static public string $URL_BASE = "";
    //====================================// run
    static public function run(): void
    {
        //====================================// URL
        mzApp::$URL_GET = (!empty($_GET[mzApp::GETKEY]) ? $_GET[mzApp::GETKEY] : "");
        // ROUTE
        mzApp::$URL_ROUTE = "/" . @explode("?", mzApp::$URL_GET)[0];
        // BASE
        mzApp::$URL_BASE = "./";
        $r = @explode("/", ltrim("/", mzApp::$URL_ROUTE));
        if (count($r) > 1) mzApp::$URL_BASE = str_repeat("../", count($r) - 1);
        //====================================// HTACCESS
        if (!is_file(mzApp::HTACCESS_FILE) && is_file(mzApp::HTACCESS_CONTENT)) {
            fopen(mzApp::HTACCESS_FILE, "w");
            file_put_contents(mzApp::HTACCESS_FILE, mzApp::HTACCESS_CONTENT);
        }
    }
    //========================================// end Class
}

mzApp::run();
