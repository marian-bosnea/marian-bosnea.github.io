import './App.css'

function App() {
  const projects = [

    {
      id: 'truckers-companion',
      title: 'Truckers Companion',
      description: 'An AI-powered mobile application designed to enhance truck drivers\' safety, well-being, and efficiency on the road. Built with Flutter as a functional prototype.',
      tags: ['Flutter', 'Prototype', 'Logistics'],
      theme: 'dark',
      mockups: [
        { src: '/truckers-companion/home_screen_outside_workday-portrait.png', alt: 'Home Screen Outside Workday' },
        { src: '/truckers-companion/home_screen_during_workday-portrait.png', alt: 'Home Screen During Workday' },
        { src: '/truckers-companion/routing-portrait.png', alt: 'Routing' },
        { src: '/truckers-companion/ai_assistant-portrait.png', alt: 'AI Assistant' },
        { src: '/truckers-companion/driver_wellbeing-portrait.png', alt: 'Driver Wellbeing' },
        { src: '/truckers-companion/safety-portrait.png', alt: 'Safety' },
        { src: '/truckers-companion/statistics-portrait.png', alt: 'Statistics' },
        { src: '/truckers-companion/reports-portrait.png', alt: 'Reports' },
        { src: '/truckers-companion/documents-portrait.png', alt: 'Documents' },
        { src: '/truckers-companion/tools-portrait.png', alt: 'Tools' },
        { src: '/truckers-companion/settings-portrait.png', alt: 'Settings' },
      ]
    },
    {
      id: 'student-marketplace',
      title: 'Student Marketplace',
      description: 'A comprehensive platform connecting students for buying, selling, and exchanging goods and services within the campus community. Built with Flutter and fully functional.',
      tags: ['Flutter', 'Full-Stack Application', 'E-commerce'],
      theme: 'light',
      mockups: [
        { src: '/student-marketplace/landing_page.jpeg', alt: 'Landing Page' },
        { src: '/student-marketplace/profile_page.jpeg', alt: 'Profile Page' },
        { src: '/student-marketplace/order_page.jpeg', alt: 'Order Page' },
        { src: '/student-marketplace/edit_post_page.jpeg', alt: 'Edit Post Page' },
        { src: '/student-marketplace/private_chat_page.jpeg', alt: 'Private Chat' },
      ]
    }
  ]

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="avatar-container">
            <img src="/avatar.jpeg" alt="Marian Bosnea" className="avatar" />
          </div>
          <h1 className="hero-title">Marian Bosnea</h1>
          <p className="hero-subtitle">Mobile App Developer</p>
          <div className="hero-description">
            <p>📱 <strong>Frontend:</strong> Expert in Flutter (Dart), Swift, and Kotlin; architected mobile solutions for 500k+ users.</p>
            <p>⚙️ <strong>Backend:</strong> Proficient in .NET/C# and Node.js, with a focus on real-time connectivity via MQTT (Blockbax) and BLE.</p>
            <p>🔒 <strong>Security & Infrastructure:</strong> Implementing FIDO2/Passkey authentication and managing scalable deployments on Azure App Services with SQL Server.</p>
            <p>🚗 <strong>Specialized Integrations:</strong> Bringing apps to the car via Android Auto and building embedded UIs using LVGL.</p>
          </div>
        </div>
      </section>

      {/* Projects Sections */}
      {projects.map((project, projectIndex) => (
        <section
          key={project.id}
          className={`project-section ${project.theme}`}
        >
          <div className="container">
            <div className="project-card">
              <div className="project-intro">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mockups-grid">
                {project.mockups.map((mockup, index) => (
                  <div
                    key={index}
                    className="mockup-wrapper"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <img
                      src={mockup.src}
                      alt={mockup.alt}
                      className="mockup-image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 Marian Bosnea. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
