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
  main {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 5vw;
  }

  input,
  button {
    margin: 10px 0;
    display: block;
  }

  #output {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
</style>
