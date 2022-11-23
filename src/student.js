import "./student.css";

function Student(props){
    return(
        <div className="student-cotainer">
            <h1>Hello {props.name}</h1>
            <h3>{props.course}</h3>
        </div>
    );
}
export default Student;