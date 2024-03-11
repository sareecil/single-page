import { useState } from 'react'
import './App.css'
import logo from './assets/img/logo.svg'
import img1 from './assets/img/content-1.svg'
import img2 from './assets/img/content-2.svg'
import img3 from './assets/img/content-3.svg'
import img4 from './assets/img/content-4.svg'
import img5 from './assets/img/content-5.svg'
import img6 from './assets/img/content-6.svg'
import img7 from './assets/img/user-img.svg'
import img8 from './assets/img/work-img.png'
import img9 from './assets/img/work-img2.png'
import img10 from './assets/img/work-img3.png'
import img11 from './assets/img/left-img.svg'
import img12 from './assets/img/right-img.svg'


function App() {

  return (
    <>
      <div className="container">
          <div className="home-page">
            <div className="header">
              <div className="header-logo"><img src={logo} alt="" /></div>
              <div className="header-btn"><h3>Ücretsiz Danışmanlık</h3></div>
            </div>
            <div className="content">
              <div className="title">
                <h1>Tasarım çözümleri artık daha kolay</h1>
                <p>Çeşitli tasarım disiplinlerinde on yılı aşkın tecrübemle, tasarım ihtiyaçlarınız için tek adresinizim.</p>
              </div>
            </div>
            <div className="img-content">
              <div className="bow-one">
                <img src={img1} alt="" />
              </div>
              <div className="box-two">
                <div className="bow-up">
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                </div>
                <div className="box-down">
                  <img src={img4} alt="" />
                </div>
              </div>
              <div className="box-three">
                <img src={img5} alt=""  className='down-img' />
                <img src={img6} alt=""/>
              </div>
            </div>
          </div>
          <div className="user-info">
            <img src={img7} alt="" />
            <div className="user-content">
              <h2>Ben Amy ve bir sonraki projenizde çalışmayı çok isterim</h2>
              <p>Güzel tasarım çözümleri yaratmak için başkalarıyla birlikte çalışmayı seviyorum. Marka illüstrasyonlarından eksiksiz mobil uygulamalara kadar her şeyi tasarladım. Ayrıca kamera konusunda da becerikliyimdir!</p>
              <div className="user header-btn"><h3>Ücretsiz Danışmanlık</h3></div>
            </div>
          </div>
      </div>
      <div className="works">
        <h3>Çalışmalarım</h3>
        <div className="works-img">
          <img src={img8} alt="" className='border pointer'/>
          <img src={img9} alt="" className='border pointer'/>
          <img src={img10} alt="" className='border pointer'/>
        </div>
        <div className="cursor">
          <button className="left pointer">
            <img src={img11} alt="" />
          </button>
          <button className="left pointer">
            <img src={img12} alt="" />
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-cnt">
          <h2>Benimle bir görüşme rezervasyonu yapın</h2>
          <p>Size nasıl yardımcı olabileceğimi görmek için sohbet etmeyi çok isterim. Bizim için en iyi ilk adım, ücretsiz danışmanlık sırasında projenizi tartışmamızdır. Daha sonra oradan ilerleyebiliriz.</p>
        </div>
        <div className="user header-btn footer-btn"><h3>Ücretsiz Danışmanlık</h3></div>
      </div>
    </>
  )
}

export default App
