import gallery1 from '/gallery1.jpg';
import gallery2 from '/gallery2.jpg';
import gallery3 from '/gallery3.jpg';
import gallery4 from '/gallery4.jpg';
import gallery5 from '/gallery5.jpg';
import gallery6 from '/gallery6.jpg';

const PortfolioLayout = () => {
  return (
    <div class="contain">
      <div class="gallery">
        <div class="gallery__item gallery__item--1">
          <img
            class="gallery__img"
            src={gallery1}
            alt="exhaust duct" />
        </div>

        <div class="gallery__item gallery__item--2">
          <img
            class="gallery__img"
            src={gallery2}
            alt="new construction" />
        </div>

        <div class="gallery__item gallery__item--3">
          <img
            class="gallery__img"
            src={gallery3}
            alt="exhaust duct" />
        </div>

        <div class="gallery__item gallery__item--4">
          <img
            class="gallery__img"
            src={gallery4}
            alt="new construction" />
        </div>

        <div class="gallery__item gallery__item--5">
          <img
            class="gallery__img"
            src={gallery5}
            alt="lining under hvac" />
        </div>

        <div class="gallery__item gallery__item--6">
          <img
            class="gallery__img"
            src={gallery6}
            alt="crawlspace" />
        </div>
      </div>
    </div>
  )
}
export default PortfolioLayout
