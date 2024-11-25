'use client'; // App Router에서는 클라이언트 컴포넌트에 필요

import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/hello') // NestJS API 호출
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error('Error fetching API:', err));
  }, []);

  return (
    <div>
      <div>Next.js AREA</div>
      <div>{message}</div>
    </div>
  );
}
