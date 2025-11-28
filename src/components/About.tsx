import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="section-title">About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>주영훈 (Younghun Joo)</h2>
            <p className="subtitle">5년차 소프트웨어 개발자</p>

            <p>
              경희대학교 컴퓨터공학과를 졸업한 5년차 소프트웨어 개발자 주영훈입니다.
            </p>
            <p>
              개발하고 공유하는 것을 즐기며, 이로 인해 생산적인 결과를 얻게 될 때 큰
              즐거움을 느끼고 있습니다. 데이터 기반 의사결정을 좋아하며, '모든 개발자는
              교육자가 되어야 한다'는 생각으로 살고 있습니다.
            </p>

            <div className="strengths">
              <h3>주요 강점</h3>
              <ul>
                <li><strong>체계적인 계획과 실행력</strong> - 프로젝트를 체계적으로 계획하고 실행하여 일정 내에 완료</li>
                <li><strong>편의성을 고려하는 개발</strong> - 사용자 관점에서 생각하는 개발</li>
                <li><strong>팀 목표 달성을 위한 열정</strong> - 팀원과의 원활한 소통과 책임감 있는 업무</li>
              </ul>
            </div>

            <div className="contact-quick">
              <h3>연락처</h3>
              <p>📞 <strong>010-3191-6927</strong></p>
              <p>📧 <strong>jymk04130@gmail.com</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
