export default function convert_date(date_string){
    let date = date_string.split('T')
    date[1]= date[1].split('+')[0]
    return new Date(`${date[0]} ${date[1]}`)
}