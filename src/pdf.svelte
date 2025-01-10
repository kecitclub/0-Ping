<script>
  import { onMount } from 'svelte';
  import Navbar from './components/Navbar.svelte';
  let file;
  let extractedText = '';
  let summary = '';
  let prefix = 'Summary the text from pdf written below: ';

  // Extract text from PDF using pdf.js
  async function extractTextFromPDF(pdfFile) {
    const pdfData = await pdfFile.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;

    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(' ');
      text += pageText + '\n';
    }
    return text;
  }

  import {callAPI} from './components/apiacess'
 
  async function handleSummarize() {
    if (!file) {
      alert('Please upload a PDF file first!');
      return;
    }

    extractedText = await extractTextFromPDF(file);
    summary = await callAPI(extractedText,prefix,'');
  }

  onMount(() => {
    // Load pdf.js
    if (!window.pdfjsLib) {
      const script = document.createElement('script');
      script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js';
      document.body.appendChild(script);
    }
  });
</script>

<main>
  <Navbar/>
  <input type="file" accept="application/pdf" on:change={(e) => (file = e.target.files[0])} />
  <button on:click={handleSummarize}>Summarize</button>
  <div id="output">
    <p>Summary:</p>
    <p>{summary}</p>
  </div>
</main>

<style>
  :root {
    --pdfbg: #211f23;
    --btntext: #dedede;
    --btncolor: #6482e6;
    --field: #202021;
    --fieldborder: #444445;
  }

  @font-face{
    font-family: firamono;
    src: url(/public/FiraMono-Regular.ttf)
  }

  main {
    font-family: firamono;
    padding: 4vh;
    max-width: 50vw;
    margin: 0 auto;
    margin-top: 5vw;
  }

  input,
  button {
    font-family: jetbrains;
    display: flex;
    margin-bottom: 2vh;
    flex-direction: column;
    outline: none;
    cursor: pointer;
    padding: 10px;
    background-color: var(--btncolor);
    color: var(--btntext);
    border: none;
    border-radius: 10px;
  }
  input:active,
  button:active {
    transform: scale(0.9);
  }

  #output {
    margin-top: 4vh;
    padding: 1vh;
    min-height: 50vh;
    color: var(--btntext);
    border: 1px solid var(--fieldborder);
    border-radius: 5px;
    background-color: var(--field);
  }
</style>
