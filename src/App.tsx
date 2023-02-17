import "./App.css";
import CurrentImageGallery from "./components/CurrentImageGallery";
import GalleryGrid from "./components/Gallery";
import ModalExpandImage from "./components/ModalExpandImage";

function App() {
  return (
    <>
      <ModalExpandImage />
      <CurrentImageGallery />
      <GalleryGrid />
    </>
  );
}

export default App;
