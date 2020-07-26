const Ship = (() => {
  const props = {
    length: 3,
    location: [],
    hit: [],
    sunk: false,
  };

  const setLength = num => {
    return (props.length = num);
  };

  return { props, setLength };
})();

export default Ship;
