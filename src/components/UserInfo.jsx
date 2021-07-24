import {useState, useEffect} from "react"
import axios from "axios"

const fetchUserInfo = function(pageNumber = 1){
  return axios.get(`https://randomuser.me/api?page=${pageNumber}`)
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
  let userPic = userInfo.picture.thumbnail
  return (
    <div>
      <p> {title} {first} {last} </p>
      <img src={userPic} alt="thumbnail"/>
    </div>
  )
}

const RandomUser = function () {
  const [userInfo, setUserInfo] = useState([])
  const [nextPage, setNextPage] = useState(1)

  useEffect(() => {
    fetchUserInfo(nextPage).then((data) => {
      setUserInfo([...userInfo, data.data.results[0]])
    })
  }
  , [nextPage])
  
  return (
    <div>
      {userInfo.map((info) => {
        return getFullUserName(info)
      })}
      <button onClick={() => setNextPage(nextPage + 1)}>next page</button>
    </div>
  )
}

export default RandomUser;