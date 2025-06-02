// AboutPage.jsx
import "./about.css";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Speech from "./Speech";

const AboutPage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  return (
    <div className="aboutPage">
      <motion.h1
        className="aboutTitle"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.section
        ref={sectionRef}
        className="section aboutCombinedSection"
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.div
          className="aboutLeft"
          variants={{
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2>Education</h2>
          <div className="educationEntry">
            <h3>Nanyang Technological University (NTU)</h3>
            <p>Bachelor of Engineering in Information Engineering and Media</p>
            <p>Expected Graduation: 2026</p>

            <br />

            <h3>Saint Andrew's Junior College (SAJC)</h3>
            <p>Cambridge A'Levels</p>
            <p>Graduated: 2019</p>
          </div>

          <h2>Skills</h2>
          <div className="skillGrid">
            <div>
              <h3>Programming Languages</h3>
              <ul>
                <li>Python</li>
                <li>C</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h3>Frameworks & Tools</h3>
              <ul>
                <li>React</li>
                <li>FastAPI</li>
                <li>YOLOv7</li>
                <li>OpenCV</li>
              </ul>
            </div>
            <div>
              <h3>Soft Skills</h3>
              <ul>
                <li>Leadership</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Public Speaking</li>
              </ul>
            </div>
          </div>

          <h2>Volunteering Experiences</h2>
          <div className="volunteerEntry">
            <h3>Chairperson – NTU Welfare Service Club, Friends of Children</h3>
            <p>2024 – 2025</p>
            <p>
              Lead 350 volunteers across 15 centres. Oversaw event planning, budgeting, and welfare coordination.
            </p>
          </div>
            <div className="volunteerEntry">
            <h3>Centrehead – NTU Welfare Service Club, Friends of Children</h3>
            <p>2023 – 2024</p>
            <p>
              Lead 30 volunteers in Trampoline Club. Oversaw event planning, budgeting, and welfare coordination.
            </p>
          </div>
          
        </motion.div>

        <motion.div
          className="aboutRight"
          variants={{
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
          }}
        >
          <div className="imageBlock">
            <img src="/Speech.JPG" alt="Community engagement session" />
            <Speech />
          </div>
          <div className="imageBlock">
            <img src="/volunteeringphoto.jpg" alt="Volunteering activity" />
            <p className="caption">
              Annual December Event whereby we bring our service users to NTU for a day of fun-filled activity
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
