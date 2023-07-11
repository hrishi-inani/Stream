import { useState } from "react";
import "./listItem.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  const defaultMovie = {
    _id: new Date().toString(),
    title: "ABC",
    desc: "ande",
    year: 1999,
    duration: "1hr 45min",
    limit: 15,
    genre: "comedy",
    isSeries: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("movies/find/" + item, {
          headers: {
            token: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        });
        setMovie(res.data || defaultMovie);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <>
      <Link to="/watch" state={{ movie: movie }}>
        <div
          className="listItem"
          style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={movie.imgSm} alt="" />

          {isHovered && (
            <>
              <video src={movie.trailer} autoPlay={true} loop />
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrowIcon className="icon" />
                  <AddIcon className="icon" />
                  <ThumbUpAltOutlinedIcon className="icon" />
                  <ThumbDownOutlinedIcon className="icon" />
                </div>
                <div className="movieTitle">
                  <span className="title">{movie.title}</span>
                </div>
                <div className="itemInfoTop">
                  <span>{movie.duration}</span>
                  <span className="limit">+{movie.limit}</span>
                  <span>{movie.year}</span>
                  <span className="genre">{movie.genre}</span>
                </div>
                <div className="desc">{movie.desc}</div>
              </div>
            </>
          )}
        </div>
      </Link>
    </>
  );
};

export default ListItem;
