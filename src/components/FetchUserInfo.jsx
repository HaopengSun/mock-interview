import {useState, useEffect} from "react"
import axios from "axios"

const fetchData = function(){
  return axios.get('https://randomuser.me/api/?results=10')
    .then(function (response) {
      // console.log(response);
      return response
    })
    .catch(function (error) {
      return error;
    });
}

const FetchUserInfo = function(){
  const [userInfo, setUserInfo] = useState('')

  useEffect(() => {
    fetchData().then((data) => {
      setUserInfo(JSON.stringify(data))
    })
  }, [])

  return (
  <div>
    <p>Fetch user info</p>
    {userInfo}
  </div>
  )
}

export default FetchUserInfo;
