// import { CarouselProvider, Image, Slide, Slider, } from "pure-react-carousel";
// import React from "react";
// import { Divider } from "semantic-ui-react";
// import CustomDotGroup from "../components/CustomDotGroup";


// function  ImageCarousel ({images}) {

//   const slides = images.map((img,ind)=> <Slide key={ind} tag="a" index={ind}>
//   <Image src={img.url} style={{"hight": "100px"}}/>
// </Slide>)

//   return(


//   <CarouselProvider
//     naturalSlideWidth={1}
//     naturalSlideHeight={1}
//     totalSlides={images.length}
//   >
//     <Slider>
//       {slides}
//     </Slider>

//   //   <Divider />
//   //   <CustomDotGroup slides={images.length} />
//   // </CarouselProvider>
//   // <Carousel>
//   //   <div> {slides}</div>
   
//   // </Carousel>
// );
// }
// export default ImageCarousel;