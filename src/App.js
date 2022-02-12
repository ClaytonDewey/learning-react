import './App.css';

const Greeting = () => {
  return(
    <h2>Hello Unamed Stooge ! ! !</h2>
  );
};

const App = () => {
  return (
    <>
      <h1>
        Hello React ! ! !
      </h1>
      <h1>
        Hello Larry ! ! !
      </h1>
      <Greeting />
    </>
  );
  /* <></> === JS fragment */
};

export default App;
