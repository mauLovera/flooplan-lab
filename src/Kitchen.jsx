import Oven from "./Oven"
import Sink from "./Sink"

function Kitchen (props) {
  return (
    <>
      <div className="kitchen-room">
        <div className="room-text kitchen">Kitchen</div>
        <div className="oven-sink-group">
          <Oven />
          <Sink />
        </div>
      </div>
    </>
  )
}

export default Kitchen