import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const observerRef = useRef(null)

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const projects = [
    {
      id: 'irona',
      title: 'Irona',
      description: 'A comprehensive fitness tracker app for iPhone and Apple Watch, providing real-time health monitoring and workout tracking. Built with Swift for native iOS and watchOS experience.',
      tags: ['Swift', 'iOS', 'watchOS', 'Health & Fitness'],
      theme: 'light',
      platforms: [
        {
          name: 'iPhone',
          mockups: [
            { src: '/irona/iPhone/ios_1.png', alt: 'iPhone Home Screen' },
            { src: '/irona/iPhone/ios_2.png', alt: 'iPhone Workout Tracking' },
            { src: '/irona/iPhone/ios_3.png', alt: 'iPhone Activity Stats' },
            { src: '/irona/iPhone/ios_4.png', alt: 'iPhone Progress View' },
            { src: '/irona/iPhone/ios_5.png', alt: 'iPhone Settings' },
          ]
        },
        {
          name: 'Apple Watch',
          mockups: [
            { src: '/irona/AppleWatch/watchos_1.png', alt: 'Apple Watch Dashboard' },
            { src: '/irona/AppleWatch/watchos_2.png', alt: 'Apple Watch Activity Rings' },
            { src: '/irona/AppleWatch/watchos_3.png', alt: 'Apple Watch Workout' },
            { src: '/irona/AppleWatch/watchos_4.png', alt: 'Apple Watch Stats' },
            { src: '/irona/AppleWatch/watchos_5.png', alt: 'Apple Watch Notifications' },
          ]
        }
      ]
    },
    {
      id: 'truckers-companion',
      title: 'Truckers Companion',
      description: 'An AI-powered mobile application designed to enhance truck drivers\' safety, well-being, and efficiency on the road. Built with Flutter as a functional prototype.',
      tags: ['Flutter', 'Prototype', 'Logistics'],
      theme: 'dark',
      mockups: [
        { src: '/truckers-companion/home_screen_during_workday-portrait.png', alt: 'Home Screen During Workday' },
        { src: '/truckers-companion/routing-portrait.png', alt: 'Routing' },
        { src: '/truckers-companion/ai_assistant-portrait.png', alt: 'AI Assistant' },
        { src: '/truckers-companion/driver_wellbeing-portrait.png', alt: 'Driver Wellbeing' },
        { src: '/truckers-companion/statistics-portrait.png', alt: 'Statistics' },
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
                <h2 className="project-title scroll-animate">{project.title}</h2>
                <p className="project-description scroll-animate">{project.description}</p>
                <div className="project-tags scroll-animate">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="tag"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.platforms ? (
                // Multi-platform project
                project.platforms.map((platform, platformIndex) => (
                  <div key={platformIndex} className="platform-section">
                    <h3 className="platform-title scroll-animate">{platform.name}</h3>
                    <div className="mockups-grid scroll-animate">
                      {platform.mockups.map((mockup, index) => (
                        <div
                          key={index}
                          className="mockup-wrapper"
                          style={{
                            animationDelay: `${index * 0.08}s`
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
                ))
              ) : (
                // Single platform project
                <div className="mockups-grid scroll-animate">
                  {project.mockups.map((mockup, index) => (
                    <div
                      key={index}
                      className="mockup-wrapper"
                      style={{
                        animationDelay: `${index * 0.08}s`
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
              )}
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
