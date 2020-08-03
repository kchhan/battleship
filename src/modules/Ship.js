const Ship = (name, length, location) => {
  const props = {
    name,
    length,
    location,
    hit: [],
    sunk: false,
  };

  const hit = coordinate => {
    return props.hit.push(coordinate);
  };

  const isSunk = () => {
    // Sorts location and hit array numerically so it can be parsed into a string and compared.
    const hitValues = props.hit.sort((a, b) => {
      return a - b;
    });
    const locationValues = props.location.sort((a, b) => {
      return a - b;
    });
    return JSON.stringify(hitValues) === JSON.stringify(locationValues)
      ? (props.sunk = true)
      : (props.sunk = false);
  };

  return { props, hit, isSunk };
};

export default Ship;
