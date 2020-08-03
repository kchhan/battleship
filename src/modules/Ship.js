const Ship = (() => {
  const props = {
    length: undefined,
    location: [],
    hit: [],
    sunk: false,
  };

  const setLength = num => {
    return (props.length = num);
  };

  const setLocation = ([...arr]) => {
    return (props.location = arr);
  };

  const hit = coordinate => {
    return props.hit.push(coordinate);
  };

  const isSunk = () => {
    return (props.hit = props.location) && (props.length = props.hit.length)
      ? (props.sunk = true)
      : (props.sunk = false);
  };

  return { props, setLength, setLocation, hit, isSunk };
})();

export default Ship;
