<script>
  import Button from "./Components/Button.svelte";
  import Clock from "./Components/Clock.svelte";
  import Info from "./Components/Info.svelte";
  import Status from "./Components/Status.svelte";
  import Switch from "./Components/Switch.svelte";

  async function load(){
    return await fetch('/data').then(res => res.json())
  }

</script>

<section>
  <Status name="online" />
  <Button name="reboot system" action="reboot" hazard={true}></Button>

  <Clock name="local time"/>

  <Clock name="Curaçao" timezone="America/Curacao"/>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 1vw;
  }
</style>
