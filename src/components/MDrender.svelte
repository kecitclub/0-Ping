<script>
    import { marked } from 'marked';
    export let mdText = "# Hello, Markdown!\n\nThis is a **bold** text and this is *italic*.\n\n- Item 1\n- Item 2\n";
    $: htmlContent = marked(mdText);
</script>

<style>
    @font-face {
        font-family: jetbrains;
        src: url(/public/JetBrainsMono-Medium.ttf);
    }
    @font-face {
        font-family: ibmplexsans;
        src: url(/public/IBMPlexSans-Regular.ttf);
    }
    :root {
        --mdrendbg: #222124;
        --mdrendtext: #ededed;
        --mdrendborder: #353536;
        --titlebg: #7a82aa;
        --titletext: #201f21;

    }
    .mdoutput {
        width: 35vw;
        height: 80vh;
        font-family: ibmplexsans;
        color: var(--mdrendtext);
        font-size: 16px;
        padding: 10px;
        background-color: var(--mdrendbg);
        border-radius: 10px;
        overflow-y: auto;
    }
    .renderer {
        border: 1px solid var(--mdrendborder);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10vh;
        background-color: var(--mdrendbg) ;
    }
    .titlebar {
        font-family: jetbrains;
        font-size: small;
        background-color: var(--titlebg);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
        font-weight: bold;
        color: var(--titletext);
        width: 37vw;
        padding: 5px;
    }
</style>

<main>
    <div class="renderer">
        <div class="titlebar">Preview</div>
        <div class="mdoutput">{@html htmlContent}</div>
    </div>
</main>