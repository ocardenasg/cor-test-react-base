import React from 'react';

import getCoincidences from '../misc/getCoincidences'

const SELECTED_MATRIX = 2;

export default function Matrix() {
  const [resources, setResources] = React.useState(null);

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/ocardenasg/cor-test-react-base/master/assets/resources.json').then(response => response.json())
    .then(({ resources }) => setResources(resources))
    .catch(console.trace)
  }, []);

  if (!resources) return <div>loading...</div>

  return resources.map((matrix) => {
    const coincidences = getCoincidences(matrix);
    return (
      <div >
        <h3>Matriz:</h3>
        <div className="container" style={{ gridTemplateColumns: `repeat(${matrix[0].length}, auto)` }}>
          {matrix.reduce((acc, row) => {
            const elements = row.map(element => <span className="element">{element}</span>);
            return [...acc, elements]
         }, [])}
        </div>
      <h3>Coincidencias: {coincidences}</h3>
    </div>
    )
  })
}