function Boton({ texto, onClick }) {
  return <button className="btn btn-primary" onClick={onClick}>{texto}</button>;
}

export default Boton;