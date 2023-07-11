import { useRef } from "react";
import { useState } from "react";
import ListItem from "../listItem/ListItem";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import "./list.scss";

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);

    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${distance + 230}px)`;
      if (slideNumber === 1) {
        setIsMoved(false);
      }
      setSlideNumber(slideNumber - 1);
    }

    if (direction === "right" && slideNumber < 5) {
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
      setSlideNumber(slideNumber + 1);
    }
  };

  return (
    <>
      <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
          <ArrowBackIosOutlinedIcon
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="container" ref={listRef}>
            {list.content.map((item, index) => {
              return <ListItem index={index} item={item} key={item} />;
            })}
          </div>
          <ArrowForwardIosOutlinedIcon
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
};

export default List;
