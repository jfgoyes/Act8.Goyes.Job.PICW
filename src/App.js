// Listamos los elementos básicos del directorio elementos_basicos.
import Titulo from './components/elementos_basicos/Titulo';
import Imagen from './components/elementos_basicos/Imagen';
import Parrafo from './components/elementos_basicos/Parrafo';
import Enlace from './components/elementos_basicos/Enlace';

// Definimos los componentes del directorio listas_tablas.
import Lista from './components/listas_tablas/Lista';
import Tabla from './components/listas_tablas/Tabla';

// Especificamos los componentes del directorio formularios.
import Formulario from './components/formularios/Formulario';
import Boton from './components/formularios/Boton';

// Colocamos los componentes personalizados.
import InputText from './components/inputs_especializados/InputText';
import InputPassword from './components/inputs_especializados/InputPassword';
import InputEmail from './components/inputs_especializados/InputEmail';
import InputTel from './components/inputs_especializados/InputTel';
import InputURL from './components/inputs_especializados/InputURL';
import InputSearch from './components/inputs_especializados/InputSearch';

// Especificamos los estilos mediante bootstrap local.
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-4">

      {/* Se define la carátula de la página web. */}
      <div className="text-center" style={{ fontFamily: 'Times New Roman', lineHeight: '0.5', fontSize: '24px' }}>
        <Enlace
          href="https://www.espe.edu.ec/"
          texto={
            <Imagen
              src="https://www.espe.edu.ec/wp-content/uploads/2023/03/espe.png"
              alt="espelogocaratula"
            />
          }
        />
        <br /><br /><br /><br />
        <Parrafo texto="MODALIDAD EN LÍNEA" />
        <Parrafo texto="INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN" />
        <Parrafo texto="PROGRAMACIÓN INTEGRATIVA DE COMPONENTES WEB" />
        <Parrafo texto="Actividad 8 - SEGUNDO PARCIAL" />
        <br /><br />
        <Parrafo texto={<><strong>Estudiante:</strong> Job Francesco Goyes Arcalle</>} />
        <Parrafo texto={<><strong>TUTOR:</strong> Ing. Criollo Chanchicocha, Vilmer David</>} />
        <Parrafo texto={<><strong>NRC:</strong> 23407</>} />
        <Parrafo texto={<><strong>FECHA:</strong> 30/07/2025</>} />
        <br />
        <Enlace href="https://www.google.com/" texto="Enlace hacia Google" />
        <br /><br /><br />
        <Titulo texto="Ejemplo de los componentes en React que son reutilizables" nivel={3} />
      </div>

      {/* Se definen todas las implementaciones de los componentes especificados. */}
      <div className="mt-4" style={{ fontFamily: 'Times New Roman', lineHeight: '1.25', fontSize: '20px' }}>
        <Parrafo texto="Los componentes en React que son reutilizables, permiten 
        encapsular a los tradicionales elementos HTML, su función radica en que
        son algo similar a diferentes secciones de una construcción para una
        interfaz web, de este modo permiten la mejor organización del código." />
      </div>

      <div className="mt-5">
        {/* Se realiza un listado de ejemplo mediante el componente Lista. */}
        <Lista elementos={["1. Calzado", "2. Accesorios", "3. Electrodomésticos"]} />
        <br />

        {/* Se coloca una tabla de ejemplo para validar el componente Tabla. */}
        <Tabla
          cabecera={["Nombre", "Edad"]}
          datos={[
            ["Juan Carlos Oña González", 27],
            ["Darwin Manolo Torres Santander", 34],
            ["Katerine Roxana Cuestas Betancourt", 25],
            ["Mario Sebastian Cela Enriquez", 34]
          ]}
        />
        <br />

        {/* Se definen los componentes personalizados. */}
        <Formulario style={{ lineHeight: '1' }}>
          <InputText placeholder="Ingresar nombre de usuario" required minLenght={5} />
          <InputEmail placeholder="Ingresar correo electrónnico abc@correo.com" required />
          <InputPassword placeholder="Ingrese su contraseña" required minLenght={5} />
          <InputTel placeholder="Ingrese su número de teléfono" required pattern="[0-9]{10}" />
          <InputURL placeholder="Coloque el nombre de una web" required />
          <InputSearch placeholder="Buscar temas relevantes" />
          <Boton
            texto="Enviar formulario"
            onClick={() => alert('El formulario ha sido enviado correctamente.')}
          />
        </Formulario>
        <br />
      </div>
    </div>
  );
}

export default App;