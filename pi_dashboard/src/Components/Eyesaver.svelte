<script>
import convert_date from "../Assets/convert_date"
import {is_day} from "../store"

    async function check_is_day(){

        const now = new Date()

        const yesterday = await fetch("https://api.sunrise-sunset.org/json?lat=51.638476&lng=-5.248800&date=yesterday&formatted=0").then(res => res.json())
        const today = await fetch("https://api.sunrise-sunset.org/json?lat=51.638476&lng=-5.248800&date=today&formatted=0").then(res => res.json())
        const tomorrow = await fetch("https://api.sunrise-sunset.org/json?lat=51.638476&lng=-5.248800&date=today&formatted=0").then(res => res.json())

        if(now.getHours() < 12){
            
        }
        
        const sunrise = convert_date(data.results.sunrise)
        const sunset = convert_date(data.results.nautical_twilight_end)
        console.log(sunrise.getTime(),sunset)

    }
    
    check_is_day()
</script>

