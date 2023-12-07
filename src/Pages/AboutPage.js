import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import aboutImg from "../../public/images/about-page.jpg";

const AboutPage = () => {
  return (
    <>
      <Header/>
      <div className="about-page">
        <img src="/images/about-page.jpg" alt="about images" />
        <article>
          <div className="title">
            <h2>Giới thiệu</h2>
            <div className="underline"></div>
          </div>
          <p className="description-about-page">
            Bản thân khách hàng, khách hàng sẽ có thể theo đuổi sự thành công
            của công ty. Hãy để thời gian của những kẻ buộc tội người khôn ngoan
            trôi đi, nhưng hãy để họ đau khổ, và họ sẽ nhận được chúng. Bất cứ
            ai, nói. Những người mù quáng vì chối bỏ cuộc sống hay nỗi đau, rơi
            vào sự xu nịnh, thực hiện mối hận thù thường được lựa chọn bởi sự
            thù hận khi chọn một con đường, và hơn thế nữa là ít tự do hơn một ý
            kiến. Kiến trúc sư khôn ngoan có thể theo đuổi nó. Không có điều nào
            trong số này, trừ khi bạn nhìn rõ, thường muốn có toàn bộ con người
            anh ấy, nhưng mọi người thích anh ấy. Từ đó ta buộc tội họ ham vui,
            họ không biết rằng đây là cả cuộc đời.
          </p>
        </article>
      </div>
      <Footer/>
    </>
  );
};

export default AboutPage;
