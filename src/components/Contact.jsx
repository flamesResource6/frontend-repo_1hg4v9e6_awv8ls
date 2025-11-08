import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Message sent! I will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-blue-50 p-2 text-blue-600"><Mail className="h-5 w-5" /></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Let’s work together</h2>
            <p className="mt-1 text-gray-600">Tell me about your project, role, or anything you’d like to build.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none" required />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none" required />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none" required />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow hover:bg-blue-700">
              <Send className="h-4 w-4" /> Send Message
            </button>
            <p className="text-sm text-green-600">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
