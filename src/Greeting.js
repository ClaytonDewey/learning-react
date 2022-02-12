const Greeting = ({
  name
  , favoriteNumber
  , favoriteColors
}) => {

  // console.log(props);

  return (
    <>
      <h2>Hello {name} ! ! !</h2>
      <h3>{name}'s favorite number is {favoriteNumber}.</h3>
      <h3>{name}'s favorite number + 10 is {favoriteNumber + 10}.</h3>
      <h3>
        {name}'s favorite colars are:
      </h3>
      <ul>
        {favoriteColors && favoriteColors.map((x, idx) => <li key={idx}>{x}</li>)}
        {!favoriteColors && <li>None</li>}
      </ul>
    </>
  );
};

export default Greeting;