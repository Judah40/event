import React from "react"
import {Slot} from "expo-router"
import Navigation from "../../components/Navigation";

const layout =()=>{
    return(
        <>
        <Navigation/>
        <Slot/>
        </>
    )
}

export default layout