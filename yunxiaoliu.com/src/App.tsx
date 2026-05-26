import { Briefcase, ThumbsUp, GraduationCap } from 'lucide-react';
import './index.css';

function App() {

  const jobs = ['?????', '?????', '?????', '?????', '?????', '?????', '?????', '?????', '?????'];
  const projects = ['?????', '?????', '?????', '?????', '?????', '?????'];
  const education = ['University of British Columbia'];

  const handleCardClick = (section: string, index: number) => {
    console.log(`Clicked ${section} item at index ${index}`);
  };

  return (
    <div className="app-container">
      <div className="mobile-card">
        {/* Header Section */}
        <div className="header-section">
          <div className="header-top-bar">
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
          </div>
          
          <h1 className="name-title">Tony Liu</h1>
          
          {/* Wave effect at the bottom of header */}
          <div className="wave-decorator"></div>
        </div>

        {/* Overview */}
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
                  className="item-card"
                  onClick={() => handleCardClick('jobs', idx)}
                >
                  <div className="icon-wrapper">
                    <Briefcase size={20} strokeWidth={2.5} />
                  </div>
                  <span className="item-text">{item}</span>
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
                  className="item-card"
                  onClick={() => handleCardClick('projects', idx)}
                >
                  <div className="icon-wrapper">
                    <ThumbsUp size={20} strokeWidth={2.5} />
                  </div>
                  <span className="item-text">{item}</span>
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
      </div>
    </div>
  );
}

export default App;
