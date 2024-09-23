<script>
  import tt from './elements/tt.json';
  import Header from './elements/Header.svelte';
  import Footer from './elements/Footer.svelte';
  let dateString;
  let offset = 0;
  const millisecondsInDay = 8.64e+7
  let date = new Date(Date.now() + offset * millisecondsInDay)
  let texts = ['busky bime','you wasted electricity for me to tell you it\'s wednesday','duhh','hmm it\'s wednesday i wonder what TT it is','bro it\'s wednesday', 'erhm ackhcually','💀💀💀']
  function random(max){return Math.floor(Math.random() * max);}
  let ttt = random(7);
  let oldday=date.getDate()
  let oldmonth = date.getMonth()+1;
  let dsus;
  let oldyear="2023"
  let textActive = texts[ttt]; 
  function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }
  function getDayName(){
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let d = new Date();
    let day = weekday[d.getDay()];  
    return day;     
  }
  dsus=getDayName();
  function offsetR(){oldday+=1;dateString=getDate();dsus=getDayName("en-US");
    if(oldday > daysInMonth(oldmonth,2023)){
      oldday = 1
      oldmonth++;
      dateString=getDate();
    }
    if(oldday < 1){
      oldday = daysInMonth(oldmonth-1,2023)
      oldmonth--;
      dateString=getDate();
    }
  }
  function offsetL(){oldday-=1;dateString=getDate();dsus=getDayName("en-US");
    if(oldday > daysInMonth(oldmonth,2023)){
      oldday = 1
      oldmonth++;
      dateString=getDate();
    }
    if(oldday < 1){
      oldday = daysInMonth(oldmonth-1,2023)
      oldmonth--;
      dateString=getDate();
    }
  }
  function getDate() {
    if(oldmonth == 0||oldmonth == 1||oldmonth == 2||oldmonth == 3||oldmonth == 4||oldmonth == 5){oldyear="2024"}
    return oldmonth + '/' + oldday
  }
  dateString = getDate()
  let ogdatefrfrfr = dateString;
  var arrayDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dd= new Date();
  let held = dd.getDay();
  let mobile = false;
  if(window.innerWidth < window.innerHeight){
    mobile = true;
  }
	let time = new Date();
  $: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();
  let blocks = [ [{h:9,m:30},{h:10,m:53}], [{h:10,m:53},{h:11,m:36}], [{h:11,m:36},{h:13,m:36}],[{h:13,m:36},{h:14,m:57}],[{h:14,m:57},{h:16,m:18}]] 
  import { onMount } from 'svelte';
  let bloorkfr = "";
  let inaccord = 0;
	onMount(() => {
		const interval = setInterval(() => {
      dsus=getDayName();
      time = new Date();
      /* ALL BLORK 1 INSTANCES */
      if(tt[dateString].day == "B"){inaccord = 4}
      if(hours == blocks[0][0].h&&minutes>=blocks[0][0].m){ bloorkfr = "Block "+(1+inaccord)+", until 10:53"}
      if(hours == blocks[0][1].h&&minutes<=blocks[0][1].m){ bloorkfr = "Block "+(1+inaccord)+", until 10:53"}
      /* ALL BLORK TT INSTANCES */
      if(hours == blocks[1][0].h&&minutes>=blocks[1][0].m){ bloorkfr = "Block TT, until 11:36"}
      if(hours == blocks[1][1].h&&minutes<=blocks[1][1].m){ bloorkfr = "Block TT, until 11:36"}
      /* ALL BLORK 2 INSTANCES */
      if(hours == blocks[2][0].h&&minutes>=blocks[2][0].m){ bloorkfr = "Block "+(2+inaccord)+", until 1:36"}
      if(hours == blocks[2][0].h+1){ bloorkfr = "Block "+2+inaccord+", until 1:36"}
      if(hours == blocks[2][1].h&&minutes<=blocks[2][1].m){ bloorkfr = "Block "+(2+inaccord)+", until 1:36"}
      /* ALL BLORK 3 INSTANCES */
      if(hours == blocks[3][0].h&&minutes>=blocks[3][0].m){ bloorkfr = "Block "+(3+inaccord)+", until 2:57"}
      if(hours == blocks[3][1].h&&minutes<=blocks[3][1].m){ bloorkfr = "Block "+(3+inaccord)+", until 2:57"}
      /* ALL BLORK 4 INSTANCES */
      if(hours == blocks[4][0].h&&minutes>=blocks[4][0].m){ bloorkfr = "Block "+(4+inaccord)+", until 4:18"}
      if(hours == blocks[4][0].h+1){ bloorkfr = "Block "+(4+inaccord)+", until 4:18"}
      if(hours == blocks[4][1].h&&minutes<=blocks[4][1].m){ bloorkfr = "Block "+(4+inaccord)+", until 4:18"}
      /* OUTSIDESCHOOL INSTANCES */
      if(hours <= blocks[0][0].h && minutes<=blocks[0][0].m){bloorkfr = "Schools Not Started Yet"}
      if(hours >= blocks[4][1].h && minutes>=blocks[4][1].m){bloorkfr = "Schools Out Dingus"}
      
    }, 1000);
		return () => {
			clearInterval(interval);
		}; 
	});

  // For the Calender
  let months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December']
  let monthNum = [31,28,31,30,31,30,31,31,30,31,30,31]
  let active = false;
  let dateCAL = new Date();
  let day = dateCAL.getDate();
  let month = dateCAL.getMonth();
  let year = dateCAL.getFullYear();
  function toggle(){
    if(active){active = false;}
    else{active = true;}
  }
  function prev(){month --; if(month < 0){year --; month = 11}}
  function post(){month ++; if(month > 11){year ++; month = 0}}
  function select(input){
    dsus=getDayName();
    day = input;
    dateString = compileTT();
  }
  function compileTT(){
    dsus=getDayName();
    oldmonth=month+1;
    oldday =day;
    if(oldmonth == 0||oldmonth == 1||oldmonth == 2||oldmonth == 3||oldmonth == 4||oldmonth == 5){oldyear="2024"}
    return (month+1)+'/'+day
  }
