import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333', padding: '2rem' }}>
      {/* Hero Section */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Jibin Yesudas Varghese</h1>
        <p style={{ fontSize: '1.25rem' }}>Computer Science Graduate | Cybersecurity Analyst | ML Researcher</p>
        <div style={{ marginTop: '1rem' }}>
          <a
            href="mailto:jibinjithinyesudas@gmail.com"
            style={{
              padding: '0.5rem 1rem',
              margin: '0.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '5px',
              textDecoration: 'none',
            }}
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.5rem 1rem',
              margin: '0.5rem',
              border: '1px solid #007bff',
              color: '#007bff',
              borderRadius: '5px',
              textDecoration: 'none',
            }}
          >
            View Resume
          </a>
        </div>
      </header>

      {/* About Section */}
      <section style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Me</h2>
        <p>
          I'm a graduate student at Oregon State University specializing in Machine Learning, Cybersecurity,
          and NLP. I enjoy building tools that blend practical impact with research-grade rigor. My work spans
          across AI-assisted journalism, side-channel resistance, and ethical hacking.
        </p>
      </section>

      {/* Projects Section */}
      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <ProjectCard
            title="Automatic Pith Detection"
            desc="YOLOv9, Swin Transformer & U-Net models for forestry image analysis and segmentation accuracy."
          />
          <ProjectCard
            title="Membership Inference Attacks"
            desc="Scalability analysis of MemGuard defense, exposing vulnerabilities in ML privacy."
          />
          <ProjectCard
            title="Dynamic Social Media Web App"
            desc="Full MERN stack Twitter-like clone with auth, timeline, likes, and media sharing."
          />
          <ProjectCard
            title="Depression Detection via Tweets"
            desc="ML models that identify signs of depression from tweets using NLP and classification techniques."
          />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '4rem' }}>
        <p>© {new Date().getFullYear()} Jibin Yesudas Varghese</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="https://github.com/Bears-beets-battlestargalactica" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          |{' '}
          <a href="https://www.linkedin.com/in/jibin-varghese-a48b402a6/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ title, desc }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '1rem', backgroundColor: '#f9f9f9' }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', color: '#555' }}>{desc}</p>
    </div>
  );
}

export default App;
