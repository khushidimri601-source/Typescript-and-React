import PropTypes from 'prop-types'
function Student(props){
return (
  <div className="Student">
    <p>Name:{props.name}</p>
    <p>Age:{props.age}</p>
  </div>
)
}
Student.PropTypes={
  name:PropTypes.string,
  age:PropTypes.number
}
export default Student