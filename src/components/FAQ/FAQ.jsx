import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi'; // Importing a chevron icon

import './FAQ.css';

const faqData = [
  {
    question: 'What are some signs of bullying? ',
    answer: 'Change in a personality, for instance, withdrawn when before he is bubbly,School refusal,Drop in grades,He says he does not have friends, hates his friends, etc.'
  },
  {
    question: 'What are the types of developmental/learning disorders?',
    answer: 'There are three major types of specific learning disorders – Reading disorder,Mathematics disorder, and disorder of Written Expression. In addition, Non-VerbalLearning Disability (NVLD) and Attention Deficit Hyperactivity Disability (ADHD) could also affect a child’s learning.'
  },
  {
    question: 'Is the Media forcing adolescents to multi-task or is multi-tasking innate?',
    answer: 'Multi-tasking is the ability to perform several different tasks at the same time with or without comprising the quality of the outcome. '
  },
  {
    question: 'What are the signs of a happy and secure child/baby?',
    answer: 'A happy and secured child/baby can be placated in distressing situations by caregivers.Although anxious of new environments and strangers, the child/baby is also curious about them.'
  },
  {
    question: 'What is support group?',
    answer: 'A support group is a group of people coming together due to similar background and/orexperiences, forming a community which provides a platform to speak your mind without being judged.'
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h1>FAQs</h1>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <motion.div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              initial={false}
              animate={activeIndex === index ? "open" : "closed"}
            >
              <p>{faq.question}</p>
              <motion.span
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.2 }}
              >
                <FiChevronDown />
              </motion.span>
            </motion.div>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="faq-answer"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
