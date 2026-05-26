import { useState } from 'react';
import { Heart, ThumbsUp, Frown } from 'lucide-react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState<'ambitious' | 'achiever'>('ambitious');

  const loves = ['?????', '?????'];
  const likes = ['?????', '?????', '?????'];
  const loathes = ['?????', '?????'];

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
                className={`tab-btn ${activeTab === 'ambitious' ? 'active' : ''}`}
                onClick={() => setActiveTab('ambitious')}
              >
                Ambitious
              </button>
              <button
                className={`tab-btn ${activeTab === 'achiever' ? 'active' : ''}`}
                onClick={() => setActiveTab('achiever')}
              >
                Achiever
              </button>
            </div>
            <div className="top-right-icon">
              <div className="icon-dots">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          
          <h1 className="name-title">Tony Liu</h1>
          
          {/* Wave effect at the bottom of header */}
          <div className="wave-decorator"></div>
        </div>

        {/* Content Body */}
        <div className="content-body">
          {/* Profile & Happiness Card */}
          <div className="profile-stats-card">
            <div className="stats-info">
              <div className="stats-header">
                <span className="stats-title">Happiness</span>
                <span className="stats-level">Lv. 3</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '40%' }}></div>
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

          {/* Loves Section */}
          <div className="section-container loves-section">
            <h2 className="section-title">Loves</h2>
            <div className="cards-list">
              {loves.map((item, idx) => (
                <button 
                  key={`love-${idx}`} 
                  className="item-card"
                  onClick={() => handleCardClick('loves', idx)}
                >
                  <div className="icon-wrapper">
                    <Heart size={20} strokeWidth={2.5} />
                  </div>
                  <span className="item-text">{item}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Likes Section */}
          <div className="section-container likes-section">
            <h2 className="section-title">Likes</h2>
            <div className="cards-list">
              {likes.map((item, idx) => (
                <button 
                  key={`like-${idx}`} 
                  className="item-card"
                  onClick={() => handleCardClick('likes', idx)}
                >
                  <div className="icon-wrapper">
                    <ThumbsUp size={20} strokeWidth={2.5} />
                  </div>
                  <span className="item-text">{item}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Loathes Section */}
          <div className="section-container loathes-section">
            <h2 className="section-title">Loathes</h2>
            <div className="cards-list">
              {loathes.map((item, idx) => (
                <button 
                  key={`loathe-${idx}`} 
                  className="item-card"
                  onClick={() => handleCardClick('loathes', idx)}
                >
                  <div className="icon-wrapper">
                    <Frown size={20} strokeWidth={2.5} />
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
