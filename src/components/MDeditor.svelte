<script>
  export let mdText = "# Hello, Markdown!\n\nThis is a **bold** text and this is *italic*.\n\n- Item 1\n- Item 2\n";
  export let statuss = ''; // Status message ("Typing...", etc.)
  let timer;
  let prefix="Do not use conversational tone, keep it within 25 words, do not use heavy words, just give additionals notes about the stuff I am writing";
  const timeoutVal = 5000; // 5 seconds timeout
  export let output = ''; // Output response

  import {callAPI} from './apiacess.js';
  async function handleKeyUp() {
    clearTimeout(timer);
    timer = setTimeout(async() => {
      statuss = '';
      output=await callAPI(mdText,prefix,output);
    }, timeoutVal);
  }

  function handleKeyDown() {
    clearTimeout(timer);
    statuss = 'Reading...';
    output = ''; // Clear output while typing
  }
</script>

<style>
  @font-face {
    font-family: firamono;
    src: url(/public/FiraMono-Regular.ttf);
  }

  :root {
      --mdeditbg: #141417;
      --textcol: #ededed;
      --editorborder: #393f45;
      --editorfocus: #676c74;
  }
  textarea {
      background-color: var(--mdeditbg);
      color: var(--textcol);
      width: 30vw;
      height: 85vh;
      margin-top: 10vh;
      font-family: firamono;
      font-size: 16px;
      padding: 10px;
      border: 1px solid var(--editorborder);
      border-radius: 10px;
      margin-bottom: 20px;
  }

  textarea:focus {  
    outline: none;
    border-color: var(--editorfocus);
  }

  @font-face {
      font-family: jetbrains;
      src: url(/public/JetBrainsMono-Medium.ttf);
  }
  #outputbox{
    justify-content: center;
    margin-top: 10vh;
    margin-right:2%;
    align-items: right;
    float: right;
    width: 20vw;
    height: 21vw;
    background-color:#202020 ;
    border-radius: 10px;
    overflow: scroll;
  }
  #output {
    padding: 5%;
    white-space: pre-wrap;
    margin-top: 20px;
    font-family: firamono;
    color: #FFFFFF;
    container-name: sidebar;
  }

  #statuss {
    padding: 2%;
    text-align: center;
    margin-top: 10px;
    font-size: 15px;
    font-family: firamono;
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
        <div id="statuss">{statuss}</div>
        <div id="output">{output}</div>
      </div>
</main>