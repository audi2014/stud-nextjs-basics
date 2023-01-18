import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, NextPage, Redirect } from 'next/types';
import { ParsedUrlQuery } from 'querystring';

import { Date } from '../../components/date';
import { Layout } from '../../components/layout';
import { GetAllPostIds, GetPost, PostType } from '../../lib/postdata_api';
import utilStyles from '../../styles/utils.module.css';

interface Params extends ParsedUrlQuery {
  id: string;
}
type PagePropsType = { post: PostType };

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await GetAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PagePropsType | { redirect: Redirect },
  Params
> = async (context) => {
  const post = await GetPost(context.params?.id ?? '');
  if (!post) {
    return {
      redirect: {
        destination: '/',
      } as Redirect,
    };
  }
  return {
    props: {
      post,
    } as PagePropsType,
  };
};

const Page: NextPage<PagePropsType> = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
};
export default Page;
