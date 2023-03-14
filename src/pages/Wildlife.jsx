import React, { useState } from "react";
import "../styles/gallery.css";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Img1 from "../WildLifeImgs/WildLife1.jpg";
import Img2 from "../WildLifeImgs/WildLife2.jpg";
import Img3 from "../WildLifeImgs/WildLife3.jpg";
import Img4 from "../WildLifeImgs/WildLife4.jpg";
import Img5 from "../WildLifeImgs/WildLife5.jpg";
import Img6 from "../WildLifeImgs/WildLife6.jpg";
import Img7 from "../WildLifeImgs/WildLife7.jpg";
import Img8 from "../WildLifeImgs/WildLife8.jpg";
import Img9 from "../WildLifeImgs/WildLife9.jpg";
import Img10 from "../WildLifeImgs/WildLife10.jpg";
import Img11 from "../WildLifeImgs/WildLife11.jpg";
import Img12 from "../WildLifeImgs/WildLife12.jpg";
import Img13 from "../WildLifeImgs/WildLife13.jpg";
import Img14 from "../WildLifeImgs/WildLife14.jpg";
import Img15 from "../WildLifeImgs/WildLife15.jpg";
import Img16 from "../WildLifeImgs/WildLife16.jpg";
import Img17 from "../WildLifeImgs/WildLife17.jpg";

const Wildlife = () => {
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

export default Wildlife;
