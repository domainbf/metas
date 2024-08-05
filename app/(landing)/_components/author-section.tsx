import Image from 'next/image';
import type { FC, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type AuthorSectionProps = HTMLAttributes<HTMLElement>;

export const AuthorSection: FC<AuthorSectionProps> = ({
  className,
  ...props
}) => (
  <section
    className={cn(
      'flex items-center justify-center gap-4 font-medium',
      className
    )}
    {...props}
  >
    <Image
      width={48}
      height={48}
      className="h-12 w-12 rounded-full"
      src="https://wubaohu.com/wp-content/uploads/2024/08/Lee.png"
      alt="Thanks to the open source author: Felix Wotschofsky"
    />
    <div>
      <p>Created based on the open source program by Felix Wotschofsky. 👋</p>
      <p>
        You can{' '}
        <a
          className="underline decoration-dotted underline-offset-4"
          href="https://x.com/domain_bf"
          target="_blank"
        >
          follow me on X
        </a>{' '}
        and{' '}
        <a
          className="underline decoration-dotted underline-offset-4"
          href="https://dev.ug/"
          target="_blank"
        >
          check out my other projects
        </a>
        .
      </p>
    </div>
  </section>
);
