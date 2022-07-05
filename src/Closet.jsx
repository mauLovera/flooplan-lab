function Closet (props) {
  return (
    <>
      <div className="closet" id={`closet-${props.size}`}>
        <div className="room-text">
          {props.size} Closet
        </div>
      </div>
    </>
  )
}

export default Closet