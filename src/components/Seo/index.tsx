/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import Head from 'next/head';
type SeoProps = {
  description?: string;
  title?: string;
};
function Seo({
  description = 'Cùng 60,000+ cửa hàng tin tưởng đặt hàng qua Telio mỗi ngày',
  title = '',
}: SeoProps) {
  return (
    <Head>
      <title>{`${title} | Telio Website`}</title>
      <link rel='icon' href='/icons/icon.png' />
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta
        name='google-site-verification'
        content='g3yjwKP-M7dNyYSxyv_fO_9CbXbpvWq4HVssfPmv4tU'
      />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://telio.vn/en' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta
        property='og:image'
        content='https://tlbk-prd-sg-s3-assets.s3.ap-southeast-1.amazonaws.com/images/Thumbnail+-+TelioVN.png'
      />
      {/* <!-- Twitter --> */}
      <meta
        property='twitter:card'
        content='https://tlbk-prd-sg-s3-assets.s3.ap-southeast-1.amazonaws.com/images/Thumbnail+-+TelioVN.png'
      />
      <meta property='twitter:url' content='https://telio.vn' />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta
        property='twitter:image'
        content='https://tlbk-prd-sg-s3-assets.s3.ap-southeast-1.amazonaws.com/images/Thumbnail+-+TelioVN.png'
      />
      <script
        type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
          var clevertap = {
            event: [],
            profile: [],
            account: [],
            region: 'sg1',
            onUserLogin: [],
            notifications: [],
            privacy: [],
          };

          clevertap.account.push({ id: '${process.env.NEXT_PUBLIC_CLEVERTAP_ID}' });
          clevertap.privacy.push({ optOut: false });
          clevertap.privacy.push({ useIP: false });
          (function () {
            var wzrk = document.createElement('script');
            wzrk.type = 'text/javascript';
            wzrk.async = true;
            wzrk.src =
              ('https:' == document.location.protocol
                ? 'https://d2r1yp2w7bby2u.cloudfront.net'
                : 'http://static.clevertap.com') + '/js/a.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wzrk, s);
          })();
        `,
        }}
      ></script>
    </Head>
  );
}

export default Seo;
