let previousPageToken = '';
let nextPageToken = '';
let counter = 0;
let firstCall = 0;

(function createBasicDomElem() {
    let body = document.getElementById("body");

    let navBar = document.createElement("div");
    navBar.setAttribute("id", "ul");

    let youtubeLogo = document.createElement("div");
    youtubeLogo.setAttribute("class", "li");
    let youtubeLogoImage = document.createElement("img");
    youtubeLogoImage.setAttribute("src", "./assets/img/blue-youtube-logo-png-4.png");
    youtubeLogoImage.setAttribute("class", "logo");
    youtubeLogoImage.setAttribute("id", "youtube-logo");
    youtubeLogo.append(youtubeLogoImage);

    let search = document.createElement("div");
    search.setAttribute("class", "li-search");
    let searchDiv = document.createElement("div");
    searchDiv.setAttribute("class", "searchFlexDiv");
    let searchBox = document.createElement("input");
    searchBox.setAttribute("type", "text");
    searchBox.setAttribute("placeholder", "Search for video");
    searchBox.setAttribute("id", "searchBox");
    searchBox.setAttribute("class", "searchTerm");
    let searchButton = document.createElement("button");
    searchButton.setAttribute("type", "submit");
    searchButton.setAttribute("class", "searchButton");
    searchButton.setAttribute("id", "searchButton");
    searchButton.setAttribute("onclick", "searchBoxSubmit()")
    let SearchIcon = document.createElement("i");
    SearchIcon.setAttribute("class", "fa fa-search");
    searchButton.append(SearchIcon)
    searchDiv.append(searchBox);
    searchDiv.append(searchButton);
    search.append(searchDiv);


    let epamLogo = document.createElement("div");
    epamLogo.setAttribute("class", "li");
    epamLogo.setAttribute("id", "epam-logo-div");
    let epamLogoImage = document.createElement("img");
    epamLogoImage.setAttribute("src", "./assets/img/epam-systems-logo.jpg");
    epamLogoImage.setAttribute("class", "logo");
    epamLogoImage.setAttribute("id", "epam-logo");
    epamLogo.append(epamLogoImage);

    navBar.append(youtubeLogo);
    navBar.append(search);
    navBar.append(epamLogo);

    body.append(navBar);

    let displayAllVid = document.createElement("div");
    displayAllVid.setAttribute("id", "displayAllVid");

    body.append(displayAllVid);

    let PreviousNextButtonDiv = document.createElement("div");
    PreviousNextButtonDiv.setAttribute("id", "prevNextBtn");
    let previousButton = document.createElement("button");
    previousButton.setAttribute("class", "previousButton");
    previousButton.setAttribute("id", "previousButton");
    previousButton.setAttribute("onclick", "previousResultSet()");
    previousButton.append("Previous");
    let nextButton = document.createElement("button");
    nextButton.setAttribute("class", "nextButton");
    nextButton.setAttribute("id", "nextButton");
    nextButton.setAttribute("onclick", "nextResultSet()");
    nextButton.append("Next");

    PreviousNextButtonDiv.append(previousButton);
    PreviousNextButtonDiv.append(nextButton);

    body.append(PreviousNextButtonDiv);

    let testShowHideBtn = document.createElement("button");
    testShowHideBtn.setAttribute("class", "testShowHideBtn");
    testShowHideBtn.setAttribute("id", "testShowHideBtn");
    testShowHideBtn.append("Hide Test Results");
    testShowHideBtn.setAttribute("onclick", "hideShowTests()");

    body.append(testShowHideBtn);

})();

let hideShowTests = function() {
    let flag = 1;

    return function() {
        let btn = document.getElementById("testShowHideBtn");
        let testDiv = document.getElementsByClassName("jasmine_html-reporter")[0];
        console.log(flag);
        if (flag) {
            btn.innerHTML = "Show Test Results";
            flag = 0;
            testDiv.setAttribute("style", "display:none;");
        } else {
            btn.innerHTML = "Hide Test Results";
            flag = 1;
            testDiv.setAttribute("style", "display:block;");
        }
    };
}();
/// Adding Event Listener for Search Box OnEnter Event
function onEnterEventListener() {
    let searchBox = document.getElementById('searchBox');
    searchBox.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            counter = 0;
            firstCall = 0;
            document.getElementById("searchButton").click();
        }
    });
}

