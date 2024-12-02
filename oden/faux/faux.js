let vars = [];
function useState(val){
  let uniqueIdentifier = vars.length;
  vars.push(val)
  return [
    ()=>{return vars[uniqueIdentifier];},
    (newVal)=>{
      vars[uniqueIdentifier] = newVal;
      reRender(uniqueIdentifier)
    }
  ]
}
let savedFunc = [];
function reRender(updatingVar){
  document.getElementById(savedFunc[0][1]).innerHTML = savedFunc[0][0]();
}
function render(func,loc){
  savedFunc.push([func,loc]);
  document.getElementById(loc).innerHTML = func();
}