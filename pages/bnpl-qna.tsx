import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import Seo from '../src/components/Seo';
import classes from '../src/components/Tnc/bnpl.module.css';
import {
  initCleverTapUserProfile,
  pushClevertapEvent,
  formatMobileNumber,
} from '../src/utils';
const DynamicQuestionDropdown = dynamic(
  import('../src/components/QuestionDropdown'),
  {
    ssr: true,
  }
);
const QnAPage = () => {
  const [openedQuestion, setOpenedQuestion] = useState(null);
  const router = useRouter();
  const { phone = '', zaloId = '', question = '' } = router.query;
  const questionRef = [
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
  ];
  useEffect(() => {
    if (phone || zaloId) {
      initCleverTapUserProfile({
        zaloId,
        Identity: zaloId,
        Phone: phone && formatMobileNumber(phone, true),
      });
    }

    pushClevertapEvent('bnpl_faq_viewed');
    window.scrollTo(0, 0);
  }, [phone, zaloId]);
  useEffect(() => {
    if (question && questionRef.length) {
      const questionNumber = Number(question) - 1;
      if (questionRef[questionNumber]?.current) {
        questionRef[questionNumber].current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        questionRef[questionNumber].current.click();
      }
    }
  }, [question]);

  const toggleQuestion = (question: any) => {
    if (openedQuestion && openedQuestion !== question) {
      pushClevertapEvent('bnpl_faq_interact', {
        questions: true,
        position: openedQuestion,
        faq_expanded: 'FALSE',
      });
    }
    pushClevertapEvent('bnpl_faq_interact', {
      questions: true,
      position: question,
      faq_expanded: openedQuestion !== question ? 'TRUE' : 'FALSE',
    });
    setOpenedQuestion(openedQuestion === question ? null : question);
  };

  return (
    <div className={classes.wrapper}>
      <Seo title='Câu hỏi thường gặp' />
      <p className={classes.headline}>Câu hỏi thường gặp</p>
      <div className={classes.container}>
        <DynamicQuestionDropdown
          question='Phương thức Thanh Toán Chậm (Mua trước, trả sau) là gì?'
          open={openedQuestion === 1}
          toggle={() => toggleQuestion(1)}
          questionRef={questionRef[0]}
        >
          <p className={classes.answer}>
            Phương thức Thanh Toán Chậm nằm trong chương trình hỗ trợ Hộ kinh
            doanh được thực hiện bởi Công ty TNHH Telio Việt Nam để giúp khách
            hàng xoay vòng vốn nhanh qua hình thức mua trước, trả sau.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Điều kiện để được sử dụng Thanh Toán Chậm (Mua trước, trả sau)?'
          open={openedQuestion === 2}
          toggle={() => toggleQuestion(2)}
          questionRef={questionRef[1]}
        >
          <p className={classes.answer}>
            Khách hàng không cần tham gia bất kỳ quy trình xét duyệt nào. Telio
            lựa chọn khách hàng phù hợp để tham gia phương thức Thanh Toán Chậm
            và sẽ thông báo đến những khách hàng được lựa chọn.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Sử dụng Thanh Toán Chậm (Mua trước, trả sau) có mất phí không?'
          open={openedQuestion === 3}
          toggle={() => toggleQuestion(3)}
          questionRef={questionRef[2]}
        >
          <p className={classes.answer}>
            - Với đơn hàng từ 8.000.000 VNĐ trở lên (Đã bao gồm VAT):
            <br />
            Miễn phí quản lý 3 ngày đầu tiên kể từ sau ngày giao hàng thành
            công. Từ ngày thứ 4, áp dụng mức phí quản lý là 10.000 VNĐ/mỗi ngày
            <br />
            - Với đơn hàng dưới 8.000.000 VNĐ (Đã bao gồm VAT):
            <br />
            Phí quản lý được áp dụng kể từ ngày giao hàng thành công, mức phí
            quản lý là 3.000 VNĐ/mỗi ngày
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Hạn mức Thanh Toán Chậm (Mua trước, trả sau) là bao nhiêu?'
          open={openedQuestion === 4}
          toggle={() => toggleQuestion(4)}
          questionRef={questionRef[3]}
        >
          <p className={classes.answer}>
            Hạn mức Thanh Toán Chậm tối đa là 100.000.000 VNĐ. Với hạn mức
            40.000.000 VNĐ (Đã bao gồm VAT), khách hàng được đặt ngay Đơn hàng
            Thanh Toán Chậm mà không cần xét duyệt.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Thời hạn thanh toán đơn hàng Thanh Toán Chậm (Mua trước, trả sau) là bao lâu?'
          open={openedQuestion === 5}
          toggle={() => toggleQuestion(5)}
          questionRef={questionRef[4]}
        >
          <p className={classes.answer}>
            Đơn hàng Thanh Toán Chậm được thanh toán tối đa trong 30 ngày kể từ
            ngày giao hàng. <br />
            Sau 30 ngày, Telio có quyền khóa tài khoản và không cho phép bạn đặt
            thêm bất kì đơn hàng nào. Đồng thời, phí trễ hạn 15.000 VNĐ/mỗi ngày
            sẽ được áp dụng.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Tôi đã sử dụng Thanh Toán Chậm (Mua trước, trả sau) một lần, tôi có được tiếp tục sử dụng cho đơn sau nữa không?'
          open={openedQuestion === 6}
          toggle={() => toggleQuestion(6)}
          questionRef={questionRef[5]}
        >
          <p className={classes.answer}>
            Bạn có thể tiếp tục sử dụng phương thức Thanh Toán Chậm với điều
            kiện đã được Telio xác nhận hoàn thành việc thanh toán của đơn hàng
            trước.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Làm thế nào để thanh toán đơn hàng Thanh Toán Chậm (Mua trước, trả sau)?'
          open={openedQuestion === 7}
          toggle={() => toggleQuestion(7)}
          questionRef={questionRef[6]}
        >
          <p className={classes.answer}>
            Khách hàng được lựa chọn một trong hai cách:
            <br />
            - Thu tiền tận nơi: Gọi 1800 6751 để đặt lịch thu tiền. Lưu ý: Khách
            hàng cần đặt lịch thu tiền trước 2 ngày làm việc và chỉ thanh toán
            với Nhân viên mang theo phiếu thu và giấy giới thiệu có con dấu hợp
            lệ của Telio.
            <br />- Chuyển khoản ngân hàng: Xem hướng dẫn chi tiết tại mục Thanh
            Toán Chậm trong menu / danh mục khi đăng nhập vào Gian hàng Telio
            trên Zalo
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Làm thế nào để kiểm tra tình trạng thanh toán của đơn hàng Thanh Toán Chậm (Mua trước, trả sau) ?'
          open={openedQuestion === 8}
          toggle={() => toggleQuestion(8)}
          questionRef={questionRef[7]}
        >
          <p className={classes.answer}>
            - Nếu đặt hàng qua nhân viên bán hàng, liên hệ tổng đài 1800 6751 để
            kiểm tra tình trạng thanh toán.
            <br />- Nếu đặt hàng qua Zalo, xem hướng dẫn chi tiết tại mục Thanh
            Toán Chậm trong menu / danh mục khi đăng nhập vào Zalo.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Làm thế nào để xác minh đơn hàng đã thanh toán thành công?'
          open={openedQuestion === 9}
          toggle={() => toggleQuestion(9)}
          questionRef={questionRef[8]}
        >
          <p className={classes.answer}>
            - Với hình thức Thu tiền tận nơi, Nhân viên thu tiền sẽ mang theo 2
            bản phiếu thu có giá trị pháp lý như nhau để hai bên xác nhận khi
            khách hàng thanh toán, sau đó sẽ bàn giao cho khách hàng 1 bản.{' '}
            <br />- Với hình thức Chuyển Khoản, thông báo xác nhận chuyển khoản
            sẽ được gửi đến khách hàng trong vòng 1 ngày làm việc sau khi hoàn
            tất quy trình kiểm tra.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Có thể thanh toán thành nhiều đợt cho đơn hàng áp dụng hình thức Thanh Toán Chậm (Mua trước, trả sau) được không?'
          open={openedQuestion === 10}
          toggle={() => toggleQuestion(10)}
          questionRef={questionRef[9]}
        >
          <p className={classes.answer}>
            Telio không chấp nhận thanh toán từng phần Phí Quản Lý và Tổng Giá
            Trị Đơn Đặt Hàng. Khách Hàng phải thanh toán một lần toàn bộ Tổng
            Giá Trị Đơn Đặt Hàng và Phí Quản Lý tính đến thời điểm thanh toán.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='
          Tôi có thể đặt đơn hàng Thanh Toán Khi Nhận Hàng khi chưa thanh toán đơn hàng Thanh Toán Chậm (Mua trước, trả sau) không?'
          open={openedQuestion === 11}
          toggle={() => toggleQuestion(11)}
          questionRef={questionRef[10]}
        >
          <p className={classes.answer}>
            - Nếu đơn hàng Thanh Toán Chậm của bạn chưa thanh toán trong vòng 30
            ngày kể từ khi giao hàng, bạn có thể đặt đơn mới và chọn hình thức
            Thanh Toán khi Nhận Hàng. Nếu bạn muốn tiếp tục đặt đơn Thanh Toán
            Chậm, bạn cần hoàn tất thanh toán của đơn trước.
            <br />- Nếu đơn hàng Thanh Toán Chậm của bạn chưa thanh toán sau 30
            ngày kể từ ngày giao hàng, Telio có quyền khóa tài khoản và không
            cho phép bạn đặt thêm bất kì đơn hàng nào.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Có được đặt nhiều đơn Thanh Toán Chậm (Mua trước, trả sau)  một lúc không?'
          open={openedQuestion === 12}
          toggle={() => toggleQuestion(12)}
          questionRef={questionRef[11]}
        >
          <p className={classes.answer}>
            Khách hàng chỉ được đặt tối đa 01 đơn hàng với hình thức Thanh Toán
            Chậm tại một thời điểm.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Nếu tôi không thanh toán đơn hàng trong 30 ngày thì sẽ có gì xảy ra?'
          open={openedQuestion === 13}
          toggle={() => toggleQuestion(13)}
          questionRef={questionRef[12]}
        >
          <p className={classes.answer}>
            Nếu đơn hàng Thanh Toán Chậm của bạn chưa thanh toán sau 30 ngày kể
            từ ngày giao hàng, Telio có quyền khóa tài khoản và không cho phép
            bạn đặt thêm bất kì đơn hàng nào.
            <br />
            <br />
            Đồng thời, Telio sẽ tính phí trễ hạn 15.000 VNĐ/mỗi ngày cho đến khi
            nhận được thanh toán.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Tại thời điểm nhận hàng, tôi có thể thay đổi hình thức thanh toán không?'
          open={openedQuestion === 14}
          toggle={() => toggleQuestion(14)}
          questionRef={questionRef[13]}
        >
          <p className={classes.answer}>
            Bạn có thể thay đổi hình thức thanh toán khi nhận hàng. Nhân viên
            giao hàng của Telio sẽ giúp bạn thay đổi phương thức thanh toán từ
            Thanh Toán Khi Nhận Hàng sang Thanh Toán Chậm hoặc ngược lại.
            <br /> <br />
            Bạn sẽ nhận được tin nhắn Zalo hoặc tin nhắn điện thoại xác nhận
            chuyển đổi phương thức từ Thanh Toán Khi Nhận Hàng sang Thanh Toán
            Chậm.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Tôi mua hàng qua nhân viên Sales của Telio thì có được áp dụng hình thức Thanh Toán Chậm (Mua trước, trả sau) hay không?'
          open={openedQuestion === 15}
          toggle={() => toggleQuestion(15)}
          questionRef={questionRef[14]}
        >
          <p className={classes.answer}>
            Khách hàng mua hàng qua Nhân viên Sales của Telio được áp dụng hình
            thức Thanh Toán Chậm. Vui lòng liên hệ với nhân viên Sales của bạn
            để đặt Đơn hàng Thanh Toán Chậm.
          </p>
        </DynamicQuestionDropdown>

        <DynamicQuestionDropdown
          question='Nếu cần hỗ trợ hoặc thay đổi ngày Thanh Toán, tôi liên lạc qua số điện thoại nào?'
          open={openedQuestion === 16}
          toggle={() => toggleQuestion(16)}
          questionRef={questionRef[15]}
        >
          <p className={classes.answer}>
            Vui lòng liên hệ hotline 1800 6751 để được hỗ trợ và giải đáp thắc
            mắc.
          </p>
        </DynamicQuestionDropdown>
      </div>
    </div>
  );
};

export default QnAPage;
