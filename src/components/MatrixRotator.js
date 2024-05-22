"use client";
import { useState } from "react";
import Matrix from "./Matrix";

const MatrixRotator = () => {
  const [inputValue, setInputValue] = useState("");
  const [matrix, setMatrix] = useState([]);
  const [rotatedMatrix, setRotatedMatrix] = useState([]);

  // Maneja el cambio de entrada en el textarea
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Valida que la matriz tenga filas de igual longitud
  const validateMatrix = (matrix) => {
    if (!Array.isArray(matrix) || !matrix.length) return false;
    const rowLength = matrix[0].length;
    return matrix.every(
      (row) => Array.isArray(row) && row.length === rowLength
    );
  };

  // Realizamos una transposición de la matriz
  const transposeMatrix = (matrix) => {
    const numCols = matrix[0].length;
    return Array.from({ length: numCols }, (_, colIndex) =>
      matrix.map((row) => row[colIndex])
    );
  };

  // Rota la matriz 90 grados en sentido antihorario
  const rotateMatrixCounterClockwise = (matrix) => {
    const transposedMatrix = transposeMatrix(matrix);
    return transposedMatrix.reverse();
  };

  // Maneja la acción de rotar la matriz
  const handleRotate = () => {
    try {
      // Intenta parsear la entrada como una matriz
      const parsedMatrix = JSON.parse(inputValue);
      if (validateMatrix(parsedMatrix)) {
        setMatrix(parsedMatrix);
        setRotatedMatrix(rotateMatrixCounterClockwise(parsedMatrix));
      } else {
        throw new Error("Formato de matriz no válido");
      }
    } catch (error) {
      console.error("Error al parsear la matriz:", error.message);
      setMatrix([]);
      setRotatedMatrix([]);
    }
  };

  return (
    <div className="matrix-rotator">
      <h1 className="matrix-title">Rotar Matriz 90 Grados en sentido Antihorario</h1>
      <div className="matrix-input">
        <textarea
          className="textarea"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingresa la matriz como un array JSON"
        ></textarea>
        <button className="button" onClick={handleRotate}>Rotar Matriz</button>
      </div>

      {matrix.length > 0 && (
        <div className="matrix-container">
          <Matrix matrix={matrix} title="Matriz Original" />
          {rotatedMatrix.length > 0 && (
            <Matrix matrix={rotatedMatrix} title="Matriz Rotada" />
          )}
        </div>
      )}
    </div>
  );
};

export default MatrixRotator;
