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
          <div className="hero-info">
            <h1 className="hero-title">Marian Bosnea</h1>
            <p className="hero-subtitle">Mobile App Developer</p>
            <div className="hero-description">
              <p>📱 <strong>Frontend:</strong> Expert in Flutter (Dart), Swift, and Kotlin; architected mobile solutions for 500k+ users.</p>
              <p>⚙️ <strong>Backend:</strong> Proficient in .NET/C# and Node.js, with a focus on real-time connectivity via MQTT (Blockbax) and BLE.</p>
              <p>🔒 <strong>Security & Infrastructure:</strong> Implementing FIDO2/Passkey authentication and managing scalable deployments on Azure App Services with SQL Server.</p>
              <p>🚗 <strong>Specialized Integrations:</strong> Bringing apps to the car via Android Auto and building embedded UIs using LVGL.</p>
            </div>
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/marian-bosnea" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/marian-bosnea" target="_blank" rel="noopener noreferrer" className="social-link github">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
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
