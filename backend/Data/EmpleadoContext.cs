using backend_lugotech.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend_lugotech.Data
{
    public class EmpleadoContext: DbContext
    {
        public EmpleadoContext(DbContextOptions<EmpleadoContext> options):base(options){}

        public DbSet<Empleado> Empleados { get; set; }
    }
}
