<script>
  export let name = "";
  export let time
  export let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  export let action

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  $: time;

  if (action) {
      setInterval(() => {
        execute()
    }, 1000);
  } else {
    set_formatted_time();
    setInterval(() => {
      set_formatted_time();
    }, 1000);

    async function execute(){
        if(action){
            
        }
    }
  }

  function set_formatted_time(date = new Date()) {
    const options = { 
      timeStyle: "medium",
      timeZone: timezone,
    }

    time = new Intl.DateTimeFormat("nl", options).format(date);
  }
</script>

<div class="container">
  <span>{name}</span>
  <span>{time}</span>
</div>

<style>
</style>
