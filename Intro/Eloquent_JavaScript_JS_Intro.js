//MAIN TITLE AND HEADER
// Create the div for the main header
var mainHeaderDiv = document.createElement("header"); 
mainHeaderDiv.id = "main-header-element"; 
document.body.append(mainHeaderDiv); 

// Create the header for the title
var mainHeader = document.createElement("h1"); 
mainHeader.id = "intro-main-header";
mainHeader.innerHTML = "Welcome to the (Unofficial) Exercise Guide of <em>Eloquent JavaScript<em>";
document.getElementById("main-header-element").append(mainHeader); 

// Create the header for the creator's name 
var secondHeader = document.createElement("h2");
secondHeader.id = "second-header";
secondHeader.innerHTML = "Created by David Brunner (A Rookie JavaScript Pupil)"; 
document.getElementById("main-header-element").append(secondHeader); 


//ELOQUENT JAVASCRIPT LINKS
//Create a div for the resources
var bookLinkDiv = document.createElement("article"); 
bookLinkDiv.id = "resources-article";
document.body.append(bookLinkDiv); 

//Create a div for the blur effect 
var bookLinkDiv = document.createElement("div"); 
bookLinkDiv.id = "inner-resources-div";
document.getElementById("resources-article").append(bookLinkDiv); 

//Create a figure for the book cover
var bookCoverFigure = document.createElement("figure"); 
bookCoverFigure.id="book-cover-figure"; 
document.getElementById("inner-resources-div").append(bookCoverFigure); 

//Create an image of the book cover
var bookCoverImage = document.createElement("img");
bookCoverImage.id = "book-cover-image";
bookCoverImage.src = "../Intro/Book_Cover.jpg"; 
bookCoverImage.alt = "Eloquent JavaScript Cover";
bookCoverImage.style="width: 100%; height: 100%" ; 
document.getElementById("book-cover-figure").append(bookCoverImage); 

//Create a div for the book links
var linksDiv = document.createElement("div");
linksDiv.id = "book-links";
document.getElementById("inner-resources-div").append(linksDiv); 

//Create a div for first link
var firstLinkDiv = document.createElement("div"); 
firstLinkDiv.id = "first-link-div"; 
document.getElementById("book-links").append(firstLinkDiv); 

// Create a p for the Eloquent JavaScript website link
var link1 = document.createElement("p"); 
link1.id = "link1"; 
link1.innerText = "The entire book is available online for free: "; 
document.getElementById("first-link-div").append(link1); 

// Create a href link for the Eloquent JavaScript website
var link1Element = document.createElement("a"); 
link1Element.innerText = "Eloquent JavaScript Website"; 
link1Element.href = "https://eloquentjavascript.net/index.html"; 
link1Element.alt = "Eloquent JavaScript Website"; 
link1Element.target = "_blank"; 
document.getElementById("first-link-div").append(link1Element); 

// Create a div for the second link
var secondLinkDiv = document.createElement("div");
secondLinkDiv.id = "second-link-div"; 
document.getElementById("book-links").append(secondLinkDiv); 

// Create a p for the Amazon link to Eloquent JavaScript
var links2 = document.createElement("p"); 
links2.id = "link2"; 
links2.innerText = "The entire book is also available for purchase: " 
document.getElementById("second-link-div").append(links2); 

// Create a href link for Amazon to purchase Eloquent JavaScript
var link2Element = document.createElement("a");
link2Element.innerText = "Amazon"; 
link2Element.href = "https://www.amazon.com/gp/product/1593279507/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1593279507&linkCode=as2&tag=marijhaver-20&linkId=d8642c0457954f03e27c02b0034d0d60"; 
link2Element.alt = "Amazon"; 
link2Element.target = "_blank"; 
document.getElementById("second-link-div").append(link2Element); 


//NAVBAR
//Create a div element for the navbar
var navbarDiv = document.createElement("article");
navbarDiv.id = "navbar-article"; 
document.body.append(navbarDiv); 

//Create a div element for 3rd Ed.
var navbarDiv3 = document.createElement("section"); 
navbarDiv3.id = "navbar-section-3rd-Ed"; 
navbarDiv.append(navbarDiv3); 

