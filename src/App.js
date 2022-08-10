import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"
import DataBaseOperations from "./components/DataBaseOperations"

function App() {

  //interface 
  return (
    <>
      <Navbar title="Notes Taker" />
      <div className='container'>
        <TextForm heading="My Note" />
      </div>
    </>
  );

}

export default App;
