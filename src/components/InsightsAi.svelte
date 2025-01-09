<script>
  let typer = ''; // Bound to the input field
  let status = ''; // Status message ("Typing...", etc.)
  let timer;
  const timeoutVal = 5000; // 5 seconds timeout
  let output = ''; // Output response

  import {callAPI} from './apiacess.js';
  async function handleKeyUp() {
    clearTimeout(timer);
    timer = setTimeout(async() => {
      status = '';
      output=await callAPI(typer,output);
    }, timeoutVal);
  }

  function handleKeyDown() {
    clearTimeout(timer);
    status = 'Reading...';
    output = ''; // Clear output while typing
  }
</script>

<style>
   @font-face {
        font-family: jetbrains;
        src: url(/public/JetBrainsMono-Medium.ttf);
    }
  input {
    text-align: center;
    width: 50vw;
    height: 20vw;
    margin-top: 100px;
    margin-left: 5vw;
    background-color: #202020;
    color: cadetblue;
    border-radius: 10px;
    font-size: 15px;
    font-family: jetbrains;
  }
  #outputbox{
    justify-content: center;
    margin-top: 10%;
    margin-right:2%;
    align-items: right;
    float: right;
    width: 15%;
    height: 21vw;
    background-color:#202020 ;
    border-radius: 10px;
  }
  #output {
    padding: 5%;
    white-space: pre-wrap;
    margin-top: 20px;
    font-family: jetbrains;
    color: #FFFFFF;
    container-name: sidebar;
  }

  #status {
    padding: 2%;
    text-align: center;
    margin-top: 10px;
    font-size: 15px;
    font-family: jetbrains;
    color: #ffffff;
  }
</style>

<main>
  <input
    type="text"
    bind:value="{typer}"
    placeholder="Markdown Placeholder.."
    on:keydown="{handleKeyDown}"
    on:keyup="{handleKeyUp}"
  />
  
  <div id="outputbox">
    <div id="status">{status}</div>
    <div id="output">{output}</div>
  </div>
  
</main>
