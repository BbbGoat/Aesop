// 스토어 불러오기
import store from "./store.js";
// 페이지 데이터
import footData from "./temData/footerData.js";
import detailData from "./temData/detailData.js";
// 더미 데이터들
import skinData from "./gdsData/skinData.js";
import perfumeData from "./gdsData/perfumeData.js";
import homeData from "./gdsData/homeData.js";
import giftData from "./gdsData/giftData.js";
// 디테일 더미 데이터
import dtimgData from "./gdsData/detailImg.js";

/***************************************************** 
    뷰 컴포넌트로 데이터 셋업하기
*****************************************************/
// [1] 뷰컴포넌트 - 카테고리
Vue.component("category-comp",{
    template: `
    <ul class="catbx">
        <li v-for="(v,i) in $store.state.gnb" :key="i">
            <a href="#" v-on:click="chgData(i)">{{v['maintit']}}</a>
        </li>
        <sub-comp></sub-comp>
    </ul>
    `,
    data() {
        return {
        }
    },
    methods: {
        // v-on 클릭시 gnb sub-comp 데이터 변경 발생
        chgData(parm) {
            event.preventDefault();

            // gnb에서 파라미터 받아오기
            store.state.lnbsrc = parm;            

            // [ 업데이트!! ]
            // thumb박스
            store.state.setimgsrc = store.state.gnb[parm].imgsrc;
            store.state.settit = store.state.gnb[parm].imgtit;
            store.state.setdesc = store.state.gnb[parm].desc;

            // dd박스
            store.state.setsubtit1 = store.state.gnb[parm].subtit[0];
            store.state.setsubtit2 = store.state.gnb[parm].subtit[1];
            store.state.setsubtit3 = store.state.gnb[parm].subtit[2];
            store.state.setdd1 = store.state.gnb[parm].dd1;
            store.state.setdd2 = store.state.gnb[parm].dd2;
            store.state.setdd3 = store.state.gnb[parm].dd3;
        }
    }
}); ///////////////// Vue 컴포넌트 ////////////////////

// [1-2] 뷰컴포넌트 - 카테고리 서브영역
Vue.component("sub-comp",{
    template: `
    <div class="subbx">
        <div class="thumb">
            <img v-bind:src="$store.state.setimgsrc" alt="썸네일">
            <h5 v-text="$store.state.settit"></h5>
            <span v-text="$store.state.setdesc"></span>
        </div>
        <dl class="sub">
            <dt class="all" v-on:click="linksys($store.state.lnbsrc,'제품 모두 보기')"><a href="#" v-text="$store.state.setsubtit1"></a></dt>
            <dd v-for="(v,n) in $store.state.setdd1" :key="n" v-on:click="linksys($store.state.lnbsrc,v)"><a href="#">{{v}}</a></dd>
        </dl>
        <dl class="sub">
            <dt><a href="#" v-text="$store.state.setsubtit2"></a></dt>
            <dd v-for="(v,n) in $store.state.setdd2"><a href="#">{{v}}</a></dd>
            </dl>
        <dl class="sub">
            <dt><a href="#" v-text="$store.state.setsubtit3"></a></dt>
            <dd v-for="(v,n) in $store.state.setdd3"><a href="#">{{v}}</a></dd>
        </dl>
    </div>
    `,
    methods: {
        linksys(gnb,src) {
            // 링크시스템
            location.href = "sub.html?cat=" + encodeURIComponent(gnb) +'&'+ encodeURIComponent(src);
        },
    },
}); //////////////////// Vue 컴포넌트 ///////////////////////


// [2] 뷰컴포넌트 - 푸터
Vue.component("foot-comp",{
    template: footData.footarea,
}); //////////////////// Vue 컴포넌트 ///////////////////////


