var navPair = [
    {key: "profile", value: "profile-btn"},
    {key: "skills", value: "skills-btn"},
    {key: "experience", value: "experience-btn"},
    {key: "my-projects", value: "my-projects-btn"},
    {key: "education", value: "education-btn"},
    {key: "conclusion", value: "conclusion-btn"},
    {key: "additional", value: "additional-btn"}
];

var selectedValue = "profile-btn";
var darkMode = false;

window.addEventListener("DOMContentLoaded", function()
{
    onScroll();
    onResize();

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
    {
        invert();
    }
});

window.onresize = function(event) {
    onResize();
};

window.onscroll = function (event) {
    onScroll();
};

function onScroll() {
    for (var i = 0; i < navPair.length; i++)
    {
        var key = navPair[i].key;
        var value = navPair[i].value;

        var element = document.getElementById(key);

        var rect = element.getBoundingClientRect();

        var position = document.getElementById("top-nav").offsetHeight + 21;

        if (position < rect.bottom && position > rect.top)
        {
            selectNavBtn(value);

            return;
        }
    }
}

function selectNavBtn(id)
{
    document.getElementById(selectedValue).style.backgroundColor = "#8421de";
    document.getElementById(selectedValue).style.color = "white";
    
    selectedValue = id;
    
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "black";
}

function onResize() {
    //fit padding
    document.getElementById("nav-holder").style.height = document.getElementById("top-nav").offsetHeight.toString() + "px";
}

function scrollToView(id)
{
    var element = document.getElementById(id);
    var headerOffset = document.getElementById("top-nav").offsetHeight + 20;
    
    var offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function invert() {

    var root = document.documentElement;

    var topImg = document.getElementById("top-img");

    var waveEmoji = document.getElementById("wave-emoji");

    var displays = document.getElementsByClassName("showcase-display");
    
    var filterValue = darkMode ? "invert(0%)" : "invert(100%)";
    
    root.style.filter = filterValue;

    topImg.style.filter = filterValue;

    waveEmoji.style.filter = filterValue;

    for (var i = 0; i < displays.length; i++)
    {
        var display = displays.item(i);

        display.style.filter = filterValue;
    }
    
    darkMode = !darkMode;
    
    document.getElementById("dark-mode-img").src = darkMode ? "Images/light_mode.png" : "Images/dark_mode.png";
}