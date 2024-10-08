function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function underline(elem){
  if(elem.getAttribute("style") != "text-decoration:none;"){
      elem.setAttribute("style","text-decoration:none;");
  }else{
      elem.setAttribute("style","text-decoration:underline;");
  }
}
function jsoRET(cookie){
  let str = getCookie(cookie);
  return JSON.parse(str);
}
window.main = function(){
  requestAnimationFrame( main );
  // Retrieve the ID's of all previously saved verses
  jj = jsoRET("un")
  alert(jj)
  if(jj !=undefined){
    for(let i = 0; i<jj.length;i++){
      // Rerender all saved verses
      let tempelm = document.getElementById(jj[i])
      underline(tempelm);
    }
  }
};main();