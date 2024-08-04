import { TbBrandAlipay } from "react-icons/tb";
import Link from 'next/link';
import type { FC } from 'react';
import { AiOutlineGlobal } from "react-icons/ai";

import { Button } from '@/components/ui/button';

import LogoDark from '@/assets/logo-dark.svg';
import LogoLight from '@/assets/logo-light.svg';

import { BookmarkletLink } from './bookmarklet-link';
import { ThemeMenu } from './theme-menu';

export const Header: FC = () => (
  <header className="w-full p-4 md:px-8">
    <div className="flex items-center justify-between pb-4">
      <Link className="flex items-center gap-2" href="/" aria-label="Home Page">
        <LogoDark className="inline h-6 dark:hidden" />
        <LogoLight className="hidden h-6 dark:inline" />
        met.as
      </Link>

      <div className="flex items-center justify-between gap-4">
        <Button variant="ghost" asChild>
          <a
            href="https://domain.bf"
            target="_blank"
            rel="noopener"
          >
            <TbBrandAlipay className="mr-1 h-6 w-4 text-pink-600" />
            <span>Sponsor</span>
          </a>
        </Button>
        <Button variant="ghost" asChild>
          <a
            href="https://domain.bf"
            target="_blank"
            rel="noopener"
          >
            <AiOutlineGlobal className="mr-1 h-6 w-4" />
            <span>domain</span>
            <span className="sr-only">Domain for sale</span>
          </a>
        </Button>
        <div className="hidden sm:block">
          <BookmarkletLink />
        </div>
        <ThemeMenu />
      </div>
    </div>
  </header>
);
