import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';

import { Date } from '../../components/date';
import { Layout } from '../../components/layout';
import { getAllPostIds, getPostData, PostType } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

type PagePropsType = { postData: PostType };
const Page: React.ComponentType<PagePropsType> = ({ postData }) => {
  useEffect(() => {
    console.log('postData');
  }, []);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};
export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PagePropsType, { id: string }> = async ({
  params,
}) => {
  const postData = await getPostData(params?.id ?? '');
  return {
    props: {
      postData,
    },
  };
};
