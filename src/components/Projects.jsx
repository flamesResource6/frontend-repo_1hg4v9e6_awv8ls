const projects = [
  {
    title: 'Kubernetes Homelab',
    description: 'Multi-node cluster with GitOps deployment, monitoring (Prometheus/Grafana), and secure ingress.',
    tags: ['Kubernetes', 'Helm', 'Grafana', 'GitOps'],
    link: '#',
  },
  {
    title: 'FastAPI Microservices',
    description: 'Set of containerized services with API gateway, JWT auth, and CI/CD pipeline.',
    tags: ['FastAPI', 'Docker', 'NGINX', 'CI/CD'],
    link: '#',
  },
  {
    title: 'Infrastructure as Code',
    description: 'Provisioned cloud resources with Terraform, automated backups, and observability.',
    tags: ['Terraform', 'Cloud', 'Monitoring'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Highlighted Projects</h2>
            <p className="mt-2 text-gray-600">A snapshot of recent work and experiments.</p>
          </div>
          <a href="#contact" className="text-blue-600 hover:text-blue-700">Need something similar?</a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
                <div className="flex h-full items-center justify-center text-gray-400 group-hover:text-gray-500">Preview</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
