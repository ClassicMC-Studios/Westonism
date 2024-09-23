<script>
  export let mobile;
</script>
<style>
  .foot{
      position:fixed;
      bottom:0;
      left:50%;
      transform:translate(-50%);
      margin:0;
      background-color:#9db6f8;
      width:100%;
      text-align:center;
      border:1px solid #6882d3;
  }
  p{
      color: #6882d3;
  }
  .boot{
      text-align: center;
      margin-left: 10px;
      margin-right: 10px;
  }
</style>
<main>
  <p class:foot={!mobile} class:boot={mobile}><em>Not affiliated with LCPS</em>, An Simpler Version of <a href="https://tuskytime.org">Tuskytime</a> by, Weston Schnee in <em>Svelte</em></p>
</main>
