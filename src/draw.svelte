<script>
  import Navbar from "./components/Navbar.svelte"

  let canvas;
  let ctx;
  
  let isDrawing = false;
  let isErasing = false;
  let lastX = 0;
  let lastY = 0;

  import { onMount } from "svelte";

  onMount(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
  });

  function startDrawing(event) {
    ctx.lineWidth = 10;
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
    } else {
      ctx.strokeStyle = "black";
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
</script>

<canvas
  bind:this={canvas}
  on:mousedown={startDrawing}
  on:mousemove={draw}
  on:mouseup={stopDrawing}
  on:mouseleave={stopDrawing}
/>

<button class="eraser-btn" on:click={toggleEraser}>
  {isErasing ? "Switch to Draw" : "Switch to Erase"}
</button>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border: none;
    cursor: crosshair;
  }

  .eraser-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #171718;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }

  .eraser-btn:hover {
    background-color: #545454;
    transform: scale(1.2);
  }

  .eraser-btn:active {
    background-color: #333;
    transform: scale(0.9);
  }
</style>
<main>
  <Navbar />
</main>
