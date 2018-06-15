/**
 *  Handles all links and interactions
 */

var all_links = {
    "Reddit": "https://reddit.com",
    "Youtube": "https://youtube.com",
    "Facebook": "https://facebook.com",
    "Bitbucket": "https://bitbucket.org",
    "Github": "https://github.com",
    "Email": "https://inbox.google.com"
};

var setup_links = function () {
    var links_container = document.getElementById("links-container");

    for (var link in all_links) {
        var link_url = all_links[link];
        var link_markup = "<a href='" + link_url + "'" + ">" + link + "</a>";
        links_container.innerHTML += link_markup;
    }


};

setup_links();