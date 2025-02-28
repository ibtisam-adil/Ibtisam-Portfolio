import { IonIcon } from '@ionic/react';
import { mailOutline, phonePortraitOutline, logoLinkedin, locationOutline, chevronDown, logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';

import './layout.css';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    const cheveron = () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarInfoMore = document.querySelector('.sidebar-info_more');
    sidebarInfoMore?.classList.toggle('active');
    sidebar?.classList.toggle('active');
    }
  return (
    <>
    <div className='layout'>
      <aside className="sidebar flex flex-col rounded-4xl">

        <div className="sidebar-info flex gap-6 items-center">

          <figure className="avatar-box">
            <img className="rounded-4xl" src="../../src/assets/passportsize.jpg" alt="Touseeq Zulfiqar" width="80" />
          </figure>

          <div className="info-content flex flex-col gap-4">
            <h1 className="name text-3xl" title="Richard hanrick">Ibtisam Adil</h1>

            <p className="title bg-[#2b2b2c] text-white rounded-xl text-lg">Software Engineer</p>
          </div>
          <span className='cheveron c-s-contact'>Show Contacts</span>

          <IonIcon icon={chevronDown} onClick={cheveron} className="cheveron" />


        </div>

        <div className="sidebar-info_more">

          <div className="separator"></div>

          <ul className="contacts-list flex flex-col gap-8">

            <li className="contact-item flex gap-6 items-center">

              <div className="icon-box">
              <IonIcon icon={mailOutline} className="contact-icons" />

              </div>

              <div className="contact-info">
                <p className="contact-title text-lg">Email</p>

                <a href="mailto:touseeqzulfiqar@gmail.com" className="contact-link text-xl">touseeqzulfiqar@gmail.com</a>
              </div>

            </li>

            <li className="contact-item flex gap-8 items-center">

              <div className="icon-box">
              <IonIcon icon={phonePortraitOutline} className="contact-icons" />

              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+923026576657" className="contact-link">+92 3026576657</a>
              </div>

            </li>

            <li className="contact-item flex gap-8 items-center">

              <div className="icon-box">
              <IonIcon icon={logoLinkedin} className="contact-icons" />

              </div>

              <div className="contact-info">
                <p className="contact-title">linkedin</p>
                <a href="https://www.linkedin.com/in/touseeq-zulfiqar-521510200/" className="contact-link">touseeqzulfiqar</a>
              </div>

            </li>

            <li className="contact-item flex gap-8 items-center">

              <div className="icon-box">
              <IonIcon icon={locationOutline} className="contact-icons" />

              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address className="contact-link">Gujrat, punjab, Pakistan</address>
              </div>

            </li>

          </ul>

          <div className="separator"></div>

          <ul className="social-list flex gap-6">

            <li className="social-item">
              <a href="#" className="social-link">
              <IonIcon icon={logoFacebook} />

              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
              <IonIcon icon={logoTwitter} />

              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
              <IonIcon icon={logoInstagram} />

              </a>
            </li>

          </ul>

        </div>

      </aside>

      <Outlet />
    </div>


    </>
  )
}

export default Layout
