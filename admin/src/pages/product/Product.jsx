import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";

export default function Product() {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Duration:</span>
              <span className="productInfoValue">{movie.duration}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Age Limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Type:</span>
              <span className="productInfoValue">
                {movie.isSeries ? "Series" : "Movie"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Name</label>
            <input type="text" placeholder={movie.title} />
            <label>Genre</label>
            <input type="text" placeholder={movie.genre} />
            <label>Year</label>
            <input type="number" placeholder={movie.year} />
            <label>Duration</label>
            <input type="text" placeholder={movie.duration} />
            <label>Age Limit</label>
            <input type="number" placeholder={movie.limit} />
            <label>Description</label>
            <textarea cols="30" rows="8" placeholder={movie.desc} />
            <label>Thumbail Image</label>
            <input type="file" className="file" />
            <label>Title Image</label>
            <input type="file" className="file" />
            <label>Trailer</label>
            <input type="file" className="file" />
            <label>Movie</label>
            <input type="file" className="file" />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
