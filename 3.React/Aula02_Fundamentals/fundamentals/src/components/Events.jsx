const Events = () => {
  const handleMyClick = () => {
    alert("Hello World! from function");
  };
  return (
    <>
      <button onClick={() => alert("Hello World!")}>Click me!</button>
      <button onClick={handleMyClick}>Click me function!</button>
      <button
        onClick={() => {
          // eslint-disable-next-line no-constant-condition
          if (true) {
            console.log("Essa função não deveria existir ;)");
          }
        }}
      >
        Click me console!
      </button>
    </>
  );
};
export default Events;
