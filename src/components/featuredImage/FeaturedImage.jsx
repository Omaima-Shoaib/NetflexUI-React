import React from "react";
import featuredImage from "../../assets/images/cover.jpg";
import marvel from "../../assets/images/MARVEL.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
function FeaturedImage({ type }) {
  return (
    <div className="cover-container ">
      {type &&
        (<div className="absolute top-20 left-11 flex items-center justify-center ">
          <p className="text-custom-white pr-3 font-bold text-lg">{type}</p>
          <select name="Movies" id="" className="movies-type-list">
            <option value="">Movies</option>
            <option value="">Movies</option>
            <option value="">Movies</option>
            <option value="">Movies</option>
            <option value="">Movies</option>
            <option value="">Movies</option>
          </select>
        </div>)
      }
      <img src={featuredImage} alt="" className=" cover-image" />
      <div className="movie-container">
        <div className=" cover-movie">
          <img src={marvel} alt="" className="movie-cover-image" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            ut officiis quibusdam minus cupiditate molestiae vitae error
            reprehenderit impedit optio. Error soluta voluptates maiores impedit
            ullam accusantium quos architecto hic.
          </p>

          <div className="cover-buttons">
            <button>
              <PlayArrowIcon />
            </button>
            <button className="cover-btn-padding">
              <InfoIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedImage;
