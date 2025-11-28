import React from 'react';
import { Project } from '../types';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: '실시간 상품 DB 구축 시스템 개발 및 운영',
      description: '1시간에 30만건의 상품 정보를 실시간으로 업데이트할 수 있는 비동기 시스템. Non-Blocking IO 기반으로 데이터 수집-전처리-저장 과정에서 어느 한 부분도 블로킹되지 않는 시스템 구현.',
      technologies: ['Java 17', 'Spring Webflux', 'Kafka', 'DeltaLake', 'Kubernetes'],
      github: 'https://github.com/jooyounghun'
    },
    {
      id: 2,
      title: '가격비교 사이트 상품 DB 제공 시스템',
      description: '30분 배치 작업으로 매 수행 job마다 3억건의 상품 변경분을 처리. 기존 Hadoop MapReduce 방식을 Azure Databricks로 포팅하여 대량의 데이터를 PySpark를 통해 분산처리.',
      technologies: ['Python', 'Spark', 'DeltaLake', 'Azure Databricks', 'Hadoop'],
      github: 'https://github.com/jooyounghun'
    },
    {
      id: 3,
      title: 'HDFS, Spark를 활용한 대용량 데이터 모델링 전처리 최적화',
      description: 'Python Multiprocessing을 Spark 기반 분산처리 스크립트로 전환. Linux 위에 HDFS, Spark를 설치하여 분산 인프라 구축.',
      technologies: ['Python', 'Hadoop HDFS', 'Spark', 'Gensim', 'Linux'],
      github: 'https://github.com/jooyounghun'
    },
    {
      id: 4,
      title: '머신러닝 활용한 FDS 모델 개발',
      description: 'TSVM, AutoEncoder, Logistic Regression 모델을 사용하여 FDS 시스템 개발. 99.1%의 탐지 정확도 달성.',
      technologies: ['Python', 'Machine Learning', 'SparkSQL', 'Apache Zeppelin', 'Jupyter'],
      github: 'https://github.com/jooyounghun'
    },
    {
      id: 5,
      title: '회사 매칭 및 추천 모델 개발',
      description: 'NLP를 활용한 회사 매칭 및 추천 시스템 개발. Spring Boot MVC 패턴으로 백엔드 구현.',
      technologies: ['Java 11', 'Python', 'Spring Boot', 'Gensim', 'AWS EC2'],
      github: 'https://github.com/jooyounghun'
    },
    {
      id: 6,
      title: '금융 마이데이터 프로젝트',
      description: 'Spring Boot와 Mybatis를 사용한 금융 마이데이터 플랫폼 개발. 프론트엔드 HTML, CSS, JS 구현.',
      technologies: ['Java 11', 'Spring Boot', 'Mybatis', 'HTML/CSS/JS', 'DB2 for i'],
      github: 'https://github.com/jooyounghun'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1 className="section-title">Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
