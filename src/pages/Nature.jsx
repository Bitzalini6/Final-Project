import React, { useState } from "react";
import "../styles/gallery.css";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Img1 from "../NatureImgs/Nature1.jpg";
import Img2 from "../NatureImgs/Nature2.jpg";
import Img3 from "../NatureImgs/Nature3.jpg";
import Img4 from "../NatureImgs/Nature4.jpg";
import Img5 from "../NatureImgs/Nature5.jpg";
import Img6 from "../NatureImgs/Nature6.jpg";
import Img7 from "../NatureImgs/Nature7.jpg";
import Img8 from "../NatureImgs/Nature8.jpg";
import Img9 from "../NatureImgs/Nature9.jpg";
import Img10 from "../NatureImgs/Nature10.jpg";
import Img11 from "../NatureImgs/Nature11.jpg";
import Img12 from "../NatureImgs/Nature12.jpg";
import Img13 from "../NatureImgs/Nature13.jpg";
import Img14 from "../NatureImgs/Nature14.jpg";
import Img15 from "../NatureImgs/Nature15.jpg";
import Img16 from "../NatureImgs/Nature16.jpg";
import Img17 from "../NatureImgs/Nature17.jpg";
const Nature = () => {
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

export default Nature;
