import "./App.css";
import { createContext } from "react";
import Child1 from "./Components/Child1";
const createcontext = createContext();

function App() {
  const [naam, setNaam] = useState({name : "punee"});

  return (
    <>
      <createcontext.Provider value={naam}>
        <Child1 />
      </createcontext.Provider>
    </>
  );
}
export {createcontext};

export default App;
