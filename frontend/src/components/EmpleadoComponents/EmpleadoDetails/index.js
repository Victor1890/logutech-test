import axios from "axios";
import _API from "../../config/api";
import { Modal, Button } from "react-bootstrap";

const EmpleadoDetails = ({
  id,
  nombre,
  apellido,
  cargo,
  departamento,
  email,
  showDetails,
  closeDetails,
}) => {
  const handlEliminarEmpleado = async (id) => {
    await axios
      .delete(`${_API}/${id}`)
      .then(() => (window.location.href = "/LugoTech"));
  };

  return (
    <Modal show={showDetails} onHide={closeDetails} centered>
      <Modal.Header>
        <Modal.Title>Empleado numero #{id}</Modal.Title>
      </Modal.Header>

      <Modal.Body className='row row-cols-2 m-auto p-4'>
        <span>
          <h2 className='h4'>Nombre</h2>
          {nombre ? (
            `${nombre} ${apellido}`
          ) : (
            <i className='fa fa-spinner fa-spin' />
          )}
        </span>
        <span>
          <h2 className='h4'>Departamento</h2>
          {departamento ?? <i className='fa fa-spinner fa-spin' />}
        </span>
        <span>
          <h2 className='h4'>Cargo</h2>
          {cargo ?? <i className='fa fa-spinner fa-spin' />}
        </span>
        <span>
          <h2 className='h4'>Email</h2>
          {email ?? <i className='fa fa-spinner fa-spin' />}
        </span>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='danger' onClick={() => handlEliminarEmpleado(id)}>
          Borrar
        </Button>
        <Button variant='secondary' onClick={closeDetails}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmpleadoDetails;
