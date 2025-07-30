function Titulo({ texto, nivel }) {
  const Tag = `h${nivel}`; // dinámica de h1-h6
  return <Tag className="fw-bold text-dark">{texto}</Tag>;
}

export default Titulo;