//Create a header for 3rd Ed. 
var header3rdEd = document.createElement("h3"); 
header3rdEd.id = "header-3rd-Ed"; 
header3rdEd.innerHTML = "3rd Edition"; 
document.getElementById("navbar-section-3rd-Ed").append(header3rdEd); 

// Create a navbar for 3rd Ed. 
var navbar3 = document.createElement("nav"); 
navbar3.id = "navbar-3rd-Ed";
document.getElementById("navbar-section-3rd-Ed").append(navbar3); 

//Create unorderedList
var unorderedList3 = document.createElement("ul"); 


//Create link for intro
var page30 = document.createElement("li"); 
var page30Link = document.createElement("a"); 
page30Link.innerText = "Intro"; 
page30Link.href="../Intro/Eloquent_JavaScript_HTML_Intro.html";
page30Link.alt="Intro Link"; 
page30Link.title="Chapter 1"; 
page30.appendChild(page30Link); 
unorderedList3.append(page30); 

//Create link for first Chapter
var page31 = document.createElement("li"); 
var page31Link = document.createElement("a"); 
page31Link.innerText = "Chapter 1 (Part 1: Language)"; 
page31Link.href = "../Chap1 - Values, Types, and Operators/Eloquent_JavaScript_HTML_Chap1.html"; 
page31Link.alt = "Chapter 1 Link"; 
page31Link.title = "Chapter 1";
page31.appendChild(page31Link); 
unorderedList3.append(page31); 

//Create link for second Chapter
var page32 = document.createElement("li"); 
var page32Link = document.createElement("a"); 
page32Link.innerText = "Chapter 2"; 
page32Link.href = "../Chap2 - Program Structure/Eloquent_JavaScript_HTML_Chap2.html"; 
page32Link.alt = "Chapter 2 Link"; 
page32Link.title="Chapter 2"; 
page32.appendChild(page32Link); 
unorderedList3.append(page32)

//Create a link for third chapter
//var page33 = document.createElement("li"); 

// Add links to the unordered list
navbar3.append(unorderedList3); 


// CSS

var styles = `
    html {
        font-size: 62.5%;
        overflow-y: scroll; 
    }    

    body {
        margin: 0;
        font-size: 2rem;
        font-family: Georgia, 'Nimbus Roman No9 L', 'Century Schoolbook L', serif;
    }

    #main-header-element { 
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 0 auto;
        padding: 15rem 10rem 10rem 10rem;
        background-color: #f8d410;
    }

      #resources-article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10rem;
    }

    #inner-resources-div {
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #book-cover-figure {
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #book-links {
        display: flex; 
        flex-direction: column;
        position: relative;
        opacity: 0; 
    }

    #first-link-div {
        position: absolute;
        text-align: center;
        transform: translate(-50%, -300%);
        width: 30rem; 
        margin-bottom: 1rem;
        padding: 2rem;
        background-color: rgb(0,0,0); 
        background-color: rgba(0,0,0, 0.8);
        color: white;
        border: 0.5rem solid white;
    }

    #second-link-div {
        position: absolute;
        text-align: center;
        transform: translate(-50%, -200%);
        width: 30rem; 
        margin-top: 1rem;
        padding: 2rem;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0, 0.8);
        color: white;
        border: 0.5rem solid white;
    }

    #book-links a{
        color: #ac77f2; 
    }

    #book-cover-figure:hover + #book-links{
        opacity: 1; 
    }

    #book-links:hover {
        opacity: 1; 
    }

    #inner-resources-div:hover #book-cover-image {
        filter: blur(8px); 
    }

    #navbar-article {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 8rem;
    }

    #navbar-section-3rd-Ed {
        padding: 5rem;
        transition: background-color 0.3s ease-out;
    }

    #navbar-section-3rd-Ed:hover {
        background-color: #f8d410;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        padding-top: 3rem; 
    }

    a {
        text-decoration: none;
        color: purple; 
    }

    a:hover {
        color: red; 
    }

`
var styleSheet = document.createElement("style"); 
styleSheet.type = "text/css";
styleSheet.innerText = styles; 
document.head.appendChild(styleSheet); 

