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
        <li><a id="md" on:click={() => makeActive('md')} href="/app.html" class=active>Markdown</a></li>
        <li><a id="draw" on:click={() => makeActive('draw')} href="/draw.html">Whiteboard</a></li>
        <li><a id="pdfsum" on:click={() => makeActive('pdfsum')} href="/pdf.html">PDF Summarizer</a></li>
      <li class="dropdown">
        <a href="#abc" on:click|stopPropagation={toggleDropdown}>
          About Us
          <span class="caret">{showDropdown ? '▲' : '▼'}</span>
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
        --navbg: #131316;
        --fontcol: #ededed;
        --navborder: #393f45;
        --hover: #50597e;
        --activetab: #5b6eba;
    }

    @font-face {
        font-family: jetbrains;
        src: url(/public/JetBrainsMono-Medium.ttf);
    }
    nav {
      background-color: var(--navbg);
      padding: 1vh;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 1000;
      border: 1px solid var(--navborder);
      border-radius: 6px;
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
      color: var(--fontcol);
      padding: 1vh;
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
      background-color: var(--navbg);
      border: 1px solid var(--navborder);
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

    .caret {
      margin-left: 1vw;
      font-size: 12px;
    }
</style>