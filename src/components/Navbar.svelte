<script>
</script>

<style>
    :root {
        --bg: #202020;
        --shadow: #111111;
        --fontcol: #ededed;
        --bordercol: #494949;
        --hover: #545454;
    }

    @font-face {
        font-family: jetbrains;
        src: url(/public/JetBrainsMono-Medium.ttf);
    }

    ul {
        list-style-type: none;
        background-color: var(--bg);
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
        padding: 3vh;
        text-align: center;
        color: var(--fontcol);
        border-radius: 6px;
        margin: 5px 5px 5px 5px;
    }

    li a:hover {
        background-color: var(--hover);
    }
</style>

<main>
    <ul>
        <li><a href="#md">Markdown</a></li>
        <li><a href="draw">Whiteboard</a></li>
        <li><a href="files">Files</a></li>
    </ul>
</main>