"use client"; // 添加这一行

import type { FC } from 'react';
import { useEffect } from 'react'; // 引入 useEffect 钩子
import { FaHeart, FaWeebly, FaDochub, faCopyright } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const Footer: FC = () => {
  useEffect(() => {
    // 动态插入统计脚本
    const script = document.createElement('script');
    script.src = 'https://china.tn/pixel/Etdei8K77dOab7WT';
    script.defer = true;
    document.body.appendChild(script);

    // 清理函数，移除脚本
    return () => {
      document.body.removeChild(script);
    };
  }, []); // 空依赖数组，确保只在组件挂载时运行一次

  return (
    <footer className="w-full p-4 md:px-8">
      <div className="flex items-center justify-between border-t pt-4">
        <p className="text-sm">
          ©️2024{' '}
          <FaHeart className="inline text-red-500" fontSize="1.25rem" />
          <span className="sr-only">love</span> 🇨🇳{' '}
          <a
            className="underline decoration-dotted underline-offset-4"
            href="https://wotschofsky.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Felix Wotschofsky (Site Creator)"
          >
           Author: Felix Wotschofsky
          </a>
        </p>

        <div>
          <Button variant="ghost" asChild>
            <a
              href="https://whois.ls"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWeebly className="h-6 w-6" />
              <span className="sr-only">Visit whois.ls</span>
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a
              href="https://domain.bf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDochub className="h-6 w-6" />
              <span className="sr-only">Visit domain name</span>
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a
              href="https://wotschofsky.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <faCopyright className="h-6 w-6" />
              <span className="sr-only">Visit author</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};
