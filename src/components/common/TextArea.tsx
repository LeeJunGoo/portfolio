'use client';

import React, { TextareaHTMLAttributes, useEffect, useRef, useState } from 'react';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  maxRows: number;
};

const TextArea = ({ maxRows, ...props }: Props) => {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const resize = () => {
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight || '24', 10);
      const maxHeight = lineHeight * maxRows;

      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;

      textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
      textarea.style.overflowX = 'hidden';
    };

    resize(); // 초기 실행
    textarea.addEventListener('input', resize);
    return () => textarea.removeEventListener('input', resize);
  }, [maxRows]);

  return <textarea {...props} ref={textareaRef} value={value} onChange={(e) => setValue(e.target.value)} rows={1} />;
};

export default TextArea;
