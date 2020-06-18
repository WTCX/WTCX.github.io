function toSearch() {
    var search = ' \
            <div id="nav-search"> \
                <div id="search-bar"> \
                    <img src="icons/search.svg" alt="search"> \
                    <input type="text" placeholder="Search.."> \
                    <button onclick="toNav()"><img src="icons/close.svg"></button> \
                </div> \
                <div id="suggestions"> \
                    <ul> \
                        <li><a href="#">1</a></li> \
                        <li><a href="#">2</a></li> \
                        <li><a href="#">3</a></li> \
                        <li><a href="#">4</a></li> \
                        <li><a href="#">1</a></li> \
                    </ul> \
                </div> \
            </div>'

    var current = document.getElementById("nav-search");
    current.outerHTML = search
}

function toNav() {
    var navigation = ' \
        <div id="nav-search"> \
            <div id="navigation"> \
                <b>AIPAL</b> \
                <ul> \
                    <li><a href="index.html">Home</a></li> \
                    <li><a href="problem.html">Problem</a></li> \
                    <li><a href="solution.html">Solution</a></li> \
                    <li><a href="evaluation.html">Evaluation</a></li>\
                    <li><a href="reference.html">Reference</a></li> \
                </ul> \
                <button type="button" onclick="toSearch()"><img src="icons/search.svg" alt="search"></button> \
            </div> \
        </div>';
    var current = document.getElementById("nav-search");
    current.outerHTML = navigation
}
