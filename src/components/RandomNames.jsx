import {useState, useEffect} from "react"
import axios from "axios"

const RandomNames = function(props){
  return (
    <h3>{props.names}</h3>
  )
}

export default RandomNames