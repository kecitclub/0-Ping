<style>
    *{
        box-sizing: border-box;
    }
    main {
        font-family: Arial, sans-serif;
        background-color: #090909;
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
        color: #ededed;
        font-size: 10vh;
        margin-bottom: 100px;
        text-align: center;
    }
    .login-container input[type="text"],
    .login-container input[type="password"] {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 0.5px solid #ccc;
        border-radius: 2px;
        text-align: center;
    }
    .login-container input::placeholder{
        text-align: center;
    }
    .logo {
        width: 20vw;
        margin-bottom: 20px;
    }
    .login-container {
        background-color: #000000;
        padding: 20px;
        border-radius: 6px;
        width: 300px;
        max-width: 300px; 
    }
    .login-container button {
        width: 100%;
        padding: 10px;
        background-color: #727272;
        color: white;
        border: none;
        border-radius: 2.5px;
        cursor: pointer;
    }
    .login-container button:hover {
        background-color: #545454;
    }
</style>
<main>
    <div class="container">
    <div class="name">NEODESK</div>
    <img src="./trans_bg.png" alt="Logo" class="logo">
    <div class="login-container">
    <form action="/login.html" method="post">
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
      </div>
    </div>
</main>
