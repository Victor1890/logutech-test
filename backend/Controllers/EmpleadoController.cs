using backend_lugotech.Data;
using backend_lugotech.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend_lugotech.Controllers
{
    [Route("api/empleado")]
    [ApiController]
    public class EmpleadoController : ControllerBase
    {
        private readonly EmpleadoContext _context;

        public EmpleadoController(EmpleadoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empleado>>> Get()
        {
            return await _context.Empleados.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Empleado>>> Get(int id)
        {
            var empleadoItem = await _context.Empleados.FindAsync(id);

            if(empleadoItem == null)
            {
                return NotFound();
            }
            return Ok(empleadoItem);
        }


        [HttpPost]
        public async Task<ActionResult<IEnumerable<Empleado>>> Post([FromBody] Empleado empleado)
        {
            _context.Empleados.Add(empleado);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { ID = empleado.ID }, empleado);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Empleado empleado)
        {
            if (id != empleado.ID)
                return BadRequest();

            _context.Entry(empleado).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var empleadoItem = await _context.Empleados.FindAsync(id);

            if (empleadoItem == null)
                return BadRequest();

            _context.Empleados.Remove(empleadoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
