// import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  console.log(process.env.REACT_APP_API_PRODUCTION);
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
}

export default App;
