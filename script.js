function initAccordion(accordionElem) {
    const allPanelElems = accordionElem.querySelectorAll(".exercise-header");
    const allCloserElems = accordionElem.querySelectorAll(".exercise-close");

    for (let i = 0; i < allPanelElems.length; i++) {
        allPanelElems[i].addEventListener("click", handlePanelClick);
        allCloserElems[i].addEventListener("click", handlePanelClick);
    }

    function handlePanelClick(event) {
        if (event.currentTarget.parentElement.classList.contains("active")) {
            if (event.currentTarget.classList.contains("exercise-close")) {
                hidePanel(event.currentTarget.parentElement, true);
            } else {
                hidePanel(event.currentTarget.parentElement);
            }
        } else {
            showPanel(event.currentTarget.parentElement);
        }
    }

    //Displays the div by adding the active class
    function showPanel(panel) {
        panel.classList.add("active");
    }

    //Hides the div by removing the active class
    function hidePanel(panel, scroll = false) {
        if (scroll) window.scrollTo(0, 0);
        panel.classList.remove("active");
    }
}

initAccordion(document.querySelector(".container-exercise-problems"));