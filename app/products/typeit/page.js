'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function TypewriterEditor() {
  const canvasRef = useRef(null);
  const textareaRef = useRef(null);
  const [fontSize, setFontSize] = useState(26);
  const [speed, setSpeed] = useState(30);
  const [bgColor, setBgColor] = useState('transparent');
  const [showBgOptions, setShowBgOptions] = useState(false);
  const [code, setCode] = useState(
    `const x = "hello";\nlet y = 'world';\nfor(let i=0; i<5; i++) {\n  console.log(x + y);\n}`
  );
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight * 0.9;
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;
    ctx.scale(dpr, dpr);
    ctx.font = `${fontSize}px monospace`;

    if (!isTyping) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      renderCode(ctx);
    }
  }, [code, fontSize, bgColor, isTyping]);

  const getColor = (type) => {
    switch (type) {
      case 'keyword': return '#c678dd';
      case 'string': return '#D69D85';
      case 'number': return '#87bd99';
      default: return '#CCCCCC';
    }
  };

  const tokenizeLine = (line) => {
    const regex = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\b\d+(\.\d+)?\b)|\b(const|let|var|for|function|print)\b|(\s+|[^\w\s])/g;
    const tokens = [];
    let result;
    let lastIndex = 0;
    while ((result = regex.exec(line)) !== null) {
      if (result.index > lastIndex) {
        tokens.push({ text: line.slice(lastIndex, result.index), type: 'normal' });
      }
      if (result[1]) tokens.push({ text: result[1], type: 'string' });
      else if (result[2]) tokens.push({ text: result[2], type: 'number' });
      else if (result[4]) tokens.push({ text: result[4], type: 'keyword' });
      else tokens.push({ text: result[5], type: 'normal' });
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < line.length) {
      tokens.push({ text: line.slice(lastIndex), type: 'normal' });
    }
    return tokens;
  };

  const renderCode = (ctx) => {
    const lines = code.split('\n');
    let y = 40 + fontSize;
    lines.forEach(line => {
      let x = 40;
      tokenizeLine(line).forEach(token => {
        ctx.fillStyle = getColor(token.type);
        ctx.fillText(token.text, x, y);
        x += ctx.measureText(token.text).width;
      });
      y += fontSize * 1.5;
    });
  };

  const runTypewriter = () => {
    setIsTyping(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const lines = code.split('\n');
    let curLine = 0;
    let curChar = 0;
    let x = 40;
    let y = 40 + fontSize;

    const drawNextChar = () => {
      if (curLine >= lines.length) {
        setIsTyping(false);
        return;
      }

      const line = lines[curLine];
      if (curChar >= line.length) {
        curLine++;
        curChar = 0;
        x = 40;
        y += fontSize * 1.5;
        setTimeout(drawNextChar, 100);
        return;
      }

      const tokens = tokenizeLine(line);
      let char = line[curChar];
      let runningLength = 0;
      let color = '#CCCCCC';
      for (const token of tokens) {
        if (curChar < runningLength + token.text.length) {
          color = getColor(token.type);
          break;
        }
        runningLength += token.text.length;
      }

      ctx.fillStyle = color;
      ctx.fillText(char, x, y);
      x += ctx.measureText(char).width;
      curChar++;
      setTimeout(drawNextChar, speed);
    };

    drawNextChar();
  };

  const bgColors = [
    'rgb(35, 35, 35)', 'rgb(53, 34, 68)', 'rgb(40, 36, 77)', 'rgb(0, 0, 0)',
    'rgb(126, 126, 126)', 'rgb(255, 255, 255)', 'rgb(61, 58, 79)', 'rgb(56, 36, 36)'
  ];

  return (
    <div
      style={{
        background: bgColor || 'linear-gradient(45deg,rgb(14, 20, 43),rgb(54, 32, 103))',
        margin: 0,
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '90vh', cursor: 'text', backgroundColor: 'transparent' }}
      />

      {showBgOptions && (
        <div
          style={{
            padding: 20,
            position: 'absolute',
            bottom: 130,
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: 9,
            backgroundColor: '#111111',
            display: 'flex',
            gap: 20,
            flexWrap: 'wrap',
            width: 200,
            height: 200,
            zIndex: 10,
          }}
          onMouseLeave={() => setShowBgOptions(false)}
        >
          {bgColors.map((color, index) => (
            <div
              key={index}
              onClick={() => setBgColor(color)}
              style={{ cursor: 'pointer', height: 50, width: 50, borderRadius: '50%', backgroundColor: color }}
            />
          ))}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '0 10px', borderRadius: 30, backgroundColor: '#111111',
            width: '90%', maxWidth: 600, height: 40
          }}
        >
          <button
            style={{ padding: '0 10px', borderRadius: 5, backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
            onClick={runTypewriter}
          >
            Run
          </button>

          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => setFontSize(fontSize - 1)} style={{ padding: '2px 8px', borderRadius: 5, backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>A-</button>
            <button onClick={() => setFontSize(fontSize + 1)} style={{ padding: '2px 8px', borderRadius: 5, backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>A+</button>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => setSpeed(speed + 10)} style={{ padding: '2px 8px', borderRadius: 5, backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>Faster</button>
            <button onClick={() => setSpeed(speed - 10)} style={{ padding: '2px 8px', borderRadius: 5, backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>Slower</button>
          </div>

          <button
            onClick={() => setShowBgOptions(!showBgOptions)}
            style={{ height: 25, width: 25, background: 'purple', borderRadius: '50%', cursor: 'pointer', border: 'none' }}
          />

          <button style={{ padding: '2px 8px', borderRadius: 5, backgroundColor: '#737373', color: '#fff', border: 'none', cursor: 'pointer' }}>
            <Image src="/download.png" alt="Record" height={10} width={10} />
          </button>
        </div>
      </div>

      <textarea ref={textareaRef} style={{ position: 'absolute', opacity: 0, left: -1000, top: -1000 }} />
    </div>
  );
}
