import React from 'react';
import { Skill } from '../types';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: 'Languages',
      items: ['Java 11/17', 'Python 3.8', 'C#', 'SQL', 'JavaScript/HTML/CSS']
    },
    {
      category: 'Big Data & Frameworks',
      items: ['Spark', 'Hadoop HDFS', 'Apache Kafka', 'DeltaLake', 'Hive', 'Gensim (NLP)']
    },
    {
      category: 'Backend',
      items: ['Spring Boot', 'Spring Webflux', 'FastAPI', 'MyBatis', 'REST API']
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['Azure Databricks', 'AWS EC2', 'Kubernetes', 'Docker', 'Linux']
    },
    {
      category: 'Database',
      items: ['MSSQL', 'MongoDB', 'Redis', 'DB2 for i', 'Database Design']
    },
    {
      category: 'Machine Learning',
      items: ['AutoEncoder', 'TSVM', 'Logistic Regression', 'Data Analysis', 'Apache Zeppelin']
    },
    {
      category: 'Tools & Collaboration',
      items: ['Git', 'TFS', 'SVN', 'Slack', 'Teams', 'Jupyter Notebook', 'IntelliJ', 'PyCharm']
    },
    {
      category: 'Soft Skills',
      items: ['체계적인 계획', '문제해결능력', '팀 협업', '프로젝트 관리', '기술 교육']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 className="section-title">Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <h3>{skill.category}</h3>
              <ul className="skill-list">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
