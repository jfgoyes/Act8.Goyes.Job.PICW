function Tabla({ cabecera, datos }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>{cabecera.map((col, i) => <th key={i}>{col}</th>)}</tr>
      </thead>
      <tbody>
        {datos.map((fila, i) => (
          <tr key={i}>
            {fila.map((celda, j) => <td key={j}>{celda}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;