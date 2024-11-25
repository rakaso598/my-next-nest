'use client'; // App Router에서는 클라이언트 컴포넌트에 필요

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [message, setMessage] = useState(''); // [상태변수, 상태변경함수선언]
  const elementRef = useRef<HTMLParagraphElement>(null); // useRef<타입명시>(인자)

  // useEffect(() => { ... }, []);

  useEffect(() => { // 렌더링후 특정함수실행 useEffect 
    fetch('http://localhost:3000/hello') // 주어진 URL로 HTTP 요청
      .then((response) => response.text()) // 응답을 텍스트로 처리
      .then((data) => setMessage(data)) // 응답을 setMessage에 전달하여 상태 업데이트
      // message 렌더링 반영되어 화면에 표시
      .catch((err) => console.error('Error fetching API:', err)); // fetch 실패시 에러메시지 콘솔에 출력
  }, []); // 빈배열 -> 마운트시 한번만실행

  useEffect(() => {
    if (elementRef.current) {
      // 요소가 존재하는지
      elementRef.current.textContent = 'Hello, this content was changed By useEffect()!'
    }
  }, []); // 빈배열 - 한번만호출

  return (
    <div>
      <div>
        <p>::DASHBOARD FOLDER::</p><br />
        <p>Fetch : localhost:3000/hello</p>{message}<br />
        <p ref={elementRef}>Initial content</p>
      </div>
    </div>
  );
}