// [3] 뷰컴포넌트 - 서브페이지 상품
Vue.component("goods-comp",{
    template: `
    <section>
        <div class="container">
            <div class="pagewrap" v-on="initSetSubSrc()">
                <!-- 상단영역 -->
                <div class="product_top">
                    <div class="titbx">
                        <!-- 타이틀 -->
                        <div class="cate_main_title">
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <!-- 스티키박스 영역 -->
                <div class="clearfix">
                    <div class="pageL">
                        <div class="stkbx">
                            <div class="stkimg">
                                <img v-bind:src="'./images/cat_'+$store.state.curUrl0+'.jpg'" alt="카테고리배너">
                                <div class="stktxt">
                                    <h4 v-text="titSet()"></h4>
                                    <span>스킨케어 모두보기</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pageR">
                        <div class="inner">                                    
                            <div class="menuarea">
                                <div class="menu_wrap">
                                    <h3>카테고리</h3>
                                    <dl class="menu">
                                        <dd class="on" v-on:click="setCatnum('전체보기')"><a href="#">제품 모두 보기</a></dd>
                                        <dd v-for="(v,n) in $store.state.setlnb" v-on:click="setCatnum(n)"><a href="#">{{v}}</a></dd>
                                    </dl>
                                </div>
                            </div>
                            <!-- 일반상품 -->
                            <div class="product_wrap">
                                <div class="prdList">
                                    <!-- 상품리스트 -->
                                    <div class="gridbox" v-for="(v,i) in prdData[dataNum()]" :key="i" v-if="v.catnum === $store.state.catnum || $store.state.catnum === '전체보기'">
                                            <a href="#" v-on:click.prevent="getData(prdData[dataNum()][i])">
                                            <div class="prd_thumb">
                                                <div class="prdImg">
                                                    <img v-bind:src="prdData[dataNum()][i].prdImg" alt="prdimage">
                                                </div>
                                            </div>
                                            </a>
                                            <div class="description">
                                                <!-- 주요정보: 상품명/용량/가격 -->
                                                <div class="pdInfo">
                                                    <a href="#">
                                                        <h5 class="pdInfo-name" v-text="prdData[dataNum()][i].pdInfo['name']"></h5>
                                                        <div class="pdInfo-info">
                                                            <span v-text="prdData[dataNum()][i].pdInfo['info']"></span>
                                                            <span class="separator">/</span>
                                                            <span>{{numberWithCommas(prdData[dataNum()][i].pdInfo['price'])}}₩</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <!-- 서브정보: 디테일 정보 -->
                                                <div class="pdDetail">
                                                    <ul class="pdDetail-list">
                                                        <li class="pdDetail-listItem" v-for="(v,n) in listCnt">
                                                            <div class="pdDetail-title" v-text="prdData[dataNum()][i].pdDetail.title[n]"></div>
                                                            <div class="pdDetail-content" v-text="prdData[dataNum()][i].pdDetail.content[n]"></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        <div class="btn_wrap" v-on:click="addCart(prdData[dataNum()][i].data)">
                                            <div class="btn fill">CART</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 여기부터 디테일페이지! -->
        <div class="dt_comp">
            <div class="detailbx">
                <!-- detail_section1 -->
                <div class="dtsec1">
                    <!-- 1. 제품정보 영역 -->
                    <div class="detail_info">
                        <!-- 주요정보 -->
                        <div class="dt_tit">
                            <small v-text="$store.state.gnb[$store.state.curUrl0].maintit">category</small>
                            <h3 v-text="$store.state.dtname">제품명 들어가는 란 제품명 들어가는 란</h3>
                            <span v-text="$store.state.dtdata_desc"></span>
                        </div>
                        <!-- 서브정보 -->
                        <ul class="dt_subtit" v-for="(v,cnt) in 2">
                            <li class="on"><a href="#" v-text="$store.state.dttit[cnt]">사용법</a></li>
                            <div class="dt_desc">
                                <p v-text="$store.state.dtcont[cnt]">
                                    사랑하는 사람과 함께 감사한 분과 함께 시작하는 지구를 위한 제로웨이스트 라이프
                                </p>
                            </div>
                        </ul>
                        
                    </div>
                    <!-- 2. 이미지 영역(대표이미지 스와이퍼) -->
                    <div class="detail_img">
 
                        <!-- 스와이퍼 -->
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img v-bind:src="$store.state.dtimg" alt="썸네일 대표이미지"></div>
                                <div class="swiper-slide" v-for="(v,n) in 2"><img v-bind:src="$store.state.dtdata_img[n]" alt="썸네일 상세이미지"></div>
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
                                            <a href="#" class="qty-down" v-on:click.prevent="minusBtn()">
                                                <span class="minus">-</span>
                                            </a>
                                            <input id="quantity" name="quantity_opt[]" value="1" type="text" v-on:click="calcFn()">
                                            <a href="#" class="qty-up" v-on:click.prevent="plusBtn()">
                                                <span class="plus">+</span>
                                            </a>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                            <!-- 가격란 -->
                            <div class="totalprice">
                                <span class="total">
                                    <strong>{{numberWithCommas(Number($store.state.dtprice)*($store.state.result))}}₩</strong>
                                </span>
                            </div>
                            <!-- 구매버튼 -->
                            <div class="dtbtn crtbtn" v-on:click.prevent="">
                                <a href="#"><span>CART</span></a>
                                <a href="#"><span>BUY</span></a>
                            </div>
                            <div class="dtbtn nPay" v-on:click.prevent="closeFn()">
                                <a href="#">CLOSE
                                <i class="fa-solid fa-xmark"></i>
                                </a>
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
        </div>
    </section>
    `,
    data() {
        return {
            // 외부 더미 데이터들
            prdData: [skinData,perfumeData,homeData,giftData],
            // 리스트 갯수 변수
            listCnt: 2,
            // 디테일 세부이미지 더미 데이터
            dtimgData: dtimgData,
        }
    },

    methods: {
        // 카트 추가 메서드
        addCart(data) {
            console.log("해당제품 카트에 추가 시키기:", data, skinData[data]);

            // 뱉어내기
            return skinData[data]
        },
        // 정규식함수(숫자 세자리마다 콤마해주는 기능)
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        // lnb 클릭시 v-if 조건값 설정하는 메서드
        setCatnum(num) {
            // console.log("setCatnum num전달값:",num);
            store.state.catnum = num;
        },
        // 서브페이지 최상위 경로 설정해주는 함수
        initSetSubSrc() {
            // 각 카테고리별 lnb 대분류 경로 설정
            store.state.setlnb = store.state.gnb[store.state.curUrl0].dd1;
        },
        // url 읽어와서 카테고리마다 고유넘버 적용시키고 결과값으로 보내기
        dataNum(){
            let result = "";
            let cat = store.state.curUrl0;

            // 분기시키기
            switch(cat) {
                case cat = "skin" : result = "0"; break;
                case cat = "perfume" : result = "1"; break;
                case cat = "home" : result = "2"; break;
                case cat = "gift" : result = "3"; break;
            }
            
            // 분기한 결과값 뱉어내기!
            return result;
        },
        titSet() {
            // left영역 상단타이틀 변경
            let leftTit = $(".cate_main_title > h3");
            let stkTit = $(".stktxt > h4");
            let subTit = $(".cate_main_title > p");

            let pm = store.state.curUrl0;
            let chgtit = store.state.gnb[pm].maintit
            let chgsubtit = store.state.gnb[pm].maindesc
            // console.log(chgtit)
            
            // 타이틀 셋팅!
            leftTit.text(chgtit);
            stkTit.text(chgtit);
            // 서브타이틀 셋팅!
            subTit.text(chgsubtit);   
        },
        getData(pm) {

            // [ 스토어 전역변수에 업데이트! ]
            
            // 1. 기본정보 데이터
            store.state.dtname = pm.pdInfo['name'];
            store.state.dtprice = pm.pdInfo['price'];
            store.state.dtinfo = pm.pdInfo['info'];
            store.state.dtimg = pm.prdImg;
            // data는 상세이미지 찾아가는 용도로 쓰는 중분류 데이터임!! 아래와 순서조심!
            store.state.dtdata = pm.data; // 상품 데이터명
            store.state.dtdata_desc = dtimgData[store.state.dtdata]['desc'];
            store.state.dtdata_img = dtimgData[store.state.dtdata]['img'];

            // 2. 설명데이터
            store.state.dttit = pm.pdDetail['title'];
            store.state.dtcont = pm.pdDetail['content'];

            // 디테일박스 열기
            $(".dt_comp").css({visibility:"visible",opacity:1,});     
            
        },
        closeFn(){
            // 박스닫기
            $(".nPay").click((e)=>{
                $(".dt_comp").css({visibility:"hidden",opacity:0});
                
                // 초기화
                store.state.result = 1;
                $("#quantity").val(1);
            });
        },
        
        // 수량증가 총결제액 계산함수
        calcFn() {

            $("#quantity").keyup(function(){
                // 입력된 값
                let result = $(this).val();

                if (result === "") return;

                if (isNaN(result) || result < 1 || result === "" || result.indexOf(".") !== -1) {
                    // 초기화!
                    $(this).val(1);
                }
                else {
                    if (result >= 100) {
                        alert("대량구매는 유선상으로 문의바랍니다. \nAesop Tel:123-4567")
                        result = 1;
                    }
                    // 숫자 앞에 0 넣으면 없애기
                    $(this).val(Number(result));
                }

                // 최종출력!!
                store.state.result = Number(result);
                
                $("#quantity").blur(function(){
                    if($(this).val().trim() === ""){
                        $(this).val(1);
                        store.state.result = 1;
                    }
                });
            });
        },
        // 더하기버튼
        plusBtn() {
            let num = $("#quantity").val();
            num++;
            // 업데이트
            $("#quantity").val(num);
            store.state.result = num;
        },
        minusBtn(){
            let num = $("#quantity").val();
            num--;
            if (num === 0) return;
            // 업데이트
            $("#quantity").val(num);
            store.state.result = num;
        }
    }
}); /////////////////// Vue 컴포넌트 ////////////////////////


