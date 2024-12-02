const Oden = {
	createListener(func){
  	let vs = func();
  },
  $(Name,Value){
  	this.observe.push([Name, Value]);
    this.reListen()
  },
  observe:[],
  $get(Variable){
  	for(let i=0;i<this.observe.length;i++){
    	if(Variable == this.observe[i][0]){
      	return this.observe[i][1]
      }
    }
    this.reListen()
  },
  $math(Variable,Change){
  	let findVar = [];
    let newVar;
    for(let i=0;i<this.observe.length;i++){
    	if(Variable == this.observe[i][0]){
      	findVar.push(this.observe[i][1],i);
      }
    }
    oldValue = findVar[0].toString();
    oldValue = oldValue += Change;
    this.observe[findVar[1]][1] = eval(oldValue);
    this.reListen()
  },
  $set(Variable,Value){
    let findVar = [];
    for(let i=0;i<this.observe.length;i++){
    	if(Variable == this.observe[i][0]){
      	findVar.push(this.observe[i][1],i);
      }
    }
    this.observe[findVar[1]][1] = Value;
    this.reListen()
  },
  $splice(Array,Index){
    let findVar = [];
    for(let i=0;i<this.observe.length;i++){
    	if(Array == this.observe[i][0]){
      	findVar.push(this.observe[i][1],i);
      }
    }
    if(Index == 0){
      this.observe[findVar[1]][1].shift()
    }else{
      this.observe[findVar[1]][1].splice(Index,1);
    }
    this.reListen();
  },
  $push(Array,newValue){
    let findVar = [];
    for(let i=0;i<this.observe.length;i++){
    	if(Array == this.observe[i][0]){
      	findVar.push(this.observe[i][1],i);
      }
    }
    this.observe[findVar[1]][1].push(newValue);
    this.reListen();
  },
  $bind(Variable,Location){
    let findVar = [];
    for(let i=0;i<this.observe.length;i++){
    	if(Variable == this.observe[i][0]){
      	findVar.push(this.observe[i][1],i);
      }
    }
    let elem = document.getElementById(Location)
    elem.addEventListener('input',function(evt){
      setTimeout(()=>{
        Oden.observe[findVar[1]][1] = elem.value
      },0)
    });
  },
  savedFunc:[],
  createListener(Function,id){
    this.savedFunc.push([Function,id]);
    this.reListen()
  },
  reListen(){
    for(let i=0;i<this.savedFunc.length;i++){
      let v = this.savedFunc[i][0]()
      document.getElementById(this.savedFunc[i][1]).innerHTML = v
    }
  },
  for(Array,Template){
    let findVar;
    let newTemplate = "";
    for(let i=0;i<this.observe.length;i++){
    	if(Array == this.observe[i][0]){
      	findVar = this.observe[i][1]
      }
    }
    for(let i=0;i<findVar.length;i++){
      newTemplate = newTemplate += Template.replaceAll(`{{${Array}}}`,findVar[i]);
      newTemplate = newTemplate.replaceAll("{{$i}}",i)

    }
    return newTemplate;
  }
}