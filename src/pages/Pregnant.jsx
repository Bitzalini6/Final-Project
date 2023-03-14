import React, { useState } from "react";
import "../styles/gallery.css";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Img1 from "../PregnanciesImgs/Preg1.jpg";
import Img2 from "../PregnanciesImgs/Preg2.jpg";
import Img3 from "../PregnanciesImgs/Preg3.jpg";
import Img4 from "../PregnanciesImgs/Preg4.jpg";
import Img5 from "../PregnanciesImgs/Preg5.jpg";
import Img6 from "../PregnanciesImgs/Preg6.jpg";

const Pregnant = () => {
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

export default Pregnant;
