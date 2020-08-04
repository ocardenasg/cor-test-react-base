function hasTextOIE(str) {
  let count = 0;
  count += (str.match(/OIE/g) || []).length;
  count += (str.match(/EIO/g) || []).length;
  return count;
}

export default function getCoincidences(matrix) {
  // create some examples of matrix
  const [row] = matrix;
  const transposed = row.map((value, column) =>
    matrix.map((row) => row[column])
  );

  let ascendingMatrix = [];
  let descendingMatrix = [];
  for (let x = 0; x < matrix.length; x++) {
    const row = matrix[x];
    ascendingMatrix.push(row[x]);
    descendingMatrix.push(row[row.length - x - 1]);
  }

  // counting coincidences
  let coincidences = 0;
  for (let row of matrix) {
    coincidences += hasTextOIE(row.join(""));
  }
  for (let row of transposed) {
    coincidences += hasTextOIE(row.join(""));
  }
  coincidences += hasTextOIE(ascendingMatrix.join(""));
  coincidences += hasTextOIE(descendingMatrix.join(""));

  return coincidences;
}