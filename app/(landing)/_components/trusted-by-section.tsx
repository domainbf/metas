import type { FC, HTMLAttributes } from 'react';

import { TrustedByLogos } from './trusted-by-logos';

type TrustedBySectionProps = HTMLAttributes<HTMLElement>;

export const TrustedBySection: FC<TrustedBySectionProps> = (props) => (
  <section {...props}>
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-center font-semibold sm:text-lg">
        Trusted by experts at
      </h2>

      <TrustedByLogos />

      <a
        href="https://nic.bn?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-domain&#0045;digger"
        target="_blank"
        className="mt-2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://wubaohu.com/wp-content/uploads/2024/08/nic.bn_.png"
          alt="domain registration"
          style={{ width: '250px', height: '54px' }}
          width="250"
          height="54"
        />
      </a>
    </div>
  </section>
);
