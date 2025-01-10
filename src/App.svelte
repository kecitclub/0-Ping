<script>
  import Navbar from "./components/Navbar.svelte";
  import Chatbox from "./components/Chatbox.svelte";
  import MDeditor from "./components/MDeditor.svelte";
  import MDRender from "./components/MDrender.svelte";

  let mdText = "# Hello, Markdown!\n\nThis is a **bold** text and this is *italic*.\n\n- Item 1\n- Item 2\n";
  let statuss;
  let output;
</script>

<main>
  <Navbar />
  <div class="md">
    <div class="mdeditor">
      <MDeditor bind:mdText bind:statuss bind:output />
    </div>
    <div class="mdrender">
      <MDRender {mdText} />
    </div>
    <div class="chat">
      <Chatbox {output}/>
    </div>
  </div>
</main>

<style>
  .md {
    display: flex;
    gap: 0.5vw;
  }

  .chat {
    margin-top:10vh;
  }
</style>
