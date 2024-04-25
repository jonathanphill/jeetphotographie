import "./App.css";
import GalleryContent from "./components/GalleryContent.jsx";
import Header from "./components/Header.jsx";

function App() {
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      <Header />
      <div className="gallery wrapper">
        <GalleryContent/>
      </div>
    </>
  );
}

export default App;
