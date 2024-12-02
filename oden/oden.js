const Oden = {
	createListener(func){
  	let vs = func();
  },
  $(dat,val){
  	this.observe.push([dat, val]);
  },
  observe:[],
  $get(dat){
  	for(let i=0;i<this.observe.length;i++){
    	if(dat == this.observe[i][0]){
      	return this.observe[i][1]
      }
    }
  },
  $set(dat,change){
  	let findVar = [];
    let newVar;
    for(let i=0;i<this.observe.length;i++){
    	if(dat == this.observe[i][0]){
      	findVar.push(this.observe[i][1],i);
      }
    }
    newVar = findVar.toString() += change;
    alert(newVar)
  }
}

Oden.$("count",1)
Oden.$set("count","+10");

/* function App(){
  return [count]; 
}
Oden.createListener(App);
 */
