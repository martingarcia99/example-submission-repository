import Header from "./components/Header"
import Content from "./components/Content"
import course from "./data/course"
import Total from "./components/Total"

const App = () => {
    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
      </div>
    )
  }
  
  export default App