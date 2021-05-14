import {useState, useEffect} from "react"
import axios from "axios"

const fetchRamdomUser = function(){
  return axios.get('https://randomuser.me/api/')
  .then(function (response) {
    return response.data.results[0].name.first + ' ' + response.data.results[0].name.last
  })
  .catch(function (error) {
    console.log(error)
  })
}

const NameCollection = function () {
  const [randomName, setRandomName] = useState([])

  useEffect(() => {
    fetchRamdomUser().then(data => {
      setRandomName([...randomName, data])
    })
  }
  , [])

  const showNames = function(names){
    return names.map(name => {
      return <div>{name}</div>
    })
  }

  return (
    <div>
      {showNames(randomName)}
      <button>more names</button>
    </div>
  )
}

export default NameCollection;