///Disables previous Button If there is no Previous Page
function checkDisableButton() {
    if (counter <= 1) {
        document.getElementById("previousButton").disabled = true;
    } else {
        document.getElementById("previousButton").disabled = false;
    }
}

///Disables Next Button If there is no search done
function checkFirstCall() {
    if (firstCall == 0) {
        document.getElementById("nextButton").disabled = true;
    } else {
        document.getElementById("nextButton").disabled = false;
    }
}

onEnterEventListener();
checkDisableButton();
checkFirstCall();

function searchBoxSubmit(urls) {

    let searchBox = document.getElementById('searchBox');

    if (searchBox.value == '') {
        alert("please enter something to search");
    } else {
        checkFirstCall();
        checkDisableButton();
        let url = '';
        if (urls == undefined) {
            firstCall = 1;
            counter++;
            console.log('yes');

            url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBWLFBi-JmwYv2JnqUsrcDd4vKQYct2vdg&type=video&part=snippet&&maxResults=15&q=${searchBox.value}`;
            console.log(url);
        } else {
            url = urls;
        }
        fetchData(url);
        checkFirstCall();
        checkDisableButton();
    }
}

function fetchData(url) {
    fetch(url, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayData(data);
        });
}

function previousResultSet() {
    let searchBox = document.getElementById('searchBox');
    counter--;
    var prevUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBWLFBi-JmwYv2JnqUsrcDd4vKQYct2vdg&type=video&part=snippet&&maxResults=15&q=${searchBox.value}&pageToken=${previousPageToken}`;
    searchBoxSubmit(prevUrl);
}

function nextResultSet() {
    let searchBox = document.getElementById('searchBox');
    counter++;
    var nextUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBWLFBi-JmwYv2JnqUsrcDd4vKQYct2vdg&type=video&part=snippet&&maxResults=15&q=${searchBox.value}&pageToken=${nextPageToken}`;
    searchBoxSubmit(nextUrl);
}

function RemovePreviousSearchResult() {
    let displayResult = document.getElementById('displayAllVid');
    let child = displayResult.lastElementChild;

    //removing previous vdeo search result
    while (child) {
        displayResult.removeChild(child);
        child = displayResult.lastElementChild;
    }
}

function displayData(data) {
    let displayResult = document.getElementById('displayAllVid');
    let count = 1;
    nextPageToken = data.nextPageToken;
    previousPageToken = data.prevPageToken;

    RemovePreviousSearchResult();
    data.items.forEach(element => {
        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "cardDiv");
        var thumbImg = document.createElement("img");
        thumbImg.setAttribute("style", "");

        var title = document.createElement("a");
        title.setAttribute("id", `title-${count}`);

        var descriptionDiv = document.createElement("div");
        descriptionDiv.setAttribute("class", `descriptionDiv`);
        var description = document.createElement("p");
        description.setAttribute("id", `desc-${count}`);
        descriptionDiv.append(description);

        var channelName = document.createElement("p");
        channelName.setAttribute("style", "color: black; margin-top: 5px; font-weight: 600; font-size: 14px");

        channelName.setAttribute("id", `channel-${count}`);

        thumbImg.setAttribute("src", element.snippet.thumbnails.medium.url);
        title.setAttribute("target", "_blank");
        title.setAttribute("href", `https://www.youtube.com/watch?v=${element.id.videoId}`);
        title.setAttribute("style", "text-decoration:none; color: black; margin-top: 10px; font-weight: 600;");

        cardDiv.append(thumbImg);
        cardDiv.append(title);
        cardDiv.append(descriptionDiv);
        cardDiv.append(channelName);
        displayResult.append(cardDiv);


        document.getElementById(`title-${count}`).innerHTML = element.snippet.title;
        document.getElementById(`desc-${count}`).innerHTML = element.snippet.description;
        document.getElementById(`channel-${count}`).innerHTML = `${element.snippet.channelTitle}`;


        count++;
    });
}