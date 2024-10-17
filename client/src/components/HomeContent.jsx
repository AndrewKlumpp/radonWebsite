import radon from '/radon.png';
import nrppLogo from '/nrpp-logo.png';
import bonded from '/bonded.png';
const HomeContent = () => {
  return (
    <div className='container'>
      <div className='d-flex'>
        <div className='col'>
          <br />
          <h3>Call us now!</h3>
          <h2>(970) 319-6586</h2><hr />
          <h4>Send us an email!</h4>
          <a href="mailto:coloradoradonspecialists@gmail.com">coloradoradonspecialists@gmail.com</a><br /><hr />
          <img
            className="nrpp-logo"
            src={nrppLogo}
            alt="Certified Radon Professional" />
          <img
            className="bonded"
            src={bonded}
            alt="Licensed, bonded and insured" />
        </div>
        <div className='col'>
          <h4>How radon enters the home:</h4>
          <img
            className="radon-entry"
            src={radon}
            alt="How radon enters the home" />
        </div>
      </div>
      <br />
      <div>
        <p>Radon (chemical symbol Rn) is a radioactive gas that is odorless and colorless. It is released during the natural breakdown of uranium and radium found in almost all types of rocks and soils. Radon can seep into buildings through cracks or gaps in floors and walls that are in contact with the ground.

          Once inside, radon can build up over time, posing significant health risks. For further details on indoor air quality and the dangers of radon exposure, visit the EPA's <a href="https://www.epa.gov/radon/health-risk-radon">Health Risk of Radon</a> page on <a href="https://www.epa.gov/">EPA.gov</a>.</p>
      </div>
    </div>
  )
}
export default HomeContent
