import {useState, useEffect} from "react"
import axios from "axios"
import RandomNames from "./RandomNames"

const fetchRamdomUser = function(){
  return axios.get('https://randomuser.me/api/')
  .then(function (response) {
    const thumbnail = response.data.results[0].picture.thumbnail
    const fullData = JSON.stringify(response, null, 3)
    const userName = response.data.results[0].name.first + ' ' + response.data.results[0].name.last
    return {fullData, userName, thumbnail}
  })
  .catch(function (error) {
    console.log(error)
  })
}

const RandomUser = function () {
  const [randomInfo, setRandomInfo] = useState({
    fullData: '',
    userName: '',
    thumbnail: ''
  })

  useEffect(() => {
    fetchRamdomUser().then(data => {
      console.log(data)
      setRandomInfo({...data})
    })
  }
  , [])

  return (
     <div>
       <pre>Full random data: {randomInfo.fullData}</pre>
       <h5>Random User Name: {randomInfo.userName}</h5>
       <img src={randomInfo.thumbnail} alt="thumbnail" />
       <RandomNames names={randomInfo.userName}/>
     </div>
  )
}

export default RandomUser;