// SnoJS Snowstorm BETA 
// Grab all html elements to parse later
const getElms = () =>{
	var z;
  var arr = []
  z= document.getElementsByTagName("*");
  for(i=0;i<z.length;i++){
  	arr.push(z[i]);
  }
  return arr;
};
const elements = getElms();

// Mark the data tag and push jsonified vars to array
const parseData = () =>{
	var hasDataTag, jsonified;
	for(i=0;i<elements.length;i++){
  	hasDataTag = elements[i].getAttribute("data");
    if(hasDataTag != null){
    	hasDataTag = JSON.parse(hasDataTag);
      return hasDataTag;
    }
  }
};
const data = parseData();

const parseReact = () =>{
	var hasReact;
  var reacts = [];
  for(i=0;i<elements.length;i++){
  	// Check for React attr
  	hasReact = elements[i].getAttribute("react");
    if(hasReact != null){
    	// Dont push data of React attr, only elem
    	reacts.push({"elem":elements[i],"oldTxt":elements[i].innerHTML});
    }
  }
  return reacts;
};
const react = parseReact();

const parseClicker = () =>{
  var hasClick;
  var click = []
  for(i=0;i<elements.length;i++){
    // Check for the Click attr
    hasClick = elements[i].getAttribute("click");
    if(hasClick != null){
      click.push(elements[i]);
      // Add the click listener
      elements[i].addEventListener('click', function(evt){
        // take the data of hasClick to the function
        var bringClick = evt.currentTarget.getAttribute("click")
        var already = false;
        try{
	        for(let i = 0;i<Object.keys(data).length;i++){
	            if(bringClick.includes(Object.keys(data)[i])){
	                if(!already){
	                    bringClick = bringClick.replaceAll(Object.keys(data)[i],`data["${Object.keys(data)[i]}"]`)
	                }
	            }
	        }
	        already=true;
	        eval(bringClick);
	    }catch (error){
	        console.log("Error with clicker():"+error)
	    }
      })
    }
  }
  return click;
};
const click = parseClicker();

window.main = function(){
	requestAnimationFrame( main );
  // Reactor: The react is structured react[0]{"elem":?,"oldTxt":""}
  if(react.length > 0){
  	for(i=0;i<Object.keys(data).length;i++){
    	for(q=0;q<react.length;q++){
      	if(react[q].oldTxt.includes(Object.keys(data)[i])){
        	// Set the React back to original save

        	react[q].elem.innerHTML = react[q].oldTxt;
          // Replace it with the variable
        	react[q].elem.innerText = react[q].elem.innerText.replace(`{{${Object.keys(data)[i]}}}`,Object.values(data)[i])
        }
      }
    }
  }
};main();

function swap(){
  data.count ++;
}