import './App.css';
import Greeting from './Greeting';

const App = () => {
  return (
    <>
      <h1>
        Hello React ! ! !
      </h1>
      <Greeting
        name="Larry"
        favoriteNumber={1}
      />
      <Greeting
        name='Curly'
        favoriteNumber={42} 
        favoriteColors={["Red", "Green", "Blue"]}
      />
      <Greeting
        name='Moe'
        favoriteNumber={3} 
      />
    </>
  );
  /* <></> === JS fragment */
};

export default App;
