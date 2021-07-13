import { Swiper, SwiperSlide } from 'swiper/react';
import '../sass/swiper.css';
// Import Swiper styles
// import 'swiper/swiper.scss'


const Swip = () => {
  return (
    // <Swiper
    //   spaceBetween={10}
    //   slidesPerView={2}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    //   <SwiperSlide><img src="https://pixabay.com/get/gce356e259192faacebf1d34980ed80b27755b0ed741cfa84db5a40ae5e1827a3f1ea5007ee399d5b9b9081b325a0d3c7_640.jpg" alt="" /></SwiperSlide>
    //   <SwiperSlide><img src="https://pixabay.com/get/g81f020fd59b59e3d5e36237d4bffb558478b90aed86879e1504dbe5ff30c054c33242be7719d44fff91c80d7ea780039_640.jpg" alt="" /></SwiperSlide>
    //   <SwiperSlide><img src="https://pixabay.com/get/g1167529f57be885eff72351fd97da888d334dda576486468e0ab1c1a6ecf8dabc43792da234141163855563a5d5271c4_640.jpg" alt="" /></SwiperSlide>
    //   <SwiperSlide><img src="https://pixabay.com/get/ga8a4013cc440bb2652e754e16bf72f1a069868fc85f6d62c73b0573778713791c463d70e5ead45ef80206706ee60c205_640.jpg" alt="" /></SwiperSlide>
    //   ...
    // </Swiper>
    <Swiper className="mySwiper">
    <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};
export default Swip;