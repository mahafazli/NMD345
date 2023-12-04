const loadAbout = () => {
  fetch("about.html")
    .then(response => response.text())
    .then(
      text => {
      document.querySelector("#about").innerHTML = text;
    })
    .catch(
      error => {
      document.querySelector("#about").innerHTML = "Coming soon!";
    });
};


let currentSlideOffset = 0 ;

const lastSlideOffset = 6 ;

const slide = direction => {
  if (direction === "forward") {
   
    if ( currentSlideOffset === lastSlideOffset ) {
     
      return ;
    } else {
      
      currentSlideOffset ++ ;
    }
  } else if ( direction === "back" ) {
  
    if ( currentSlideOffset === 0 ) {
      
      return ;
    } else {
      
      currentSlideOffset -- ;
    }
  } ;
  
  document.querySelector("#frieze").style.transform = `translateX( ${ currentSlideOffset * -300 }px )` ;
} ;

