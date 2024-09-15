import React from 'react';
import './../css/index.css'
import { DownOutlined } from '@ant-design/icons';
function Header() {

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="dingbu">
      <header>
        <div className="logo"><h1>Dense Lin</h1></div>
        <nav className="nav">
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#about">关于</a></li>
            <li><a href="#favorite">喜欢</a></li>
            <li><a href="#">日志</a></li>
          </ul>
        </nav>
      </header>
      <div className="shouye">
        <div className="zhuyebiaoti">
          <h1>Dense Lin</h1>
          <h3>这里是Denselin的个人主页</h3>
        </div>
      </div>
      <div className='icon-container' onClick={handleScrollToAbout}>
        <DownOutlined className='DownOut' />
      </div>
      
    </div>
  );
}

export default Header;
