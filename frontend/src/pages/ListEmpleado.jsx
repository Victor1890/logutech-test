import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import _API from "../components/config/api";
import TablaEmpleado from "../components/organisims/TablaEmpleado";

const ListEmpleado = () => {
  const [empleado, setEmpleado] = useState([]);

  const updateData = async () => {
    await axios.get(_API).then((res) => setEmpleado(res.data));
  };

  useEffect(() => {
    updateData();
  }, [empleado]);

  return (
    <Container style={{ marginTop: "20px" }}>
      <div className='boder p-5 bg-light'>
        <h1>Lista de empleados</h1>
      </div>
      <Link
        className='btn btn-success mt-4 mb-2'
        to='/LugoTech/Empleado/registro'
      >
        Registrar Empleado
      </Link>

      <TablaEmpleado empleado={empleado} />
    </Container>
  );
};
export default ListEmpleado;
