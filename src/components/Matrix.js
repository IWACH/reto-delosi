const Matrix = ({ matrix, title }) => {
  return (
    <div className="matrix">
      <h2 className="matrix-title">{title}</h2>
      <table className="matrix-table">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td className="matrix-td" key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Matrix;
