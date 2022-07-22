import * as React from 'react';
import classes from '../styles/policy.module.css';
const QuestionDropdownPolicy = dynamic(
  () => import('../src/components/Tnc/questionDropdownPolicy'),
  {
    ssr: false,
  }
);
import { T } from '../src/hooks/translation';
import dynamic from 'next/dynamic';
import Layout from '../src/components/Layout';
import Seo from '../src/components/Seo';
const PolicyPage = () => {
  const [openedQuestion, setOpenedQuestion] = React.useState(null);
  const toggleQuestion = (question: any) => {
    if (openedQuestion && openedQuestion !== question) {
    }
    setOpenedQuestion(openedQuestion === question ? null : question);
  };
  return (
    <Layout>
      <Seo title={T('policy.terms')} />
      <div className={classes.faqContainer}>
        <div className={classes.faqTitleContainer}>
          <h3 className={classes.faqTitle}>{T('policy.terms')}</h3>
        </div>
        <div>
          <QuestionDropdownPolicy
            question={T('policy.payment')}
            open={openedQuestion === 1}
            toggle={() => toggleQuestion(1)}
          >
            <div className={classes.answerContent}>
              <h2 className={classes.answerContent_headding}>
                Telio – Nhập hàng giá tốt, cung cấp dịch vụ nhập hàng tạp hóa
                cho các cửa hàng tại Hà Nội và TP. Hồ Chí Minh với mức giá hấp
                dẫn.
              </h2>
              <p className={classes.answerContent_content}>
                Cảm ơn Quý khách đã đặt hàng tại Telio
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Với đơn hàng có giá trị <b>dưới 20.000.000 VND</b>; Quý khách
                  có thể lựa chọn 01 trong 02 hình thức thanh toán: <b>COD</b>{' '}
                  và <b>chuyển khoản qua ngân hàng.</b>
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Với đơn hàng có giá trị <b>từ 20.000.000 VND trở lên</b>; Quý
                  khách chỉ có thể thanh toán theo hình thức{' '}
                  <b>chuyển khoản qua ngân hàng.</b>
                </li>
              </ul>
              <p className={classes.answerContent_content}>
                Chi tiết 02 hình thức thanh toán cụ thể như sau:
              </p>
              <h2 className={classes.answerContent_headding}>
                1. COD (Cash On Delivery) – Thanh toán khi nhận hàng
              </h2>
              <p className={classes.answerContent_content}>
                Với phương thức thanh toán này, Quý khách chỉ cần đặt hàng, sau
                đó thanh toán tổng giá trị đơn hàng và phí vận chuyển (nếu có)
                cho nhân viên giao hàng của Telio khi nhận sản phẩm.
              </p>
              <h2 className={classes.answerContent_headding}>
                2. Chuyển khoản qua ngân hàng
              </h2>
              <p className={classes.answerContent_content}>
                Để thanh toán trực tuyến, tài khoản ngân hàng của Quý khách phải
                đăng ký dịch vụ Internet Banking.
              </p>
              <p className={classes.answerContent_content}>
                Quý khách vui lòng chuyển khoản tổng giá trị đơn hàng và phí vận
                chuyển (nếu có) đến tài khoản ngân hàng của Telio theo cú pháp:
              </p>
              <p className={classes.answerContent_content}>
                <strong>Tên cửa hàng – Mã đơn hàng</strong>
              </p>
              <p className={classes.answerContent_content}>
                Ví dụ: Tạp hóa An Bình – 1234
              </p>
              <p className={classes.answerContent_content}>
                Telio sẽ liên hệ xác nhận với Quý khách sau khi nhận được giá
                trị chuyển khoản
              </p>
              <p className={classes.answerContent_content}>
                Lưu ý: Thông tin tài khoản ngân hàng sẽ được Telio cung cấp sau
                khi Quý khách đặt hàng
              </p>
              <p className={classes.answerContent_content}>
                Mọi thắc mắc, Quý khách vui lòng liên hệ Tổng đài CSKH: 18006751
              </p>
            </div>
          </QuestionDropdownPolicy>
          <QuestionDropdownPolicy
            question={T('policy.delivery')}
            open={openedQuestion === 2}
            toggle={() => toggleQuestion(2)}
          >
            <div className={classes.answerContent}>
              <h2 className={classes.answerContent_headding}>
                Telio – Nhập hàng giá tốt, cung cấp dịch vụ nhập hàng tạp hóa
                cho các cửa hàng tại TP. Hà Nội và TP. Hồ Chí Minh với mức giá
                hấp dẫn.
              </h2>
              <h2 className={classes.answerContent_headding}>
                1. Địa điểm giao hàng
              </h2>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Hà Nội: Hiện tại, Telio chỉ giao hàng trong 11 quận nội thành
                  Hà Nội, bao gồm: Hoàn Kiếm, Ba Đình, Đống Đa, Hai Bà Trưng,
                  Tây Hồ, Cầu Giấy, Thanh Xuân, Hoàng Mai, Hà Đông, Long Biên,
                  Từ Liêm.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Hồ Chí Minh: Hiện tại, Telio cung cấp dịch vụ giao hàng đến
                  các tất cả các quận huyện ngoại trừ Huyện Củ Chi và Cần Giờ.
                </li>
              </ul>
              <h2 className={classes.answerContent_headding}>
                2. Thời gian giao hàng
              </h2>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Hà Nội: Các đơn hàng đặt trước 24h00 mỗi ngày sẽ được Telio
                  giao vào ngày làm việc kế tiếp (trừ ngày nghỉ lễ).
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Hồ Chí Minh: Các đơn hàng đặt đến 12h sẽ được giao hàng cùng
                  ngày. Những đơn đặt hàng sau 12h sẽ được giao vào ngày hôm
                  sau.
                </li>
              </ul>
              <h2 className={classes.answerContent_headding}>
                3. Phí giao hàng
              </h2>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Telio <b>miễn phí giao hàng</b> đối với tất cả những đơn hàng
                  có giá trị lớn hơn 1 triệu đồng.
                </li>
              </ul>
              <h2 className={classes.answerContent_headding}>
                4. Kiểm tra hàng hóa khi giao nhận
              </h2>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Khi nhận sản phẩm từ nhân viên giao hàng, Quý khách có thể mở
                  niêm phong thùng hàng của Telio để kiểm tra hàng hóa (số
                  lượng, màu sắc, tình trạng, chủng loại, kích cỡ…). Tuy nhiên,
                  việc kiểm tra này sẽ không bao gồm việc mở tem dán niêm phong
                  của sản phẩm bên trong.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Sau khi kiểm tra và chấp nhận hàng hóa, Quý khách ký vào Danh
                  sách giao hàng, đồng thời giữ lại Phiếu giao hàng đi kèm theo
                  sản phẩm.
                </li>
              </ul>
            </div>
          </QuestionDropdownPolicy>
          <QuestionDropdownPolicy
            question={T('policy.return')}
            open={openedQuestion === 3}
            toggle={() => toggleQuestion(3)}
          >
            <div className={classes.answerContent}>
              <h2 className={classes.answerContent_headding}>
                Telio – Nhập hàng giá tốt, cung cấp dịch vụ nhập hàng tạp hóa
                cho các cửa hàng tại Hà Nội và TP. Hồ Chí Minh với mức giá hấp
                dẫn.
              </h2>
              <p className={classes.answerContent_content}>
                Telio hỗ trợ tối đa quyền lợi khách hàng bằng cách cho phép trả
                lại hàng trong một số trường hợp, cụ thể như sau:
              </p>
              <h2 className={classes.answerContent_headding}>
                1. Các trường hợp chấp nhận trả hàng
              </h2>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Giao sai sản phẩm, sai màu sắc, sai kích thước so với đơn đặt
                  hàng.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Giao thiếu sản phẩm, phụ kiện, quà tặng.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Sản phẩm bị hư hại, bể vỡ trước khi đến tay khách hàng.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Sản phẩm có dấu hiệu đã qua sử dụng hoặc hết hạn sử dụng.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Sản phẩm có lỗi do nhà sản xuất hoặc lỗi trong quá trình vận
                  chuyển.
                </li>
              </ul>
              <h2 className={classes.answerContent_headding}>
                2. Điều kiện áp dụng trả hàng
              </h2>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Sản phẩm không thuộc danh sách khuyến mãi, giảm giá đặc biệt.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Sản phẩm còn nguyên vẹn và đầy đủ bao bì, tem mác niêm phong
                  theo quy cách ban đầu (trừ trường hợp sản phẩm bị hư hại, bể
                  vỡ trong quá trình vận chuyển).
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Sản phẩm còn đầy đủ phụ kiện (hướng dẫn sử dụng, phiếu bảo
                  hành…), tặng phẩm đi kèm (nếu có) và hoá đơn/ biên nhận mua
                  bán sản phẩm.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Sản phẩm chưa qua sử dụng (trừ trường hợp đổi trả do lỗi nhà
                  sản xuất, lỗi trong quá trình vận chuyển hoặc có dấu hiệu đã
                  qua sử dụng).
                </li>
              </ul>
              <h2 className={classes.answerContent_headding}>
                3. Thời gian áp dụng trả hàng
              </h2>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Yêu cầu trả hàng phải được thực hiện ngay tại thời điểm giao
                  nhận hàng hóa.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Telio sẽ chịu phí vận chuyển đối với các trường hợp trả lại
                  hàng do lỗi từ phía Telio hoặc nhà sản xuất.
                </li>
              </ul>
              <p className={classes.answerContent_content}>
                <b>Khuyến cáo:</b> Quý khách vui lòng kiểm tra kỹ sản phẩm trước
                khi nhận hàng.
              </p>
            </div>
          </QuestionDropdownPolicy>
          <QuestionDropdownPolicy
            question={T('policy.vendor')}
            open={openedQuestion === 4}
            toggle={() => toggleQuestion(4)}
          >
            <div className={classes.answerContent}>
              <h2
                style={{ textAlign: 'center' }}
                className={classes.answerContent_headdingPost}
              >
                CHÍNH SÁCH NHÀ BÁN HÀNG
              </h2>
              <p className={classes.answerContent_content}>
                Bằng cách hoàn tất thủ tục đăng ký bán hàng trên TELIO, Nhà Bán
                Hàng tại đây xác nhận rằng, Nhà Bán Hàng là cá nhân từ 18 tuổi
                trở lên, hoặc pháp nhân hợp pháp, có đủ năng lực hành vi và năng
                lực pháp luật để giao kết thỏa thuận dịch vụ thương mại điện tử
                với TELIO (“<b>Thỏa Thuận</b>”) cũng như thực hiện các nghĩa vụ
                tương ứng với các Thỏa Thuận đó. BẰNG CÁCH ĐĂNG KÝ VÀ SỬ DỤNG
                DỊCH VỤ CỦA TELIO, VÀ KỂ TỪ NGÀY NHÀ BÁN HÀNG HOÀN TẤT THỦ TỤC
                MỞ GIAN HÀNG TRÊN SÀN GIAO DỊCH CỦA TELIO (“<b>Ngày Hiệu Lực</b>
                ”), NHÀ BÁN HÀNG ĐỒNG Ý CHỊU SỰ RÀNG BUỘC VỚI MỌI VÀ TẤT CẢ ĐIỀU
                KHOẢN DỊCH VỤ VÀ ĐIỀU KIỆN ĐƯỢC QUY ĐỊNH TẠI THỎA THUẬN NÀY, VÀ
                TẤT CẢ CÁC CHÍNH SÁCH CỦA SÀN GIAO DỊCH ĐƯỢC CÔNG BỐ ĐẾN NHÀ BÁN
                HÀNG THEO TỪNG THỜI ĐIỂM NHẤT ĐỊNH, bao gồm tất cả Điều Khoản
                Dịch Vụ, điều kiện sửa đổi, bổ sung (nếu có) trong tương lai.
              </p>
              <h2
                style={{ textAlign: 'center' }}
                className={classes.answerContent_headding}
              >
                A- ĐIỀU KHOẢN CHUNG
              </h2>
              <h2 className={classes.answerContent_headding}>
                I. THUẬT NGỮ VÀ ĐỊNH NGHĨA
              </h2>
              <p className={classes.answerContent_content}>
                <b>1. Dịch Vụ</b> là các dịch vụ thương mại điện tử được Telio
                cung cấp cho Nhà Bán Hàng để thực hiện các hoạt động thương mại
                trên Sàn Thương Mại Điện Tử Telio;
              </p>
              <p className={classes.answerContent_content}>
                <b>2. Phí Dịch Vụ</b> là các khoản chi phí Nhà Bán Hàng có nghĩa
                vụ thanh toán cho Telio có liên quan đến Dịch Vụ;
              </p>
              <p className={classes.answerContent_content}>
                <b>3. Sàn Thương Mại Điện Tử Telio (Sàn TMĐT Telio)</b> là
                website thương mại điện tử telio.vn và Ứng dụng Telio trên thiết
                bị điện thoại thông minh do Telio sở hữu, cho phép Nhà Bán Hàng
                được mở gian hàng để kinh doanh trực tuyến;
              </p>
              <p className={classes.answerContent_content}>
                <b>4. Khách Hàng</b> là người mua sản phẩm, hoặc sử dụng dịch vụ
                trên Sàn Thương Mại Điện Tử Telio;
              </p>
              <p className={classes.answerContent_content}>
                <b>5. Phương Thức Kinh Doanh</b> là phương thức hợp tác kinh
                doanh giữa Telio và Nhà Bán Hàng liên quan đến hình thức tồn
                kho, vận chuyển hàng;
              </p>
              <p className={classes.answerContent_content}>
                <b>6. Khoản Thanh Toán</b> là khoản tiền thanh toán giá trị hàng
                hoá, dịch vụ mà Telio phải thanh toán lại cho Nhà Bán Hàng cho
                mỗi đơn hàng Khách Hàng đã mua thành công trên Telio;
              </p>
              <p className={classes.answerContent_content}>
                <b>7. COD</b> là phương thức thanh toán bằng tiền mặt khi nhận
                hàng;
              </p>
              <p className={classes.answerContent_content}>
                <b>8. Ngày Làm Việc</b> là bất kỳ ngày nào ngoại trừ: (i) Thứ
                Bảy và Chủ Nhật, (ii) ngày nghỉ lễ tại nơi Telio có trụ sở
                chính, và (iii) ngày ngừng giao dịch của ngân hàng;
              </p>
              <p className={classes.answerContent_content}>
                <b>9. Trung Tâm Bán Hàng</b> là hệ thống mà Telio xây dựng và
                cung cấp cho Nhà Bán Hàng phục vụ việc kinh doanh trên Sàn TMĐT
                Telio;
              </p>
              <p className={classes.answerContent_content}>
                <b>10. Đơn hàng</b> là chứng từ của Telio nhằm xác nhận Khách
                Hàng đã thực hiện mua hàng trên Sàn TMĐT Telio.
              </p>
              <p className={classes.answerContent_content}>
                <b>11. Kho Telio</b> là đơn vị thuộc quyền quản lý, sử dụng của
                Telio;
              </p>
              <p className={classes.answerContent_content}>
                <b>12. Giá Bán Hàng</b> là mức giá cuối cùng của sản phẩm đã bao
                gồm thuế giá trị gia tăng mà Telio sẽ bán cho Khách Hàng và là
                giá được ấn định bởi Nhà Bán Hàng;
              </p>
              <p className={classes.answerContent_content}>
                <b>13. Doanh Thu Hàng Hoá</b> là doanh thu của Nhà Bán Hàng qua
                Nền Tảng Bán Hàng Telio cho những Đơn Hàng được giao thành công.
              </p>
              <h2 className={classes.answerContent_headding}>
                II. CÁC DỊCH VỤ TELIO CUNG CẤP CHO NHÀ BÁN HÀNG
              </h2>
              <p className={classes.answerContent_content}>
                <b>1. Các Dịch Vụ chung bao gồm:</b>
              </p>
              <p className={classes.answerContent_content}>
                i) Khởi tạo gian hàng trên Sàn TMĐT Telio;
              </p>
              <p className={classes.answerContent_content}>
                ii) Duy trì gian hàng trên Sàn TMĐT Telio.
              </p>
              <p className={classes.answerContent_content}>
                <b>2. Các Dịch Vụ chuyên biệt khác bao gồm:</b>
              </p>
              <p className={classes.answerContent_content}>
                i) Lưu trữ hàng hóa trong kho Telio;
              </p>
              <p className={classes.answerContent_content}>
                ii) Xử lý đơn hàng, đóng gói;
              </p>
              <p className={classes.answerContent_content}>
                iii) Giao hàng trong địa bàn hoạt động;
              </p>
              <p className={classes.answerContent_content}>
                iv) Vận chuyển hàng tồn kho;
              </p>
              <p className={classes.answerContent_content}>
                v) Xuất kho và vận chuyển hàng hoá trả lại cho Nhà Bán Hàng
                trong trường hợp Nhà Bán Hàng muốn thu hồi hàng hóa khỏi kho
                Telio;
              </p>
              <p className={classes.answerContent_content}>
                vi) Xử lý hàng đổi/trả;
              </p>
              <p className={classes.answerContent_content}>
                vii) Thu hộ theo phương thức thanh toán COD.
              </p>
              <p className={classes.answerContent_content}>
                Tuỳ vào Phương Thức Kinh Doanh mà Nhà Bán Hàng chọn, Telio sẽ
                cung cấp cho Nhà Bán Hàng các Dịch Vụ nêu trên và Nhà Bán Hàng
                có nghĩa vụ thanh toán cho Telio các khoản Phí Dịch Vụ. Nhà Bán
                Hàng không thể phối hợp các Phương Thức Kinh Doanh khác nhau
                hoặc thay đổi Phương Thức Kinh Doanh trừ khi có sự đồng ý Bằng
                Văn Bản của Telio.
              </p>
              <h2 className={classes.answerContent_headding}>
                III. PHÍ DỊCH VỤ
              </h2>
              <p className={classes.answerContent_content}>
                <b>1. Dịch vụ chung:</b>
              </p>
              <p className={classes.answerContent_content}>
                Telio sẽ cung cấp miễn phí cho Nhà Bán Hàng các Dịch Vụ chung,
                trừ trường hợp Telio có điều chỉnh khác.
              </p>
              <p className={classes.answerContent_content}>
                <b>2. Dịch vụ chuyên biệt:</b>
              </p>
              <p className={classes.answerContent_content}>
                Các Khoản Phí Dịch Vụ chuyên biệt có thể bao gồm hoặc không bao
                gồm tuỳ theo Phương Thức Kinh Doanh mà Nhà Bán Hàng lựa chọn và
                được chấp thuận bởi Telio.
              </p>
              <p className={classes.answerContent_content}>
                Biểu Phí chi tiết cho từng Dịch Vụ chuyên biệt được quy định tại
                Chính Sách Thanh Toán.
              </p>
              <p className={classes.answerContent_content}>
                <b>3. Thay đổi Phí Dịch Vụ</b>
              </p>
              <p className={classes.answerContent_content}>
                Phí Dịch Vụ có thể được Telio điều chỉnh và cập nhật trên Sàn
                TMĐT Telio theo từng thời kỳ. Trường hợp thay đổi Phí Dịch Vụ,
                Telio sẽ gửi thông báo online cho Nhà Bán Hàng trước 10 (mười)
                ngày tính đến ngày thay đổi Phí Dịch Vụ. Trong thời hạn này, nếu
                Nhà Bán Hàng không có bất kỳ phản hồi nào đối với Phí Dịch Vụ
                sau khi được điều chỉnh thì coi như đã đồng ý với Phí Dịch Vụ
                mới.
              </p>
              <p className={classes.answerContent_content}>
                <b>4. </b>Tất cả các loại Phí Dịch Vụ trên đều chưa bao gồm thuế
                giá trị gia tăng. Telio có quyền tính thêm 10% thuế suất giá trị
                gia tăng vào các loại Phí Dịch Vụ hoặc một mức % thuế suất tương
                ứng phù hợp với quy định của pháp luật hiện hành.{' '}
              </p>
              <h2 className={classes.answerContent_headding}>
                IV. HÀNG HÓA TRÊN SÀN TMĐT TELIO
              </h2>
              <p className={classes.answerContent_content}>
                <b>1. </b>Nhà Bán Hàng có trách nhiệm cung cấp đầy đủ, chính
                xác, đúng quy chuẩn các thông tin về hàng hoá trên Sàn TMĐT
                Telio.
              </p>
              <p className={classes.answerContent_content}>
                <b>2. </b>Hàng hoá đang bán của Nhà Bán Hàng phải tuân thủ các
                quy định sau:
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Có nguồn gốc, xuất xứ rõ ràng, có chứng từ hợp lệ;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Được phép phân phối và có đủ điều kiện kinh doanh (chất lượng,
                  giấy phép) theo quy định của pháp luật liên quan đối với từng
                  loại hàng hóa cụ thể;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Đảm bảo bao bì, đóng gói theo các tiêu chuẩn nhà sản xuất và
                  theo quy định pháp luật hiện hành;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Đảm bảo nội dung, thông tin trên bao bì, đóng gói trùng khớp
                  với thông tin sản phẩm thực tế;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Đảm bảo các tiêu chuẩn, quy chuẩn khác đối với hàng hóa theo
                  quy định của pháp luật;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Không thuộc danh mục Hàng hóa bị cấm lưu thông, cấm nhập khẩu,
                  cấm phân phối, danh mục Hàng hóa hạn chế theo quy định của
                  pháp luật;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Không phải là hàng giả, hàng nhái, kém chất lượng, bị hư hỏng,
                  bị lỗi;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Không vi phạm pháp luật về an toàn vệ sinh thực phẩm, sở hữu
                  trí tuệ, pháp luật cạnh tranh và các quy định pháp luật khác;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Không phải hàng hoá đã qua sử dụng, hãng mẫu, hàng thử, hoặc
                  hàng được tân trang lại;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Không bán các sản phẩm có chứa các thành phần độc hại: chất
                  cấm, chất gây bệnh, chất độc, ... đang bị cơ quan chức năng
                  thu hồi và kiểm soát trên thị trường. 3. Telio có quyền từ
                  chối đăng bán và tiếp nhận các hàng hoá của Nhà Bán Hàng nếu
                  Nhà Bán Hàng không đảm bảo các điều kiện về hàng hoá như được
                  quy định Điều khoản này.
                </li>
              </ul>
              <h2 className={classes.answerContent_headding}>
                V. TRÁCH NHIỆM CỦA NHÀ BÁN HÀNG
              </h2>
              <p className={classes.answerContent_content}>
                <b>1. </b>Tuân thủ và thực hiện theo đúng các quy định, quy
                trình, chính sách, thông báo được công bố bởi Telio theo từng
                thời kỳ tại Sàn TMĐT Telio;
              </p>
              <p className={classes.answerContent_content}>
                <b>2. </b>Tuân thủ quy của pháp luật Việt Nam về hoạt động mua
                bán Hàng Hoá, thanh toán, quảng cáo, khuyến mại, sở hữu trí tuệ,
                bảo vệ quyền lợi người tiêu dùng và các quy định pháp luật khác
                có liên quan đến hoạt động của Nhà Bán Hàng trên Sàn TMĐT Telio;
              </p>
              <p className={classes.answerContent_content}>
                <b>3. </b>Cung cấp các giấy tờ trong quá trình tham gia hoạt
                động thương mại điện tử bao gồm nhưng không giới hạn: giấy chứng
                nhận đăng ký kinh doanh, giấy chứng minh nguồn gốc, xuất xứ và
                chất lượng Hàng Hoá, giấy phép khuyến mại, quảng cáo, v.v...;
              </p>
              <p className={classes.answerContent_content}>
                <b>4. </b>Phối hợp với Telio trong quá trình giải quyết các
                khiếu nại, thắc mắc của Khách Hàng;
              </p>
              <p className={classes.answerContent_content}>
                <b>5. </b>Bằng nguyên tắc đạo đức kinh doanh, Nhà Bán Hàng không
                được lợi dụng việc mở Gian hàng trên Sàn TMĐT
              </p>
              <p className={classes.answerContent_content}>
                <b>Telio để thực hiện các hành vi sau:</b>
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Có hành vi lừa dối Khách Hàng bằng việc bán hàng giả, hàng
                  nhái, hàng kém chất lượng; vi phạm sở hữu trí tuệ, quyền của
                  bên thứ ba;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Lợi dụng việc bán hàng trên Sàn TMĐT để bán các hàng hóa, dịch
                  vụ cấm kinh doanh theo quy định của pháp luật;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Thực hiện các hành vi quảng cáo không đúng sự thật;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Tiến hành các hoạt động khuyến mại mà không thông báo, đăng ký
                  về chương trình khuyến mại theo quy định của pháp luật;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Tự ý dùng thông tin Khách Hàng để bán hàng không thông qua Sàn
                  TMĐT Telio hoặc sử dụng cho bất kỳ mục đích nào khác mà không
                  được sự đồng ý của Khách Hàng.
                </li>
              </ul>
              <p className={classes.answerContent_content}>
                <b>6. Trách nhiệm về thanh toán</b>
              </p>
              <p className={classes.answerContent_content}>
                Thanh toán Phí Dịch Vụ cho Telio theo bảng Phí Dịch Vụ được quy
                định tại Chính Sách Thanh Toán.
              </p>
              <p className={classes.answerContent_content}>
                <b>7. Trách nhiệm về Hàng Hoá</b>
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Cung cấp đầy đủ, chính xác thông tin, hình ảnh của Hàng Hoá
                  khi sử dụng Dịch Vụ của Telio;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Tự chịu trách nhiệm đối với các thông tin liên quan đến Hàng
                  hoá nêu trên Sàn TMĐT Telio, bao gồm nhưng không giới hạn: mô
                  tả Hàng Hoá, giá, chương trình khuyến mại, chính sách sau bán;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Đảm bảo có hàng bán trên Sàn TMĐT Telio. Nếu hết hàng, phải
                  lập tức cập nhật trạng thái hết hàng trên Sàn TMĐT Telio. Nhà
                  Bán Hàng chịu toàn bộ trách nhiệm trong trường hợp các thông
                  tin về tình trạng Hàng hóa của Nhà Bán Hàng cung cấp không
                  chính xác dẫn đến Khách Hàng đã đặt hàng nhưng không còn Hàng
                  Hóa để cung cấp;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Đảm bảo Hàng Hoá trên Sàn TMĐT Telio phải thỏa mãn tất cả các
                  điều kiện quy định tại Mục IV.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Cung cấp cho Telio các giấy tờ liên quan đến Hàng Hóa sau khi
                  Telio có yêu cầu nhưng chậm nhất không quá 24 (hai mươi bốn)
                  giờ kể từ thời điểm nhận được thông báo của Telio;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Chịu trách nhiệm giải quyết và miễn trừ cho Telio toàn bộ các
                  khiếu nại/khiếu kiện của Khách Hàng liên quan đến Hàng Hóa,
                  chính sách sau bán, chương trình khuyến mại, thông tin quảng
                  cáo của Nhà Bán Hàng;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Miễn trừ trách nhiệm cho Telio và bồi thường cho Telio và/
                  hoặc bất kỳ bên thứ ba toàn bộ thiệt hại phát sinh do các vấn
                  đề liên quan đến chất lượng và/hoặc xuất xứ của Hàng Hóa
                  và/hoặc vi phạm của Nhà Bán Hàng do không tuân thủ pháp luật
                  và ảnh hưởng đến hoạt động kinh doanh của Telio, các quyết
                  định xử phạt của cơ quan nhà nước có thẩm quyền.
                </li>
              </ul>
              <p className={classes.answerContent_listContent}>
                <b>8. Trách nhiệm về thuế và xuất hoá đơn:</b>
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Giá bán được niêm yết trên Sàn TMĐT Telio là giá cuối cùng mà
                  Nhà Bán Hàng bán cho Khách Hàng, đã bao gồm nhưng không giới
                  hạn thuế nhập khẩu, thuế tiêu thụ đặc biệt, thuế giá trị gia
                  tăng (VAT), vv...mức thuế suất của mỗi loại thuế sẽ theo quy
                  định pháp luật hiện hành.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Khi Khách Hàng có yêu cầu, xuất hoá đơn Giá trị Gia tăng cho
                  Khách Hàng trong vòng 07 (bảy) ngày kể từ khi Khách Hàng đặt
                  hàng. Thông tin xuất hoá đơn được thể hiện ở chi tiết đơn hàng
                  trên Sàn TMĐT Telio.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Trường hợp Nhà Bán Hàng xuất hoá đơn GTGT trễ cam kết cho
                  Khách Hàng, Nhà Bán Hàng sẽ bị phạt một khoản phí là 50,000
                  VND/hoá đơn (năm mươi nghìn đồng).
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Trường hợp Nhà Bán Hàng không xuất được hóa đơn GTGT cho Khách
                  Hàng, Telio có quyền chấm dứt kinh doanh đối với Hàng Hoá của
                  Nhà Bán Hàng hoặc chấm dứt kinh doanh với Nhà Bán Hàng, đồng
                  thời Khách Hàng có quyền trả hàng.
                </li>
              </ul>
              <p className={classes.answerContent_content}>
                <b>9. Trách nhiệm về các dịch vụ sau bán:</b>
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Giải quyết các dịch vụ sau bán hàng, và đổi/trả, bồi thường
                  cho Khách Hàng tuân theo Chính Sách Hoàn Hàng của Telio.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Chính sách về các dịch vụ sau bán, và đổi/trả, bồi thường cho
                  Khách Hàng có thể được Telio điều chỉnh theo từng thời kỳ và
                  được cập nhật trên Sàn TMĐT Telio.
                </li>
              </ul>
              <h2 className={classes.answerContent_headding}>
                VI. TRÁCH NHIỆM CỦA TELIO
              </h2>
              <p>
                <b>1. </b> Cam kết Sàn TMĐT Telio thuộc quyền sở hữu hợp pháp
                của Telio và có đầy đủ điều kiện để hoạt động theo quy định pháp
                luật Việt Nam.
              </p>
              <p>
                <b>2. </b> Xây dựng, vận hành, và quản lý hệ thống một cách ổn
                định để đảm bảo các giao dịch mua bán hàng hoá đối với Gian Hàng
                của Nhà Bán Hàng.
              </p>
              <p>
                <b>3. </b>Áp dụng các biện pháp cần thiết để đảm bảo an toàn
                thông tin liên quan đến bí mật kinh doanh của Nhà Bán Hàng và
                thông tin cá nhân của Khách Hàng.
              </p>
              <p>
                <b>4. </b>Thanh toán cho Nhà Bán Hàng đúng thời hạn quy định tại
                Chính Sách Thanh Toán.
              </p>
              <p>
                <b>5. </b> Hỗ trợ Nhà Bán Hàng khi giải quyết tất cả các khiếu
                nại phát sinh trong quá trình thực hiện việc mua bán Hàng Hoá,
                cung ứng dịch vụ.
              </p>
              <p>
                <b>6. </b> Thông báo về biểu giá Dịch Vụ, phí, phương thức thanh
                toán trong thời gian cung cấp Dịch Vụ.
              </p>
              <h2 className={classes.answerContent_headding}>
                VII. YÊU CẦU ĐỔI TRẢ TỪ KHÁCH HÀNG
              </h2>
              <p>
                <b>1. </b>Việc giải quyết các yêu cầu đổi trả hàng từ khách hàng
                phải tuân theo Chính Sách Đổi Trả Hàng của Telio được đăng tải
                tại:{' '}
                <a href='https://hn.telio.vn/blog/post/chinh-sach-tra-hang'>
                  https://hn.telio.vn/blog/post/chinh-sach-tra-hang
                </a>
                .
              </p>
              <p className={classes.answerContent_content}>
                <b>2. </b> Trong điều kiện và thời gian quy định bên trên, Telio
                được quyền giải quyết các yêu cầu đổi trả hàng của Khách Hàng mà
                không cần thông báo trước cho Nhà Bán Hàng.
              </p>
              <p className={classes.answerContent_content}>
                <b>3. </b> Telio có thể thay đổi, điều chỉnh Chính Sách Đổi Trả
                Hàng để phù hợp với điều kiện kinh doanh và vận hành theo từng
                thời kỳ. Trường hợp có thay đổi, Telio sẽ thông báo cho Nhà Bán
                Hàng trước ít nhất 05 (năm) ngày làm việc kể từ khi chính sách
                mới được áp dụng.
              </p>
              <h2 className={classes.answerContent_headding}>
                VIII. BẤT KHẢ KHÁNG
              </h2>
              <p className={classes.answerContent_content}>
                <b>1. </b>Sự Kiện Bất Khả Kháng có nghĩa là bất cứ biến cố hay
                sự kiện nào xảy ra mà các Bên không có thể dự đoán, kiểm soát,
                ngăn chặn trong khả năng hợp lý, dẫn tới các Bên không thể thực
                hiện toàn bộ hoặc một phần nghĩa vụ của Thỏa Thuận này. Các Sự
                Kiện Bất Khả Kháng bao gồm, nhưng không giới hạn: thiên tai, hoả
                hoạn, bệnh dịch, chiến tranh, loạn, đình công, tranh chấp lao
                động, cấm vận hoặc sự cấm đoán hay lệnh của Chính phủ hoặc cơ
                quan Nhà nước có thẩm quyền.
              </p>
              <p className={classes.answerContent_content}>
                <b>2. </b>Không Bên nào được coi là vi phạm Thỏa Thuận này và có
                nghĩa vụ bồi thường vì đã không thực hiện được các nghĩa vụ đã
                được thỏa thuận trong Hợp Đồng do bị ảnh hưởng bởi các Sự Kiện
                Bất Khả Kháng.
              </p>
              <p className={classes.answerContent_content}>
                <b>3. </b>Khi một Bên gặp phải những Sự Kiện Bất Khả Kháng nói
                trên thì, trong vòng 05 (năm) ngày làm việc kể từ ngày xảy ra Sự
                Kiện Bất Khả Kháng phải thông báo bằng văn bản cho bên còn lại
                và, trong mọi trường hợp, phải dùng mọi nỗ lực cao nhất, phù hợp
                với hoàn cảnh và trong phạm vi Pháp luật cho phép để loại bỏ và
                khắc phục những sự kiện đó một cách nhanh nhất.
              </p>
              <p className={classes.answerContent_content}>
                <b>4. </b>Nếu có bất kỳ Sự Kiện Bất Khả Kháng nào có ảnh hưởng
                dẫn đến việc một Bên không thực hiện được theo Thỏa Thuận này,
                Bên còn lại sẽ hoàn toàn có quyền đơn phương chấm dứt Thỏa Thuận
                trước thời hạn và thông báo cho các bên còn lại trước 10 (mười)
                ngày mà không bị ràng buộc bởi bất cứ trách nhiệm pháp lý nào.
              </p>
              <h2 className={classes.answerContent_headding}>
                IX. SỞ HỮU TRÍ TUỆ
              </h2>
              <p className={classes.answerContent_content}>
                <b>1. Nhà Bán Hàng không được: </b>
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Thực hiện bất kỳ sửa đổi nào đối với nhãn hiệu, tên thương mại
                  của Telio;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Sử dụng bất kỳ các nhãn hiệu dưới bất kỳ hình thức nào mà có
                  thể phương hại đến chất lượng, hay tính xác thực, hay thương
                  hiệu các Sản phẩm của Telio;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Sử dụng bất kỳ các nhãn hiệu hay thương hiệu giống với nhãn
                  hiệu hay thương hiệu của Telio mà có thể gây ra nhầm lẫn hay
                  gian lận;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Sử dụng bất kỳ nhãn hiệu, tên thương mại, hình ảnh hoặc bất kỳ
                  quyền sở hữu trí tuệ của Bên thứ ba mà không
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Không sao chép, lấy cắp công nghệ, bí mật kinh doanh của
                  Telio. 2. Nhà Bán Hàng cam kết rằng mình sẽ thông báo bằng văn
                  bản đầy đủ và kịp thời cho Telio bất kỳ vi phạm thực tế, đe
                  dọa hoặc nghi ngờ vi phạm trong lĩnh vực sở hữu trí tuệ mà Nhà
                  Bán Hàng biết được.
                </li>
              </ul>
              <h2 className={classes.answerContent_headding}>X. CHẤM DỨT</h2>
              <p className={classes.answerContent_content}>
                Một trong hai Bên có thể chấm dứt hợp tác/ chấm dứt giao kết hợp
                đồng với Bên còn lại bất cứ lúc nào mà không bị xem là vi phạm
                nếu đã gửi thông báo bằng văn bản cho Bên còn lại ít nhất 10
                (mười) ngày làm việc trước ngày dự kiến chấm dứt.
              </p>
              <h2 className={classes.answerContent_headding}>
                XI. GIẢI QUYẾT TRANH CHẤP
              </h2>
              <p className={classes.answerContent_content}>
                Mọi mâu thuẫn, tranh chấp phát sinh giữa Telio và Nhà Bán Hàng
                sẽ được giải quyết thông qua thương lượng, hòa giải. Nếu hòa
                giải không thành, trong vòng 30 (ba mươi) ngày làm việc từ khi
                phát sinh tranh chấp, hai Bên thống nhất đệ trình lên Tòa án
                Nhân dân cấp có thẩm quyền ở TP. Hà Nội để giải quyết theo quy
                định pháp luật Việt Nam.
              </p>
              <h2
                style={{ textAlign: 'center' }}
                className={classes.answerContent_headding}
              >
                B- CHÍNH SÁCH THANH TOÁN
              </h2>
              <p className={classes.answerContent_content}>
                <b>1. </b> Telio có trách nhiệm thanh toán cho Nhà Bán Hàng
                khoản Doanh Thu Hàng Hoá mà Telio thu hộ Nhà Bán Hàng từ Khách
                Hàng cho những Đơn Hàng giao thành công;
              </p>
              <p className={classes.answerContent_content}>
                <b>2. </b> Nhà Bán Hàng có trách nhiệm thanh toán cho Telio các
                khoản Phí Dịch Vụ theo Biểu phí Dịch Vụ sau:
              </p>
              <table className={classes.answerContent_table}>
                <tr className={classes.answerContent_tr}>
                  <th className={classes.answerContent_th}>STT</th>
                  <th className={classes.answerContent_th}>Loại phí</th>
                  <th className={classes.answerContent_th}>Nội dung</th>
                  <th className={classes.answerContent_th}>Phí</th>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>1</td>
                  <td className={classes.answerContent_td}>Phí bán hàng</td>
                  <td className={classes.answerContent_td}>
                    Phí xử lý đơn hàng, giao hàng, nhận thanh toán từ Khách Hàng
                  </td>
                  <td className={classes.answerContent_td}>
                    [...]% Doanh Thu Bán Hàng (Chỉ áp dụng khi đơn hàng giao
                    thành công)
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>2</td>
                  <td className={classes.answerContent_td}>Phí lưu kho</td>
                  <td className={classes.answerContent_td}>
                    Phí quản lý hàng hoá trong thời gian lưu kho
                  </td>
                  <td className={classes.answerContent_td}>Chưa áp dụng</td>
                </tr>
              </table>
              <p className={classes.answerContent_content}>
                <b>3. </b> Chu kỳ và quy trình thanh toán
              </p>
              <p className={classes.answerContent_content}>
                Nhà Bán Hàng và Telio sẽ thực hiện thanh toán theo quy trình và
                chu kỳ 01 (một) lần một tuần được quy định như sau:
              </p>
              <table className={classes.answerContent_table}>
                <tr className={classes.answerContent_tr}>
                  <th className={classes.answerContent_th}>Bước </th>
                  <th className={classes.answerContent_th}>Thời gian</th>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>
                    Chu kỳ thanh toán
                  </td>
                  <td className={classes.answerContent_td}>
                    Các đơn hàng giao thành công từ Thứ 2 đến Chủ Nhật
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>
                    Telio gửi Sao Kê Dư Nợ Cuối Kỳ qua email cho Nhà Bán Hàng Để
                    xác nhận Dư Nợ Cuối Kỳ mà hai bên phải thực hiện thanh toán
                  </td>
                  <td className={classes.answerContent_td}>
                    Thứ 2 tuần kế tiếp
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>
                    Nhà Bán Hàng xác nhận sao kê cho Telio{' '}
                  </td>
                  <td className={classes.answerContent_td}>
                    Thứ 3 – Thứ 4 tuần kế tiếp
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>
                    <p>Mỗi bên thanh toán cho bên còn lại theo quy định sau:</p>
                    <p>
                      {'Số Dư Nợ Cuối Kỳ >0: Telio thanh toán cho Nhà Bán Hàng'}
                    </p>
                    <p>
                      {
                        'Số Dư Nợ Cuối Kỳ <0: Nhà Bán Hàng thanh toán cho Telio '
                      }
                    </p>
                  </td>
                  <td className={classes.answerContent_td}>
                    <p>Thứ 5 tuần kế tiếp</p>
                    <p>
                      Nếu ngày thanh toán trùng vào ngày nghỉ, ngày lễ, thì ngày
                      thanh toán sẽ được dời lại vào ngày làm việc kế tiếp
                    </p>
                  </td>
                </tr>
              </table>
              <p className={classes.answerContent_content}>
                Công thức tính Dư Nợ Cuối Kỳ
              </p>
              <p className={classes.answerContent_content}>
                <b>
                  Dư Nợ Cuối Kỳ = Doanh thu Hàng Hóa – Các khoản Phí Dịch Vụ
                </b>
              </p>
              <p className={classes.answerContent_content}>Trong đó:</p>
              <p className={classes.answerContent_content}>
                - Doanh thu Hàng Hoá là khoản Telio phải thanh toán cho Nhà Bán
                Hàng
              </p>
              <p className={classes.answerContent_content}>
                - Các khoản Phí Dịch Vụ là khoản Nhà Bán Hàng phải thanh toán
                cho Telio
              </p>
              <p className={classes.answerContent_content}>
                4. Hình thức thanh toán: Telio và Nhà Bán Hàng thực hiện thanh
                toán theo hình thức chuyển khoản vào tài khoản ngân hàng của mỗi
                bên. Trong trường hợp có thay đổi về thông tin tài khoản ngân
                hàng, mỗi Bên sẽ có trách nhiệm thông báo cho Bên còn lại bằng
                văn bản ít nhất 05 (năm) ngày làm việc trước ngày thay đổi có
                hiệu lực.
              </p>
              <p className={classes.answerContent_content}>
                5. Xử lý thanh toán chậm: Trong trường hợp một trong hai bên
                không hoàn thành nghĩa vụ về thời gian thanh toán cho bên còn
                lại, bên vi phạm sẽ chịu mức lãi suất chậm thanh toán là 07% một
                năm cho mỗi ngày chậm thanh toán trên số tiền chậm thanh toán.
              </p>
              <h2
                style={{ textAlign: 'center' }}
                className={classes.answerContent_headding}
              >
                C- CHÍNH SÁCH GỬI HÀNG
              </h2>
              <p className={classes.answerContent_content}>
                <b>1. </b> Nhà Bán Hàng có toàn quyền quyết định và có trách
                nhiệm lên kế hoạch gửi hàng vào Kho Telio để đảm bảo có hàng bán
                trên Sàn TMĐT Telio. Telio có trách nhiệm cung cấp các báo cáo
                về hàng hoá tồn kho cho Nhà Bán Hàng để Nhà Bán Hàng có kế hoạch
                gửi hàng.
              </p>
              <p className={classes.answerContent_content}>
                <b>2. </b> Nhà Bán Hàng chịu toàn bộ chi phí vận chuyển hàng đến
                Kho Telio. Chi phí bốc dỡ hàng hoá mỗi bên chịu một đầu. Theo
                đó, Nhà Bán Hàng chịu chi phí vận chuyển hàng đến và dỡ hàng
                xuống kho Telio; Telio chịu chi phí vận chuyển hàng vào trong
                kho của mình.
              </p>
              <p className={classes.answerContent_content}>
                <b>3. </b> Hàng Hoá nhập Kho Telio phải đảm bảo các quy chuẩn
                dưới đây:
              </p>
              <p className={classes.answerContent_content}>- Mới 100%;</p>
              <p className={classes.answerContent_content}>
                - Đúng tên, mã, hình ảnh, màu sắc, chủng loại được thể hiện trên
                Phiếu Gửi Hàng tương ứng;
              </p>
              <p className={classes.answerContent_content}>
                - Có ngoại quan đẹp, không móp méo, trầy xước, dơ cũ, ố màu;
              </p>
              <p className={classes.answerContent_content}>
                - Có bao bì/thùng hộp đầy đủ để bảo vệ sản phẩm;
              </p>
              <p className={classes.answerContent_content}>
                - Bao bì/thùng hộp còn nguyên seal và có mã vạch hàng hoá bên
                ngoài;
              </p>
              <p className={classes.answerContent_content}>
                - Hàng hoá dễ móp méo, biến dạng, bể vỡ phải được đóng gói trong
                thùng/hộp và có chèn lót/túi khí xung quanh;
              </p>
              <p className={classes.answerContent_content}>
                - Hàng hoá là chất lỏng phải được niêm phong/bọc miệng, nắp
                bình;
              </p>
              <p className={classes.answerContent_content}>
                - Hàng hoá sắc nhọn, dễ gây sát thương hoặc gây hư hỏng các hàng
                hoá khác phải được bọc gói các góc cạnh sắc nhọn;
              </p>
              <p className={classes.answerContent_content}>
                - Hàng hoá là combo bộ sản phẩm hoặc có hàng tặng đi kèm phải
                được đóng gói chung với nhau.
              </p>
              <p className={classes.answerContent_content}>
                - Hàng Hoá còn tối thiểu 70% tổng thời hạn sử dụng, và thời hạn
                sử dụng còn lại tối thiểu là 03 (ba) tháng kể từ ngày nhập kho.
                Trong quá trình lưu kho Telio, nếu thời hạn sử dụng của sản phẩm
                còn từ 30% trở xuống, Telio sẽ thông báo tới Nhà Bán Hàng và
                thực hiện hoàn trả hàng theo quy định tại Chính Sách Hoàn Hàng.
              </p>
              <p className={classes.answerContent_content}>
                Telio có quyền từ chối nhận hàng nếu Nhà Bán Hàng không đảm bảo
                các quy định này.
              </p>
              <p className={classes.answerContent_content}>
                <b>4. </b>Để gửi hàng vào Kho Telio, Nhà Bán Hàng thực hiện các
                bước sau:
              </p>
              <table className={classes.answerContent_table}>
                <tr className={classes.answerContent_tr}>
                  <th className={classes.answerContent_th}>Bước</th>
                  <th className={classes.answerContent_th}>Hoạt động</th>
                  <th className={classes.answerContent_th}>
                    Thời gian cam kết
                  </th>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>1</td>
                  <td className={classes.answerContent_td}>
                    Nhà Bán Hàng điền thông tin vào Phiếu Gửi Hàng và gửi email
                    cho Telio tại địa chỉ: ban@telio.vn
                  </td>
                  <td className={classes.answerContent_td}>
                    Trước 15h00, 01 ngày làm việc trước khi hàng dự kiến tới kho
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>2</td>
                  <td className={classes.answerContent_td}>
                    Telio xác nhận và gửi email lại cho Nhà Bán Hàng Phiếu Gửi
                    Hàng có xác nhận của Telio
                  </td>
                  <td className={classes.answerContent_td}>
                    Trước 18h00 cùng ngày
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>3</td>
                  <td className={classes.answerContent_td}>
                    Nhà Bán Hàng mang hàng tới Kho Telio cùng 02 bản Phiếu Gửi
                    Hàng có xác nhận của Telio
                  </td>
                  <td className={classes.answerContent_td}>Vào ngày dự kiến</td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>4</td>
                  <td className={classes.answerContent_td}>
                    <p>
                      - Telio và Nhà Bán Hàng đồng kiểm Hàng Hoá và ký nhận. Mỗi
                      bên giữ 01 bản Phiếu Gửi Hàng
                    </p>
                    <p>
                      - Telio sẽ ghi nhận số lượng nhập kho thực tế và tăng tồn
                      kho tương ứng
                    </p>
                  </td>
                </tr>
              </table>
              <p className={classes.answerContent_content}>
                <b>5. </b>Các quy định khác khi gửi hàng:
              </p>
              <p className={classes.answerContent_content}>
                - Khi giao hàng, Nhà Bán Hàng cần:
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  In và mang theo Phiếu Gửi Hàng có xác nhận của Telio;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Đảm bảo Hàng Hoá đáp ứng các quy định tại Thỏa Thuận.
                </li>
              </ul>
              <p className={classes.answerContent_content}>
                - Mang hàng đúng ngày dự kiến;
              </p>
              <p className={classes.answerContent_content}>
                - Nhà Bán Hàng chỉ gửi số lượng hàng hoá vừa sức bán.
              </p>
              <p className={classes.answerContent_content}>
                - Telio có quyền từ chối nhận hàng nếu Nhà Bán Hàng không đảm
                bảo các quy định này.
              </p>
              <h2
                style={{ textAlign: 'center' }}
                className={classes.answerContent_headding}
              >
                D- CHÍNH SÁCH HOÀN HÀNG
              </h2>
              <p className={classes.answerContent_content}>
                <b>1.</b> Telio sẽ hoàn trả hàng lưu kho cho Nhà Bán Hàng trong
                các trường hợp sau đây:
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Nhà Bán Hàng yêu cầu rút hàng;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Hàng lưu kho không đảm bảo thời hạn sử dụng, được định nghĩa
                  là khi thời hạn sử dụng của sản phẩm còn từ 30% trở xuống;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Hàng lỗi, hỏng;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Hai Bên thỏa thuận chấm dứt hợp tác.
                </li>
              </ul>
              <p className={classes.answerContent_content}>
                <b>2. </b>Nhà Bán Hàng chịu toàn bộ chi phí vận chuyển hàng hóa
                từ Kho Telio.
              </p>
              <p className={classes.answerContent_content}>
                <b>3. </b>Nhà Bán Hàng phải tuân thủ quy trình rút / hoàn trả
                hàng sau:
              </p>
              <p className={classes.answerContent_content}>
                (i) Nhà Bán Hàng có yêu cầu rút hàng
              </p>
              <table className={classes.answerContent_table}>
                <tr className={classes.answerContent_tr}>
                  <th className={classes.answerContent_th}>Bước</th>
                  <th className={classes.answerContent_th}>Hoạt động</th>
                  <th className={classes.answerContent_th}>
                    Thời gian cam kết
                  </th>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>1</td>
                  <td className={classes.answerContent_td}>
                    1 Nhà Bán Hàng điền thông tin vào Phiếu Rút Hàng và gửi
                    email cho Telio tại địa chỉ: ban@telio.vn
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>2</td>
                  <td className={classes.answerContent_td}>
                    Telio xác nhận và gửi email lại cho Nhà Bán Hàng Phiếu Rút
                    Hàng có xác nhận của Telio
                  </td>
                  <td className={classes.answerContent_td}>
                    02 ngày làm việc kể từ ngày nhận được yêu cầu của Nhà Bán
                    Hàng
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>3</td>
                  <td className={classes.answerContent_td}>
                    Nhà Bán Hàng tới Kho Telio lấy hàng mang theo các giấy tờ
                    được quy định tại Phụ Lục này
                  </td>
                  <td className={classes.answerContent_td}>
                    03 ngày làm việc kể từ ngày Telio xác nhận yêu cầu
                  </td>
                </tr>
              </table>
              <p className={classes.answerContent_content}>
                (ii) Hàng lưu kho không đảm bảo thời hạn sử dụng
              </p>
              <table className={classes.answerContent_table}>
                <tr className={classes.answerContent_tr}>
                  <th className={classes.answerContent_th}>Bước</th>
                  <th className={classes.answerContent_th}>Hoạt động</th>
                  <th className={classes.answerContent_th}>
                    Thời gian cam kết
                  </th>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>1</td>
                  <td className={classes.answerContent_td}>
                    Telio gửi thông báo về các hàng hoá không đảm bảo thời hạn
                    sử dụng (*) và Phiếu Rút Hàng qua email cho Nhà Bán Hàng
                    định kỳ 01 lần một tuần
                  </td>
                  <td className={classes.answerContent_td}>Thứ 3 hàng tuần</td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>2</td>
                  <td className={classes.answerContent_td}>
                    Nhà Bán Hàng xác nhận Phiếu Rút Hàng và thông báo ngày dự
                    kiến rút hàng
                  </td>
                  <td className={classes.answerContent_td}>
                    02 ngày làm việc kể từ ngày nhận được Phiếu Rút Hàng của
                    Telio
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>3</td>
                  <td className={classes.answerContent_td}>
                    Nhà Bán Hàng tới Kho Telio lấy hàng mang theo các giấy tờ
                    được quy định tại Phụ Lục này
                  </td>
                  <td className={classes.answerContent_td}>
                    03 ngày làm việc kể từ ngày Nhà Bán Hàng xác nhận Phiếu Rút
                    Kho Telio gửi
                  </td>
                </tr>
              </table>
              <p className={classes.answerContent_content}>
                (iii) Hàng lỗi và/hoặc đã qua xử lý đổi trả cho Khách Hàng
              </p>
              <table className={classes.answerContent_table}>
                <tr className={classes.answerContent_tr}>
                  <th className={classes.answerContent_th}>Bước</th>
                  <th className={classes.answerContent_th}>Hoạt động</th>
                  <th className={classes.answerContent_th}>
                    Thời gian cam kết
                  </th>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>1</td>
                  <td className={classes.answerContent_td}>
                    Telio gửi thông báo về các hàng hóa lỗi, Phiếu Rút Hàng (và
                    Phiếu Bồi Thường trong trường hợp hàng hóa lỗi do Telio) qua
                    email cho Nhà Bán Hàng định kỳ 01 lần một tuần
                  </td>
                  <td className={classes.answerContent_td}>Thứ 3 hàng tuần</td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>2</td>
                  <td className={classes.answerContent_td}>
                    Nhà Bán Hàng xác nhận Phiếu Rút Hàng và thông báo ngày dự
                    kiến rút hàng
                  </td>
                  <td className={classes.answerContent_td}>
                    02 ngày làm việc kể từ ngày nhận được yêu cầu của Nhà Bán
                    Hàng
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>3</td>
                  <td className={classes.answerContent_td}>
                    Nhà Bán Hàng tới Kho Telio lấy hàng mang theo các giấy tờ
                    được quy định tại Phụ Lục này
                  </td>
                  <td className={classes.answerContent_td}>
                    03 ngày làm việc kể từ ngày Nhà Bán Hàng xác nhận Phiếu Rút
                    Kho Telio gửi
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>4</td>
                  <td className={classes.answerContent_td}>
                    <p>Nhà Bán Hàng phản hồi về hàng lỗi</p>
                    <p>
                      - Nếu Nhà Bán Hàng được bồi thường, Nhà Bán Hàng cần phản
                      hồi đồng ý hoặc khiếu nại theo Phiếu Bồi Thường được Telio
                      gửi
                    </p>
                    <p>
                      - Nếu Nhà Bán Hàng không được bồi thường, sau khi kiểm tra
                      Hàng Hoá Nhà Bán Hàng có thể khiếu nại với Telio
                    </p>
                    <p>
                      Quy trình xử lý bồi thường được quy định tại Chính Sách
                      Bồi Thường
                    </p>
                  </td>
                  <td className={classes.answerContent_td}>
                    02 ngày làm việc kể từ ngày Nhà Bán Hàng nhận lại hàng từ
                    Kho Telio
                  </td>
                </tr>
              </table>
              <p className={classes.answerContent_content}>
                (iv) Hai Bên thỏa thuận chấm dứt hợp tác
              </p>
              <table className={classes.answerContent_table}>
                <tr className={classes.answerContent_tr}>
                  <th className={classes.answerContent_th}>Bước</th>
                  <th className={classes.answerContent_th}>Hoạt động</th>
                  <th className={classes.answerContent_th}>
                    Thời gian cam kết
                  </th>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>1</td>
                  <td className={classes.answerContent_td}>
                    Hai Bên đồng ý và xác nhận chấm dứt hợp tác
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>2</td>
                  <td className={classes.answerContent_td}>
                    Nhà Bán Hàng điền thông tin vào Phiếu Rút Hàng và gửi email
                    cho Telio tại địa chỉ: ban@telio.vn
                  </td>
                  <td className={classes.answerContent_td}>
                    02 ngày làm việc kể từ ngày Hai Bên xác nhận chấm dứt hợp
                    tác
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>3</td>
                  <td className={classes.answerContent_td}>
                    Telio xác nhận và gửi lại Nhà Bán Hàng Phiếu Rút Hàng có xác
                    nhận của Telio
                  </td>
                  <td className={classes.answerContent_td}>
                    02 ngày làm việc kể từ ngày nhận được yêu cầu của Nhà Bán
                    Hàng
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>4</td>
                  <td className={classes.answerContent_td}>
                    Nhà Bán Hàng tới Kho Telio lấy hàng mang theo các giấy tờ
                    được quy định tại Phụ Lục này
                  </td>
                  <td className={classes.answerContent_td}>
                    03 ngày làm việc kể từ ngày Telio xác nhận yêu cầu
                  </td>
                </tr>
              </table>
              <p className={classes.answerContent_content}>
                <b>4. </b>Các quy định khác khi đến kho Telio lấy hàng:
              </p>
              <p className={classes.answerContent_content}>
                - Khi đến rút hàng tại Kho Telio, Nhà Bán Hàng cần mang theo:
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Phiếu Rút Hàng có chữ ký của người đại diện theo pháp luật của
                  nghiệp (hoặc người được người đại diện theo pháp luuỷ quyền),
                  và nhân viên được cử đi lấy hàng;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Chứng Minh Nhân Dân của nhân viên được cử đi lấy hàng, chữ ký
                  nhân viên trên Phiếu Rút Hàng phải khớp với tên trên Chứng
                  Minh Nhân Dân
                </li>
              </ul>
              <p className={classes.answerContent_content}>
                Telio có quyền không trả hàng nếu Nhà Bán Hàng không cung cấp
                đầy đủ những thông tin này
              </p>
              <p className={classes.answerContent_content}>
                - Nhà Bán Hàng phải tuân thủ thời gian xử lý và lấy trả hàng
                theo quy trình bên trên. Nếu sau thời hạn lấy hàng quy định mà
                Nhà Bán Hàng vẫn chưa thực hiện nhận lại hàng thì:
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Telio không chịu trách nhiệm với các Hàng Hoá này; và
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Nhà Bán Hàng đồng ý rằng đó là từ bỏ quyền sở hữu, quyền sử
                  dụng của mình với Hàng Hoá, và Telio có quyền xử lý, bán,
                  thanh lý các Hàng hoá này mà không cần thông báo trước cho Nhà
                  Bán Hàng.
                </li>
              </ul>
              <h2
                style={{ textAlign: 'center' }}
                className={classes.answerContent_headding}
              >
                E- CHÍNH SÁCH BỒI THƯỜNG
              </h2>
              <p className={classes.answerContent_content}>
                <b>1. </b>Telio có trách nhiệm bồi thường cho Nhà Bán Hàng với
                các mất mát, lỗi, hỏng hóc xảy ra với hàng hoá của Nhà Bán Hàng
                do lỗi của Telio trong quá trình lưu kho và giao hàng.
              </p>
              <p className={classes.answerContent_content}>
                <b>2. </b>Telio được miễn trách nhiệm bồi thường trong các
                trường hợp sau:
              </p>
              <p className={classes.answerContent_content}>
                - Trường hợp bất khả kháng do thiên tai, hoả hoạn, cháy nổ, bạo
                loạn, ...;
              </p>
              <p className={classes.answerContent_content}>
                - Lỗi phát sinh do Nhà Bán Hàng; - Hàng hóa hết hạn sử dụng;
              </p>
              <p className={classes.answerContent_content}>
                - Hàng hoá còn nguyên đai, nguyên kiện từ lúc nhập kho đến khi
                trả lại hàng cho Nhà Bán Hàng và không bị lỗi ngoại quan;
              </p>
              <p className={classes.answerContent_content}>
                - Thông tin hàng hoá sai cam kết với Khách Hàng.
              </p>
              <p className={classes.answerContent_content}>
                <b>3. </b>Sau khi nhận được thông báo về hàng hoá mất mát hoặc
                lỗi hỏng kèm đề xuất bồi thường của Telio, Nhà Bán Hàng có quyền
                phản đồng ý hoặc khiếu nại với đề xuất đó trong thời gian quy
                định tại Quy Trình Xử Lý Bồi Thường. Nếu quá thời hạn phản hồi
                mà Nhà Bán Hàng chưa phản hồi, Telio sẽ tiến hành bồi thường
                theo phương án đã thông báo và không chịu trách nhiệm với bất kỳ
                khiếu nại nào phát sinh sau đó
              </p>
              <p className={classes.answerContent_content}>
                <b>4. </b>Khi khiếu nại về đề xuất bồi thường của Telio, Nhà Bán
                Hàng cần cung cấp các thông tin sau:
              </p>
              <p className={classes.answerContent_content}>
                - Mã <b>Phiếu Bồi Thường</b>
              </p>
              <p className={classes.answerContent_content}>
                - Thông tin hàng hóa lỗi: tên hàng hoá, tình trạng lỗi, mức bồi
                thường đề xuất
              </p>
              <p className={classes.answerContent_content}>
                - Hình ảnh về hư hại của sản phẩm
              </p>
              <p className={classes.answerContent_content}>
                - Các bằng chứng hợp lệ khác (nếu có)
              </p>
              <p className={classes.answerContent_content}>
                Telio có quyền từ chối xử lí khiếu nại nếu Nhà Bán Hàng không
                cung cấp đầy đủ các thông tin trên
              </p>
              <p className={classes.answerContent_content}>
                <b>5. </b>Khi Telio đã hoàn tất giao dịch bồi thường, Telio sẽ
                không chịu trách nhiệm với bất kỳ khiếu nại nào phát sinh sau đó
              </p>
              <p className={classes.answerContent_content}>
                <b>6. </b>Telio bảo toàn quyền ra quyết định cuối cùng về giá
                trị bồi thường trong mọi trường hợp không thể thương lượng /
                thỏa thuận giữa Hai Bên.
              </p>
              <p className={classes.answerContent_content}>
                <b>7. </b>Cách Tính Giá Trị Bồi Thường và Bảng Phân Loại Mức Độ
                Bồi Thường
              </p>
              <p className={classes.answerContent_content}>
                Giá trị Bồi thường được tính theo công thức sau:
              </p>
              <p className={classes.answerContent_content}>
                <b>
                  Giá trị Bồi Thường = (Giá trị Hàng Hoá – Phí phải trả Telio) x
                  Phần trăm bồi thường
                </b>
              </p>
              <p className={classes.answerContent_content}>
                - Giá trị Hàng Hoá được xác định là:
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Với lỗi do lưu kho: Giá bán của hàng hoá trung bình trong 01
                  tháng gần nhất
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Với hàng mất, lỗi do vận chuyển:Giá bán trong Đơn hàng gặp vấn
                  đề
                </li>
              </ul>
              <p className={classes.answerContent_content}>
                - Phí phải trả cho Telio bao gồm Phí Bán Hàng
              </p>
              <p className={classes.answerContent_content}>
                - Phần trăm bồi thường: được quy định cụ thể cho từng loại mất
                mát / lỗi hỏng trong bảng phân loại tại bảng sau
              </p>
              <p className={classes.answerContent_content}>
                Bảng mức độ bồi thường
              </p>
              <table className={classes.answerContent_table}>
                <tr className={classes.answerContent_tr}>
                  <th className={classes.answerContent_th}>STT</th>
                  <th className={classes.answerContent_th}>
                    Mất mát / lỗi hỏng
                  </th>
                  <th className={classes.answerContent_th}>% bồi thường</th>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>1</td>
                  <td className={classes.answerContent_td}>Mất mát</td>
                  <td className={classes.answerContent_td}>100%</td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>2</td>
                  <td className={classes.answerContent_td}>
                    Bao bì sản phẩm bị bị hư hỏng nhưng sản phẩm bên trong còn
                    nguyên vẹn
                  </td>
                  <td className={classes.answerContent_td}>≤5%</td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>3</td>
                  <td className={classes.answerContent_td}>
                    Bảo bì sản phẩm bị hư hỏng làm ảnh hưởng đến chất lượng bên
                    trong của sản phẩm
                  </td>
                  <td className={classes.answerContent_td}>≤20%</td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>4</td>
                  <td className={classes.answerContent_td}>
                    Sản phẩm bị hư hỏng, biến dạng, làm ảnh hưởng đến công năng
                    sử dụng của sản phẩm
                  </td>
                  <td className={classes.answerContent_td}>≤100%</td>
                </tr>
              </table>
              <p className={classes.answerContent_content}>
                <b>8. </b>Nhà Bán Hàng phải tuân thủ Quy trình xử lý bồi thường
                cho các hàng hoá mất mát, lỗi hỏng do lỗi của Telio như sau:
              </p>
              <table className={classes.answerContent_table}>
                <tr className={classes.answerContent_tr}>
                  <th className={classes.answerContent_th}>Bước</th>
                  <th className={classes.answerContent_th}>Hoạt động</th>
                  <th className={classes.answerContent_th}>
                    Thời gian cam kết
                  </th>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>1</td>
                  <td className={classes.answerContent_td}>
                    Telio tiếp nhận và tổng hợp thông tin về hàng hoá mất mát
                    hoặc lỗi hỏng.
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>2</td>
                  <td className={classes.answerContent_td}>
                    <p>
                      Telio thông báo cho Nhà Bán Hàng định kỳ 01 lần một tuần
                      qua email:
                    </p>
                    <p>Đối với mất mát:</p>
                    <p>- Telio gửi Phiếu Bồi Thường cho Nhà Bán Hàng</p>
                    <p>Đối với lỗi hỏng:</p>
                    <p>
                      - Telio gửi Phiếu Bồi Thường và Phiếu Rút Hàng cho Nhà Bán
                      Hàng
                    </p>
                  </td>
                  <td className={classes.answerContent_td}>Thứ 3 hàng tuần</td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>3</td>
                  <td className={classes.answerContent_td}>
                    <p>
                      Nhà Bán Hàng phản hồi đồng ý hoặc khiếu nại với đề xuất
                      đều bù của Telio
                    </p>
                    <p>Đối với mất mát</p>
                    <p>
                      - Nhà Bán Hàng phản hồi đồng ý hoặc khiếu nại với đề xuất
                      đền bù của Telio qua email
                    </p>
                    <p>- Nếu Nhà Bán Hàng đồng ý, chuyển tới bước 5</p>
                    <p>- Nếu Nhà Bán Hàng khiếu nại, chuyển tới bước 4</p>
                    <p>Đối với lỗi hỏng</p>
                    <p>
                      - Nhà Bán Hàng rút hàng ở Kho Telio theo Chính Sách Hoàn
                      Hàng
                    </p>
                    <p>
                      - Nhà Bán Hàng phản hồi đồng ý hoặc khiếu nại với đề xuất
                      đền bù của Telio qua email
                    </p>
                    <p>- Nếu Nhà Bán Hàng đồng ý, chuyển tới bước 5</p>
                    <p>- Nếu Nhà Bán Hàng khiếu nại, chuyển tới bước 4</p>
                  </td>
                  <td className={classes.answerContent_td}>
                    <p>
                      02 ngày làm việc kể từ ngày Telio gửi thông báo bồi thường
                    </p>
                    <p>
                      02 ngày làm việc kể từ ngày Nhà Bán Hàng lấy hàng ở Kho
                      Telio
                    </p>
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>4</td>
                  <td className={classes.answerContent_td}>
                    Trong trường hợp Nhà Bán Hàng có khiếu nại, Telio sẽ liên hệ
                    Nhà Bán Hàng để thỏa thuận mức bồi thường.
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>5</td>
                  <td className={classes.answerContent_td}>
                    Telio lập Biên Bản Bồi Thường theo phương án đã thống nhất
                    với Nhà Bán Hàng và gửi qua email cho Nhà Bán Hàng
                  </td>
                  <td className={classes.answerContent_td}>
                    02 ngày làm việc kể từ ngày Nhà Bán Hàng và Telio thống nhất
                    phương án bồi thường
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>6</td>
                  <td className={classes.answerContent_td}>
                    <p>Nhà Bán Hàng gửi lại cho Telio:</p>
                    <p>- Biên Bản Bồi Thường có chữ ký Nhà Bán Hàng</p>
                    <p>
                      - Trong trường hợp Telio bồi thường 100% giá trị, Nhà Bán
                      Hàng xuất và gửi chứng từ bán hàng cho Telio
                    </p>
                  </td>
                </tr>
                <tr className={classes.answerContent_tr}>
                  <td className={classes.answerContent_td}>7</td>
                  <td className={classes.answerContent_td}>
                    <p>
                      Telio thanh toán cho Nhà Bán Hàng và hoàn tất thủ tục bồi
                      thường.
                    </p>
                    <p>
                      Telio thanh toán cho Nhà Bán Hàng vào Thứ 5 hằng tuần cho
                      tất cả các giao dịch bồi thường đã có đầy đủ chứng từ từ
                      Thứ 2 đến Chủ Nhật tuần trước đó.
                    </p>
                  </td>
                  <td className={classes.answerContent_td}>Thứ 5 hằng tuần</td>
                </tr>
              </table>
              <h2
                style={{ textAlign: 'center' }}
                className={classes.answerContent_headding}
              >
                F- ĐIỀU KHOẢN KHÁC
              </h2>
              <p className={classes.answerContent_content}>
                <b>1. </b>Quy định của Điều Khoản Dịch Vụ là hoàn toàn riêng
                biệt, nếu có bất kỳ điều khoản nào bị vô hiệu hoặc không thể
                thực thi được, với phạm vi toàn bộ hay một phần, thì những sự vô
                hiệu hoặc không thực thi được đó sẽ chỉ tác động đối với chính
                điều khoản đó và không ảnh hưởng đến bất kỳ điều khoản nào khác.
                Trong phạm vi pháp luật cho phép, một điều khoản trong đó phản
                ánh ý định ban đầu của Các Bên sẽ được thay thế cho điều khoản
                vô hiệu hoặc không thể thực thi đó.
              </p>
              <p className={classes.answerContent_content}>
                <b>2. </b>Việc một Bên không thực hiện các quyền của mình trong
                trường hợp Bên kia vi phạm Thỏa Thuận sẽ không được xem là sự từ
                bỏ quyền của Bên đó theo Điều Khoản Dịch Vụ hoặc theo Quy Định
                Pháp Luật áp dụng.
              </p>
              <p className={classes.answerContent_content}>
                <b>3. </b>Điều Khoản Dịch Vụ sẽ không thể được sửa đổi ngoại trừ
                một thông báo chính thức được ký bởi người đại diện theo ủy
                quyền của Telio gửi đến Nhà Bán Hàng trong vòng 10 (mười) ngày
                trước ngày có hiệu lực.
              </p>
              <p className={classes.answerContent_content}>
                <b>4. </b>Không Bên nào được quyền chuyển nhượng, chuyển giao
                hoặc ký hợp đồng thầu phụ toàn bộ hoặc một phần quyền lợi hoặc
                nghĩa vụ của mình phát sinh từ Điều Khoản Dịch Vụ khi chưa có
                chấp thuận trước bằng văn bản của bên còn lại.
              </p>
              <p className={classes.answerContent_content}>
                TÔI, NHÀ BÁN HÀNG, ĐÃ ĐỌC VÀ ĐỒNG Ý VỚI MỌI ĐIỀU KHOẢN HIỆN CÓ
                VÀ NHỮNG ĐIỀU KHOẢN BỔ SUNG SỬA ĐỔI NẾU CÓ. BẰNG CÁCH BẤM NÚT
                “XÁC NHẬN” VÀO PHIẾU ĐĂNG KÝ BÁN HÀNG, TÔI HIỂU RẰNG TÔI ĐANG
                TẠO CHỮ KÝ ĐIỆN TỬ MÀ TÔI HIỂU RẰNG NÓ CÓ GIÁ TRỊ VÀ HIỆU LỰC
                TƯƠNG TỰ NHƯ CHỮ KÝ TÔI KÝ BẰNG TAY.
              </p>
            </div>
          </QuestionDropdownPolicy>
          <QuestionDropdownPolicy
            question={T('policy.privacy')}
            open={openedQuestion === 5}
            toggle={() => toggleQuestion(5)}
          >
            <div className={classes.answerContent}>
              <h2
                style={{ textAlign: 'center' }}
                className={classes.answerContent_headdingPost}
              >
                CHÍNH SÁCH BẢO MẬT
              </h2>
              <p className={classes.answerContent_content}>
                Telio thực hiện nghiêm ngặt vấn đề bảo mật khách hàng và Telio
                chỉ thu thập, lưu hồ sơ, lưu trữ, tiết lộ, chuyển giao và sử
                dụng thông tin cá nhân của Khách Hàng theo các điều khoản được
                nêu dưới đây.
              </p>
              <p className={classes.answerContent_content}>
                <b>1. Giới thiệu về Chính sách bảo mật</b>
              </p>
              <p className={classes.answerContent_content}>
                1.1. Chính Sách Bảo Mật này được lập để Khách Hàng biết về cách
                thức Telio thu thập, sử dụng, tiết lộ, lưu trữ và/hoặc xử lý dữ
                liệu mà Telio thu thập và tiếp nhận trong quá trình cung cấp
                Dịch Vụ hoặc quyền truy cập vào Nền Tảng cho Khách Hàng. Telio
                sẽ chỉ thu thập, sử dụng, tiết lộ, lưu trữ và/hoặc xử lý dữ liệu
                cá nhân của Khách Hàng theo Chính Sách Bảo Mật này.
              </p>
              <p className={classes.answerContent_content}>
                1.2. BẰNG VIỆC SỬ DỤNG CÁC DỊCH VỤ, ĐĂNG KÝ MỘT TÀI KHOẢN VỚI
                TELIO HOẶC TRUY CẬP VÀO WEBSITE WWW.TELIO.VN VÀ HOẶC ỨNG DỤNG DI
                ĐỘNG TELIO ĐƯỢC PHÁT TRIỂN BỞI CÔNG TY TNHH TELIO VIỆT NAM
                (&quot;NỀN TẢNG&quot;), KHÁCH HÀNG XÁC NHẬN VÀ ĐỒNG Ý RẰNG BẠN
                CHẤP NHẬN CÁC PHƯƠNG PHÁP, YÊU CẦU, VÀ/HOẶC CHÍNH SÁCH ĐƯỢC MÔ
                TẢ TRONG CHÍNH SÁCH BẢO MẬT NÀY, VÀ THEO ĐÂY BẠN ĐỒNG Ý CHO PHÉP
                CHÚNG TÔI THU THẬP, SỬ DỤNG, TIẾT LỘ VÀ/HOẶC XỬ LÝ DỮ LIỆU CÁ
                NHÂN CỦA BẠN NHƯ MÔ TẢ TRONG ĐÂY. NẾU BẠN KHÔNG ĐỒNG Ý CHO PHÉP
                XỬ LÝ DỮ LIỆU CÁ NHÂN CỦA BẠN NHƯ MÔ TẢ TRONG CHÍNH SÁCH NÀY,
                VUI LÒNG KHÔNG SỬ DỤNG CÁC DỊCH VỤ CỦA CHÚNG TÔI HAY TRUY CẬP
                NỀN TẢNG HOẶC TRANG WEB CỦA CHÚNG TÔI.
              </p>
              <p className={classes.answerContent_content}>
                1.3. Telio có thể cập nhật Chính Sách Bảo Mật này tại từng thời
                điểm. Bất kỳ thay đổi nào đối với Chính Sách Bảo Mật này do
                Telio thực hiện trong tương lai sẽ được đăng trên trang này, và
                chỉ áp dụng đối với những thay đổi quan trọng (khi thích hợp
                và/hoặc được cho phép theo quy định pháp luật) sẽ được thông báo
                cho Khách Hàng khi Khách Hàng tiếp tục sử dụng Dịch Vụ, truy cập
                vào Nền Tảng hoặc sử dụng Dịch Vụ, bao gồm cả việc đặt Đơn Hàng
                trên Nền Tảng, sẽ cấu thành việc Khách Hàng xác nhận và chấp
                nhận đối với những thay đổi đối với Chính Sách Bảo Mật này do
                Telio thực hiện. Vui lòng thường xuyên kiểm tra lại Chính Sách
                Bảo Mật này để theo dõi bất kỳ cập nhật hoặc thay đổi nào đối
                với Chính Sách Bảo Mật này.
              </p>
              <p className={classes.answerContent_content}>
                1.4. Chính Sách Bảo Mật này được áp dụng cùng với các thông báo,
                điều khoản hợp đồng và điều khoản đồng ý khác được áp dụng có
                liên quan đến việc thu thập, lưu trữ, sử dụng, tiết lộ và/hoặc
                xử lý dữ liệu cá nhân của Khách Hàng bởi Telio và không nhằm mục
                đích vô hiệu hóa các điều khoản đó trừ trường hợp được quy định
                cụ thể khác đi.
              </p>
              <p className={classes.answerContent_content}>
                <b>2. Thu thập Dữ liệu cá nhân</b>
              </p>
              <p className={classes.answerContent_content}>
                2.1. Dữ liệu cá nhân mà Telio có thể thu thập bao gồm, nhưng
                không giới hạn:
              </p>
              <p className={classes.answerContent_content}>a) Họ tên;</p>
              <p className={classes.answerContent_content}>
                b) Tên Cửa hàng/ Công ty/ Hộ kinh doanh;
              </p>
              <p className={classes.answerContent_content}>c) Địa chỉ;</p>
              <p className={classes.answerContent_content}>d) Email;</p>
              <p className={classes.answerContent_content}>e) Số điện thoại;</p>
              <p className={classes.answerContent_content}>
                f) Dữ liệu hồ sơ như tên người dùng và mật khẩu, dữ liệu về mua
                hàng hoặc đơn đặt hàng của Khách Hàng, phản hồi và trả lời khảo
                sát của Khách Hàng;
              </p>
              <p className={classes.answerContent_content}>
                g) Dữ liệu kỹ thuật như địa chỉ giao thức trực tuyến (Internet
                Protocol - IP), dữ liệu đăng nhập, loại và phiên bản trình
                duyệt, cài đặt múi giờ và vị trí, loại và phiên bản trình cắm
                trình duyệt (plug-in browser), hệ điều hành và nền tảng, mã nhận
                dạng thiết bị di động quốc tế, nhận dạng thiết bị và các thông
                tin và công nghệ khác trên các thiết bị Quý Khách sử dụng để
                truy cập Nền Tảng;
              </p>
              <p className={classes.answerContent_content}>
                h) Thông tin được gửi bởi hoặc liên quan đến (các) thiết bị được
                sử dụng để truy cập vào Nền tảng của Telio;
              </p>
              <p className={classes.answerContent_content}>
                i) Bất kỳ thông tin nào khác về người dùng khi người dùng đăng
                nhập để sử dụng Các Dịch Vụ hoặc Nền tảng của Telio, và khi
                người dùng sử dụng Các Dịch Vụ hoặc Nền tảng, cũng như thông tin
                về việc người dùng sử dụng Các Dịch Vụ hoặc Nền tảng của Telio
                như thế nào.
              </p>
              <p className={classes.answerContent_content}>
                2.2. Trong quá trình Khách Hàng sử dụng Nền Tảng và Dịch Vụ,
                Telio có thể thu thập dữ liệu cá nhân từ Khách Hàng trong các
                trường hợp sau:
              </p>
              <p className={classes.answerContent_content}>
                a) Khi Khách Hàng tạo một tài khoản với Telio;
              </p>
              <p className={classes.answerContent_content}>
                b) Khi Khách Hàng đăng ký bất kỳ Dịch Vụ nào hoặc mua bất kỳ Sản
                Phẩm nào có sẵn trên Nền Tảng;
              </p>
              <p className={classes.answerContent_content}>
                c) Khi Khách Hàng sử dụng bất kỳ tính năng hoặc chức năng nào có
                sẵn trên Nền Tảng hoặc Dịch Vụ;
              </p>
              <p className={classes.answerContent_content}>
                d) Khi Khách Hàng ghi lại bất kỳ nội dung nào do người dùng khởi
                tạo được tải lên trên Nền Tảng;
              </p>
              <p className={classes.answerContent_content}>
                e) Khi Khách Hàng sử dụng chức năng trò chuyện trên Nền Tảng;
              </p>
              <p className={classes.answerContent_content}>
                f) Khi Khách Hàng đăng ký các ấn phẩm hoặc tài sản tiếp thị của
                Telio;
              </p>
              <p className={classes.answerContent_content}>
                g) Khi Khách Hàng tham gia vào bất kỳ hoạt động hoặc chiến dịch
                khuyến mãi nào trên Nền Tảng;
              </p>
              <p className={classes.answerContent_content}>
                h) Khi Khách Hàng đăng nhập vào tài khoản của mình trên Nền Tảng
                hoặc tương tác với Telio thông qua một dịch vụ hoặc ứng dụng
                khác như Facebook hoặc Google;
              </p>
              <p className={classes.answerContent_content}>
                i) Khi bất kỳ người dùng nào khác trên Nền Tảng đăng bất kỳ nhận
                xét nào về nội dung Khách Hàng đã tải lên trên Nền Tảng hoặc khi
                Khách Hàng đăng bất kỳ nhận xét nào về nội dung của người dùng
                khác được tải lên Nền Tảng;
              </p>
              <p className={classes.answerContent_content}>
                j) Khi bên thứ ba gửi khiếu nại về Khách Hàng hoặc nội dung
                Khách Hàng đã đăng trên Nền Tảng;
              </p>
              <p className={classes.answerContent_content}>
                2.3. Trong quá trình khách hàng sử dụng nền tảng và sử dụng dịch
                vụ, khách hàng hoàn toàn đồng ý cho phép việc chuyển dữ liệu cá
                nhân của khách hàng từ bên thứ ba cho telio cho các mục đích
                được nêu trong chính sách bảo mật này hoặc bất kỳ điều khoản nào
                khác.
              </p>
              <p className={classes.answerContent_content}>
                2.4. Khách Hàng phải gửi dữ liệu cá nhân một cách chính xác và
                không gây nhầm lẫn và Khách Hàng phải cập nhật dữ liệu thường
                xuyên và thông báo cho Telio về bất kỳ thay đổi nào đối với dữ
                liệu cá nhân Khách Hàng đã cung cấp cho Telio. Telio sẽ có quyền
                yêu cầu những tài liệu để xác minh dữ liệu cá nhân do Khách Hàng
                cung cấp như một phần của quy trình xác minh thông tin khách
                hàng của Telio.
              </p>
              <p className={classes.answerContent_content}>
                2.5. TELIO SẼ CHỈ CÓ THỂ THU THẬP DỮ LIỆU CÁ NHÂN CỦA KHÁCH HÀNG
                NẾU KHÁCH HÀNG TỰ NGUYỆN GỬI DỮ LIỆU CÁ NHÂN CHO TELIO HOẶC THEO
                QUY ĐỊNH KHÁC TRONG CHÍNH SÁCH BẢO MẬT NÀY. TRONG TRƯỜNG HỢP
                KHÁCH HÀNG KHÔNG GỬI DỮ LIỆU CÁ NHÂN CỦA MÌNH CHO TELIO HOẶC SAU
                ĐÓ THU HỒI SỰ CHẤP THUẬN CỦA KHÁCH HÀNG ĐỐI VỚI VIỆC TELIO SỬ
                DỤNG DỮ LIỆU CÁ NHÂN CỦA KHÁCH HÀNG, TELIO KHÔNG THỂ CUNG CẤP
                CHO KHÁCH HÀNG DỊCH VỤ HOẶC QUYỀN TRUY CẬP VÀO NỀN TẢNG.
              </p>
              <p className={classes.answerContent_content}>
                2.6. Khách Hàng có thể truy cập và cập nhật thông tin cá nhân
                của Khách Hàng gửi cho Telio bất cứ lúc nào như được mô tả dưới
                đây
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Nếu Khách Hàng cung cấp dữ liệu cá nhân của bất kỳ bên thứ ba
                  nào cho Telio, Khách Hàng cam đoan và bảo đảm rằng Khách Hàng
                  đã có được sự đồng ý, chấp thuận và cho phép cần thiết từ bên
                  thứ ba đó để chia sẻ và chuyển dữ liệu cá nhân của họ cho
                  Telio và để Telio thu thập, lưu trữ, sử dụng và tiết lộ dữ
                  liệu đó theo Chính Sách Bảo Mật này.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Nếu Khách Hàng đăng ký làm người dùng trên Nền Tảng của Telio
                  bằng tài khoản mạng xã hội của Khách Hàng hoặc liên kết tài
                  khoản Telio với tài khoản mạng xã hội của Khách Hàng hoặc sử
                  dụng một số tính năng phương tiện truyền thông khác của Telio,
                  Telio có thể truy cập dữ liệu cá nhân về Khách Hàng mà Khách
                  Hàng đã tự nguyện cung cấp các nhà cung cấp mạng xã hội theo
                  chính sách của họ và Telio sẽ quản lý dữ liệu cá nhân của
                  Khách Hàng theo Chính Sách Bảo Mật này.
                </li>
              </ul>
              <p className={classes.answerContent_content}>
                <b>3. Mục đích thu thập</b>
              </p>
              <p className={classes.answerContent_content}>
                Telio thu thập Dữ liệu cá nhân chỉ cần thiết nhằm phục vụ cho
                các mục đích:
              </p>
              <ul className={classes.answerContent_listContent}>
                <li className={classes.answerContent_listContentDetail}>
                  Đơn hàng: để xử lý các vấn đề liên quan đến đặt đơn hàng của
                  Khách Hàng;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Duy trì Tài Khoản: để tạo và duy trì tài khoản của Khách Hàng
                  với Telio, bao gồm cả các chương trình khách hàng thân thiết
                  hoặc các chương trình thưởng đi kèm với tài khoản của Khách
                  Hàng;
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Chăm sóc Khách Hàng: bao gồm các phản hồi cho các yêu cầu,
                  khiếu nại và phản hồi của Khách Hàng.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Cá Nhân Hóa: Telio có thể tổ hợp dữ liệu được thu thập để có
                  một cái nhìn hoàn chỉnh hơn về một người tiêu dùng và từ đó
                  cho phép Telio phục vụ tốt hơn với sự cá nhân hóa mạnh hơn ở
                  các khía cạnh, bao gồm nhưng không giới hạn: (i) để cải thiện
                  và cá nhân hóa trải nghiệm của bạn trên Nền Tảng; (ii) để cải
                  thiện các tiện ích, dịch vụ, điều chỉnh chung cho phù hợp với
                  các nhu cầu được cá thể hóa và đi đến những ý tưởng dịch vụ
                  mới; (iii) để phục vụ Khách Hàng với những giới thiệu, quảng
                  cáo được điều chỉnh phù hợp với sự quan tâm của Khách Hàng.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  An Ninh: cho mục đích ngăn ngừa các hoạt động phá hủy tài
                  khoản người dùng của Khách Hàng hoặc các hoạt động giả mạo
                  Khách Hàng.
                </li>
                <li className={classes.answerContent_listContentDetail}>
                  Theo yêu cầu của pháp luật: tùy quy định của pháp luật vào
                  từng thời điểm, Telio có thể thu thập, lưu trữ và cung cấp
                  theo yêu cầu của cơ quan nhà nước có thẩm quyền.
                </li>
              </ul>
              <p className={classes.answerContent_content}>
                <b>4. Thời gian lưu trữ</b>
              </p>
              <p className={classes.answerContent_content}>
                4.1. Thông tin cá nhân của Khách Hàng sẽ được lưu trữ cho đến
                khi Khách Hàng có yêu cầu hủy bỏ hoặc Khách Hàng tự đăng nhập và
                thực hiện hủy bỏ. Trong mọi trường hợp thông tin cá nhân của
                Khách Hàng sẽ được bảo mật trên máy chủ của Nền Tảng.
              </p>
              <p className={classes.answerContent_content}>
                4.2. Telio sẽ ngừng lưu giữ dữ liệu cá nhân Khách Hàng hoặc xóa
                phương tiện mà dữ liệu có thể được liên kết với Khách Hàng, ngay
                khi có cơ sở hợp lý tin rằng việc lưu giữ đó không còn phục vụ
                cho mục đích mà dữ liệu cá nhân đó được thu thập và không còn
                cần thiết cho bất kỳ mục đích pháp lý hoặc kinh doanh nào.
              </p>
              <p className={classes.answerContent_content}>
                <b>5. Bảo mật Dữ liệu cá nhân của Khách Hàng</b>
              </p>
              <p className={classes.answerContent_content}>
                5.1. Để bảo vệ dữ liệu cá nhân của Khách Hàng khỏi sự truy cập,
                thu thập, sử dụng, tiết lộ, xử lý, sao chép, sửa đổi, xử lý, làm
                mất, lạm dụng hoặc rủi ro tương tự, Telio áp dụng các biện pháp
                vận hành, vật lý và kỹ thuật phù hợp như:
              </p>
              <p className={classes.answerContent_content}>
                (a) Hạn chế quyền truy cập vào dữ liệu cá nhân đối với các cá
                nhân yêu cầu quyền truy cập; và
              </p>
              <p className={classes.answerContent_content}>
                (b) Bảo trì các sản phẩm công nghệ để ngăn chặn truy cập máy
                tính trái phép.
              </p>
              <p className={classes.answerContent_content}>
                5.2. Tuy nhiên, Khách Hàng cần lưu ý rằng không có phương thức
                truyền tin qua internet hoặc phương pháp lưu trữ điện tử nào là
                an toàn tuyệt đối. Mặc dù việc bảo mật không thể được đảm bảo
                tuyệt đối, Telio sẽ luôn nỗ lực bảo mật của thông tin của Khách
                Hàng và liên tục kiểm tra và tăng cường các biện pháp bảo mật
                thông tin của Telio.
              </p>
              <p className={classes.answerContent_content}>
                5.3. Mật khẩu của Khách Hàng là chìa khóa cho tài khoản của
                Khách Hàng. Vui lòng sử dụng số, chữ cái và ký tự đặc biệt và
                không chia sẻ mật khẩu Telio của Khách Hàng với bất kỳ ai. Nếu
                Khách Hàng chia sẻ mật khẩu của mình với người khác, Khách Hàng
                sẽ chịu trách nhiệm cho tất cả các hành động được thực hiện dưới
                tên tài khoản của Khách Hàng và các hậu quả từ các hoạt động đó.
                Nếu Khách Hàng mất quyền kiểm soát mật khẩu của mình, Khách Hàng
                có thể mất quyền kiểm soát đáng kể đối với dữ liệu cá nhân của
                mình và các dữ liệu khác được gửi tới Telio. Khách Hàng cũng có
                thể là đối tượng phải chịu các trách nhiệm ràng buộc về mặt pháp
                lý do những hành vi đã được thực hiện nhân danh Khách Hàng. Do
                đó, nếu mật khẩu của Khách Hàng đã bị xâm phạm vì bất kỳ lý do
                nào hoặc nếu Khách Hàng có cơ sở để tin rằng mật khẩu của Khách
                Hàng đã bị xâm phạm, Khách Hàng nên liên hệ ngay với Telio và
                thay đổi mật khẩu của mình.
              </p>
              <p className={classes.answerContent_content}>
                <b>
                  6. Thu hồi sự chấp thuận về việc tiếp tục sử dụng, tiết lộ,
                  lưu trữ Dữ Liệu Cá Nhân
                </b>
              </p>
              <p className={classes.answerContent_content}>
                6.1. Khách Hàng có thể thông báo phản đối của Khách Hàng đối với
                việc sử dụng liên tục và/hoặc tiết lộ thông tin cá nhân của
                Khách Hàng cho bất kỳ mục đích và theo cách thức như đã nêu ở
                trên bất kỳ lúc nào bằng cách liên hệ với Telio theo địa chỉ
                email của Telio bên dưới.
              </p>
              <p className={classes.answerContent_content}>
                6.2. Xin lưu ý rằng nếu Khách Hàng phản đối việc sử dụng và/hoặc
                tiết lộ thông tin cá nhân của Khách Hàng cho các mục đích và
                theo cách thức đã nêu ở trên, tùy thuộc vào bản chất phản đối
                của Khách Hàng, Telio sẽ không tiếp tục cung cấp các sản phẩm
                hoặc dịch vụ của Telio cho Khách Hàng hoặc thực hiện bất kỳ hợp
                đồng nào mà Telio đã giao kết với Khách Hàng. Các quyền hợp pháp
                và các biện pháp khắc phục của Telio được bảo lưu trong trường
                hợp đó.
              </p>
              <p className={classes.answerContent_content}>
                <b>7. Cập nhật thông tin cá nhân của Khách Hàng</b>
              </p>
              <p className={classes.answerContent_content}>
                7.1. Lưu ý rằng dữ liệu cá nhân Khách Hàng cung cấp cho Telio
                phải chính xác và đầy đủ để Khách Hàng tiếp tục sử dụng Nền Tảng
                và để Telio cung cấp Dịch Vụ cho Khách Hàng. Khách Hàng chịu
                trách nhiệm thông báo cho Telio về các thay đổi đối với dữ liệu
                cá nhân của Khách Hàng hoặc trong trường hợp Khách Hàng tin rằng
                dữ liệu cá nhân Telio có về Khách Hàng không chính xác, không
                đầy đủ, sai lệch hoặc hết hạn.
              </p>
              <p className={classes.answerContent_content}>
                7.2. Khách Hàng có thể cập nhật dữ liệu cá nhân của mình bất cứ
                lúc nào bằng cách truy cập tài khoản của Khách Hàng trên Nền
                Tảng.
              </p>
              <p className={classes.answerContent_content}>
                7.3. Telio thực hiện các quy trình để chia sẻ các cập nhật dữ
                liệu cá nhân của Khách Hàng với các bên thứ ba và các bên liên
                kết của Telio, những cá nhân, tổ chức mà Telio đã chia sẻ dữ
                liệu cá nhân của Khách Hàng nếu dữ liệu cá nhân của Khách Hàng
                vẫn cần thiết cho các mục đích nêu trên.
              </p>
              <p className={classes.answerContent_content}>
                <b>8. Truy cập thông tin cá nhân của Khách Hàng</b>
              </p>
              <p className={classes.answerContent_content}>
                8.1. Khách Hàng có thể yêu cầu thông tin về dữ liệu cá nhân của
                Khách Hàng mà Telio đã thu thập hoặc thắc mắc về cách thức mà dữ
                liệu cá nhân của Khách Hàng được Telio sử dụng, tiết lộ, lưu trữ
                hoặc xử lý trong vòng một năm qua. Để thuận tiện cho việc xử lý
                yêu cầu của Khách Hàng, Telio có thể cần phải yêu cầu thêm thông
                tin liên quan đến yêu cầu của Khách Hàng.
              </p>
              <p className={classes.answerContent_content}>
                8.2. Telio bảo lưu quyền tính những chi phí vận hành hợp lý để
                truy xuất hồ sơ dữ liệu cá nhân của Khách Hàng. Trong trường hợp
                đó, Telio sẽ thông báo cho Khách Hàng về chi phí trước khi xử lý
                yêu cầu của Khách Hàng.
              </p>
              <p className={classes.answerContent_content}>
                8.3. Telio sẽ trả lời yêu cầu của Khách Hàng trong thời gian sớm
                nhất có thể. Nếu Telio không thể trả lời yêu cầu của Khách Hàng
                trong vòng hai mươi (20) ngày kể từ ngày Khách Hàng yêu cầu,
                Telio sẽ thông báo cho Khách Hàng bằng văn bản. Nếu Telio không
                thể cung cấp cho Khách Hàng bất kỳ dữ liệu cá nhân nào hoặc thực
                hiện chỉnh sửa theo yêu cầu của Khách Hàng, Telio sẽ thông báo
                cho Khách Hàng về lý do tại sao Telio không thể thực hiện được
                (trừ trường hợp Telio không bắt buộc phải thực hiện theo quy
                định về bảo vệ dữ liệu của pháp luật hiện hành).
              </p>
              <p className={classes.answerContent_content}>
                <b>9. Quyền của Telio trong việc tiết lộ thông tin cá nhân</b>
              </p>
              <p className={classes.answerContent_content}>
                KHÁCH HÀNG XÁC NHẬN VÀ CHẤP THUẬN RẰNG TELIO CÓ QUYỀN TIẾT LỘ
                THÔNG TIN CÁ NHÂN CỦA KHÁCH HÀNG CHO BẤT KỲ CƠ QUAN PHÁP LÝ, CƠ
                QUAN QUẢN LÝ NHÀ NƯỚC, CƠ QUAN CHÍNH PHỦ, CƠ QUAN THUẾ HOẶC CƠ
                QUAN THỰC THI PHÁP LUẬT HOẶC BẤT KỲ CƠ QUAN KHÁC HOẶC CÁC CHỦ SỞ
                HỮU CÓ THẨM QUYỀN LIÊN QUAN NẾU TELIO CÓ CƠ SỞ HỢP LÝ ĐỂ TIN
                RẰNG VIỆC TIẾT LỘ THÔNG TIN CÁ NHÂN CỦA KHÁCH HÀNG LÀ CẦN THIẾT
                ĐỂ THỰC HIỆN BẤT KỲ NGHĨA VỤ, YÊU CẦU HOẶC THỎA THUẬN, BẤT KỂ LÀ
                TỰ NGUYỆN HOẶC BẮT BUỘC, ĐƯỢC XEM NHƯ LÀ KẾT QUẢ CỦA VIỆC HỢP
                TÁC THEO LỆNH, ĐIỀU TRA VÀ/HOẶC YÊU CẦU THEO THẨM QUYỀN CỦA BẤT
                KỲ CÁC CƠ QUAN NÀY. TRONG PHẠM VI PHÁT LUẬT CHO PHÉP, TRONG MỌI
                TRƯỜNG HỢP, KHÁCH HÀNG ĐỒNG Ý KHÔNG THỰC HIỆN BẤT KỲ HÀNH ĐỘNG
                VÀ/HOẶC TỪ BỎ QUYỀN THỰC HIỆN BẤT KỲ HÀNH ĐỘNG NÀO CHỐNG LẠI
                TELIO LIÊN QUAN ĐẾN VIỆC TIẾT LỘ THÔNG TIN CÁ NHÂN TRONG NHỮNG
                TRƯỜNG HỢP NÀY.
              </p>
              <p className={classes.answerContent_content}>
                <b>10. Đơn vị thu thập và quản lý thông tin</b>
              </p>
              <p className={classes.answerContent_content}>
                Công ty TNHH Telio Việt Nam
              </p>
              <p className={classes.answerContent_content}>
                Thành lập và hoạt động theo Giấy chứng nhận đăng ký doanh nghiệp
                số: 0108604744 do Sở Kế hoạch và Đầu tư thành phố Hà Nội cấp
                ngày 28/01/2019.
              </p>
              <p className={classes.answerContent_content}>
                Địa chỉ trụ sở: Tầng 06, Tháp A, Sky City Tower, 88 Láng Hạ, P.
                Láng Hạ, Q. Đống Đa, TP. Hà Nội, Việt Nam.
              </p>
              <p className={classes.answerContent_content}>
                <b>11. Trang Web của Bên thứ ba</b>
              </p>
              <p className={classes.answerContent_content}>
                Nền Tảng có thể chứa các liên kết đến các trang web khác được
                điều hành bởi các bên khác, chẳng hạn như các bên liên kết kinh
                doanh, thương nhân hoặc cổng thanh toán của Telio. Telio không
                chịu trách nhiệm đối với các hoạt động bảo mật của các trang web
                được điều hành bởi các bên khác. Khách Hàng nên kiểm tra các
                chính sách bảo mật hiện hành của các trang web đó để xác định
                cách họ sẽ xử lý bất kỳ thông tin nào họ thu thập từ Khách Hàng.
              </p>
              <p className={classes.answerContent_content}>
                <b>12. Thắc mắc, Kiến nghị hoặc Khiếu nại</b>
              </p>

              <p className={classes.answerContent_content}>
                Nếu Khách Hàng có bất kỳ phản hồi, thắc mắc, kiến nghị hoặc
                khiếu nại nào liên quan đến Chính Sách Bảo Mật này hoặc về các
                phương pháp bảo vệ quyền riêng tư của Telio, vui lòng liên hệ
                với Telio theo địa chỉ email: hotro@telio.vn hoặc qua Hotline:
                1800 6751.
              </p>
              <p className={classes.answerContent_content}>
                Bản Chính Sách Bảo Mật này có hiệu lực kể từ ngày 15 tháng 11
                năm 2019.
              </p>
            </div>
          </QuestionDropdownPolicy>
          <div className={classes.linkContainer}></div>
        </div>
      </div>
    </Layout>
  );
};

export default PolicyPage;
