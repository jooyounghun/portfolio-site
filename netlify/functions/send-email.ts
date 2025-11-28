import { Handler } from '@netlify/functions';
import emailjs from '@emailjs/nodejs';

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

    // EmailJS 초기화
    emailjs.init({
      publicKey: process.env.EMAILJS_PUBLIC_KEY
    });

    // 이메일 발송
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        to_email: 'jymk04130@gmail.com',
        from_name: name,
        from_email: email,
        message: message
      }
    );

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
