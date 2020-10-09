import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import noImage from '../../assets/img/noimage.png'
import SideLogo from '../../assets/img/side_logo.png';
import hyogoLeadImage from '../../assets/img/hyogo_lead.png';
import HyogoImage from '../../assets/img/hyogo.png';
import MatImage from '../../assets/img/mat.png';
import PickupImage from '../../assets/img/pickup.png';
import LocateImage from '../../assets/img/locate.png';
import ScrollDown from '../../elements/ScrollDown';

const keyId = 'Your_Key'; // ぐるなびAPI KEY
const pref = 'PREF28'; // 28は兵庫県
const hitPerPage = 99; // 件数（Max100）
const lunch = 0; // 0 or 1
const takeout = 1; // 0 or 1
const bento = 1; // 0 or 1
const deliverly = 0; // 0 or 1

// 検索クエリ
const URL = `https://api.gnavi.co.jp/RestSearchAPI/v3/?
keyid=${keyId}&
pref=${pref}&
hit_per_page=${hitPerPage}&
lunch=${lunch}&
takeout=${takeout}&
bento=${bento}&
deliverly=${deliverly}`;

const Hyogo = () => { 
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await axios.get(URL);
      setArticles(res.data.rest);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="article">
      <header>
        <div className="head">
          <Link to="/"><img src={SideLogo} className="side-logo" alt="BENTO.comロゴ" /></Link>
        </div>
        <div className="inner-header" >
          <img src={hyogoLeadImage} className="lead" alt="ぐるなびの公式サイトから兵庫県のみのお弁当テイクアウト情報をピックアップしてみました。ツイートで応援しよう #兵庫の飲食店を応援" />
          <img src={HyogoImage} className="hyogo" alt="兵庫エリア" />
        </div>
        <ScrollDown />
      </header>
      <main>
        <img src={PickupImage} className="pick-up" alt="Pick Up" />
        <div className="items">
          {articles.map((item) => (
              <div className="item" key={item.id}>
                <img src={MatImage} className="mat" alt="イメージ台紙" />

                <a
                    href={"http://maps.google.com/maps?q=" + item.latitude + "," + item.longitude}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img src={LocateImage} className="locate" alt="地図をみる" />
                </a>

                {item.image_url.shop_image1 ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={ item.image_url.shop_image1 } className="main-image" alt={item.category} />
                  </a>
                ) : (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={ noImage } className="main-image" alt="NoImage" />
                  </a>
                )}

                <a href={item.url} rel="noopener noreferrer" className="andmore" target="_blank">and more</a>
                
                {item.access.station ? (
                  <div className="station">{item.access.station}</div>
                ) : (
                  <div className="station">未設定</div>
                )}
                {item.category && (<div className="category">{item.category}</div>)}
                {item.name && (<div className="shop-name">{item.name}</div>)}
              </div>     
          ))}
        </div>
      </main>
    </div>
  );
}

export default Hyogo;
