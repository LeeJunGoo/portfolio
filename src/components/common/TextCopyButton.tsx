'use client';

import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';

const TextCopyButton = () => {
  const [copied, setCopied] = useState(false);
  const email = 'leejungoo1396@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors dark:text-gray-100"
      title="이메일 복사"
    >
      <HiOutlineMail className="text-2xl" />
      <span className="font-semibold">{copied ? '이메일이 복사되었습니다!' : email}</span>
    </button>
  );
};

export default TextCopyButton;
