import {useState, useEffect} from "react"
import axios from "axios"

const fetchUserInfo = function(){
  return axios.get('https://randomuser.me/api/')
  .then(function (response) {
    return response
  })
  .catch(function (error) {
    console.log(error)
  })
}

const getFullUserName = userInfo => {
  const {name: {first, last}} = userInfo
  return `${first} ${last}`
}

// name: {title: "Ms", first: "Emma", last: "Sørensen"}

const RandomUser = function () {
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    fetchUserInfo().then(data => {
      // object can be displayed and it needs to be transfered to json
      setUserInfo(data.data.results[0].name)
    })
  }
  , [])

  console.log(userInfo)

  return (
    <div>
      {/* {userInfo.map(info => {
        return <p>{info}</p>
      })} */}
    </div>
  )
}

export default RandomUser;