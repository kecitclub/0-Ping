<script>
  import { afterUpdate } from "svelte";

  let status = "";
  let messages = [];
  let input = "";
  let typer = "";

  function scrollToBottom() {
    const messagesContainer = document.querySelector(".messages");
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  async function sendMessage() {
    if (input.trim()) {
      messages = [...messages, input];
      let message = input;
      input = "";
      typer = "";

      try {
        status = "Processing...";
        const reply = await callAPI(message);
        messages = [...messages, reply];
        status = "";
      } catch (err) {
        console.error("API Error:", err);
        status = "Error occurred.";
      }
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  async function handleKeyUp() {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      if (typer.trim()) {
        status = "Processing...";
        try {
          const output = await callAPI(typer);
          messages = [...messages, output];
          typer = "";
        } catch (err) {
          console.error("API Error:", err);
          status = "Error occurred.";
        }
        status = "";
      }
    }, 1000);
  }

  afterUpdate(() => {
    scrollToBottom();
  });

  import { callAPI } from "./apiacess.js";
</script>

<main>
  <div class="chatbox-container">
    <div class="chatbox">
      <div class="messages">
        {#each messages as message}
          <div class="message">{message}</div>
        {/each}
        {#if status}
          <div class="status">{status}</div>
        {/if}
      </div>
      <textarea
        class="message-input"
        bind:value={input}
        placeholder="Type a message..."
        on:keydown={handleKeyDown}
        on:keyup={handleKeyUp}
      ></textarea>
      <button class="send-button" on:click={sendMessage}>Send</button>
    </div>
  </div>
</main>

<style>
  :root {
    --msgboxbg: #161613;
    --msgboxborder: #484848;
    --txtboxbg: #28292c;
    --txtcol: #ededed;
    --sendbtn: #4c69de;
    --sendbtnhover: #54608e;
    --focusinput: #737c87;
  }

  @font-face {
    font-family: firamono;
    src: url(/public/FiraMono-Regular.ttf);
  }

  .chatbox-container {
    justify-content: center;
    align-items: center;
  }

  .chatbox {
    font-family:firamono;
    display: flex;
    flex-direction: column;
    width: 28vw;
    height: 48vh;
    background-color: var(--msgboxbg);
    border: 1px solid var(--msgboxborder);
    border-radius: 10px;
    padding: 1vw;
  }

  .messages {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 10px;
    padding: 5px;
    background-color: var(--txtboxbg);
    border: 1px solid var(--msgboxborder);
    border-radius: 10px;
  }

  .message-input {
    font-family: firamono;
    background-color: var(--txtboxbg);
    color: var(--txtcol);
    padding: 5px;
    height: 10vh;
    border: 1px solid var(--msgboxborder);
    border-radius: 10px;
    resize: none;
    margin-bottom: 10px;
  }

  .message-input:focus {
    outline: none;
    border-color: var(--focusinput);
  }

  .send-button {
    font-family: firamono;
    padding: 10px;
    border: none;
    background-color: var(--sendbtn);
    color: var(--txtcol);
    border-radius: 10px;
    cursor: pointer;
  }

  .send-button:hover {
    background-color: var(--sendbtnhover);
  }

  .message {
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
    color: var(--txtcol);
    font-size: small;
  }
</style>
