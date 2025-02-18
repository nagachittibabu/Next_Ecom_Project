import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselComponent = () => {
    return (
      <div className="w-full px-12">
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000}>
          <div>
            <img src="https://as1.ftcdn.net/jpg/04/65/46/52/1000_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg" alt="pic" className="w-full  lg:h-[400px] md:[300px] sm:[200px] object-fill" />
          </div>
          <div>
            <img src="http://shutterstock.com/image-vector/shopping-sale-banner-on-red-260nw-1575804547.jpg" alt="pic" className="w-full  lg:h-[400px] md:[300px] sm:[200px]" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkxPjY9viHt2l2pSKhEMdVBDTmtI19anlE_qPUMCihOsywU8pXVgVQhjjUyuB1uy8jc8" alt="pic" className="w-full  lg:h-[400px] md:[300px] sm:[200px] object-fill" />
          </div>
        </Carousel>
      </div>
);
    }
export default CarouselComponent