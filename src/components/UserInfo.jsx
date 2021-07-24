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
  if (userInfo.length === 0) return ''
  let {title, first, last} = userInfo.name
  return `${title} ${first} ${last}`
}

const RandomUser = function () {
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    fetchUserInfo().then((data) => {
      setUserInfo([...userInfo, data.data.results[0]])
    })
  }
  , [])
  
  return (
    <div>
      {userInfo.map((info) => {
        return getFullUserName(info)
      })}
    </div>
  )
}

export default RandomUser;