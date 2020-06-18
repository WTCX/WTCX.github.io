<!DOCTYPE html>
<html lang="en-US">
    <head>
        <link rel="stylesheet", type="text/css", href="navigation.css">
        <link rel="stylesheet", type="text/css", href="content.css">
        <script src="https://wtcx.github.io/navigation.js"></script>
        <script src="https://wtcx.github.io/content.js"></script>
        <title>Home - AIPAL</title>
    </head>
    <body>
        <div id="nav-search">
            <div id="navigation">
                <b>AIPAL</b>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#problem">Problem</a></li>
                    <li><a href="#solution">Solution</a></li>
                    <li><a href="#evaluation">Evaluation</a></li>
                    <li><a href="#reference">Reference</a></li>
                </ul>
                <button type="button" 
                        title="print current webpage"onclick="window.print()">
                    <img sec=>
                </button>
                <button type="button" 
                        title="search within the website" onclick="toSearch()">
                    <img src="icons/search.svg" alt="search">
                </button>
            </div>
        </div>
        <div id="share">
            <a href=""><img src="icons/search.svg"></a>
            <a href=""><img src="icons/search.svg"></a>
            <a href=""><img src="icons/search.svg"></a>
        </div>
        <div id="google_translate_element">
            <script type="text/javascript">
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
                }
            </script>
            <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
            </script>
        </div>
        <div id="brief" style="background-image: url(images/wheelchair.jpg)">
            <div id="brief-text">
                <h1>ARTIFICIAL INTELLIGENCE POWERED ARTIFICIAL LIMB (AIPAL)</h1>
                <p title="brief">
                    An effective AI solution for amputation patients
                </p>
            </div>
        </div>
        <div class="intro">
            <img src="images/wheelchair.jpg">
            <div>
                <h2>Problem</h2>
                <p>Millions of amputation patients need more flexible pathetic limb</p>
            </div>
        </div>
        <div class="intro intro-left">
            <div class="intro-text-left">
                <h2>Solution</h2>
                <p>An AI powered artificial alternative</p>
            </div>
            <img src="images/ai.jpg" class="intro-img-right">
        </div>
        <div class="intro">
            <img src="images/wheelchair.png">
            <div>
                <h2>Evaluation</h2>
                <p>An Ethnic, safe, sustainable and practical approach</p>
            </div>
        </div>
    </body>
</html>
