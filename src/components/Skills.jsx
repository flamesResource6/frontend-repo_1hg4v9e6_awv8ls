import { Server, Code2, Cloud, Shield } from 'lucide-react'

const skills = [
  {
    icon: Server,
    title: 'System Administration',
    items: ['Linux (Debian/Ubuntu/RHEL)', 'Shell scripting & automation', 'Monitoring & logging', 'Backup & recovery'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    items: ['Docker & Kubernetes', 'CI/CD (GitHub Actions)', 'Terraform basics', 'NGINX/Apache'],
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    items: ['Python (FastAPI)', 'Node.js', 'REST APIs', 'Testing & documentation'],
  },
  {
    icon: Shield,
    title: 'Security',
    items: ['Hardening & patching', 'Identity & access', 'TLS/SSL', 'OWASP awareness'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Core Skills</h2>
      <p className="mt-2 text-gray-600">What I use to build, secure, and scale systems.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ icon: Icon, title, items }) => (
          <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-600">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
