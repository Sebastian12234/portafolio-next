const habilidades = [
  "Node.js", "JavaScript", "TypeScript",
  "SQL Server", "PostgreSQL", "Power BI",
  "Git", "GitHub", "REST APIs",
  "React", "Next.js", "Docker"
]

export default function Habilidades() {
  return (
    <section id="habilidades" className="habilidades">
      <h2>Habilidades</h2>
      <ul>
        {habilidades.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}