import React, { useEffect } from 'react';
import classes from '../styles/bnplTnc.module.css';
import {
  initCleverTapUserProfile,
  pushClevertapEvent,
  formatMobileNumber,
} from '../src/utils';
import { useRouter } from 'next/router';
import { WrapImage } from '../src/components/WrapImage';
import Seo from '../src/components/Seo';

const TnCPage = () => {
  const router = useRouter();
  const { phone = '', zaloId = '' } = router.query;

  useEffect(() => {
    if (phone || zaloId) {
      initCleverTapUserProfile({
        zaloId,
        Identity: zaloId,
        Phone: phone && formatMobileNumber(phone, true),
      });
    }

    pushClevertapEvent('bnpl_tnc_viewed');
    window.scrollTo(0, 0);
  }, [phone, zaloId]);

  return (
    <div className={classes.container}>
      <Seo title='Điều khoản và điều kiện' />
      <div className={classes.logoContainer}>
        <WrapImage
          desktop={{
            className: classes.logo,
            src: '/images/logo.svg',
            alt: 'Logo',
            layout: 'fill',
            objectFit: 'cover',
          }}
        />
      </div>
      <p className={classes.headline}>Điều khoản và Điều kiện</p>
      <div className={classes.contentContainer}>
        <div>
          <p className={classes.contentParagraph}>
            Chào mừng Quý Khách Hàng đến với Dự án Hỗ trợ Hộ kinh doanh (“Dự án
            HTHKD” hoặc “Dự án”). Trước khi sử dụng, Quý Khách Hàng (“Khách
            Hàng” hoặc “Người Mua”) vui lòng đọc kỹ các Điều Khoản và Điều Kiện
            (“Điều Khoản & Điều Kiện”) dưới đây để hiểu rõ quyền lợi và nghĩa vụ
            hợp pháp của mình đối với Công ty TNHH Telio Việt Nam (“Telio”).
          </p>
          <p className={classes.contentHeadline}>1. Giới thiệu</p>
          <p className={classes.contentParagraph}>
            Dự án Hỗ trợ Hộ kinh doanh này được thực hiện bởi Công ty TNHH Telio
            Việt Nam với sứ mệnh giúp Khách Hàng mua hàng dễ dàng và linh hoạt
            hơn, hỗ trợ phần nào về năng lực tài chính hiện tại của Khách Hàng
            bằng phương thức Thanh Toán Sau. Dự án Giai đoạn 2 được triển khai
            áp dụng kể từ ngày 10/03/2022. Tùy theo quyết định của mình, Telio
            sẽ thông báo tạm ngừng hoặc chấm dứt Dự án này khi xét thấy hợp lý
            và cần thiết.
          </p>
          <p className={classes.contentHeadline}>2. Phạm vi áp dụng</p>
          <p className={classes.contentParagraph}>
            Các Điều Khoản và Điều Kiện này được áp dụng và điều chỉnh tất cả
            các giao dịch mua bán hàng hóa như được mô tả trong đây giữa Telio
            và Khách Hàng mua Hàng Hóa của Telio.
          </p>
          <p className={classes.contentHeadline}>3. Định nghĩa</p>
          <div className={classes.contentParagraph}>
            <p className={classes.contentParagraph}>
              <b>3.1</b>. “<b>Hàng Hóa</b>” nghĩa là các hàng hóa của Telio bán
              cho Khách hàng theo đơn đặt hàng của khách hàng trên Zalo.
            </p>
            <p className={classes.contentParagraph}>
              <b>3.2</b>. “<b>Đơn Đặt Hàng</b>” là chứng từ, tài liệu bằng văn
              bản hoặc điện tử xác nhận số lượng, chủng loại, giá trị của Hàng
              Hóa Khách Hàng đặt mua của Telio.
            </p>
            <p className={classes.contentParagraph}>
              <b>3.3</b>. “<b>Tổng Giá Trị Đơn Đặt Hàng</b>” là tổng giá trị các
              Hàng Hóa (đã bao gồm thuế giá trị gia tăng) Khách Hàng đặt mua và
              được Telio giao tới thành công cho Khách Hàng.
            </p>
            <p className={classes.contentParagraph}>
              <b>3.4</b>. “<b>Thanh Toán Sau</b>” là hình thức thanh toán mà
              Khách Hàng có thể đặt mua Hàng Hóa qua các kênh phân phối của
              Telio và nhận bàn giao Hàng Hóa trước khi thanh toán. Sau đó,
              Khách Hàng sẽ thanh toán Tổng Giá Trị Đơn Đặt Hàng kèm theo Phí
              Quản Lý tương ứng với thời hạn thanh toán sau theo quy định tại
              Điều Khoản & Điều Kiện này.
            </p>
            <p className={classes.contentParagraph}>
              <b>3.5</b>. “<b>Thanh Toán Khi Nhận Hàng</b>” là hình thức thanh
              toán mà Khách Hàng sẽ thanh toán Tổng Giá Trị Đơn Đặt Hàng ngay
              khi nhận bàn giao Hàng Hóa từ Telio
            </p>
            <p className={classes.contentParagraph}>
              <b>3.6</b>. “<b>Phí Quản Lý</b>” là khoản phí mà Khách Hàng thanh
              toán cho Telio khi sử dụng phương thức Thanh Toán Sau, được tính
              dựa trên thời hạn mà khách hàng thanh toán sau khi nhận Hàng Hóa.
            </p>
          </div>
          <p className={classes.contentHeadline}>4. Điều kiện áp dụng</p>
          <p className={classes.contentParagraph}>
            <b>4.1</b>. Telio lựa chọn khách hàng phù hợp để tham gia phương
            thức Thanh Toán Sau và sẽ thông báo đến những khách hàng được lựa
            chọn. Khi nhận được thông báo từ Telio, Khách Hàng sẽ không phải
            trải qua bất cứ một quy trình xét duyệt nào và có thể sử dụng phương
            thức Thanh Toán Sau với đơn hàng có giá trị không quá 40.000.000 VNĐ
            (Bốn mươi triệu đồng Việt Nam).
          </p>
          <p className={classes.contentParagraph}>
            <b>4.2</b>. Khách hàng chỉ được đặt tối đa một (01) đơn hàng với
            hình thức Thanh Toán Sau tại một thời điểm. Khách Hàng chỉ được tiếp
            tục lựa chọn Phương thức Thanh Toán Sau khi Đơn Đặt Hàng áp dụng
            Phương thức Thanh Toán Sau trước đó đã được thanh toán đầy đủ.
          </p>
          <p className={classes.contentParagraph}>
            <b>4.3</b>. Telio chỉ chấp nhận các Đơn Đặt Hàng thanh toán theo
            Phương thức Thanh Toán Sau khi Khách Hàng đang không còn bất kỳ công
            nợ nào đối với Telio tính tới thời điểm Khách Hàng tạo Đơn Đặt Hàng
            mới này.
          </p>
          <p className={classes.contentParagraph}>
            <b>4.4</b>. Telio bảo lưu quyền đưa quyết định cuối cùng về việc
            chấp nhận Phương thức Thanh Toán Sau. Tại từng thời điểm, Telio có
            thể từ chối duyệt Phương thức Thanh Toán Sau cho Khách Hàng khi
            Telio cho rằng hợp lý.
          </p>
          <p className={classes.contentHeadline}>5. Phí quản lý</p>
          <p className={classes.contentParagraph}>
            <b>5.1</b>. Khách Hàng đồng ý thanh toán cho Telio khoản Phí Quản Lý
            khi chọn phương thức Thanh Toán Sau. Mức Phí Quản Lý được xác định
            dựa trên Thời hạn thanh toán Tổng Giá Trị Đơn Đặt Hàng kể từ ngày
            Khách Hàng nhận bàn giao Hàng Hóa.
          </p>
          <div className={classes.contentParagraph}>
            <b>5.2</b>. Mức Phí Quản Lý được quy định như sau:
            <ul>
              <li>
                Nếu Khách Hàng thanh toán trong vòng 3 ngày kể từ ngày nhận bàn
                giao Hàng Hóa: Khách Hàng không phải thanh toán Phí Quản Lý.
              </li>
              <li>
                Nếu Khách Hàng thanh toán trong khoảng thời gian từ ngày thứ 4
                đến ngày thứ 30 kể từ ngày nhận bàn giao Hàng Hóa: mức Phí Quản
                Lý <b>10.000 VNĐ/ngày</b> sẽ được áp dụng cho Đơn Đặt Hàng.
              </li>
            </ul>
          </div>
          <div className={classes.contentParagraph}>
            <b>5.3</b>. Thanh toán trễ hạn
            <p>
              Nếu Khách Hàng không thanh toán Tổng Giá Trị Đơn Đặt Hàng và Phí
              Quản Lý trong vòng 30 ngày kể từ ngày giao hàng, Khách Hàng sẽ bị
              coi là đã Thanh toán trễ hạn và Telio có toàn quyền áp dụng tất cả
              các biện pháp sau:
            </p>
            <ul>
              <li>
                Áp dụng Mức Phí Quản Lý mới <b>15.000 VNĐ/ngày</b> từ ngày thứ
                31 sau ngày giao hàng đến khi Khách Hàng hoàn tất thanh toán.
              </li>
              <li>
                Khách hàng không được quyền truy cập Cửa hàng Telio trên Zalo và
                không được phát sinh Đơn hàng mới cho đến khi thanh toán toàn bộ
                Tổng Giá Trị Đơn Đặt Hàng và Phí Quản Lý tính đến thời điểm
                thanh toán.
              </li>
              <li>
                Áp dụng các biện pháp cần thiết, hợp lý khác theo quy định của
                pháp luật để yêu cầu Khách Hàng thanh toán toàn bộ khoản công nợ
                tại bất kỳ thời điểm theo yêu cầu của Telio.
              </li>
            </ul>
          </div>

          <p className={classes.contentHeadline}>6. Thanh toán</p>
          <p className={classes.contentParagraph}>
            <b>6.1</b>. Khách Hàng thanh toán Phí Quản Lý cho Telio cùng với
            Tổng Giá Trị Đơn Đặt Hàng bằng phương thức chuyển khoản vào tài
            khoản ngân hàng theo chỉ định của Telio hoặc thanh toán bằng tiền
            mặt cho Nhân viên thu tiền có Giấy giới thiệu hợp lệ của Telio.
          </p>
          <p className={classes.contentParagraph}>
            <b>6.2</b>. Telio không chấp nhận thanh toán từng phần Phí Quản Lý
            và Tổng Giá Trị Đơn Đặt Hàng. Khách Hàng phải thanh toán một lần
            toàn bộ Tổng Giá Trị Đơn Đặt Hàng và Phí Quản Lý tính đến thời điểm
            thanh toán cho Telio.
          </p>
          <p className={classes.contentParagraph}>
            <b>6.3</b>. Để được hướng dẫn thêm chi tiết về cách thức thanh toán,
            Khách Hàng vui lòng liên hệ Telio bằng cách chat với Bộ phận Hỗ trợ
            qua cửa hàng Telio trên Zalo hoặc gọi tới Tổng đài CSKH: 1800 6751.
          </p>
          <div className={classes.contentParagraph}>
            <b>6.4</b>. Telio sẽ xác nhận việc hoàn tất thanh toán của Khách
            Hàng bằng các phương thức sau:
            <ul>
              <li>
                Trường hợp Khách Hàng chuyển khoản qua ngân hàng: thông báo xác
                nhận chuyển khoản sẽ được gửi đến khách hàng trong vòng 01 ngày
                làm việc sau khi hoàn tất quy trình kiểm tra, đối chiếu.
              </li>
              <li>
                Trường hợp Khách Hàng thanh toán bằng tiền mặt: Nhân viên thu
                tiền sẽ mang theo 02 bản Phiếu thu có giá trị pháp lý như nhau
                để hai bên xác nhận khi Khách Hàng thanh toán. Sau đó, Nhân viên
                thu tiền sẽ bàn giao lại 01 Phiếu thu cho Khách Hàng.
              </li>
            </ul>
          </div>
          <p className={classes.contentHeadline}>7. QUYỀN SỞ HỮU VÀ RỦI RO</p>
          <p className={classes.contentParagraph}>
            Rủi ro của Hàng Hóa sẽ được chuyển từ Telio sang Khách Hàng tại thời
            điểm Hàng Hóa được giao cho Khách Hàng. Hàng Hóa sẽ được xem là đã
            giao cho Khách Hàng khi Khách Hàng ký vào biên nhận giao hàng. Quyền
            sở hữu của Hàng Hóa sẽ được chuyển từ Telio sang Khách Hàng tại thời
            điểm Khách Hàng hoàn tất nghĩa vụ thanh toán quy định tại tại Điều
            Khoản & Điều Kiện này.
          </p>
          <p className={classes.contentHeadline}>8. BỒI THƯỜNG</p>
          <p className={classes.contentParagraph}>
            <b>8.1</b>. Khách Hàng theo đây chấp thuận chịu trách nhiệm bồi
            thường đầy đủ và toàn bộ các thiệt hại phát sinh và/hoặc liên quan
            đến việc không thực hiện, thực hiện không đúng và không đầy đủ các
            quy định tại Điều Khoản & Điều Kiện này.
          </p>
          <p className={classes.contentParagraph}>
            <b>8.2</b>. Việc Telio không thực hiện hoặc hoãn thực hiện bất kỳ
            quyền hoặc biện pháp khắc phục nào theo Điều Khoản & Điều Kiện này
            sẽ không được coi là Telio từ bỏ những quyền và biện pháp khắc phục
            đó, ngoại trừ khi các bên có thỏa thuận khác bằng văn bản.
          </p>
          <p className={classes.contentHeadline}>
            9. LUẬT ÁP DỤNG VÀ GIẢI QUYẾT TRANH CHẤP
          </p>
          <p className={classes.contentParagraph}>
            <b>9.1</b>. Bản Điều Khoản & Điều Kiện này sẽ được điều chỉnh và
            giải thích theo pháp luật Việt Nam. Mọi tranh chấp phát sinh từ hoặc
            liên quan đến bản Điều Khoản & Điều Kiện này hoặc việc thực hiện bản
            Điều Khoản & Điều Kiện, bao gồm sự tồn tại, hiệu lực, phạm vi, ý
            nghĩa, việc xây dựng, giải thích hoặc áp dụng của bản Điều Khoản &
            Điều Kiện, trong chừng mực có thể, sẽ được giải quyết bằng con đường
            hòa giải thông qua thương lượng và trao đổi giữa các bên.
          </p>
          <p className={classes.contentParagraph}>
            <b>9.2</b>. Tranh chấp không giải quyết được thông qua hòa giải
            trong thời hạn 01 (một) tháng kể từ ngày đầu tiên một bên gửi thông
            báo bằng văn bản cho bên kia về một sự việc tranh chấp, hoặc một
            khoảng thời gian dài hơn theo thỏa thuận của Telio và Khách Hàng
            trong thời gian thương lượng và hòa giải, sẽ được giải quyết toàn bộ
            và có hiệu lực cuối cùng tại Tòa án có thẩm quyền tại Việt Nam.
          </p>
          <p className={classes.contentHeadline}>10. QUY ĐỊNH CHUNG</p>
          <p className={classes.contentParagraph}>
            <b>10.1</b>. Telio bảo lưu tất cả các quyền và lợi ích theo Điều
            Khoản & Điều Kiện này và pháp luật.
          </p>
          <p className={classes.contentParagraph}>
            <b>10.2</b>. Telio có quyền chỉnh sửa các Điều Khoản & Điều Kiện này
            vào bất cứ thời điểm nào thông qua việc đăng tải các Điều Khoản &
            Điều Kiện được chỉnh sửa trên cửa hàng Telio tại Zalo hoặc công bố
            công khai trên các kênh bán hàng khác mà không cần sự chấp thuận bởi
            Khách Hàng. Việc Khách Hàng tiếp tục sử dụng dịch vụ của Telio sau
            khi Điều Khoản & Điều Kiện thay đổi sẽ cấu thành việc Khách Hàng
            chấp nhận toàn bộ và vô điều kiện các Điều Khoản & Điều Kiện đã được
            chỉnh sửa.
          </p>
          <p className={classes.contentParagraph}>
            <b>10.3</b>. Khách Hàng không được phép chuyển giao hoặc chuyển
            nhượng bất kỳ các quyền hoặc nghĩa vụ nào cho bên thứ ba mà không có
            sự chấp thuận trước bằng văn bản bởi Telio.
          </p>
          <p className={classes.contentParagraph}>
            <b>10.4</b>. Nếu Quý Khách Hàng có bất kỳ câu hỏi hay thắc mắc nào
            liên quan đến Điều Khoản & Điều Kiện này hoặc các vấn đề phát sinh
            liên quan đến Điều Khoản & Điều Kiện trên đây, vui lòng liên hệ
            Telio bằng cách chat với Bộ phận Hỗ trợ qua cửa hàng Telio trên Zalo
            hoặc gọi tới Tổng đài CSKH: 1800 6751.
          </p>
          <div className={classes.footer}>
            <p className={classes.contentParagraph}>
              Tôi đã đọc các Điều Khoản & Điều Kiện này và đồng ý với tất cả các
              điều khoản như trên cũng như bất kỳ điều khoản nào được chỉnh sửa
              sau này. Bằng xác nhận đồng ý mua hàng tại cửa hàng Telio trên
              Zalo hoặc đồng ý chọn phương thức Thanh Toán Sau dưới mọi hình
              thức, tôi hiểu rằng tôi đang tạo chữ ký điện tử có giá trị và hiệu
              lực pháp lý tương tự như chữ ký tôi ký bằng tay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TnCPage;
