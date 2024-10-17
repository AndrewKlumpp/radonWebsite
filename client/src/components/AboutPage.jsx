import tom from '/tom.jpeg';
const AboutPage = () => {
  return (
    <div className='container'>
      <div className='d-flex'>
        <div className='col'>
          <br />
          <h2>Company Mission</h2>
          <p>Our mission at Colorado Radon Specialists is to protect the health and safety of our community by providing expert radon testing and mitigation services. We are committed to delivering reliable, efficient, and environmentally responsible solutions to reduce radon exposure in homes and businesses across the state. Through education, transparency, and customer-focused service, we aim to create safer living environments and promote well-being for all Coloradans.</p>
          <h2>Why You Should Choose Us</h2>
          <p>Customers should choose Tom as their radon mitigation specialist because of his extensive expertise and dedication to providing personalized and effective solutions. Tom brings a deep understanding of radon safety, ensuring that every home and business he works on is protected with the highest standards. His commitment to clear communication, reliable service, and customer satisfaction makes him the trusted choice for safeguarding your property from radon risks.</p>
        </div>
        <div className='col'>
          <img
            className="tom"
            src={tom}
            alt="Tom Mahr" />
        </div>
      </div>
    </div>
  )
}
export default AboutPage