// [2] 뷰컴포넌트 - 푸터
Vue.component("detail-comp",{
    template: detailData.detailarea,
}); //////////////////// Vue 컴포넌트 ///////////////////////






/********************************************* 
    뷰인스턴스 생성영역
*********************************************/

// [1] 뷰인스턴스 - 헤더
new Vue({
    el: "#top",
    store,
    data: {},
    methods: {},
    
    created() {
        store.commit('getLink')
    },
    
    mounted() {

        // 부드러운 스크롤 JS 호출!
        startSS();

        // 클릭시 li에 클래스 on
        $(".catbx li > a").click(function(e){
            e.preventDefault();
            $(this).parent().addClass("on")
            .siblings().removeClass("on");
            $(".top").addClass("on");
            $(".thumb").fadeIn(400);
        }) ///////// click ////////////
        
        // 마우스아웃시 전체 클래스 빼기
        $("nav").mouseleave(function(){
            $(".top").removeClass("on");
            $(".catbx li").removeClass("on");
            $(".thumb").fadeOut(400);
        }); ///////// mouseout //////////


        // 스크롤이벤트
        $(window).on("scroll",function(){
            // 스크롤시작!
            let scStart = $(window).scrollTop();
            // console.log(scStart)

            if (scStart > 0) {
                $("nav").addClass("scl");
            }
            else if (scStart <= 0) {
                // console.log("원상태");
                $("nav").removeClass("scl");
            }
        }); /////// scroll 이벤트 ///////

    } ////////// mounted ///////////
}); ////////////////// Vue 인스턴스 //////////////////////


