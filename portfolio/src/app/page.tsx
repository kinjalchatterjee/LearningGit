import React from 'react'

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-700">
          Hi! I’m Kinjal Chatterjee, a passionate developer focused on creating
          impactful and user-friendly applications.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600 mb-4">
              Brief description of the project and what it does.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Learn More
            </a>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600 mb-4">
              Brief description of the project and what it does.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Learn More
            </a>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="text-gray-600 mb-4">
              Brief description of the project and what it does.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-700 mb-4">
          Interested in collaborating or just want to say hi? Feel free to reach
          out!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="text-blue-600 hover:underline"
        >
          your.email@example.com
        </a>
      </section>
    </div>
  )
}

export default Page
