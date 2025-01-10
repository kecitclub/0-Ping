<style>
    :root {
        --bg: #19181a;
        --text: #feffff;
        --bgseconday: #2e2d2f;
        --bgtertiay: #444445;
        --loginbutton: #6482e6;
        --loginsecondary: #5f70aa;
        --textbox: #c9c9d7;
        --textfieldborder: #939399;
    }
    *{
        box-sizing: border-box;
    }
    @font-face{
        font-family: jetbrains;
        src: url('/public/JetBrainsMono-Medium.ttf');
    }
    main{
        background-color: var(--bg);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .name{
        color: var(--text);
        font-size: 10vh;
        margin-bottom: 10px;
        text-align: center;
        font-family:jetbrains;
    }
    .login-container input[type="text"],
    .login-container input[type="password"] {
        background-color: var(--textbox);
        width: 100%;
        padding: 1vw;
        margin-bottom: 2vh;
        border: 0.5px solid var(--bgseconday);
        border-radius: 10px;
        text-align: center;
        font-family: jetbrains;
    }
    .login-container input[type="text"]:focus,
    .login-container input[type="password"]:focus {
        outline: none;
        border: 1px solid; 
    }
    .login-container input::placeholder{
        text-align: center;
        font-family: jetbrains;
    }
    .logo {
        width: 12vw;
        margin-bottom: 3vh;
    }
    .login-container {
        background-color: var(--bgseconday);
        padding: 4vh;
        border-radius: 10px;
        width: 300px;
        max-width: 300px; 
    }
    .login-container button {
        font-family: jetbrains;
        width: 100%;
        padding: 10px;
        background-color: var(--loginbutton);
        color: var(--text);
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
    .login-container button:hover {
        background-color: var(--loginsecondary);
    }
</style>

<main>
    <div class="container">
    <div class="name">NEODESK</div>
    <img src="/trans_bg.png" alt="Logo" class="logo">
    <div class="login-container">
    <form action="app.html" method="post">
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
      </div>
    </div>
</main>
