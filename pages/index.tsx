import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next/types';

import { Date } from '../components/date';
import { description, Layout } from '../components/layout';
import { GetPostList, PostMetaType } from '../lib/postdata_api';
import utilStyles from '../styles/utils.module.css';

type PagePropsType = { list: PostMetaType[] };

export const getStaticProps: GetStaticProps<PagePropsType> = async () => {
  const list = await GetPostList();
  return {
    props: {
      list,
    },
  };
};

const Page: NextPage<PagePropsType> = ({ list }) => {
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
          {list.map(({ id, date, title }) => (
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
