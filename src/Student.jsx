function Student(props) {
  return (
    <>
      <h1>{props.student.name}</h1>
      <p>{props.student.bio}</p>
      {props.student.scores.map((score, idx) => <p>This is a score component</p>)}
    </>
  )
}

export default Student