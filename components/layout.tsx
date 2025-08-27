import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

import utilStyles from '@/styles/utils.module.css';

import styles from './layout.module.css';

const title = "Artur's NextJs tutorial";
export const description = 'Dummy web site for NextJs playground';
const img = '/images/photo-sm.png';

type LayoutPropsType = { home?: boolean };

export const Layout: React.ComponentType<PropsWithChildren<LayoutPropsType>> = ({
  children,
  home,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={img} />
        <meta name='og:title' content={description} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src={img}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=''
            />
            <h1 className={utilStyles.heading2Xl}>{title}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                src={img}
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=''
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/' className={utilStyles.colorInherit}>
                {title}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
    </div>
  );
};
