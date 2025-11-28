import React from 'react';
import { Experience as ExperienceType } from '../types';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      id: 1,
      company: '지마켓',
      position: 'Pricing Optimization팀 / 팀원',
      duration: '2022.08 - 현재',
      description: '상품 데이터 파이프라인 개발 및 운영. 30분 배치 작업으로 3억건의 상품 변경분 처리, DB 생성 및 제휴사에 제공. Azure Databricks 포팅 및 Spring Webflux 기반 실시간 상품 정보 업데이트 시스템(1시간 30만건) 구축.'
    },
    {
      id: 2,
      company: '산은캐피탈',
      position: 'IT지원실 / 주임',
      duration: '2021.01 - 2022.06',
      description: '사내 코어시스템 운영 및 마이데이터 프로젝트 개발. Python FastAPI를 활용하여 사내 250명 임직원이 동시 사용하는 API 서버 개발 (CI 변환, SMS, Email, Excel 다운로드 기능).'
    },
    {
      id: 3,
      company: '네이버 / 동영상클라우드',
      position: '인턴',
      duration: '2020.02 - 2020.03',
      description: 'FDS(Fraud Detection System) 모델 개발. AutoEncoder, TSVM, Logistic Regression 활용하여 99.1% 탐지 정확도 달성. Apache Zeppelin 환경에서 분산SQL 분석 수행.'
    },
    {
      id: 4,
      company: '신세계I&C',
      position: 'POS팀 / 무인화 시스템 담당',
      duration: '2019.01 - 2020.01',
      description: '신세계백화점 무인화 POS 시스템(Self-Checkout, CashTerminal) 운영. C# WPF 프레임워크를 사용한 시스템 개발 및 배포.'
    },
    {
      id: 5,
      company: 'SK Telecom / 데이터기술원',
      position: '인턴',
      duration: '2018.07 - 2018.08',
      description: '빅데이터 분산 인프라 구축. Python Multiprocessing을 Spark 기반 분산처리 코드로 전환. Hadoop HDFS, Spark를 활용한 대용량 데이터 처리 인프라 구축.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h1 className="section-title">Experience</h1>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="timeline-marker"></div>
              <div className="experience-content">
                <h3>{exp.position}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
