import { useState, useEffect } from 'react';
import { Briefcase, ThumbsUp, GraduationCap, Undo2, Globe, Play, Square, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from 'flowbite-react';
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";


import './index.css';

import { jobs } from './jobs';
import { projects } from './projects';
import { educationData } from './education';
import type { Job, Project, Education } from './types';

function App() {
  const [activeView, setActiveView] = useState<'overview' | 'detail'>('overview');
  const [activeType, setActiveType] = useState<'job' | 'project' | 'education' | null>(null);
  const [activeItem, setActiveItem] = useState<Job | Project | Education | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'b') {
        setActiveView('overview');
        setActiveType(null);
        setActiveItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const goBack = () => {
    setActiveView('overview');
    setActiveType(null);
    setActiveItem(null);
  };

  const handleCardClick = (section: string, index: number) => {
    if (section === 'jobs') {
      setActiveItem(jobs[index]);
      setActiveType('job');
      setActiveView('detail');
    } else if (section === 'projects') {
      setActiveItem(projects[index]);
      setActiveType('project');
      setActiveView('detail');
      setGalleryIndex(0);
    } else if (section === 'education') {
      setActiveItem(educationData[index]);
      setActiveType('education');
      setActiveView('detail');
      setGalleryIndex(0);
    }
  };

  // Options for the header (white particles)
  const headerOptions = {
    fullScreen: { enable: false, zIndex: 0 },
    background: { color: "transparent" },
    particles: {
      color: { value: "#ffffff" },
      number: { value: 90 },
      size: { value: { min: 8, max: 12 } },
      opacity: { value: 0.4 },
      shape: { type: "circle" },
      links: { enable: false },
      move: { enable: true, speed: 2 },
    },
  };

  // Options for the body (dark particles so they show up on off-white background)
  const bodyOptions = {
    fullScreen: { enable: false, zIndex: 0 },
    background: { color: "green" },
    particles: {
      color: { value: "#423535" },
      number: { value: 90 },
      size: { value: { min: 8, max: 12 } },
      opacity: { value: { min: 0.2, max: 0.4 } },
      shape: { type: "circle" },
      links: { enable: false },
      move: { enable: true, speed: 2 },
    },
  };

  useEffect(() => {
    (async () => {
      await loadSlim(tsParticles);

      await tsParticles.load({
        id: "tsparticles",
        options: headerOptions as any,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await loadSlim(tsParticles);

      await tsParticles.load({
        id: "tsparticles2",
        options: bodyOptions as any,
      });
    })();
  }, []);

  return (
    <div className="app-container">
      <div className="mobile-card">
        {/* Header Section */}
        <div className="header-section">
          <div id="tsparticles" className="tsparticles-bg"></div>
          <div className="header-top-bar">
            {activeView === 'overview' && (
              <div className="tab-switcher">
                <button
                  className={`tab-btn active`}
                  disabled
                >
                  Ambitious
                </button>
                <button
                  className={`tab-btn `}
                  disabled
                >
                  Achiever
                </button>
              </div>
            )}
          </div>

          <h1 className="name-title">Tony Liu</h1>

          {/* Wave effect at the bottom of header */}
          <div className="wave-decorator"></div>
        </div>

        <div className="content-section-wrapper">
          <div id="tsparticles2" className="particles-layer body-particles"></div>

          {activeView === 'overview' ? (
          <div className="content-body">
            {/* Profile & Happiness Card */}
            <div className="profile-stats-card">
              <div className="stats-info">
                <div className="stats-header">
                  <span className="stats-title">YOE</span>
                  <span className="stats-level">Lv. 3</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="avatar-container">
                <img
                  src="/yllm.png"
                  alt="Profile Avatar"
                  className="avatar-img"
                />
              </div>
            </div>

            {/* Jobs */}
            <div className="section-container loves-section">
              <h2 className="section-title">Jobs</h2>
              <div className="cards-list">
                {jobs.map((item, idx) => (
                  <button
                    key={`job-${idx}`}
                    className="item-card job-card"
                    onClick={() => handleCardClick('jobs', idx)}
                  >
                    <div className="icon-wrapper">
                      <Briefcase size={20} strokeWidth={2.5} />
                    </div>
                    <div className="job-content">
                      <div className="job-left">
                        <span className="job-company">{item.company}</span>
                        <span className="job-role">{item.role}</span>
                      </div>
                      <div className="job-right">
                        <span className="job-dates">
                          {item.startDate} {item.endDate ? `- ${item.endDate}` : ''}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="section-container likes-section">
              <h2 className="section-title">Projects</h2>
              <div className="cards-list">
                {projects.map((item, idx) => (
                  <button
                    key={`project-${idx}`}
                    className="item-card project-card"
                    onClick={() => handleCardClick('projects', idx)}
                  >
                    <div className="icon-wrapper">
                      <ThumbsUp size={20} strokeWidth={2.5} />
                    </div>
                    <span className="item-text">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="section-container loathes-section">
              <h2 className="section-title">Education</h2>
              <div className="cards-list">
                {educationData.map((item, idx) => (
                  <button
                    key={`education-${idx}`}
                    className="item-card job-card"
                    onClick={() => handleCardClick('education', idx)}
                  >
                    <div className="icon-wrapper">
                      <GraduationCap size={20} strokeWidth={2.5} />
                    </div>
                    <div className="job-content">
                      <div className="job-left">
                        <span className="job-company">{item.school}</span>
                        <span className="job-role">{item.degree}</span>
                      </div>
                      <div className="job-right">
                        <span className="job-dates">
                          {item.startDate} {item.endDate ? `- ${item.endDate}` : ''}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="section-container social-section">
              <div className="social-links">
                <a href="https://www.linkedin.com/in/yunxiaotonyliu/" className="social-icon" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in" style={{ fontSize: '24px' }}></i>
                </a>
                <a href="https://github.com/TonyLiu0226" className="social-icon" aria-label="GitHub">
                  <i className="fa-brands fa-github" style={{ fontSize: '24px' }}></i>
                </a>
                <a href="https://www.instagram.com/tony_26l/" className="social-icon" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" style={{ fontSize: '24px' }}></i>
                </a>
                <a href="mailto:tl0226yn@gmail.com" className="social-icon" aria-label="Email">
                  <i className="fa-solid fa-envelope" style={{ fontSize: '24px' }}></i>
                </a>
              </div>
            </div>

          </div>
        ) : (
          <div className="content-body detail-view">
            <button className="back-btn" onClick={goBack} style={{ marginBottom: '20px', alignSelf: 'flex-start', borderRadius: '40px', padding: '8px 16px', color: 'white', fontWeight: 800 }}>
              <span className="b-circle" style={{ width: '30px', height: '30px', fontSize: '16px' }}>B</span>
              <Undo2 size={20} className="back-icon" strokeWidth={3} />
            </button>
            {activeType === 'job' && activeItem && (
              <div className="detail-content">
                <h2 className="detail-title">{(activeItem as Job).company}</h2>
                <h3 className="detail-subtitle">{(activeItem as Job).role}</h3>
                <div className="detail-meta">
                  <span className="detail-meta-item">
                    <div className='detail-meta-item-content'>
                      <Play size={16} />
                      {(activeItem as Job).startDate}
                    </div>
                  </span>
                  {(activeItem as Job).endDate && (
                    <span className="detail-meta-item">
                      <div className='detail-meta-item-content'>
                        <Square size={16} />
                        {(activeItem as Job).endDate}
                      </div>
                    </span>
                  )}
                  <span className="detail-meta-item">
                    <div className='detail-meta-item-content'>
                      <MapPin size={16} />
                      {(activeItem as Job).location}
                    </div>
                  </span>
                </div>
                <div className="detail-description">
                  {(activeItem as Job).description.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            )}

            {activeType === 'project' && activeItem && (
              <div className="detail-content">
                <h2 className="detail-title">{(activeItem as Project).name}</h2>
                <div className="detail-description">
                  {(activeItem as Project).description.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                {(activeItem as Project).GitHubURL && (
                  <a
                    href={(activeItem as Project).GitHubURL}
                    target="_blank"
                    rel="noreferrer"
                    className="pill-btn"
                  >
                    GitHub Link <Globe size={20} />
                  </a>
                )}
                
                <div className="featured-gallery">
                  {(activeItem as Project).gallery && (activeItem as Project).gallery!.length > 0 && (
                    <>
                    <h3 className="gallery-title">Featured Images</h3>
                    <div className="gallery-carousel">
                      <Card
                        className="gallery-flowbite-card"
                        imgAlt={(activeItem as Project).gallery![galleryIndex].Title}
                        imgSrc={(activeItem as Project).gallery![galleryIndex].ImagePath}
                      >
                        <h5 className="gallery-flowbite-title">
                          {(activeItem as Project).gallery![galleryIndex].Title}
                        </h5>
                        <p className="gallery-flowbite-desc">
                          {(activeItem as Project).gallery![galleryIndex].Description}
                        </p>
                      </Card>
                      <div className="gallery-controls">
                        <button 
                          className="carousel-btn"
                          onClick={() => setGalleryIndex(prev => Math.max(0, prev - 1))}
                          disabled={galleryIndex === 0}
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button 
                          className="carousel-btn"
                          onClick={() => setGalleryIndex(prev => Math.min((activeItem as Project).gallery!.length - 1, prev + 1))}
                          disabled={galleryIndex === (activeItem as Project).gallery!.length - 1}
                        >
                          <ChevronRight size={24} />
                        </button>
                      </div>
                    </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {activeType === 'education' && activeItem && (
              <div className="detail-content">
                <h2 className="detail-title">{(activeItem as Education).school}</h2>
                <h3 className="detail-subtitle">{(activeItem as Education).degree}</h3>
                <div className="detail-meta">
                  <span className="detail-meta-item">
                    <div className='detail-meta-item-content'>
                      <Play size={16} />
                      {(activeItem as Education).startDate}
                    </div>
                  </span>
                  {(activeItem as Education).endDate && (
                    <span className="detail-meta-item">
                      <div className='detail-meta-item-content'>
                        <Square size={16} />
                        {(activeItem as Education).endDate}
                      </div>
                    </span>
                  )}
                  <span className="detail-meta-item">
                    <div className='detail-meta-item-content'>
                      <MapPin size={16} />
                      {(activeItem as Education).location}
                    </div>
                  </span>
                </div>
                <div className="detail-description">
                  <p><strong>{(activeItem as Education).note} </strong> </p>
                  <p>{(activeItem as Education).description}</p>
                </div>
                
                <div className="featured-gallery">
                  <h3 className="gallery-title">Featured Courses</h3>
                  {(activeItem as Education).courses.length > 0 && (
                    <div className="gallery-carousel">
                      <Card
                        className="gallery-flowbite-card"
                        imgAlt={(activeItem as Education).courses[galleryIndex].Title}
                        imgSrc={(activeItem as Education).courses[galleryIndex].ImagePath}
                      >
                        <h5 className="gallery-flowbite-title">
                          {(activeItem as Education).courses[galleryIndex].Title}
                        </h5>
                        <p className="gallery-flowbite-desc">
                          {(activeItem as Education).courses[galleryIndex].Description}
                        </p>
                      </Card>
                      <div className="gallery-controls">
                        <button 
                          className="carousel-btn"
                          onClick={() => setGalleryIndex(prev => Math.max(0, prev - 1))}
                          disabled={galleryIndex === 0}
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button 
                          className="carousel-btn"
                          onClick={() => setGalleryIndex(prev => Math.min((activeItem as Education).courses.length - 1, prev + 1))}
                          disabled={galleryIndex === (activeItem as Education).courses.length - 1}
                        >
                          <ChevronRight size={24} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