// [2] 뷰인스턴스 - 서브메인
new Vue({
    el: "#cont",
    store,
    methods: {},
    
    mounted() {
        
        // 서브페이지 초기데이터 셋팅
        function initCatnum() {
            
            // lnb 텍스트 저장 변수
            const ary = $(".menu dd");
            // 각 변수에 셋팅하기
            ary.each(function(idx,ele){
                // url 경로 일치할 경우 클릭이벤트 강제발생 / 클래스 on 넣기/빼기
                if($(ele).text() === store.state.curUrl1) {
                    // 1. 트리거 셋팅
                    $(this).trigger("click")
                    .addClass("on").siblings().removeClass("on");
                    
                    // 2. 왼쪽설명박스 서브타이틀 변경
                    $(".stktxt > span").text(store.state.curUrl1);
                }
            });
        } ////////////// initCatnum 함수 ////////////////
        // 최초호출!
        initCatnum();
        

        // lnb 메뉴 클릭시 클래스on 추가/제거
        $(".menu dd").click(function(e){
            e.preventDefault();
            $(this).addClass("on").siblings().removeClass("on");
            
            let menuTxt = $(this).text();
            $(".stktxt > span").text(menuTxt);
            
            // !!! URL 강제 변경하기
            // 변경이유 : SPA 변경시 전달변수 내용일치 -> 새로고침시 현재변경로딩!
            history.pushState(null,null,"sub.html?cat="+store.state.curUrl0+"&"+menuTxt);
        }); ////////// click ///////////


    } ////////////// mounted ////////////////////
}); ////////////////// Vue 인스턴스 //////////////////////


// [3] 뷰인스턴스 - 푸터
new Vue({
    el:"#info",
    store,
    data: {},
}); ////////////////// Vue 인스턴스 //////////////////////
