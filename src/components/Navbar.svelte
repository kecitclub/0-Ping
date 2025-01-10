<script>
    let showDropdown = false;
  
    // Toggle dropdown visibility
    function toggleDropdown(event) {
      event.preventDefault();
      event.stopPropagation();
      showDropdown = !showDropdown;
    }

    function closeDropdown() {
      showDropdown = false;
    }
  </script>
  
  <nav>
    <ul>
      <li><a id="md" on:click={() => makeActive('md')} href="/app.html" class=active><img alt="" src="/public/write.png" width=35></a></li>
      <li><a id="draw" on:click={() => makeActive('draw')} href="/draw.html"><img alt="" src="/public/whiteboard.png" width=35></a></li>
      <li><a id="pdfsum" on:click={() => makeActive('pdfsum')} href="/pdf.html"><img alt="" src="/public/pdf.png" width=30></a></li>
      <li class="dropdown">
        <a href="#abc" on:click|stopPropagation={toggleDropdown}>
          <img alt="" src="/public/contacts.png" width=35>
        </a>
        <ul class="dropdown-menu {showDropdown ? 'show' : ''}">
          <li><a href="#contact">Contact No: 9000000000</a></li>
          <li><a href="mailto:abc@gmail.com">Email: abc@gmail.com</a></li>
          <li><a href="#address">Address: Mars</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  
  <style>
    :root {
      --bg: #211f23;
      --text: #dedede;
      --bgseconday: #2e2d2f;
      --bgtertiary: #444445;
    }

    @font-face {
        font-family: jetbrains;
        src: url(/public/JetBrainsMono-Medium.ttf);
    }

    img {
      margin-right: 2vw;
    }

    img:active {
      transform: scale(0.9);
    }

    nav {
      background-color: var(--bg);
      padding: 1vh;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 1000;
      border-bottom: 1px solid var(--bgtertiary);
    }
  
    ul {
        font-family: jetbrains;
        list-style-type: none;
        display: flex;
        margin: 0;
        padding: 0;
        gap: 10px;
    }
  
    li a {
      text-decoration: none;
      color: var(--text);
      padding: 0;
      border-radius: 4px;
      display: flex;
      align-items: center;
    }
  
    li a:hover {
      background-color: var(--hover);
    }  
    .dropdown {
      position: relative;
    }
  
    .dropdown-menu {
      display: none;
      position: absolute;
      top: 7vh;
      left: 0;
      background-color: var(--bg);
      border: 1px solid var(--bgtertiary);
      border-radius: 6px;
      z-index: 1100;
      padding: 1vh;
      min-width: 200px;
    }

    .dropdown-menu.show {
      display: block;
    }

    .dropdown-menu li a {
      display: block;
      padding: 8px 12px;
      white-space: nowrap;
    }
  
    .dropdown-menu li a:hover {
      background-color: #545454;
    }
</style>