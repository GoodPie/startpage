/**
 * Handles search functionality
 */

var SHIFT = 16;
var RETURN = 13;

var urls = {
    reddit: "https://reddit.com/",
    league: "https://www.mobafire.com/league-of-legends/",
    google: "https://google.com.au/q#=",
    duck: "https://duckduckgo.com/?q="
};


setTimeout(function(){
    document.getElementById("search").focus();
}, 0);

var keyCombination = {
    "return":false,
    "shift":false
};

/**
 * Check what key combinations have been pressed
 *
 * @param e
 */
document.onkeydown = function(e)
{
    e  = e || window.event;
    var keycode = e.keyCode;

    if (keycode === SHIFT)
    {
        keyCombination["shift"] = true;
    }
    else if (keycode === RETURN)
    {
        keyCombination["return"] = true;
        search();
    }

};

/**
 * Reset the key combinations
 *
 * @param e
 */
document.onkeyup = function(e)
{
    e = e || window.event;

    var keycode = e.keyCode;

    if (keycode === SHIFT)
    {
        keyCombination["shift"] = false;
    }
    else if (keycode === RETURN)
    {
        keyCombination["return"] = false;
    }
};


/**
 * Searches search engines based on key combinations
 */
var search = function()
{
    // Get the search query
    var query = document.getElementById("search").value;

    if (query !== "") {

        // Default the query to google
        var url = urls.google + query;

        // Shift for Duck Duck Go
        if (keyCombination["shift"] === true) {
            url = urls.duck + query;
        }
        else {
            // Using search flags
            var search_flag = get_search_tag(query);
            switch (search_flag) {
                case "r/":
                    url = urls.reddit + query;
                    break;
                case "l/":
                    url = build_mobafire_query(query);
                    break;
            }
        }

        // Open the search engine url
        window.open(url, "_self");
    }
};

/**
 * Just a stub function in case I want to expand on the tags later
 * @param query
 * @returns {string}
 */
var get_search_tag = function (query) {
    return query.substr(0, 2);
};


/**
 * Mobafire query can't just be appended to url. Have to do a few things to make it work
 * @param query     Raw query from user with the search tag
 * @returns {*}     Query url
 */
var build_mobafire_query = function (query) {
    // Remove the query tag
    query = query.substr(2);

    // Replace spaces with dashes
    query = query.replace(" ", "-");

    // Append guide to end of query
    query = query + "-guide";

    return urls.league + query;
};

