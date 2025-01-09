<script>
  import Navbar from "./components/Navbar.svelte";
  import Chatbox from "./components/Chatbox.svelte";
  import MDeditor from "./components/MDeditor.svelte"
  import MDRender from "./components/MDrender.svelte"
</script>

<main>
  <Navbar />
  <div class="md">
    <div class="mdeditor">
        <MDeditor />
    </div>
    <div class="mdrender">
        <MDRender />
    </div>
    <div class="chat">
        <Chatbox />
    </div>
  </div>
</main>

<style>
    .md {
        display: flex;
        gap: .5vw;
    }

    .chat {
        margin-top: 61vh;
    }
</style>

