function Bath (props) {
  return (
    <>
      <div className="bath" id={`bath-${props.size}`}>
        <div className="room-text">{props.size} Bath</div>
      </div>
    </>
  )
}

export default Bath