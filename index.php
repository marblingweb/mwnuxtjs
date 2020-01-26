<?php
  $url=$_SERVER["REQUEST_URI"];
  $sayfaBul=explode("/",$url);
  $sayfa=$sayfaBul[1];
  session_start();

  switch ($sayfa) {
/*     case "api" : include("assets/api/api.php"); break;
    case "sitemap" : include("assets/api/sitemap.php"); break; */
    case "api" : include("static/assets/api/api.php"); break;
    case "sitemap" : include("static/assets/api/sitemap.php"); break;
    case "panel" : include("panel/index.php"); break;
    //default : include("index.html"); break;
    // Pages
/*     case "iletisim" : include("Iletisim/index.html"); break;
    case "web-tasarimlari" : include("Web-Tasarimlari/index.html"); break;
    case "sosyal-medya" : include("Sosyal-Medya/index.html"); break;
    case "seo-destek" : include("Seo-Destek/index.html"); break;
    case "baski-hizmetleri" : include("Baski-Hizmetleri/index.html"); break;
    case "ozel-yazilim" : include("Ozel-Yazilim/index.html"); break;
    case "kurumsal-kimlik" : include("Kurumsal-Kimlik/index.html"); break;
    case "projelerimiz" : include("Projelerimiz/index.html"); break; */
/*     case "kurumsal" : 
      foreach($kurumsal as $link) {
        if ($sayfaBul[2]===$link) {
          $upper=mb_convert_case(mb_strtoupper($link),MB_CASE_TITLE,"UTF-8");
          $include=$link;
          if (file_exists("Kurumsal/".$upper)) {
            $include=$upper;
          }
          include("Kurumsal/".$include."/index.html");
        }
      }
    break; */
  }
?>