</script>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<style>
  .box{
    width:0.1px;
    height:70px;
    opacity:0.01;
  }
  :global(body){
    background-color: #9db6f8;
    margin:0;
    font-family: serif!important;
  }
  .boing{
    text-align: center;
    margin-top: 50px;
  }
  lg{font-size:80px;}
  m{font-size:large;}
  advise{font-size: 70px;}
  mobile{font-size: 50px;}
  buffoonDesktop{font-size: 70px;}
  #changeday {
    border-radius: 5px;
    height: 3rem;
    width: 3rem;
    background-color: var(--lighter-main);
    box-shadow: 0rem 0.3rem ;
    color: var(--main);
    font-size: 1.5rem;
    align-self: flex-start;
    margin: 100px;
  }
  #changedaymobile {
    height: 3rem;
    width: 3rem;
    background-color: var(--lighter-main);
    box-shadow: 0rem 0.3rem;
    color: var(--main);
    font-size: 1.5rem;
  }
  main{    
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
  }
</style>
<Header/>
<main>
  {#if !mobile}<button id="changeday" on:click={offsetL}>&lt</button>{/if}
  <div class="boing">
    {#if tt[dateString] != undefined}
      <br/>
      {dateString}<br/><em>Today is {dsus}</em><br/><br/>
      {#if mobile}
        <button id="changedaymobile" on:click={offsetL}>&lt</button>
        <button id="changedaymobile" on:click={offsetR}>&gt</button><br/><br/>
      {/if}
      TODAY IS
      {#if tt[dateString].day == "B"}
          A
        {:else}
          AN
      {/if}<br/>
      <lg><b>{tt[dateString].day}</b><br/></lg>
      DAY<br/>
      AND IT'S TUSKY TIME<br/>
      {#if tt[dateString].TT == "Advisory"}
        <advise><b>{tt[dateString].TT}</b></advise><br/>
        <b><m>{textActive}</m></b>
        {:else}
        <lg><b>{tt[dateString].TT}</b></lg><br/>
      {/if}
      {#if dateString == ogdatefrfrfr}<br/>{bloorkfr}{/if}<br/>
      <!-- CALENDER -->
      <div class="custom-date">
        <div class="dates" class:active={active}>
          <div class="month">
            <div class="arrows prev" on:click={prev}>&lt;</div>
            <div class="mth">{months[month]+ ' ' + year}</div>
            <div class="arrows next" on:click={post}>&gt;</div>
          </div>
          <div class="days">
            {#each Array(monthNum[month]) as _, i}
                {#if day <= 9}
                  <div class="day {year+"-"+(month+1)+"-0"+(i+1) == dateString ? 'daySelect' : ''}" on:click={() => select(i+1)}>{(i+1).toString()}</div>
                  {:else}
                  <div class="day {year+"-"+(month+1)+"-"+(i+1) == dateString ? 'daySelect' : ''}" on:click={() => select(i+1)}>{(i+1).toString()}</div>
                {/if}
            {/each}
          </div>
        </div>  
        <div class="selected"  on:click={toggle}>
          &nbsp;<i class="fa fa-calendar" style="font-size:20px"></i>&nbsp;{dateString.replace(/-/g,'/')}<span></span>
        </div>  
      </div>
      {:else}
      {dateString}<br/><em>Today is {dsus}</em>
      <br/>
      {#if mobile}
        <button id="changedaymobile" on:click={offsetL}>&lt</button>
        <button id="changedaymobile" on:click={offsetR}>&gt</button><br/><br/>
      {/if}
      <buffoonDesktop><b>There is no school buffoon</b></buffoonDesktop><br/>
      <img src="https://ironon.github.io/static/media/baboon.b4aa7231a1f98ba4fd1e.jpg" width="400px" alt="you buffoon"/><br/>
      <m>(You rn)</m>
    {/if}
  </div>
  {#if !mobile}<button id="changeday" on:click={offsetR}>&gt</button>{/if}
</main>
  <div class="box"></div>
<Footer mobile={mobile}/>
