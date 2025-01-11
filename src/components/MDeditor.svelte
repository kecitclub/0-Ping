<script>
  export let mdText = "# Hello, Markdown!\n\nThis is a **bold** text and this is *italic*.\n\n- Item 1\n- Item 2\n";
  export let statuss = '';
  let timer;
  let prefix="Do not use conversational tone, keep it within 25 words, do not use heavy words, just give additionals notes about the stuff I am writing";
  const timeoutVal = 4000; // 5 seconds timeout
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
    --mdbg: #212023;
    --mdtext: #ededed;
    --mdborder: #353536;
    --editorfocus: #595960;
  }
  textarea {
      background-color: var(--mdbg);
      color: var(--mdtext);
      width: 30vw;
      height: 85vh;
      margin-top: 10vh;
      font-family: firamono;
      font-size: 16px;
      padding: 10px;
      border: 1px solid var(--mdborder);
      border-radius: 10px;
      margin-bottom: 20px;
  }

  textarea:focus {  
    outline: none;
    border-color: var(--editorfocus);
  }

  @font-face {
      font-family: firamono;
      src: url(/public/FiraMono-Regular.ttf);
  }
</style>

<main>
    <textarea bind:value={mdText}
    placeholder="Write Markdown here..."
    on:keyup="{handleKeyUp}"
    on:keydown="{handleKeyDown}"
        
    ></textarea>
</main>