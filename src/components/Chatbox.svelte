<script>
  let typer = "";
  let status = "";
  let timer;
  const timeoutVal = 1000;
  let output = "";

  let messages = [];
  let input = "";

  function sendMessage() {
    if (input.trim()) {
      messages = [...messages, input];
      input = "";
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  import { callAPI } from "./apiacess.js";
  async function handleKeyUp() {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      status = "Processing...";
      output = "";
      output = await callAPI(typer);
      messages = [...messages, output];
      status = "";
    }, timeoutVal);
  }

  function KeyDown() {
    clearTimeout(timer);
    status = "Typing...";
    output = "";
  }
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
        bind:value={typer}
        placeholder="Type a message..."
        on:keydown={handleKeyDown}
        on:keydown={KeyDown}
        on:keyup={handleKeyUp}
      ></textarea>
      <button class="send-button" on:click={sendMessage}>Send</button>
    </div>
  </div>
</main>

<style>
  :root {
    --msgboxbg: #161613;
    --msgboxborder: #36373f;
    --txtboxbg: #28292c;
    --txtcol: #ededed;
    --sendbtn: #4c69de;
    --sendbtnhover: #54608e;
  }
  .chatbox-container {
    justify-content: center;
    align-items: center;
  }

  .chatbox {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    background-color: var(--msgboxbg);
    border: 1px solid var(--msgboxborder);
    border-radius: 10px;
    padding: 10px;
  }

  .messages {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 10px;
    padding: 5px;
    background-color: var(--txtboxbg);
    border: 1px solid var(--msgboxborder);
    border-radius: 10px;
    max-height: 150px;
  }

  .message-input {
    background-color: var(--txtboxbg);
    color: var(--txtcol);
    padding: 5px;
    border: 1px solid var(--msgboxborder);
    border-radius: 10px;
    resize: none;
    margin-bottom: 10px;
  }

  .send-button {
    padding: 10px;
    border: none;
    background-color: var(--sendbtn);
    color: white;
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
