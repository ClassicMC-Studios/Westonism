function tokenize(input) { 
const tokens = [];
const patterns = [
    { regex: /^let/, type: "LET" },
    { regex: /^[a-zA-Z_][a-zA-Z0-9_]*/, type: "TEXT" },
    { regex: /^;/, type: "ENDING" },
    { regex: /^=/, type: "EQUALS" },
    { regex: /^"(.*?)"|^'(.*?)'/, type: "STRING" }, // Match anything in single or double quotes
    { regex: /^[0-9]+/, type: "NUMBER" },
    { regex: /^<script>/, type: "SCRIPT" },
    { regex: /^<\/script>/, type: "SCRIPT_END" },
    { regex: /^<h1>/, type: "H1" },
    { regex: /^<\/h1>/, type: "H1_END" },
    { regex: /^{{(.*?)}}/, type: "REACTIVE_EXPRESSION" },
    { regex: /^\p{P}/u, type: "PUNC"},
];

while (input.length > 0) {
    let match = false;

    for (const { regex, type } of patterns) {
        const result = regex.exec(input);
        if (result) {
            tokens.push({ value: result[0], type });
            input = input.slice(result[0].length).trim();
            match = true;
            break;
        }
    }

    if (!match) {
        throw new Error("Unexpected token: " + input[0]);
    }
}

return tokens;
    }
let i = `<h1>Count:{{count}}</h1><script>let count = 0;</script>`
let tokend = tokenize(i);
let finalHTML = ""
let addVar = false;
let varToAdd = "";
let varValue;
// console.log(tokend)
for(let i=0;i<tokend.length;i++){
  if(tokend[i].type == "SCRIPT"){
    finalHTML+="<script>\n"
  }
  if(tokend[i].type == "SCRIPT_END"){
    finalHTML+="</script>\n"
  }
  if(tokend[i].type == "H1"){
    finalHTML+="<h1>"
  }
  if(tokend[i].type == "STRING" && addVar){
    finalHTML+=tokend[i].value
    varValue = tokend[i].value
  }
  if(tokend[i].type == "TEXT" && !addVar){
    finalHTML+=`${tokend[i].value}`
  }
  if(tokend[i].type == "PUNC" && !addVar){
    finalHTML+=`${tokend[i].value}`
  }
  if(tokend[i].type == "REACTIVE_EXPRESSION"){
    finalHTML+=`<span id="${tokend[i].value.replace("{{","").replace("}}","")}"></span>`
  }
  if(tokend[i].type == "H1_END"){
    finalHTML+="</h1>"
  }  
  if(tokend[i].type == "LET"){
    finalHTML+="let "
    addVar = true;
  }
  if(tokend[i].type == "TEXT" && addVar){
    varToAdd = tokend[i].value
    finalHTML+=tokend[i].value
  }
  if(tokend[i].type == "EQUALS" && addVar){
    finalHTML+=" = "
  }
  if(tokend[i].type == "NUMBER" && addVar){
    varValue = tokend[i].value
    finalHTML+=tokend[i].value
  }
  if(tokend[i].type == "ENDING" && addVar){
    finalHTML+=`;\ndocument.getElementById("${varToAdd}").innerText = ${varValue};\n`;
    addVar = false;
  }
  // console.log(finalHTML)
}
console.log(finalHTML)
