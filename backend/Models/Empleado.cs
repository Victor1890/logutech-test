using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend_lugotech.Models
{
	[Table("EMPLEADO")]
    public class Empleado
    {
		[Key]
		[Column("ID", Order = 0)]
		public int ID { get; set; }

		[Column("NOMBRE")]
		[MaxLength(50)]
		[Required(ErrorMessage = "Es obligatorio ingresar el nombre")]
		public string NOMBRE { get; set; }

		[Column("APELLIDO")]
		[MaxLength(50)]
		[Required(ErrorMessage = "Es obligatorio ingresar el APELLIDO")]
		public string APELLIDO { get; set; }

		[Column("EMAIL")]
		[MaxLength(100)]
		[Required(ErrorMessage = "Es obligatorio ingresar el EMAIL")]
		public string EMAIL { get; set; }

		[Column("TELEFONO")]
		[MaxLength(15)]
		[Required(ErrorMessage = "Es obligatorio ingresar el TELEFONO")]
		public string TELEFONO { get; set; }

		[Column("DIRECCION")]
		[MaxLength(100)]
		[Required(ErrorMessage = "Es obligatorio ingresar el DIRECCION")]
		public string DIRECCION { get; set; }

		[Column("DEPARTAMENTO")]
		[MaxLength(20)]
		[Required(ErrorMessage = "Es obligatorio ingresar el DEPARTAMENTO")]
		public string DEPARTAMENTO { get; set; }

		[Column("CARGO")]
		[MaxLength(20)]
		[Required(ErrorMessage = "Es obligatorio ingresar el CARGO")]
		public string CARGO { get; set; }

		[Column("SALARIO")]
		[Required(ErrorMessage = "Es obligatorio ingresar el SALARIO")]
		public double SALARIO { get; set; }

		[Column("FECHA_NACIMIENTO")]
		public DateTime FECHA_NACIMIENTO { get; set; }

		[Column("PERSONAS_CONTACTOS")]
		public string PERSONAS_CONTACTOS { get; set; }
	}
}
