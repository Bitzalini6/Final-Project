import React, { useState } from "react";
import "../styles/gallery.css";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Img1 from "../WeddingsImgs/Weddings1.jpg";
import Img2 from "../WeddingsImgs/Weddings2.jpg";
import Img3 from "../WeddingsImgs/Weddings3.jpg";
import Img4 from "../WeddingsImgs/Weddings4.jpg";
import Img5 from "../WeddingsImgs/Weddings5.jpg";
import Img6 from "../WeddingsImgs/Weddings6.jpg";
import Img7 from "../WeddingsImgs/Weddings7.jpg";
import Img8 from "../WeddingsImgs/Weddings8.jpg";
import Img9 from "../WeddingsImgs/Weddings9.jpg";

const Weddings = () => {
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

export default Weddings;
