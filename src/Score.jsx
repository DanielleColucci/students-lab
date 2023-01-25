function Score(props) {
  return (
    <div>
      <p>{props.scoreObj.date}: {props.scoreObj.score}</p>
    </div>
  )
}

export default Score