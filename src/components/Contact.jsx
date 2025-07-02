import React from 'react';
import { openingHours } from '../../constants';
import { useGSAP } from '@gsap/react';
import { socials } from '../../constants';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
  useGSAP(() => {
    const titleSplit = new SplitText('contact h2', { type: 'words' });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      ease: 'power1.inOut',
    });

    timeline
      .fromTo(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
      }, {
        opacity: 1,
        yPercent: 0,
        stagger: 0.2,
      })
      .fromTo(['#contact h3', '#contact p'], {
        opacity: 0,
        yPercent: 100,
      }, {
        opacity: 1,
        yPercent: 0,
        stagger: 0.1,
      })
      .to('#f-right-leaf', {
        y: -50,
        duration: 1,
        ease: 'power1.inOut'
      })
      .to('#f-left-leaf', {
        y: -50,
        duration: 1,
        ease: 'power1.inOut'
      }, '<');
  }, []);

  return (
    <footer id="contact">
      <img 
        src="/images/footer-right-leaf.png" 
        alt="leaf-right"
        id="f-right-leaf" 
        className="leaf-decoration"
      />
      <img 
        src="/images/footer-left-leaf.png" 
        alt="leaf-left"
        id="f-left-leaf" 
        className="leaf-decoration"
      />
      <div className="content">
        <h2>Where to Find Us</h2>

        <div className="contact-section">
          <h3>Visit Our Bar</h3>
          <p>No. 56 Yatinuwara Veediya, Kandy, Sri Lanka</p>
        </div>

        <div className="contact-section">
          <h3>Contact Us</h3>
          <p>Email: info@mojito.com</p>
          <p>Phone: +94 123 456 789</p>
        </div>

        <div className="contact-section">
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>

        <div className="contact-section">
          <h3>Socials</h3>
          <div className="social-icons flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img 
                  src={social.icon} 
                  alt={social.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;