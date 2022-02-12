import './App.css';
import Greeting from './Greeting';

const App = () => {

  const styles = {
    container: {
      padding: 30
      , backgroundColor: new Date().getSeconds() % 2 === 0 ? 'steelblue' : 'pink'
    }
    , heading: {
      textTransform: 'uppercase'
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
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
    </div>
  );
  /* <></> === JS fragment */
};

export default App;
