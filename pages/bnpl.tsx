// import { makeStyles, p } from '@material-ui/core';
import React, { useState, useEffect, useRef } from 'react';
import classes from '../src/components/Tnc/bnpl.module.css';

import {
  initCleverTapUserProfile,
  pushClevertapEvent,
  formatMobileNumber,
} from '../src/utils';
import { useRouter } from 'next/router';
import { WrapImage } from '../src/components/WrapImage';
import Link from 'next/link';
import Seo from '../src/components/Seo';
import dynamic from 'next/dynamic';
// import { pushClevertapEvent } from 'app/utils/clevertap';
// import Button2 from '../components/Button';
const DynamicQuestionDropdown = dynamic(
  import('../src/components/QuestionDropdown'),
  {
    ssr: false,
  }
);
const LearnMorePage = () => {
  const [control, setControl] = useState(false);
  const [openedQuestion, setOpenedQuestion] = useState(null);
  const video = useRef(null);
  const router = useRouter();
  const { phone = '', zaloId = '' } = router.query;
  useEffect(() => {
    if (phone || zaloId) {
      initCleverTapUserProfile({
        zaloId,
        Identity: zaloId,
        Phone: phone && formatMobileNumber(phone, true),
      });
      pushClevertapEvent('SCREEN VIEW', {
        currentScreenName: 'bnpl_landing_page',
      });
      pushClevertapEvent('bnpl_landingpage_viewed');
    }
  }, [phone, zaloId]);

  const pushCTforFAQS = () => {
    pushClevertapEvent('bnpl_faq_clicked', {
      screen: 'bnpl_landing_page',
    });
  };

  const pushCTforTNC = () => {
    pushClevertapEvent('bnpl_tnc_clicked', {
      screen: 'bnpl_landing_page',
    });
  };

  const turnControlOnAndPlay = () => {
    setControl(true);
    if (video && video.current) {
      (video.current as any).play();
    }
  };

  const redirectToZaloStore = () => {
    (window.location as any).href = process.env.NEXT_PUBLIC_ZALO_STORE_URL;
  };

  const toggleQuestion = (question: any) => {
    if (openedQuestion && openedQuestion !== question) {
      pushClevertapEvent('bnpl_faq_interact', {
        position: openedQuestion,
        questions: false,
        faq_expanded: 'FALSE',
      });
    }
    pushClevertapEvent('bnpl_faq_interact', {
      position: question,
      questions: false,
      faq_expanded: openedQuestion !== question ? 'TRUE' : 'FALSE',
    });
    setOpenedQuestion(openedQuestion === question ? null : question);
  };

  return (
    <div className={classes.container}>
      <Seo title='Giới thiệu' />
      <WrapImage
        desktop={{
          src: '/images/bnpl-thumbnail.png',
          alt: 'thumbnail',
          className: classes.thumbnail,
          layout: 'fill',
          objectFit: 'cover',
        }}
      />
      <div className={classes.titleContainer}>
        <WrapImage
          desktop={{
            src: '/images/fast-dong.png',
            alt: 'fast-dong',
            className: classes.titleIcon,
            layout: 'fill',
            objectFit: 'cover',
          }}
        />
        <p className={classes.title}>Mua trước, trả sau</p>
        <p className={classes.subTitle}>Tối đa 30 ngày</p>
        <p className={classes.titleDescription} style={{ textAlign: 'center' }}>
          Chương trình hỗ trợ khách hàng xoay vòng vốn nhanh qua hình thức nhập
          hàng trước, thanh toán sau với hạn mức tối đa 100.000.000vnd
        </p>
      </div>
      <div className={classes.videoContainer} onClick={turnControlOnAndPlay}>
        {/* eslint-disable-next-line */}
        <video
          className={control ? classes.video : classes.videoOnlyPoster}
          poster={'/images/bnpl-video-poster.png'}
          preload='none'
          controls={control}
          ref={video}
        >
          <source
            src='https://assets.telio.me/zalo/bnpl/bnpl-v2.mp4'
            type='video/mp4'
          />
          <p>Trình duyệt của bạn không hỗ trợ xem video.</p>
        </video>
      </div>

      <div className={classes.section}>
        <div className={classes.sectionImageContainer}>
          <WrapImage
            desktop={{
              src: '/images/calendar.png',
              alt: 'calendar',
              className: classes.sectionImage,
              layout: 'fill',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={classes.sectionInfoContainer}>
          <h3 className={classes.sectionTitle}>
            Phí quản lý chỉ từ 3.000đ/ngày
          </h3>
          <p className={classes.sectionDescription}>
            Với đơn <b style={{ color: '#000' }}>dưới 8.000.000đ</b>, áp dụng
            phí cố định 3.000đ/ngày kể từ ngày giao hàng, tối đa 30 ngày.
          </p>
          <p
            style={{ marginTop: '16px' }}
            className={classes.sectionDescription}
          >
            Với đơn <b style={{ color: 'black' }}>từ 8.000.000đ</b>, miễn phí
            quản lý trong 3 ngày đầu tiên kể từ sau ngày giao hàng. Telio áp
            dụng phí cố định 10.000đ/ngày từ ngày thứ 4, tối đa 30 ngày.
          </p>
        </div>
      </div>

      <div className={classes.section}>
        <div className={classes.sectionImageContainer}>
          <WrapImage
            desktop={{
              src: '/images/pay.png',
              alt: 'pay',
              className: classes.sectionImage,
              layout: 'fill',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={classes.sectionInfoContainer}>
          <h3 className={classes.sectionTitle}>Thanh toán linh hoạt</h3>
          <p className={classes.sectionDescription}>
            Khách hàng được lựa chọn 1 trong 2 phương thức thanh toán sau:
            <br />
            &bull; Thu tiền tận nơi <br />
            &bull; Chuyển khoản ngân hàng
          </p>
          <br />
          <i
            style={{ color: '#666d74', fontWeight: 'lighter' }}
            className={classes.sectionDescription}
          >
            *Đặt lịch hẹn thu tiền trước 2 ngày
          </i>
        </div>
      </div>

      <div className={classes.sectionNoBorder}>
        <div className={classes.sectionImageContainer}>
          <WrapImage
            desktop={{
              src: '/images/touch.png',
              alt: 'touch',
              className: classes.sectionImage,
              layout: 'fill',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={classes.sectionInfoContainer}>
          <h3 className={classes.sectionTitle}>Sử dụng dễ dàng</h3>
          <p className={classes.sectionDescription}>
            Khách hàng chỉ cần lựa chọn hình thức Thanh Toán Chậm khi thanh toán
            đơn hàng. Telio áp dụng chương trình với khách hàng đủ điều kiện,
            đơn hàng sẽ được tự động xét duyệt.
          </p>
        </div>
      </div>

      <div className={classes.faqContainer}>
        <div className={classes.faqTitleContainer}>
          <h3 className={classes.faqTitle}>Câu hỏi thường gặp</h3>
        </div>
        <div>
          <DynamicQuestionDropdown
            question='Thời hạn thanh toán đơn hàng Thanh Toán Chậm (Mua trước, trả sau) là bao lâu?'
            open={openedQuestion === 1}
            toggle={() => toggleQuestion(1)}
          >
            <div className={classes.answerContent}>
              Đơn hàng Thanh Toán Chậm được thanh toán tối đa trong 30 ngày kể
              từ ngày giao hàng.
              <br />
              Sau 30 ngày, Telio có quyền khóa tài khoản và không cho phép bạn
              đặt thêm bất kì đơn hàng nào. Đồng thời, phí trễ hạn 15.000
              VNĐ/mỗi ngày sẽ được áp dụng.
            </div>
          </DynamicQuestionDropdown>
          <DynamicQuestionDropdown
            question='Làm thế nào để thanh toán đơn hàng Thanh Toán Chậm (Mua trước, trả sau) ?'
            open={openedQuestion === 2}
            toggle={() => toggleQuestion(2)}
          >
            <div className={classes.answerContent}>
              Khách hàng được lựa chọn một trong hai cách: <br />
              - Thu tiền tận nơi: Gọi 1800 6751 để đặt lịch thu tiền. Lưu ý:
              Khách hàng cần đặt lịch thu tiền trước 2 ngày làm việc và chỉ
              thanh toán với Nhân viên mang theo phiếu thu và giấy giới thiệu có
              con dấu hợp lệ của Telio. <br />- Chuyển khoản ngân hàng: Xem
              hướng dẫn chi tiết tại mục Thanh Toán Chậm trong menu / danh mục
              khi đăng nhập vào Gian hàng Telio trên Zalo
            </div>
          </DynamicQuestionDropdown>
          <DynamicQuestionDropdown
            question='Làm thế nào để kiểm tra tình trạng thanh toán của đơn hàng Thanh Toán Chậm (Mua trước, trả sau) ?'
            open={openedQuestion === 3}
            toggle={() => toggleQuestion(3)}
          >
            <div className={classes.answerContent}>
              - Nếu đặt hàng qua nhân viên bán hàng, liên hệ tổng đài 1800 6751
              để kiểm tra tình trạng thanh toán.
              <br />- Nếu đặt hàng qua Zalo, xem hướng dẫn chi tiết tại mục
              Thanh Toán Chậm trong menu / danh mục khi đăng nhập vào Zalo.
            </div>
          </DynamicQuestionDropdown>
          <DynamicQuestionDropdown
            question='Làm thế nào để xác minh đơn hàng đã thanh toán thành công?'
            open={openedQuestion === 4}
            toggle={() => toggleQuestion(4)}
          >
            <div className={classes.answerContent}>
              - Với hình thức Thu tiền tận nơi, Nhân viên thu tiền sẽ mang theo
              2 bản phiếu thu có giá trị pháp lý như nhau để hai bên xác nhận
              khi khách hàng thanh toán, sau đó sẽ bàn giao cho khách hàng 1
              bản. <br />- Với hình thức Chuyển Khoản, thông báo xác nhận chuyển
              khoản sẽ được gửi đến khách hàng trong vòng 1 ngày làm việc sau
              khi hoàn tất quy trình kiểm tra.
            </div>
          </DynamicQuestionDropdown>
          <div className={classes.linkContainer}>
            <Link href='/bnpl-qna'>
              <div className={classes.link}>
                <p onClick={pushCTforFAQS}>Tất cả câu hỏi</p>
              </div>
            </Link>
            <Link href='/bnpl-tnc'>
              <div className={classes.link}>
                <p onClick={pushCTforTNC}>Điều khoản & Điều kiện</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={classes.actionContainer}>
        <button className={classes.button} onClick={redirectToZaloStore}>
          <span className={classes.buttonText}>Đặt hàng Thanh Toán Sau</span>
        </button>
        <a className={classes.hotlineCall} href='tel:18006751'>
          <button className={classes.invertButton}>
            <span className={classes.invertButtonText}>Liên hệ Hotline</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default LearnMorePage;
