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

// const getFullUserName = userInfo => {
//   if (userInfo.length === 0) return ''
//   userInfo.map(info => {
//     let {title, first, last} = info
//     return `<p>${title} ${first} ${last}</p>`
//   })
// }

// name: {title: "Ms", first: "Emma", last: "Sørensen"}

const RandomUser = function () {
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    fetchUserInfo().then(data => {
      setUserInfo([...userInfo, data.data.results[0].name])
    })
  }
  , [])
  
  return (
    <div>
      {userInfo.map(info => {
        let {title, first, last} = info
        return `${title} ${first} ${last}`
      })}
    </div>
  )
}

export default RandomUser;