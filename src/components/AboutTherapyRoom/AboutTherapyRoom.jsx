import "./AboutTherapyRoom.css";

function AboutTherapyRoom() {
  return (
    <div className="about-therapy-room">
      <section className="who-we-are">
        <h1>What We Do</h1>
        <div className="who-we-are-content">
          <div className="text">
            <p>
             The Therapy Room offers a range of psychological services and therapeutic interventions.
            </p>
            <p>At The Therapy Room, our philosophy is to empower our clients to improve their own mental well-being</p>
            <p>
               As we believe mental well-being is for everyone, our services extend beyond in-house consultations to events held locally and overseas. 
            </p>
          </div>
          <div className="images">
            <img src="/what.webp" alt="Mindfulness Illustration" />
           
          </div>
        </div>
      </section>

      <section className="ttr-sections">
        <div className="ttr-column">
          <h2>TTR Space</h2>
          <ul>
            <li>Depression</li>
            <li>Anxiety</li>
            <li>ADHD</li>
            <li>Autism</li>
            <li>Eating disorders</li>
            <li>Anger management</li>
            <li>Developmental disorders in children</li>
            <li>Marital issues</li>
            <li>Antenatal and parental support</li>
            <li>Palliative support</li>
            <li>Grieve management</li>
            <li>Addictions</li>
          </ul>
          <h3>Psychological tests</h3>
          <ul>
            <li>Personality</li>
            <li>Intelligence</li>
            <li>Forensic</li>
            <li>Career</li>
            <li>Achievement</li>
            <li>Adaptive</li>
          </ul>
        </div>

        <div className="ttr-column">
          <h2>TTR Hub</h2>
          <ul>
            <li>Camp Global Series</li>
            <ul>
              <li>Travel Light Spring and Autumn</li>
              <li>Camp Global Summer and Winter</li>
              <li>Global Adventures</li>
            </ul>
            <li>Outreach programmes</li>
            <li>Parents’ talks and workshops</li>
          </ul>
        </div>

        <div className="ttr-column">
          <h2>TTR Classroom</h2>
          <ul>
            <li>Professional Development workshops</li>
            <ul>
              <li>Supervision – Clinical and professional</li>
              <li>Cognitive Behavioural Therapy Workshop</li>
              <li>Critical Incident Stress Management Workshop</li>
              <li>Stress Management Workshop</li>
              <li>Work-Life Balance Workshop</li>
            </ul>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AboutTherapyRoom;
