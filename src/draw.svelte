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
<div class="pointer-controls">
  <button class="pointer_increase" onclick={increasePointer}> + </button>
  <div class="counter">
    <p><b>{count}</b></p>
  </div>
  <button class="pointer_decrease" onclick={decreasePointer}> - </button>
</div>
<button class="clearCanvas-btn" onclick={clearCanvas}
  ><img src="/Dustbin.png" width="40vh" /></button
>
<main>
  <Navbar />
  {() => makeActive("draw")}
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
  height: 2rem;
  width: 2rem; 
  border-radius: 50%; 
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, border 0.2s ease;
}

.changeColorButton:hover {
  border: 0.1rem solid #b6b6b6;
  transform: scale(1.1); 
}

.changeColorButton:active {
  transform: scale(0.9); 
  background-color: #333;
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
  right: 30vw;
  padding: 1vw;
  background-color: #171718;
  color: white;
  height: auto; 
  width: 12rem; 
  border: none;
  border-radius: 0.8vw;
  display: flex;
  flex-wrap: wrap; 
  gap: 0.5rem; 
  justify-content: center; 
  align-items: center; 
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

  .pointer-controls {
  position: fixed;
  bottom: 3vh;
  right: 15vw; 
  display: flex;
  align-items: center;
  gap: 0.5rem; 
  background-color: #171718;
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  z-index: 1000;
}

  .pointer_increase,
.pointer_decrease {
  padding: 0.5rem 1rem;
  background-color: #171718;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

  .counter {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171718;
  color: white;
  font-size: 1rem;
  width: 3rem;
  height: 2rem;
  border-radius: 0.5rem;
  font-family: jetbrains;
  text-align: center;
}

.pointer_increase:hover,
.pointer_decrease:hover {
  background-color: #545454;
  transform: scale(1.05);
}
  .pointer_increase:active,
  .pointer_decrease:active {
  background-color: #333;
  transform: scale(0.9);
}
</style>
