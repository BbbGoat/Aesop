const detailData = {
    detailarea: `
        <div class="dt_comp">
            <!-- 여기부터 컴포넌트로! -->
            <div class="detailbx">

                <!-- detail_section1 -->
                <div class="dtsec1">
                    <!-- 1. 제품정보 영역 -->
                    <div class="detail_info">
                        <!-- 주요정보 -->
                        <div class="dt_tit">
                            <small>category</small>
                            <h3>제품명 들어가는 란 제품명 들어가는 란</h3>
                            <span>10000₩</span>
                        </div>
                        <!-- 서브정보 -->
                        <ul class="dt_subtit">
                            <li class="on"><a href="#">사용법</a></li>
                            <li class="separator"></li>
                            <li><a href="#">향</a></li>
                        </ul>
                        <div class="dt_desc">
                            <p>
                                사랑하는 사람과 함께 감사한 분과 함께 시작하는 지구를 위한 제로웨이스트 라이프
                            </p>
                        </div>
                        
                    </div>
                    <!-- 2. 이미지 영역(대표이미지 스와이퍼) -->
                    <div class="detail_img">
 
                        <!-- 스와이퍼 -->
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="./images/cat_perfume.jpg" alt="상세이미지"></div>
                                <div class="swiper-slide"><img src="./images/cat_hair.jpg" alt="상세이미지"></div>
                                <div class="swiper-slide"><img src="./images/cat_skin.jpg" alt="상세이미지"></div>
                            </div>
                            <div class="swiper-scrollbar"></div>
                        </div>

                    </div>
                    <!-- 3. 구매 인터페이스 영역 -->
                    <div class="detail_buy">
                        <div class="buyarea">
                            <!-- 수량선택 -->
                            <tbody>
                                <tr>
                                    <td>
                                        <span class="quantity">
                                            <a href="#" class="qty-down">
                                                <span class="minus">-</span>
                                            </a>
                                            <input id="quantity" name="quantity_opt[]" value="1" type="text">
                                            <a href="#" class="qty-up">
                                                <span class="plus">+</span>
                                            </a>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                            <!-- 가격란 -->
                            <div class="totalprice">
                                <span class="total">
                                    <strong>10000₩</strong>
                                </span>
                            </div>
                            <!-- 구매버튼 -->
                            <div class="dtbtn crtbtn">
                                <a href="#"><span>CART</span></a>
                                <a href="#"><span>BUY</span></a>
                            </div>
                            <div class="dtbtn nPay">
                                <a href="#"><img src="https://aromatica.co.kr/layout/basic/img/icon/icon_npay.svg" alt="네이버페이"></a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- detail_section2 -->
                <div class="dtsec2">
                    <div class="detail_desc">
                        <div class="left">
                        </div>
                        <div class="right">
                        </div>
                    </div>
                </div>
            </div>
            <!-- 여기까지! -->
        </div>
    `,
}

export default detailData;