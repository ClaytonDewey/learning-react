const Greeting = (props) => {

  // console.log(props);

  return(
    <>
      <h2>Hello {props.name} ! ! !</h2>
      <h3>{props.name}'s favorite number is {props.favoriteNumber}.</h3>
      <h3>{props.name}'s favorite number + 10 is {props.favoriteNumber + 10}.</h3>
      <h3>
        {props.name}'s favorite colars are:
      </h3>
      <ul>
        {props.favoriteColors && props.favoriteColors.map((x,idx)=> <li key={idx}>{x}</li>)}
        {!props.favoriteColors && <li>None</li>}
      </ul>
    </>
  );
};

export default Greeting;