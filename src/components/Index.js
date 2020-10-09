import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/img/logo.png';
import HyogoImage from '../assets/img/hyogo.png';
import LeadImage from '../assets/img/lead.png';

const Index = () => {
  return (
    <div className="top">
      <header>
        <img src={LogoImage} className="logo" alt="BENTO.comロゴ" />
        <img src={LeadImage} className="lead" alt="ぐるなびの公式サイトからお弁当のテイクアウト情報をピックアップしたWebサイトです。下記、地図をクリックしてください。" />
      </header>
      <main>
        <Link to="/bento/PREF28"><img src={HyogoImage} className="hyogo" alt="兵庫エリア" /></Link>
      </main>
    </div>
  );
}

export default Index;
