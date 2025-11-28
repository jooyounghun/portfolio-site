import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');

    // 입력값 검증
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: '모든 필드를 입력해주세요.' })
      };
    }

    // Gmail SMTP 설정
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
      }
    });

    // 이메일 옵션
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'jymk04130@gmail.com',
      subject: `새로운 포트폴리오 메시지 - ${name}`,
      html: `
        <h2>새로운 메시지가 도착했습니다!</h2>
        <p><strong>발신자:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>메시지:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // 이메일 발송
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: '메시지가 성공적으로 전송되었습니다!'
      })
    };
  } catch (error) {
    console.error('이메일 전송 실패:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: '메시지 전송에 실패했습니다. 다시 시도해주세요.',
        error: error instanceof Error ? error.message : '알 수 없는 오류'
      })
    };
  }
};

export { handler };
