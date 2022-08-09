import './App.css';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

/*
const mongoose = require("mongoose");
const DB = "mongodb+srv://Sanchit:Sanchit@123@cluster0.w6mq13n.mongodb.net/Crud?retryWrites=true&w=majority"
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:false
}).then(() => {
  alert("conn succ");
}).catch((err) => alert('con unsucc'));
*/

function App() {
  return (
    <>
    
    <Navbar title="Notes Taker" />

    <div className='container'>
      <TextForm heading="My Note"/>
    </div>
    

    </>
  );
}

export default App;
