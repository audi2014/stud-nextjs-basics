import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { Date } from '../components/date';
import { description, Layout } from '../components/layout';
import { getSortedPostsData, PostMetaType } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

type PagePropsType = { allPostsData: PostMetaType[] };
const Page: React.ComponentType<PagePropsType> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{description}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is a sample website from Next.js tutorial</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};
export default Page;

export const getStaticProps: GetStaticProps<PagePropsType> = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
