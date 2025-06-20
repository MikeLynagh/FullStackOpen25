import { useState } from 'react'


 const Button = ({text, onClick}) => (
    <button onClick={onClick}>{text}</button>
)

const Display = (props) => (
  <div>
    <p>{props.text} {props.value} </p>
  </div>
)


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let labelGood = "good"
  let labeNeutral = "neutral"
  let labelBad = "bad"

 
  return (
    <div>
      <h1>Give feedback </h1>
      <Button text={labelGood} onClick={() => setGood(good + 1)}/>
      <Button text={labeNeutral} onClick={() => setNeutral(neutral + 1)} />
      <Button text={labelBad} onClick={() => setBad(bad + 1)}/>
      <h1>statistics</h1>
      <Display text={labelGood} value={good}/>
      <Display text={labeNeutral} value={neutral}/>
      <Display text={labelBad} value={bad}/>


    </div>
  )
}

export default App;