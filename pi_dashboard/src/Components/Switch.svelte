<script>
  import { slide } from "svelte/transition";

  export let name = "";
  export let action;
  export let status = "down"; // "down | up | pending"

  $: status;

  async function execute() {
    if (action) {
    }
  }
</script>

<div class="container">
  <span>{name}</span>
  <div class="switch" on:click={execute}>
    <button class={status} />
  </div>
</div>

<style>
  .switch {
    display: block;
    height: 3vw;
    background: rgb(66, 66, 66);
    border-radius: 50vw;
  }

  .up {
    left: calc(100% - 3vw);
    background: radial-gradient(white, limegreen, yellowgreen);
  }

  .pending {
    background: rgba(255, 123, 0, 0.712);
    left: calc(100% - 3vw);
  }

  .pending::before {
    border-radius: inherit;
    content: "";
    width: 20%;
    height: 20%;
    position: absolute;
    top: 40%;
    bottom: 0;
    right: 0;
    left: 40%;
    background: rgb(255, 166, 0);
    z-index: -100;
    filter: blur(2px);
    animation: pulse 2s infinite ease-in-out;
  }

  .down {
    background: radial-gradient(rgb(255, 50, 50), rgb(116, 0, 0));
  }

  button {
    left: 0;
    position: absolute;
    height: 3vw;
    width: 3vw;
    border-radius: 50vw;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.61);
    transition: left 0.5s;
  }

  @keyframes pulse {
    0% {
      filter: blur(5px);
      transform: scale(1);
    }
    50% {
      filter: blur(2px);
      transform: scale(4);
    }
    100% {
      filter: blur(5px);
      transform: scale(1);
    }
  }
</style>
