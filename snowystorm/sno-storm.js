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

const parseReval = () => {
  var hasReval;
  var revals = [];
  for(i=0;i<elements.length;i++){
    //check for reval attr
    hasReval = elements[i].getAttribute("reval")
    if(hasReval != null){
      revals.push({"elem":elements[i],"oldTxt":elements[i].innerHTML});
    }
  }
  return revals;
}
const reval = parseReval();

const parseIf = () =>{
	var hasIf;
  var ifs = [];
  for(i=0;i<elements.length;i++){
  	// Check for React attr
  	hasIf = elements[i].getAttribute("if");
    if(hasIf != null){
    	// Dont push data of React attr, only elem
    	ifs.push({"elem":elements[i],"attr":hasIf});
    }
  }
  return ifs;
};
const ifs = parseIf();

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
  // reval checker basically react + something, similar to the react components
  if(reval.length > 0){
    // reset back to the original html  
    // for(z=0;z<reval.length;z++){
    //   reval[q].elem.innerHTML = reval[q].oldTxt;
    // }
    for(i=0;i<Object.keys(data).length;i++){
      for(q=0;q<reval.length;q++){
        // alert("yay")
        if(reval[q].elem.innerHTML.includes(Object.keys(data)[i])){
          reval[q].elem.innerHTML = reval[q].oldTxt;
          reval[q].elem.innerText = reval[q].elem.innerText.replace(`${Object.keys(data)[i]}`,`data.${Object.keys(data)[i]}`)
          
        }
      }
    }
  }
  // If reactor
  if(ifs.length > 0){
    // loop both the object and the ifs to check for equality
    for(i=0;i<Object.keys(data).length;i++){
      for(q=0;q<ifs.length;q++){
        //Check if an attribute includes any valid variable
        if(ifs[q].attr.includes(Object.keys(data)[i])){
          // convert the attribute data from "count==5" to "data.count==5" then evaluate if its tru
          let trueAttr = ifs[q].attr.replace(Object.keys(data)[i],`data.${Object.keys(data)[i]}`)
          if(eval(trueAttr)){
            ifs[q].elem.style.display = "";
          }else{
            ifs[q].elem.style.display = "none";
          }
        }
      }
    }
  }
};main();

