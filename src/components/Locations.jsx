import {useState, useEffect} from "react"

const displayLocations = function(data){
  const streetName = data.location.street
  const {number, name} = streetName
  console.log(number, name)
  return (
    <li>{number} {name}</li>
  )
}

export default Location = function(props){
  const locations = props.userInfo

  return (
    <div>
      <lu>
        {locations.map(location => {
          return displayLocations(location)
        })}
      </lu>
    </div>
  )
}