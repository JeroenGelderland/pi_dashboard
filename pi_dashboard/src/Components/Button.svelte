<script>
  export let name = "";
  export let action = null;
  export let hazard = false;

  async function execute(){
        if(action){
          if(!hazard || confirm("Are you sure?")){
              console.log("executing...")
          }

        }
    }
</script>

<div class="button_container container" class:hazard>
  <span>{name}</span>
  <div>
    <button id="#reboot" on:click={execute}/>
  </div>
</div>

<style>
  .hazard {
      padding: 1vw;
    border: 1vw solid;
    border-image: repeating-linear-gradient(
        -55deg,
        #000,
        #000 1vw,
        #ffb101 1vw,
        #ffb101 2vw
      )
      10;
  }
  .button_container > div {
    display: flex;
    justify-content: center;
    padding-top: 0.5vw;
  }

  button {
    height: 3vw;
    width: 3vw;
    border-radius: 50vw;
    background: radial-gradient(rgb(255, 50, 50), rgb(116, 0, 0));
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.61);
  }

  button:hover {
    background: radial-gradient(rgb(255, 163, 163), rgb(189, 0, 0));
  }
</style>
