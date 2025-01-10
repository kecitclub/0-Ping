<script>
    let showDropdown = false;
  
    // Toggle dropdown visibility
    function toggleDropdown(event) {
      event.preventDefault(); // Prevent the default behavior (link navigation)
      event.stopPropagation(); // Prevent event from bubbling up to the body click handler
      showDropdown = !showDropdown;
    }
  
    // Close dropdown when clicking anywhere outside the navbar
    function closeDropdown() {
      showDropdown = false;
    }
  </script>
  
  <nav on:click={closeDropdown}>
    <ul>
        <li><a id="md" on:click={() => makeActive('md')} href="/app.html" class=active>Markdown</a></li>
        <li><a id="draw" on:click={() => makeActive('draw')} href="/draw.html">Whiteboard</a></li>
      <li class="dropdown">
        <a href="#" on:click|stopPropagation={toggleDropdown}>
          About Us
          <!-- Downward-facing arrow (caret) -->
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
    nav {
      background-color: #171718;
      padding: 10px 20px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      position: fixed; /* Fixed positioning to stay at the top */
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000; /* Ensures navbar and dropdown appear above other content */
    }
  
    ul {
      list-style-type: none;
      display: flex;
      margin: 0;
      padding: 0;
      gap: 10px;
    }
  
    li a {
      text-decoration: none;
      color: #ededed;
      padding: 8px 12px;
      border-radius: 4px;
      display: flex;
      align-items: center;
    }
  
    li a:hover {
      background-color: #545454;
    }
  
    /* Dropdown container */
    .dropdown {
      position: relative; /* Make dropdown relative to this parent */
    }
  
    /* Dropdown menu positioning */
    .dropdown-menu {
      display: none;
      position: absolute;
      top: 100%; /* Dropdown appears below the About Us link */
      left: 0; /* Align to the left of the parent element */
      background-color: #171718;
      border: 1px solid #494949;
      border-radius: 6px;
      z-index: 1100; /* Ensures dropdown appears above content */
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      padding: 10px;
      min-width: 200px; /* Ensure dropdown has enough width */
    }
  
    /* Show dropdown when toggled */
    .dropdown-menu.show {
      display: block;
    }
  
    /* Style for dropdown links */
    .dropdown-menu li a {
      display: block;
      padding: 8px 12px;
      white-space: nowrap;
    }
  
    .dropdown-menu li a:hover {
      background-color: #545454;
    }
  
    /* Style for the caret (arrow) */
    .caret {
      margin-left: 8px;
      font-size: 12px;
    }
  </style>
  