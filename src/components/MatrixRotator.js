"use client";
import { useState } from "react";
import Matrix from "./Matrix";

const MatrixRotator = () => {
  const [inputValue, setInputValue] = useState("");
  const [matrix, setMatrix] = useState([]);
  const [rotatedMatrix, setRotatedMatrix] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Maneja el cambio de entrada en el textarea
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setErrorMessage("");
  };

  // Valida que la matriz tenga filas de igual longitud y cada fila tenga al menos un elemento
  const validateMatrix = (matrix) => {
    if (!Array.isArray(matrix) || !matrix.length) {
      return "El formato de la matriz no es válido.";
    }
    const rowLength = matrix[0].length;
    if (rowLength === 0) {
      return "Cada fila de la matriz debe tener al menos un elemento.";
    }
    if (
      !matrix.every((row) => Array.isArray(row) && row.length === rowLength)
    ) {
      return "Todas las filas de la matriz deben tener la misma longitud.";
    }
    return null;
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
      const validationError = validateMatrix(parsedMatrix);
      if (validationError) {
        setErrorMessage(validationError);
        setMatrix([]);
        setRotatedMatrix([]);
      } else {
        setMatrix(parsedMatrix);
        setRotatedMatrix(rotateMatrixCounterClockwise(parsedMatrix));
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage(
        "Formato de matriz no válido. Asegúrate de que es un array de arrays con filas de igual longitud y al menos un elemento en cada fila."
      );
      setMatrix([]);
      setRotatedMatrix([]);
    }
  };

  return (
    <div className="matrix-rotator">
      <h1 className="matrix-rotator-title">
        Rotar Matriz 90 Grados en sentido Antihorario
      </h1>
      <div className="matrix-input">
        <textarea
          className="textarea"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingresa la matriz como un array JSON"
        ></textarea>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className="button" onClick={handleRotate}>
          Rotar Matriz
        </button>
      </div>

      {matrix.length > 0 && (
        <div className="matrix-container">
          {matrix.length > 0 && (
            <Matrix matrix={matrix} title="Matriz Original" />
          )}
          {rotatedMatrix.length > 0 && (
            <Matrix matrix={rotatedMatrix} title="Matriz Rotada" />
          )}
        </div>
      )}
    </div>
  );
};

export default MatrixRotator;
