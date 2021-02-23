import { useState } from 'react';

export default function ExperienceBar() {
  const [progressBar, setProgressBar] = useState(0);
  const [xp, setXp] = useState(0);

  function handleProgressUp() {
    setProgressBar(progressBar + 10);
    setXp(xp + 60);
  }

  return (
    <>
      <header className="experience-bar">
        <span>0 xp</span>
        <div>
          <div style={{ width: `${progressBar}%` }} />

          <span className="current-experience" style={{ left: '50%' }}>
            {xp} xp
          </span>
        </div>
        <span>600 xp</span>
      </header>
      <button
        onClick={handleProgressUp}
        disabled={xp === 600}
        className="button-xp"
      >
        Ganhar XP
      </button>
    </>
  );
}
