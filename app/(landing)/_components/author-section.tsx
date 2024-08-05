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
      src="/assets/Lee.png"
      alt="Thanks to the open source author: Felix Wotschofsky"
    />
    <div>
      <p>Hi, I am the founder of domain name registrar NIC.BN. 🪐</p>
      <p>
        Provide{' '}
        <a
          className="underline decoration-dotted underline-offset-4"
          href="https://nic.bn/order"
          target="_blank"
        >
          domain name registration
        </a>{' '}
        and{' '}
        <a
          className="underline decoration-dotted underline-offset-4"
          href="https://domain.bf/"
          target="_blank"
        >
          You can also view domain names that are for sale.
        </a>
        .
      </p>
    </div>
  </section>
);
