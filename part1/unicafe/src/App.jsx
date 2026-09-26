import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleClick} >
      {props.text}
    </button>
  )
}


const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )



}

const Statistics = (props) => {

  if ((props.good === 0 && props.neutral === 0 && props.bad === 0) ){
    return <h5>No feedback given</h5>
  }
    
    return(
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} /> 
        </tbody>       
      </table>
    )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give feedback</h2>
      
      <Button handleClick={ () => setGood(good + 1)} text="good" />
      <Button handleClick={ () => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={ () => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <Statistics 
        good={good}
        neutral={neutral} 
        bad={bad} 
      />
    </div>
  )
}

export default App