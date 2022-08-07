import './App.css';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

function App() {
  return (
    <>
    
    <Navbar title="Notes Taker" />

    <div className='container'>
      <TextForm heading="MyNote 1"/>
    </div>
    

    </>
  );
}

export default App;
