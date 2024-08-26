// Write your code here
import './index.css'

const registrationStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const onRenderRegisteredStatus = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="status-image"
      />
      <h1 className="status-heading">
        You have already registered for the event
      </h1>
    </>
  )

  const onRenderYetToRegisteredStatus = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        alt="yet to register"
        className="status-image"
      />
      <p className="desc">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form
      </p>
      <button type="button">Register Here</button>
    </>
  )

  const onRenderRegisteredClosedStatus = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="status-image"
      />
      <h1 className="status-heading">Registrations Are Closed Now!</h1>
      <p className="desc">Stay tuned. We will reopen the registrations soon!</p>
    </>
  )

  const renderRegistrationStatus = () => {
    switch (registrationStatus) {
      case registrationStatusConstants.registered:
        return onRenderRegisteredStatus()

      case registrationStatusConstants.yetToRegister:
        return onRenderYetToRegisteredStatus()

      case registrationStatusConstants.registrationClosed:
        return onRenderRegisteredClosedStatus()
      default:
        return (
          <p className="desc">
            Click on an event, to view its registration details
          </p>
        )
    }
  }

  return (
    <div className="registration-status-cont">{renderRegistrationStatus()}</div>
  )
}

export default ActiveEventRegistrationDetails
