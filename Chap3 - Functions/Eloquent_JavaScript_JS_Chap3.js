function initAccordion(accordionElem){
  
    var allPanelElems = accordionElem.querySelectorAll(".header");
    for (var i = 0, len = allPanelElems.length; i < len; i++){
         allPanelElems[i].addEventListener("click", handlePanelClick);
    }
  
    function handlePanelClick(event){
  
      if(event.currentTarget.parentElement.classList.contains("active")) {
        hidePanel(event.currentTarget.parentElement);
      } else {
        showPanel(event.currentTarget.parentElement); 
      }
    }
    
    //Displays the div by adding the active class
    function showPanel(panel) {
      panel.classList.add("active");
    }
  
    //Hides the div by removing the active class
    function hidePanel(panel) {
      panel.classList.remove("active"); 
    }
  
  }
  
  initAccordion(document.getElementById("exercise-problems")); 