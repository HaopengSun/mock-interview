import react, { useEffect, useState } from "react"

const Increment = function (){
  const [increment, setIncrement] = useState(0)
  return (
    <div>
      <h3>increment-component</h3>
      <p>{increment}</p>
      <button onClick={() => {
        setIncrement(increment + 1);
      }}>increase by one</button>
    </div>
  )
}

export default Increment