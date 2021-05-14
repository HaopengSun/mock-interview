import {useState, useEffect} from "react"
import axios from "axios"

const fetchRamdomUser = function(){
  return axios.get('https://randomuser.me/api/')
  .then(function (response) {
    const fullData = JSON.stringify(response, null, 3)
    const userName = response.data.results[0].name.first + ' ' + response.data.results[0].name.last
    return {fullData, userName}
  })
  .catch(function (error) {
    console.log(error)
  })
}

const RandomUser = function () {
  const [randomInfo, setRandomInfo] = useState({
    fullData: '',
    userName: ''
  })

  useEffect(() => {
    fetchRamdomUser().then(data => {
      setRandomInfo({...data})
    })
  }
  , [])

  return (
     <div>
       <pre>Full random data: {randomInfo.fullData}</pre>
       <h5>Random User Name: {randomInfo.userName}</h5>
     </div>
  )
}

export default RandomUser;