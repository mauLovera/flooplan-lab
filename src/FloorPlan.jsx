import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"
import Closet from "./Closet"

function FloorPlan (props) {
  return (
    <>
      <div className='floor-plan'>
        <div className="top">
          <Kitchen />
          <Bedroom bedNum={1} />
          <Closet size={'Small'} />
        </div>
        <div className="middle">
          <LivingRoom />
          <Bath size={'Half'} />
        </div>
        <div className="bottom">
          <Bedroom bedNum={2} />
          <Closet size={'Full'} />
          <Bedroom bedNum={3} />
          <Closet size={'Master'} />
          <Bath size={'Full'} />
        </div>
      </div>
    </>
  )
}

export default FloorPlan