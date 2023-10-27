import './Main.css'
import caribou from '../assets/caribou.jpg';
import blackBear from '../assets/blackBear.jpg';
import downTheRoad from '../assets/downTheRoad.jpg';
import lakeview from "../assets/lakeview.jpg";


const Main = () => {
  return (
    <main className='wrapper mainGallery'>
      <div className='gallery'>
        <img src={caribou} alt="" />
        <img src={blackBear} alt="" />
        <img src={downTheRoad} alt="" />
        <img src={lakeview} alt="" />
      </div>
    </main>
  );
}

export default Main;