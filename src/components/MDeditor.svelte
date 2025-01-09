<script>
    export let mdText = "# Hello, Markdown!\n\nThis is a **bold** text and this is *italic*.\n\n- Item 1\n- Item 2\n";
</script>

<style>
    :root {
        --mdeditbg: #141417;
        --textcol: #ededed;
        --editorborder: #393f45;
    }
    textarea {
        background-color: var(--mdeditbg);
        color: var(--textcol);
        width: 30vw;
        height: 85vh;
        margin-top: 10vh;
        font-family: monospace;
        font-size: 14px;
        padding: 10px;
        border: 1px solid var(--editorborder);
        border-radius: 10px;
        margin-bottom: 20px;
    }
</style>

<main>
    <textarea bind:value={mdText} placeholder="Write Markdown here..."></textarea>
</main>