import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || '메시지 전송에 실패했습니다.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
    } catch (err) {
      console.error('이메일 전송 실패:', err);
      setError(err instanceof Error ? err.message : '메시지 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="section-title">Contact Me</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h3>연락처</h3>
            <ul>
              <li>
                <span className="label">Email:</span>
                <a href="mailto:jymk04130@gmail.com">jymk04130@gmail.com</a>
              </li>
              <li>
                <span className="label">Phone:</span>
                <span>010-3191-6927</span>
              </li>
              <li>
                <span className="label">Location:</span>
                <span>Seoul, South Korea</span>
              </li>
              <li>
                <span className="label">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/younghun-joo-3b9212166/" target="_blank" rel="noopener noreferrer">linkedin.com/in/younghun-joo</a>
              </li>
              <li>
                <span className="label">GitHub:</span>
                <a href="https://github.com/jooyounghun" target="_blank" rel="noopener noreferrer">github.com/jooyounghun</a>
              </li>
              <li>
                <span className="label">Blog:</span>
                <a href="https://datacodingschool.tistory.com/" target="_blank" rel="noopener noreferrer">datacodingschool.tistory.com</a>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="이름을 입력하세요"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="이메일을 입력하세요"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">메시지</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="메시지를 입력하세요"
                rows={5}
              ></textarea>
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? '전송 중...' : submitted ? '전송 완료!' : '메시지 전송'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
