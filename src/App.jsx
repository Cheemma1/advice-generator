import { useEffect, useState } from "react";
import Advice from "./Advice";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState([]);

  const getAdvice = () => {
    return axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => setAdvice([res.data.slip]));
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
    <h1>Advice Generator</h1>
      <Advice advice={advice} getAdvice={getAdvice} />
    </div>
  );
}

export default App;
