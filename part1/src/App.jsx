
function Header({course} ) {
  return (
    <h1>{course.name}</h1>
  )
}

function Part( {part, exercise} ) {
  return (
    <p>{part} {exercise}</p>
  )
}

function Content( {course} ) {

  return (
    <>
      <Part part={course.parts[0].name} exercise={course.parts[0].exercises} />
      <Part part={course.parts[1].name} exercise={course.parts[1].exercises} />
      <Part part={course.parts[2].name} exercise={course.parts[2].exercises} />

    </>
  )
}


function Total( {course} ) {
  return (
    <p>Number of exercises {course.parts[0].exercises + course.parts[0].exercises + course.parts[0].exercises}</p>
  )
}


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />

    </div>
  )
}


export default App
