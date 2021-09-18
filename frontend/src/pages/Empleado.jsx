import { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import _API from "../components/config/api";

const Empleado = (props) => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    cargo: "",
    departamento: "",
    direccion: "",
    email: "",
    fechA_NACIMIENTO: "",
    personaS_CONTACTOS: "",
    salario: 0,
    telefono: "",
  });

  const setDataForm = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newData = {
      ...form,
      salario: parseFloat(form.salario),
    };
    axios
      .post(_API, newData)
      .then(() => {
        toggleAlert("error", "exito");
        setForm({
          nombre: "",
          apellido: "",
          cargo: "",
          departamento: "",
          direccion: "",
          email: "",
          fechA_NACIMIENTO: "",
          personaS_CONTACTOS: "",
          salario: 0,
          telefono: "",
        });

        window.location.href = '/LugoTech'
      })
      .catch((e) => {
        toggleAlert("exito", "error");
      });

    const toggleAlert = (before, now) => {
      document.getElementById(`mensaje-${before}`).setAttribute("hidden", true);
      document.getElementById(`mensaje-${now}`).removeAttribute("hidden");
    };
  };

  useEffect(() => {}, []);

  return (
    <Container style={{ marginTop: "20px" }}>
      <div className='boder p-5 bg-light'>
        <h1>Registrar Empleado</h1>
      </div>
      <Link className='btn btn-info mt-4 mb-2' to='/LugoTech/'>
        Volver a listado de empleados
      </Link>
      <div className='alert alert-danger' id='mensaje-error' hidden>
        <span className='h6'>
          Todos los campos son necesarios para registrar un empleado
        </span>
      </div>
      <div className='alert alert-success' id='mensaje-exito' hidden>
        <span className='h6'>Venta agregada correctamente</span>
      </div>

      <Form onSubmit={handleSubmit} className='row row-cols-2'>
        <Form.Group className='col'>
          <Form.Label htmlFor='nombre'>Nombre</Form.Label>
          <Form.Control
            required
            name='nombre'
            type='text'
            onChange={(e) => setDataForm("nombre", e.target.value)}
          />
        </Form.Group>
        <Form.Group className='col'>
          <Form.Label htmlFor='apellido'>Apellido</Form.Label>
          <Form.Control
            required
            name='apellido'
            value={form.apellido}
            type='text'
            onChange={(e) => setDataForm("apellido", e.target.value)}
          />
        </Form.Group>
        <Form.Group className='col'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            required
            value={form.email}
            name='email'
            type='email'
            onChange={(e) => setDataForm("email", e.target.value)}
          />
        </Form.Group>
        <Form.Group className='col'>
          <Form.Label htmlFor='telefono'>Teléfono</Form.Label>
          <Form.Control
            required
            name='telefono'
            type='number'
            value={form.telefono}
            onChange={(e) => setDataForm("telefono", e.target.value)}
          />
        </Form.Group>

        <Form.Group className='col'>
          <Form.Label htmlFor='direccion'>Dirección</Form.Label>
          <Form.Control
            required
            name='direccion'
            type='text'
            value={form.direccion}
            onChange={(e) => setDataForm("direccion", e.target.value)}
          />
        </Form.Group>
        <Form.Group className='col'>
          <Form.Label htmlFor='departamento'>Departamento</Form.Label>
          <Form.Control
            required
            name='departamento'
            type='text'
            value={form.fecha}
            onChange={(e) => setDataForm("departamento", e.target.value)}
          />
        </Form.Group>
        <Form.Group className='col'>
          <Form.Label htmlFor='cargo'>Cargo</Form.Label>
          <Form.Control
            required
            name='cargo'
            type='text'
            value={form.cargo}
            onChange={(e) => setDataForm("cargo", e.target.value)}
          />
        </Form.Group>
        <Form.Group className='col'>
          <Form.Label htmlFor='salario'>Salario</Form.Label>
          <Form.Control
            required
            name='salario'
            type='text'
            value={form.salario}
            onChange={(e) => setDataForm("salario", e.target.value)}
          />
        </Form.Group>
        <Form.Group className='col'>
          <Form.Label htmlFor='fechA_NACIMIENTO'>
            Fecha de Nacimiento (Opcional)
          </Form.Label>
          <Form.Control
            name='fechA_NACIMIENTO'
            type='date'
            value={form.fechA_NACIMIENTO}
            onChange={(e) => setDataForm("fechA_NACIMIENTO", e.target.value)}
          />
        </Form.Group>
        <Form.Group className='col'>
          <Form.Label htmlFor='personaS_CONTACTOS'>
            Personas de Contacto (Opcional) (Dividirlo por coma)
          </Form.Label>
          <Form.Control
            name='personaS_CONTACTOS'
            type='text'
            value={form.personaS_CONTACTOS}
            onChange={(e) => setDataForm("personaS_CONTACTOS", e.target.value)}
          />
        </Form.Group>
        <Form.Group className='col-12 text-right'>
          <Button variant='success' type='submit'>
            Registrar Empleado
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Empleado;
