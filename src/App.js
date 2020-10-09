import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/App.css';
import Index from './components/Index';
import ArticleHyogo from './components/article/Hyogo';

// head情報
const title = 'BENTO.com | お弁当テイクアウトPick upサイト';
const description = 'ぐるなびの公式サイトから兵庫県のみのお弁当テイクアウト情報をピックアップしてみました';
document.title = title;
const headData = document.head.children;
for (let i = 0; i < headData.length; i++) {
    const nameVal = headData[i].getAttribute('name');
    if (nameVal !== null) {
        if (nameVal.indexOf('description') !== -1) {
            headData[i].setAttribute('content', description);
        }
        // OGP(twitter)の設定
        if (nameVal.indexOf('twitter:title') !== -1) {
            headData[i].setAttribute('content', title);
        }
        if (nameVal.indexOf('twitter:description') !== -1) {
            headData[i].setAttribute('content', description);
        }
    }
}
// ここまでhead情報

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={ Index } />
          <Route exact path="/bento/:id" component={ ArticleHyogo } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
