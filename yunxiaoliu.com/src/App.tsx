import { useState, useEffect } from 'react';
import { Briefcase, ThumbsUp, GraduationCap, Undo2, Globe} from 'lucide-react';
import './index.css';

import { jobs } from './jobs';
import { projects } from './projects';
import type { Job, Project } from './types';

function App() {
  const [activeView, setActiveView] = useState<'overview' | 'detail'>('overview');
  const [activeType, setActiveType] = useState<'job' | 'project' | null>(null);
  const [activeItem, setActiveItem] = useState<Job | Project | null>(null);

  const education = ['University of British Columbia'];

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
    }
  };

  return (
    <div className="app-container">
      <div className="mobile-card">
        {/* Header Section */}
        <div className="header-section">
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

        {activeView === 'overview' ? (
          <div className="content-body">
            {/* Profile & Happiness Card */}
            <div className="profile-stats-card">
              <div className="stats-info">
                <div className="stats-header">
                  <span className="stats-title">Years of Experience</span>
                  <span className="stats-level">Lv. 3</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="avatar-container">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
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
                {education.map((item, idx) => (
                  <button 
                    key={`education-${idx}`} 
                    className="item-card"
                    onClick={() => handleCardClick('education', idx)}
                  >
                    <div className="icon-wrapper">
                      <GraduationCap size={20} strokeWidth={2.5} />
                    </div>
                    <span className="item-text">{item}</span>
                  </button>
                ))}
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
                    <Briefcase size={16} /> 
                    {(activeItem as Job).startDate} - {(activeItem as Job).endDate || 'Present'}
                  </span>
                  <span className="detail-meta-item">
                     • {(activeItem as Job).location}
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
                { (activeItem as Project).GitHubURL && (
                   <a 
                     href={(activeItem as Project).GitHubURL} 
                     target="_blank" 
                     rel="noreferrer" 
                     className="pill-btn"
                   >
                     GitHub Link <Globe size={20} />
                   </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
