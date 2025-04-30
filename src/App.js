import React from 'react';
import './App.css'; // Keep this if you have global styles not handled by Tailwind
import Header from './components/Header';
import Panel from './components/Panel';

function App() {
  return (
    <div className="bg-black"> {/* Set outermost background to black */}
      <Header />
      {/* Adjusted padding and gap for responsiveness */}
      <main className="min-h-screen p-8 md:p-12 lg:p-16"> 
        {/* Grid layout with responsive columns and gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <Panel 
            title="Venue Reservations" 
            description="Book spaces for your community events." 
          />
          <Panel 
            title="Activity Sign-ups" 
            description="Register for upcoming workshops and activities." 
          />
          <Panel 
            title="Announcements" 
            description="Stay updated with the latest news from CSA." 
          />
          <Panel 
            title="Other Data" 
            description="Access resources and important information." 
          />
        </div>
      </main>
    </div>
  );
}

export default App;
