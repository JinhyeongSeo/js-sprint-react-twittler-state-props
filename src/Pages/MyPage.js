import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';
import dummyTweets from '../static/dummyData';

const MyPage = () => {
  const filteredTweets = dummyTweets.filter(obj => obj.username === "parkhacker");
  // TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다.

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filteredTweets[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
        <ul className="tweets__mypage">
            <Tweet tweet={filteredTweets[0]}/>
            {/* TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다. */}
            <li className="tweet" key={filteredTweets[0].id}>
                <div className="tweet__profile">
                    <img src={filteredTweets[0].picture}/>
                </div>
                <div className="tweet__content">
                    <div className="tweet__userInfo">
                        <span className="tweet__username">{filteredTweets[0].username}</span>
                        <span className="tweet__createdAt">{filteredTweets[0].createdAt}</span>
                    </div>
                    <div className="tweet__message">{filteredTweets[0].content}</div>
                </div>
            </li>
        </ul>
        <Footer/>
    </section>
  );
};

export default MyPage;
