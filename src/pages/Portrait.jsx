import React, { useState } from "react";
import "../styles/gallery.css";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Img1 from "../PortraitImgs/Portrait1.jpg";
import Img2 from "../PortraitImgs/Portrait2.jpg";
import Img3 from "../PortraitImgs/Portrait3.jpg";
import Img4 from "../PortraitImgs/Portrait4.jpg";
import Img5 from "../PortraitImgs/Portrait5.jpg";
import Img6 from "../PortraitImgs/Portrait6.jpg";
import Img7 from "../PortraitImgs/Portrait7.jpg";
import Img8 from "../PortraitImgs/Portrait8.jpg";
import Img9 from "../PortraitImgs/Portrait9.jpg";
import Img10 from "../PortraitImgs/Portrait10.jpg";
import Img11 from "../PortraitImgs/Portrait11.jpg";
import Img12 from "../PortraitImgs/Portrait12.jpg";
import Img13 from "../PortraitImgs/Portrait13.jpg";
import Img14 from "../PortraitImgs/Portrait14.jpg";
import Img15 from "../PortraitImgs/Portrait15.jpg";
import Img16 from "../PortraitImgs/Portrait16.jpg";
import Img17 from "../PortraitImgs/Portrait17.jpg";
import Img18 from "../PortraitImgs/Portrait18.jpg";
import Img19 from "../PortraitImgs/Portrait19.jpg";
import Img20 from "../PortraitImgs/Portrait20.jpg";
import Img21 from "../PortraitImgs/Portrait21.jpg";
import Img22 from "../PortraitImgs/Portrait22.jpg";
import Img23 from "../PortraitImgs/Portrait23.jpg";
import Img24 from "../PortraitImgs/Portrait24.jpg";
import Img25 from "../PortraitImgs/Portrait25.jpg";
import Img26 from "../PortraitImgs/Portrait26.jpg";
import Img27 from "../PortraitImgs/Portrait27.jpg";
import Img28 from "../PortraitImgs/Portrait28.jpg";

const Portrait = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 14,
      imgSrc: Img14,
    },
    {
      id: 15,
      imgSrc: Img15,
    },
    {
      id: 16,
      imgSrc: Img16,
    },
    {
      id: 17,
      imgSrc: Img17,
    },
    {
      id: 18,
      imgSrc: Img18,
    },
    {
      id: 19,
      imgSrc: Img19,
    },
    {
      id: 20,
      imgSrc: Img20,
    },
    {
      id: 21,
      imgSrc: Img21,
    },
    {
      id: 22,
      imgSrc: Img22,
    },
    {
      id: 23,
      imgSrc: Img23,
    },
    {
      id: 24,
      imgSrc: Img24,
    },
    {
      id: 25,
      imgSrc: Img25,
    },
    {
      id: 26,
      imgSrc: Img26,
    },
    {
      id: 27,
      imgSrc: Img27,
    },
    {
      id: 28,
      imgSrc: Img28,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImg] = useState("");
  const getImg = (imgSrc) => {
    setTempImg(imgSrc);
    setModel(true);
  };

  return (
    <div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CancelPresentationIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "400px" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portrait;
