import React from "react";

import "./CarouselComponent.css";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import img_sli from "../../About/Images/collegeImg.jpg";
import img_sli1 from "../../About/Images/7.jpg";
import img_sli2 from "../../About/Images/2.jpg";
import img_sli3 from "../../About/Images/3.jpg";
import img_sli4 from "../../About/Images/aluimg.jpg";
import img_sli5 from "../../About/Images/5.jpg";
import img_sli6 from "../../About/Images/6.jpg";
import Welcome from "../ExplorePlatform/Welcome/Welcome";

// const APIkey = "AIzaSyCW62Nn00V6RCkSvLJ0_i0zSg097Xj30hQ";
// const channelId = "UC4Pc9V7-QjsJZKkUS8I0iqw";
// const result = "100";

// const finalUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${result}&order=date&key=${API}`;

const CarouselComponent = () => {
  // const s = useContext(userContext);

  // const [loader, setLoader] = useState(false);
  // const loaderCSS = css`
  //   position: fixed;
  //   top: 50%;
  //   left: 50%;
  // `;
  // const [youtubeUrl, setyoutubeUrl] = useState([]);

  // async function getVideos() {
  //   console.log();
  //   try {
  // const response = await fetch(finalUrl);
  // const data = await response.json();
  // const data2 = data.items.map((e) => {
  //   return e.id.videoId;
  // });
  // setyoutubeUrl([...data2]);
  // console.log(youtubeUrl);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getVideos();
  // }, []);

  return (
    <div className="main-slider">
      {/* <Welcome /> */}
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={45}
        totalSlides={7}
        interval={5000}
        isPlaying={true}
        infinite={true}
      >
        <Slider>
          <Slide index={0}>
            {" "}
            <img
              src={img_sli}
              alt="Img"
              style={{ width: "100%", height: "130%" }}
            />
          </Slide>

          <Slide index={1}>
            {" "}
            <img
              src={img_sli1}
              alt="Img"
              style={{ width: "100%", height: "130%" }}
            />
          </Slide>

          <Slide index={2}>
            {" "}
            <img
              src={img_sli2}
              alt="Img"
              style={{ width: "100%", height: "130%" }}
            />
          </Slide>

          <Slide index={3}>
            {" "}
            <img
              src={img_sli3}
              alt="Img"
              style={{ width: "100%", height: "130%" }}
            />
          </Slide>

          <Slide index={4}>
            {" "}
            <img
              src={img_sli4}
              alt="Img"
              style={{ width: "100%", height: "130%" }}
            />
          </Slide>

          <Slide index={5}>
            {" "}
            <img
              src={img_sli5}
              alt="Img"
              style={{ width: "100%", height: "130%" }}
            />
          </Slide>

          <Slide index={6}>
            {" "}
            <img
              src={img_sli6}
              alt="Img"
              style={{ width: "100%", height: "130%" }}
            />
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default CarouselComponent;
