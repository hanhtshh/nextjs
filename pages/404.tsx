import Head from 'next/head';
import React from 'react';
import { useWindowWidth } from '../src/hooks/useWindowWidthHook';
import styles from '../styles/404.module.css';

import { T } from '../src/hooks/translation';
import Link from 'next/link';
import { WrapImage } from '../src/components/WrapImage';
import Seo from '../src/components/Seo';

export default function Custom500() {
  const width = useWindowWidth();

  return (
    <>
      <Seo title={T('trang-khong-ton-tai')} />
      <main>
        <div className={styles.errorPage}>
          <div
            className={styles.errorBox}
            style={
              width <= 768
                ? { zoom: `calc(${width}/578)` }
                : { zoom: `calc(${width}/1156)` }
            }
          >
            <WrapImage
              desktop={{
                src: '/images/errorImage.png',
                alt: 'blog image',
                objectFit: 'cover',
                layout: 'fill',
                className: styles.errorImage,
              }}
            />
            <div className={styles.errorText}>
              {T('xin-loi-trang-ban-da-truy-cap-khong-ton-tai')}
            </div>
            <Link href={`/`}>
              <button className={styles.errorButton}>
                {T('quay-lai-trang-chu')}
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
