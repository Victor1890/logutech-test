import { useState } from "react";
import { Button } from "react-bootstrap";
import EmpleadoDetails from "../EmpleadoDetails";

const ItemEmpleado = ({
  id,
  nombre,
  apellido,
  cargo,
  departamento,
  direccion,
  email,
  fechA_NACIMIENTO,
  personaS_CONTACTOS,
  salario,
  telefono,
}) => {
  const [modal, setModal] = useState({
    modalEdit: false,
    modalDelete: false,
    EmpleadoDetails: false,
  });

  const handlDetails = () => setModal({ EmpleadoDetails: true });
  const handlDetailsClose = () => setModal({ EmpleadoDetails: false });

  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{email}</td>
      <td>{telefono}</td>
      <td>{direccion}</td>
      <td>{departamento}</td>
      <td>{cargo}</td>
      <td>{salario}</td>
      <td>{fechA_NACIMIENTO}</td>
      <td>{personaS_CONTACTOS ?? personaS_CONTACTOS.map((a) => a)}</td>
      <td className='d-flex justify-content-center'>
        <Button variant='info' className='ml-2' onClick={handlDetails}>
          <i className='fa fa-list'></i>
        </Button>
      </td>
      <EmpleadoDetails
        id={id}
        nombre={nombre}
        apellido={apellido}
        cargo={cargo}
        departamento={departamento}
        direccion={direccion}
        email={email}
        fechA_NACIMIENTO={fechA_NACIMIENTO}
        personaS_CONTACTOS={personaS_CONTACTOS}
        salario={salario}
        telefono={telefono}
        showDetails={modal.EmpleadoDetails}
        closeDetails={handlDetailsClose}
      />
    </tr>
  );
};

export default ItemEmpleado;
