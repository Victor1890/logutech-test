import React from "react";
import { Table } from "react-bootstrap";
import withLoading from "../HOC/withLoading";
import ItemEmpleado from "../EmpleadoComponents/ItemEmpleado";

const TablaEmpleado = ({ empleado }) => (
  <Table striped bordered hover>
    <thead>
      <tr className='text-center'>
        <th>ID</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Email</th>
        <th>Teléfono</th>
        <th>Dirección</th>
        <th>Departamento</th>
        <th>Cargo</th>
        <th>Salario</th>
        <th>Fecha de Nacimiento</th>
        <th>Personas de Contactos</th>
      </tr>
    </thead>
    <tbody className='text-center'>
      {empleado.map((empleado) => (
        <ItemEmpleado key={empleado.id} {...empleado} />
      ))}
    </tbody>
  </Table>
);
export default withLoading("empleado", TablaEmpleado);
