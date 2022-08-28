import React from 'react'
import ReactDOM from 'react-dom'



const Header = (props) => {
  return (
    <div>
      {props.course}
    </div>

  )
}



const Part = () => {
  return (
    <div>
      
    </div>
  )
}



const Content = (props) => {
  return (
    <div>
      <Part>{props.part1} {props.exercise1}</Part>
      <Part>{props.part2} {props.exercises2}</Part>
      <Part>{props.part3} {props.exercises3}</Part>
        
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>  
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total total={ exercises1 + exercises2 + exercises3} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
