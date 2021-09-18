using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace backend_lugotech.Migrations
{
    public partial class MigrationInitial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EMPLEADO",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NOMBRE = table.Column<string>(maxLength: 50, nullable: false),
                    APELLIDO = table.Column<string>(maxLength: 50, nullable: false),
                    EMAIL = table.Column<string>(maxLength: 100, nullable: false),
                    TELEFONO = table.Column<string>(maxLength: 15, nullable: false),
                    DIRECCION = table.Column<string>(maxLength: 100, nullable: false),
                    DEPARTAMENTO = table.Column<string>(maxLength: 20, nullable: false),
                    CARGO = table.Column<string>(maxLength: 20, nullable: false),
                    SALARIO = table.Column<double>(nullable: false),
                    FECHA_NACIMIENTO = table.Column<DateTime>(nullable: false),
                    PERSONAS_CONTACTOS = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EMPLEADO", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EMPLEADO");
        }
    }
}
