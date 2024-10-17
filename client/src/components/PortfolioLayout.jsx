import gallery1 from '/gallery1.jpg';
import gallery2 from '/gallery2.jpg';
import gallery3 from '/gallery3.jpg';
import gallery4 from '/gallery4.jpg';
import gallery5 from '/gallery5.jpg';
import gallery6 from '/gallery6.jpg';

const PortfolioLayout = () => {
  return (
    <div className="contain">
      <br />
      <div className="gallery">
        <div className="gallery__item gallery__item--1">
          <img
            className="gallery__img"
            src={gallery1}
            alt="exhaust duct" />
        </div>

        <div className="gallery__item gallery__item--2">
          <img
            className="gallery__img"
            src={gallery2}
            alt="new construction" />
        </div>

        <div className="gallery__item gallery__item--3">
          <img
            className="gallery__img"
            src={gallery3}
            alt="exhaust duct" />
        </div>

        <div className="gallery__item gallery__item--4">
          <img
            className="gallery__img"
            src={gallery4}
            alt="new construction" />
        </div>

        <div className="gallery__item gallery__item--5">
          <img
            className="gallery__img"
            src={gallery5}
            alt="lining under hvac" />
        </div>

        <div className="gallery__item gallery__item--6">
          <img
            className="gallery__img"
            src={gallery6}
            alt="crawlspace" />
        </div>
      </div>
    </div>
  )
}
export default PortfolioLayout
