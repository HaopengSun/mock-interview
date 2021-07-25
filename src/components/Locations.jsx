import {useState, useEffect} from "react"

const displayLocations = function(data){
  const streetName = data.location.street
  const {number, name} = streetName
  console.log(number, name)
  return (
    <tr>
      <th>{number}</th>
      <th>{name}</th>
    </tr>
  )
}

export default Location = function(props){
  const locations = props.userInfo

  return (
    <div>
      <tr>
        <th>Street Number</th>
        <th>Street Name</th>
      </tr>
      {locations.map(location => {
        return displayLocations(location)
      })}
    </div>
  )
}