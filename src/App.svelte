<script>
  import Navbar from "./components/Navbar.svelte";
  import Chatbox from "./components/Chatbox.svelte";
  import MDeditor from "./components/MDeditor.svelte";
  import MDRender from "./components/MDrender.svelte";
  import Insights from "./components/InsightsAi.svelte";

  let mdText = "# Hello, Markdown!\n\nThis is a **bold** text and this is *italic*.\n\n- Item 1\n- Item 2\n";
</script>

<main>
  <Navbar />
  <div class="md">
    <div class="mdeditor">
      <MDeditor bind:mdText />
      <p>{mdText}</p>
    </div>
    <div class="mdrender">
      <MDRender {mdText} />
    </div>
    <div class="chat">
      <Chatbox />
    </div>
    <div class="insight">
      <Insights />
    </div>
  </div>
</main>

<style>
  .md {
    display: flex;
    gap: 0.5vw;
  }

  .chat {
    margin-top: 61vh;
  }
</style>
