import { Download, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Available for freelance & full-time
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Hi, I’m <span className="text-blue-600">Your Name</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              System Administrator and Software Engineer specializing in Linux, cloud infrastructure, and building reliable backend services. I design, automate, and scale systems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-gray-900 px-4 py-2 text-white shadow hover:bg-gray-800"
              >
                <Download className="h-4 w-4" /> CV
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-gray-600">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-gray-900">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#contact" aria-label="Email" className="hover:text-gray-900">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto h-64 w-64 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-2xl md:h-80 md:w-80">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
                <div className="h-40 w-40 rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 text-white shadow-xl ring-8 ring-white">
                  <div className="flex h-full w-full items-center justify-center text-center">
                    <div>
                      <div className="text-2xl font-bold">SA</div>
                      <div className="text-xs text-gray-200">SysAdmin • SWE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-200/60 blur-2xl" />
            <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-purple-200/60 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
