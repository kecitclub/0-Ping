<script>
  let messages = []; // Array to hold chat messages
  let input = ""; // Variable to bind the input field
  // Function to handle sending a message
  function sendMessage() {
    if (input.trim()) {
      messages = [...messages, input]; // Add the message to the list
      input = ""; // Clear the input after sending
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      // Prevent the default behavior (creating a new line)
      event.preventDefault();
      sendMessage(); // Send the message when Enter is pressed
    }
  }
</script>

<main>
  <div class="chatbox-container">
    <div class="chatbox">
      <div class="messages">
        {#each messages as message}
          <div class="message">{message}</div>
        {/each}
      </div>
      <textarea
        class="message-input"
        bind:value={input}
        placeholder="Type a message..."
        on:keydown={handleKeyDown}
      ></textarea>
      <button class="send-button" on:click={sendMessage}>Send</button>
    </div>
  </div>
</main>

<style>
  .chatbox-container {
    justify-content: center;
    align-items: center;
  }

  .chatbox {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    background-color: #f1f1f1;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
  }

  .messages {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 10px;
    padding: 5px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    max-height: 250px;
  }

  .message-input {
    width: 93%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    resize: none;
    margin-bottom: 10px;
  }

  .send-button {
    padding: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .send-button:hover {
    background-color: #0056b3;
  }

  .message {
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: #e0e0e0;
  }
</style>
