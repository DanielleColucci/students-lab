import Score from "./Score"

function Student(props) {
  return (
    <>
      <h1>{props.student.name}</h1>
      <p>{props.student.bio}</p>
      {props.student.scores.map((scoreObj, idx) => <Score key={idx} scoreObj={scoreObj}/>)}
    </>
  )
}

export default Student