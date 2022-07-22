import { GetServerSideProps } from 'next';

const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Content-Type', 'text/xml');
  res.write(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
  <loc>https://${req.headers.host}/</loc>
  <lastmod>2022-04-25T10:09:28+00:00</lastmod>
  <priority>1.00</priority>
  </url>
  <url>
  <loc>https://${req.headers.host}/bnpl/</loc>
  <lastmod>2022-04-25T10:09:28+00:00</lastmod>
  <priority>0.8</priority>
  </url>
  <url>
  <loc>https://${req.headers.host}/tnc/</loc>
  <lastmod>2022-04-25T10:09:28+00:00</lastmod>
  <priority>0.8</priority>
  </url>
  <url>
  <loc>https://${req.headers.host}/bnpl-tnc/</loc>
  <lastmod>2022-04-25T10:09:28+00:00</lastmod>
  <priority>0.8</priority>
  </url>
  <url>
  <loc>https://${req.headers.host}/bnpl-qna/</loc>
  <lastmod>2022-04-25T10:09:28+00:00</lastmod>
  <priority>0.8</priority>
  </url>
  <url>
  <loc>https://${req.headers.host}/zalo-pay-info/</loc>
  <lastmod>2022-04-25T10:09:28+00:00</lastmod>
  <priority>0.8</priority>
  </url>
  </urlset>`);
  res.end();

  return {
    props: {},
  };
};
export default Sitemap;
