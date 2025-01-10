<script>
  import Navbar from "./components/Navbar.svelte";

  let canvas;
  let ctx;

  let isDrawing = false;
  let isErasing = $state(false);
  let lastX = 0;
  let lastY = 0;
  let pointer_size = $state(15);
  let count = $state(3);
  import { onMount } from "svelte";

  onMount(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    intializeColorBoard();
  });

  function startDrawing(event) {
    ctx.lineWidth = pointer_size;
    isDrawing = true;
    [lastX, lastY] = getMousePosition(event);
  }

  function stopDrawing() {
    isDrawing = false;
  }

  function draw(event) {
    if (!isDrawing) return;

    const [x, y] = getMousePosition(event);

    if (isErasing) {
      ctx.strokeStyle = "white";
      ctx.lineWidth = 50;
    }

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    [lastX, lastY] = [x, y];
  }

  function getMousePosition(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return [x, y];
  }

  function toggleEraser() {
    isErasing = !isErasing;
    canvas.style.cursor = isErasing ? "crosshair" : "default";
  }

  function increasePointer() {
    pointer_size += 5;
    count += 1;
    if (count > 5) {
      count -= 1;
      pointer_size = 25;
    }
  }

  function decreasePointer() {
    pointer_size -= 5;
    count -= 1;
    if (count < 1) {
      count += 1;
      pointer_size = 5;
    }
  }

  function intializeColorBoard() {
    let colorChangeButtons =
      document.getElementsByClassName("changeColorButton");
    for (let i = 0; i < colorChangeButtons.length; i++) {
      let bgCol = colorChangeButtons[i].getAttribute("data-color");
      colorChangeButtons[i].style.backgroundColor = bgCol;
    }
  }

  function changeColor(e) {
    console.log(e, e.target);
    ctx.strokeStyle = e.target.getAttribute("data-color");
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
</script>

<canvas
  bind:this={canvas}
  onmousedown={startDrawing}
  onmousemove={draw}
  onmouseup={stopDrawing}
  onmouseleave={stopDrawing}
></canvas>
<button class="eraser-btn" onclick={toggleEraser}>
  {isErasing ? "Switch to Draw" : "Switch to Erase"}
</button>
<div class="buttons">
  <button class="pointer_increase" onclick={increasePointer}> + </button>
  <button class="pointer_decrease" onclick={decreasePointer}> - </button>
</div>
<button class="clearCanvas-btn" onclick={clearCanvas}
  ><img src="/Dustbin.png" width="40vh" /></button
>
<main>
  <Navbar />
  {() => makeActive("draw")}
  <div class="counter">
    <p><b>{count}</b></p>
  </div>
  <div class="colorBoard">
    <button
      class="redStrokeButton changeColorButton"
      onclick={changeColor}
      data-color="red"
    ></button>
    <button
      class="blueStrokeButton changeColorButton"
      data-color="blue"
      onclick={changeColor}
    ></button>
    <button
      class="greenStrokeButton changeColorButton"
      data-color="green"
      onclick={changeColor}
    ></button>
    <button
      class="yellowtrokeButton changeColorButton"
      data-color="yellow"
      onclick={changeColor}
    ></button>
    <button
      class="pinkStrokeButton changeColorButton"
      data-color="pink"
      onclick={changeColor}
    ></button>
    <button
      class="whiteStrokeButton changeColorButton"
      data-color="white"
      onclick={changeColor}
    ></button>
    <button
      class="brownStrokeButton changeColorButton"
      data-color="brown"
      onclick={changeColor}
    ></button>
    <button
      class="blackStrokeButton changeColorButton"
      data-color="black"
      onclick={changeColor}
    ></button>
    <button
      class="orangeStrokeButton changeColorButton"
      data-color="orange"
      onclick={changeColor}
    ></button>
    <button
      class="purpleStrokeButton changeColorButton"
      data-color="purple"
      onclick={changeColor}
    ></button>
  </div>
</main>

<style>
  @font-face {
    font-family: jetbrains;
    src: url("/public/JetBrainsMono-Medium.ttf");
  }
  .changeColorButton {
    height: 100%;
    width: 2.2vh;
    border-radius: 0.5vh;
    border: none;
  }

  .changeColorButton:hover {
    border: 0.05vh solid #b6b6b6;
    transform: scale(1.01);
  }

  .changeColorButton:active {
    background-color: #333;
    transform: scale(0.9);
  }

  .clearCanvas-btn {
    position: fixed;
    height: 3vh;
    width: 3vw;
    bottom: 15vh;
    right: 1.4vw;
    background-color: white;
    color: white;
    border: none;
  }

  .clearCanvas-btn:hover {
    transform: scale(1.05);
  }

  .clearCanvas-btn:active {
    transform: scale(0.9);
  }

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border: none;
    cursor: crosshair;
  }

  .colorBoard {
    position: fixed;
    bottom: 3vh;
    right: 23.7vw;
    padding: 1vw;
    background-color: #171718;
    color: white;
    height: 1rem;
    width: 11rem;
    border: none;
    border-radius: 0.8vw;
    cursor: pointer;
    transition:
      background-color 0.3s,
      transform 0.2s;
  }

  .buttons {
    position: fixed;
    z-index: 1001;
    bottom: 4vh;
    right: 40vh;
    height: 3.2vh;
    background-color: #171718;
  }

  .eraser-btn {
    position: fixed;
    bottom: 3vh;
    right: 1.4vw;
    padding: 2vh 1.4vw;
    background-color: #171718;
    color: white;
    font-size: 2.5vh;
    border: none;
    border-radius: 1.5vh;
    cursor: pointer;
    transition:
      background-color 0.3s,
      transform 0.2s;
  }

  .eraser-btn:hover {
    background-color: #545454;
    transform: scale(1.01);
  }

  .eraser-btn:active {
    background-color: #333;
    transform: scale(0.9);
  }

  .pointer_increase {
    z-index: 1001;
    position: fixed;
    bottom: 21px;
    right: 180px;
    padding: 5px 15px;
    background-color: #171718;
    color: white;
    font-size: 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition:
      background-color 0.3s,
      transform 0.2s;
  }

  .pointer_decrease {
    z-index: 1001;
    position: fixed;
    bottom: 21px;
    right: 275px;
    padding: 5px 15px;
    background-color: #171718;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition:
      background-color 0.3s,
      transform 0.2s;
  }

  .counter {
    z-index: 1000;
    font-family: jetbrains;
    position: fixed;
    bottom: 20px;
    right: 13.1vw;
    padding: 1px 64px;
    background-color: #171718;
    color: white;
    font-size: 8.5px;
    border: none;
    border-radius: 8px;
    height: 28px;
  }

  .pointer_increase:hover {
    background-color: #545454;
    transform: scale(1.05);
  }

  .pointer_increase:active {
    background-color: #333;
    transform: scale(0.9);
  }

  .pointer_decrease:hover {
    background-color: #545454;
    transform: scale(1.05);
  }

  .pointer_decrease:active {
    background-color: #333;
    transform: scale(0.9);
  }
</style>
