const proyectos = [
  {
    titulo: "API de Gestión de Tareas",
    descripcion: "API REST completa con autenticación JWT, Node.js, TypeScript y PostgreSQL.",
    tags: ["Node.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/Sebastian12234/api-tareas"
  },
  {
    titulo: "Dashboard de Métricas",
    descripcion: "Sistema de visualización de métricas de pruebas automatizadas con Power BI.",
    tags: ["Power BI", "SQL Server", "Node.js"],
    github: "#"
  },
  {
    titulo: "API E-commerce",
    descripcion: "Backend completo de tienda online con roles, pagos y gestión de inventario.",
    tags: ["Node.js", "PostgreSQL", "Docker"],
    github: "#"
  }
]

export default function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.titulo} className="card">
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <div className="tags">
              {proyecto.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a href={proyecto.github} target="_blank">Ver en GitHub →</a>
          </div>
        ))}
      </div>
    </section>
  )
}