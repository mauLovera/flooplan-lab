import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

function FloorPlan (props) {
  return (
    <>
      <div className='floor-plan'>
        <div className="top">
          <Kitchen />
          <Bedroom bedNum={1} />
        </div>
        <div className="middle">
          <LivingRoom />
          <Bath size={'Half'} />
        </div>
        <div className="bottom">
          <Bedroom bedNum={2} />
          <Bedroom bedNum={3} />
          <Bath size={'Full'} />
        </div>
      </div>
    </>
  )
}

export default FloorPlan