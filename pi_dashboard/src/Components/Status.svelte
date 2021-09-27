<script>
  export let name = "";
  export let active;
</script>

<div class="container">
  <span>{name}</span>
  <div class="light">
    <div class:on={active} />
  </div>
</div>

<style>
  .light {
    display: flex;
    justify-content: center;
  }

  .light > div {
    height: 4vw;
    width: 4vw;
    /* margin: 1vw; */
    background: radial-gradient(
      rgb(255, 73, 73),
      rgb(143, 0, 0),
      #881f1f,
      transparent,
      transparent
    );
  }

  .on {
    background: radial-gradient(
      white,
      lime,
      transparent,
      transparent
    ) !important;
  }
</style>
