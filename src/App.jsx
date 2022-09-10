import MiApi from "./components/MiApi";
import image from "./img/rickandmortylogo.png"

function App() {
  return (
    <div className="text-white" >
    <img src={image} className="logo" /> 
     <MiApi />
    </div>
  );
}

export default App;
