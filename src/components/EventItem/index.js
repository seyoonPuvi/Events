// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onEventItemClick} = props
  const {imageUrl, name, location, id} = eventDetails

  const onClickEvent = () => onEventItemClick(id)

  return (
    <li>
      <button type="button" onClick={onClickEvent} className="event-btn">
        <img src={imageUrl} alt="event" className="event-img" />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
