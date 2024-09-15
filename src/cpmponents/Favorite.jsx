import React from 'react';
import { Row, Col, Card } from 'antd';
import './../css/index.css'

const { Meta } = Card;

const Favorite = () => (
  <div id='favorite' style={{ padding: '20px' }} className='about'>
    <br/><br/>
    <h1 style={{ textAlign: 'center' }}>我的喜好</h1><br/><br/>
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="books" src="src\img\book.jpg" />}
          
        >
          <Meta title="书籍" description="我看过的+我喜欢的" />
          <p>令我感受颇深的Books</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="music" src="src\img\music.jpg" />}
        >
          <Meta title="音乐" description="我之所爱，动听之处" />
          <p>令我感动轻松的Music</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="movies" src="src\img\movie.jpg" />}
        >
          <Meta title="电影" description="我所看过的电影都会一一记录分享" />
          <p>令我感同身受的Movies</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="CasualEssay" src="src\img\CasualEssay.jpg" />}
          onClick={() => window.location.href = 'http://localhost:3000/#/'}
        >
          <Meta title="我的随写" description="纯属文字爱好，并写下某一时间的我的感受与想法" />
          <p>平时的一些简单感受</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="Work" src="src\img\work.jpg" />}
        >
          <Meta title="我的作品" description="一些早期/开发中/实验性的作品" />
          <p>秃头也做不出</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          cover={<img alt="example" src="src\img\chendu.jpg" />}
          onClick={() => window.open('https://www.douyin.com/user/self?from_tab_name=main')}
        >
          <Meta title="我的视频作品" description="在线观看我的原创视频作品" />
          <p>抖音 媒体</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          // cover={<img alt="example" src="image-url-8" />}
        >
          <Meta title="我的其他作品" description="待续" />
          <p>点击查看更多</p>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Favorite;
