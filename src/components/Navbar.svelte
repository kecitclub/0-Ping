<script>
    function makeActive(id) {
    const elements = document.querySelectorAll('a'); // Select all <a> tags
    elements.forEach(element => {
      element.classList.remove('active'); // Remove active class from all links
    });

    const element = document.getElementById(id);
    element.classList.add('active');
}
</script>

<style>
    :root {
        --navbg: #171718;
        --shadow: #111111;
        --fontcol: #ededed;
        --bordercol: #494949;
        --hover: #50597e;
        --activetab: #5b6eba;
    }

    @font-face {
        font-family: jetbrains;
        src: url(/public/JetBrainsMono-Medium.ttf);
    }

    ul {
        list-style-type: none;
        background-color: var(--navbg);
        overflow: hidden;
        position: fixed;
        margin: 0;
        padding: 0;
        width: 100vw;
        box-shadow: 0 0 8px 8px var(--shadow);
        border: 1px solid var(--bordercol);
        border-radius: 6px;
    }

    li {
        float: left;
    }

    li a {
        font-family: jetbrains;
        display: block;
        text-decoration: none;
        padding: 1vh;
        text-align: center;
        color: var(--fontcol);
        border-radius: 6px;
        margin: 5px 5px 5px 5px;
    }

    li a:hover {
        background-color: var(--hover);
    }
    .active {
        background-color: var(--activetab);
    }
</style>

<main>
    <ul>
        <li><a id="md" on:click={() => makeActive('md')} href="#md" class=active>Markdown</a></li>
        <li><a id="draw" on:click={() => makeActive('draw')} href="#draw">Whiteboard</a></li>
        <li><a id="files" on:click={() => makeActive('files')} href="#files">Files</a></li>
    </ul>
</main>
