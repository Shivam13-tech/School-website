import Collage from "../Images/ground.jpg"
import Zidane from "../Images/Zinedine-Zidane.jpg"

function Events(){
    return(
        <div>
            <div id="collage-image-container">
                <img className="collage-image" src={Collage} alt="collage" />
            </div>
            <div>
                <h1 className="event-title">Event's and Activities</h1>
            </div>
            <div id="event-container1">
                <div className="event-image-container">
                    <img className="event-image" src={Zidane} alt="zidane" />
                </div>
                <div id="event-detail">
                    <h1 className="event-title-name">Environment Day</h1>
                    <p className="event-title-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni totam possimus vero optio doloribus quibusdam rem odit, perspiciatis inventore.</p>
                </div>
            </div>
            <div id="event-container2">
                <div id="event-detail">
                    <h1 className="event-title-name">Environment Day</h1>
                    <p className="event-title-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni totam possimus vero optio doloribus quibusdam rem odit, perspiciatis inventore.</p>
                </div>
                <div className="event-image-container2">
                    <img className="event-image" src={Zidane} alt="zidane" />
                </div>
            </div>
            <div id="event-container3">
                <div className="event-image-container">
                    <img className="event-image" src={Zidane} alt="zidane" />
                </div>
                <div id="event-detail">
                    <h1 className="event-title-name">Environment Day</h1>
                    <p className="event-title-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni totam possimus vero optio doloribus quibusdam rem odit, perspiciatis inventore.</p>
                </div>
            </div>
            <div id="event-container4">
                <div id="event-detail">
                    <h1 className="event-title-name">Environment Day</h1>
                    <p className="event-title-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni totam possimus vero optio doloribus quibusdam rem odit, perspiciatis inventore.</p>
                </div>
                <div className="event-image-container2">
                    <img className="event-image" src={Zidane} alt="zidane" />
                </div>
            </div>
            <div id="event-container5">
                <div className="event-image-container">
                    <img className="event-image" src={Zidane} alt="zidane" />
                </div>
                <div id="event-detail">
                    <h1 className="event-title-name">Environment Day</h1>
                    <p className="event-title-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni totam possimus vero optio doloribus quibusdam rem odit, perspiciatis inventore.</p>
                </div>
            </div>
        </div>
    )
}

export default Events