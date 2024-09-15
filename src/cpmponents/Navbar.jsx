import React, { useEffect } from 'react';
import './../css/index.css'
function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav2 = document.getElementById('nav2');
      const aboutSection = document.querySelector('.about');
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top <= 0) {
        nav2.style.display = 'flex';
      } else {
        nav2.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header2" id="nav2">
      <div className="logo2"><h1>Dense Lin</h1></div>
      <nav className="nav2">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#about">关于</a></li>
          <li><a href="#favorite">喜欢</a></li>
          <li><a href="#">日志</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
