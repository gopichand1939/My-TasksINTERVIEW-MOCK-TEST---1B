import './index.css'

const Tasks = props => {
  const {taskDetails} = props
  const {taskName, tagName} = taskDetails
  return (
    <li className="taskList">
      <p className="tagName">{taskName}</p>
      <p className="taskTag">{tagName}</p>
    </li>
  )
}

export default Tasks
