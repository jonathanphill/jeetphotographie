import "./Main.css";
import caribou from "../assets/caribou.jpg";
import blackBear from "../assets/blackBear.jpg";
import downTheRoad from "../assets/downTheRoad.jpg";
import lakeview from "../assets/lakeview.jpg";
import lakeview1 from "../assets/PHOTO-2023-06-18-10-33-50.jpg";
import lakeview2 from "../assets/PHOTO-2023-06-18-11-02-32.jpg";
import Footer from './Footer'; // Import the Footer component

const Main = () => {
  return (
    <>
      <main className="wrapper mainGallery">
        <div className="gallery">
          <div className="galleryImage">
            <img src={caribou} alt="image of caribou" />
          </div>
          <div className="galleryImage">
            <img
              src={downTheRoad}
              alt="long shot of road with hill in the backgorund"
            />
          </div>
          <div className="galleryImage">
            <img src={lakeview} alt="view of lake" />
          </div>
          <div className="galleryImage center-image">
            <img src={lakeview1} alt="image of a blackbear" />
          </div>
          <div className="galleryImage center-image">
            <img src={blackBear} alt="image of a blackbear" />
          </div>
          <div className="galleryImage center-image">
            <img src={lakeview2} alt="image of a blackbear" />
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Main;
