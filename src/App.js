
import './App.css';
import Demo from './componet/Demo';
import Usercontextprovider from './Context/Usercontextprovider';
function App() {
  return (
    <>
      <Usercontextprovider >
        <Demo />
      </Usercontextprovider>
    </>
  );
}

export default App;
