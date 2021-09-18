import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../../logo.png'
import {Link} from 'react-router-dom'

const CustomHeader = ()=>(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top' className='d-flex justify-content-between p-3'>
        <Link to="/LugoTech/" className='mr-5 ml-5 navbar-brand'>
           <img src={logo} alt="Logo" className='img-fluid ' style={{width:'50px'}}/> CRUD Empleado
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-self-end' >
            <Nav>
                <Link className='nav-link'to="/LugoTech/Empleado">Empleados</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default CustomHeader