import React from 'react';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../contants';
import styles from '../styles/styles';

const Footer = () => (
  <>
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />

          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-lg leading-[72px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-2">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className="font-poppins font-normal text-base leading-6 text-dimWhite hover:text-secondary cursor-pointer"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px]">
        <p className="font-poppins font-normal text-center text-lg leading-[72px] text-white">
          {' '}
          Copyright &copy; 2021 HooBank. All Rights Reserved.{' '}
        </p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social,index) =>(
            <img src={social.icon} alt={social.id} key={social.id} className={` w-5 h-4 object-contain cursor-pointer mr-6`} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Footer;
