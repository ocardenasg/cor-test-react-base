import React from 'react';

import getCoincidences from '../misc/getCoincidences'

const SELECTED_MATRIX = 2;

export default function Matrix() {
  const [matrix, setMatrix] = React.useState([]);
  const [coincidences, setCoincidences] = React.useState(0);

  React.useEffect(() => {
    fetch('../assets/resources.json').then(console.log).catch(console.trace)
  }, []);

  return (
    <div>{coincidences}</div>
  )
}