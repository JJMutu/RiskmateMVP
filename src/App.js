
import React, { useState } from 'react';
import logo from './riskmate-logo.png';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'qr': return <div className="card"><h2>QR Scan</h2><p>Simulated QR Scan Complete.</p><button className="btn" onClick={() => setPage('induction')}>Next: Induction</button></div>;
      case 'induction': return <div className="card"><h2>Site Induction</h2><ul><li>PPE Check</li><li>Emergency Info</li><li>Site Rules</li></ul><button className="btn" onClick={() => setPage('swms')}>Next: View SWMS</button></div>;
      case 'swms': return <div className="card"><h2>SWMS Templates</h2><ul><li>1. Transport of Panels</li><li>2. Working at Heights</li><li>3. Manual Handling</li></ul><button className="btn" onClick={() => setPage('prestart')}>Next: Daily Prestart</button></div>;
      case 'prestart': return <div className="card"><h2>Daily Prestart</h2><p>Tick off today's checks:</p><ul><li><input type="checkbox"/> No trip hazards</li><li><input type="checkbox"/> Ladders secured</li></ul><button className="btn" onClick={() => setPage('signoff')}>Next: Sign Off</button></div>;
      case 'signoff': return <div className="card"><h2>Digital Sign-Off</h2><p>Signed by: <strong>Jared Mutu</strong></p><p>Status: <span style={{color:'lime'}}>Signed</span></p></div>;
      default: return <div className="card"><h1>Welcome to RiskMate</h1><img src={logo} alt="logo" className="logo"/><p>Hello Jared Mutu</p><button className="btn" onClick={() => setPage('qr')}>Start Site Process</button></div>;
    }
  };

  return <div className="app">{renderPage()}</div>;
};

export default App;
