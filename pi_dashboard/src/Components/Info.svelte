<script>
  export let name = "";
    export let message
    export let warning
</script>

<div class="container">
    <span>{name}</span>
    <p class:warning={warning}>{message}</p>
</div>

<style>
    p{
        color: chartreuse;
    }

    .warning{
        color: red;
    }
</style>