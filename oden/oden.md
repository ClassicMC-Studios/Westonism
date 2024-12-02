### Oden

> A Lightweight Javascript framework to __get stuff done__.


### The Basics

A simple counter app.

```html
<div id="app"></div>
<script>
  Oden.$("count",0); // let count = 1;

  function increment(){
    Oden.$math("count","+1"); // count++;
  }
  Oden.createListener(()=>{
    // The Oden.$get() function returns the value of count
    return `
      <h1>${Oden.$get("count")}</h1> 
      <button onclick="increment()">+</button>
    `;
  },"app")
</script>
```

For loop over an array

```js
Oden.$("arr", ["a","b","c","d"]) // let arr = ["a","b","c","d"];
Oden.createListener(()=>{
  return `
    <ol>
      ${Oden.for("arr","<li>{{arr}}</li>")}
    </ol>
  `; 
},"app")
```

The for loop takes 2 arguments

1. The array to loop
2. What to template

Inside the template you can refrence {{arrayName}} to get item,<br/>
and {{$i}} for the index of the item in the array.

To bind a variable

```html
<input id="b"/>
<div id="app"></div>
<script>
  Oden.$("val","");
  Oden.$bind("val","b");
  Oden.createListener(()=>{
    return Oden.$get("val");
  },"app")
</script>
```