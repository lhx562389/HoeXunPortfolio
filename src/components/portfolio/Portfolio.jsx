import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from "motion/react";

const internships = [
  {
    id: 1,
    img: "/htx.png",
    title: "HTX AI Developer Intern",
    desc: "Built a custom object detection dataset and trained models (YOLOv7, TridentNet). Automated data collection, cleaning, and Excel reporting using scripts. Developed a tool for Voxel51 to explore large image datasets easily.",
    link: "/",
  },
  {
    id: 2,
    img: "/cpf.jpg",
    title: "CPF GenAI Intern",
    desc: "Assisted with the development, testing, and implementation of GenAI solutions (primarily Gemini). Contributed in documentation, research and data management regarding the advancements of GenAI Technologies",
    link: "/",
  },
];

const courseworks = [
  {
    id: 3,
    img: "/p5.jpg",
    title: "3D Animated Portfolio",
    desc: "Worked on my own animated portfolio using Next.Js and React ",
    link: "/",
  },
  // {
  //   id: 4,
  //   img: "/p4.jpg",
  //   title: "Course Project B",
  //   desc: "Worked on...",
  //   link: "/",
  // },
  // {
  //   id: 5,
  //   img: "/p5.jpg",
  //   title: "Course Project C",
  //   desc: "Worked on...",
  //   link: "/",
  // },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt={item.title} />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Details</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const [currentSection, setCurrentSection] = useState("internship");
  const [showLabel, setShowLabel] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const allItems = [...internships, ...courseworks];
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * allItems.length]);

  // Control floating header visibility based on scroll range
  const labelOpacity = useTransform(scrollYProgress, [0.05, 0.1, 0.9, 0.95], [0, 1, 1, 0]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const percent = v * 100;
    setCurrentSection(percent < 75 ? "internship" : "coursework");
    setShowLabel(v > 0.05 && v < 0.95);
  });

  return (
    <div className="portfolio" ref={ref}>
      {/* Floating Section Title - fades in and out with scroll */}
      {showLabel && (
        <motion.div className="sectionLabel" style={{ opacity: labelOpacity }}>
          {currentSection === "internship" ? "Internship Experience" : "Coursework Projects"}
        </motion.div>
      )}

      <motion.div className="pList" style={{ x: xTranslate }}>
        <div className="empty" style={{ width: window.innerWidth - containerDistance }} />
        {allItems.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>

      {/* Filler sections for scroll space */}
      <section />
      <section />
      <section />
      <section />
      <section />

      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="70" fill="none" stroke="#ddd" strokeWidth={20} />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
