import axios from "axios"

//get all events
export const getEvents=()=>{
    const data = axios({
        method:"get",
        url:"https://calendar.byu.edu/api/Events.json?categories=10+6&event[min][date]=2017-04-01&event[max][date]=2017-04-30&price=5"
    })

    return data
}