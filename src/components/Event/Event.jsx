import './event.css';
import BlurText from '../BlurText/BlurText';

const Event = () => {
  return (
    <section className="event">
      <div className="event-content">
        <BlurText text="EVENTS" className="event-h1" />
        <BlurText text="Information on upcoming workshops can be found below. If you require any further information please contact us." className="event-h2" delay={400} />
        <BlurText text="Every 3rd Monday of the Month" className="hero-h3" delay={600} />
        <button className="learn-more-button">Contact Us</button>
      </div>
      <div className="event-image-container">
        <img src="/events.png" alt="The Therapy Room" className="event-image" />
      </div>
    </section>
  );
};

export default Event;
