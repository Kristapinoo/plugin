var keywords = ["Ukraina", "Plūdi", "Krievija"];
var unwantedArticles = document.querySelectorAll("h2.article-title, div.article-text");
for (var i = 0; i < unwantedArticles.length; i++) {
    var unwantedArticle = unwantedArticles[i];
    for (var j = 0; j < keywords.length; j++) {
        var keyword = keywords[j];
        if (unwantedArticle.textContent.includes(keyword)) {
            unwantedArticle.style.display = "none";
            break;
        }
    }
}

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0];
    // use the activeTab variable to access the current tab's URL, title, etc.
});

try {
    // code that could throw an error
} catch (error) {
    console.log(error);
    alert("Sorry, something went wrong. Please try again later.");
}
