<script>
    export let mdText = "# Hello, Markdown!\n\nThis is a **bold** text and this is *italic*.\n\n- Item 1\n- Item 2\n";
  let status = ''; // Status message ("Typing...", etc.)
  let timer;
  const timeoutVal = 5000; // 5 seconds timeout
  let output = ''; // Output response

  import {callAPI} from './apiacess.js';
  async function handleKeyUp() {
    clearTimeout(timer);
    timer = setTimeout(async() => {
      status = '';
      output=await callAPI(mdText,output);
    }, timeoutVal);
  }

  function handleKeyDown() {
    clearTimeout(timer);
    status = 'Reading...';
    output = ''; // Clear output while typing
  }
</script>

<style>
    :root {
        --mdeditbg: #141417;
        --textcol: #ededed;
        --editorborder: #393f45;
    }
    textarea {
        background-color: var(--mdeditbg);
        color: var(--textcol);
        width: 30vw;
        height: 85vh;
        margin-top: 10vh;
        font-family: monospace;
        font-size: 14px;
        padding: 10px;
        border: 1px solid var(--editorborder);
        border-radius: 10px;
        margin-bottom: 20px;
    }
    @font-face {
        font-family: jetbrains;
        src: url(/public/JetBrainsMono-Medium.ttf);
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
    <textarea bind:value={mdText}
    placeholder="Write Markdown here..."
    on:keyup="{handleKeyUp}"
    on:keydown="{handleKeyDown}"
        
    ></textarea>
    <div id="outputbox">
        <div id="status">{status}</div>
        <div id="output">{output}</div>
      </div>
</main>