// 서브 페이지 뷰엑스 스토어 셋팅 JS - store.js

export default new Vuex.Store({
    // (1) 데이터 셋팅구역:
    state: {
        // gnb 데이터셋업
        gnb: {
            skin: {
                maintit: "핸드&스킨",
                maindesc:"이솝의 바디와 핸드 제품은 효과적인 클렌징, 수분 공급, 퍼스널 케어에 따른 고민 완화 등 일상적일 수 있는 경험을 한층 풍성하게 만들어줍니다.",
                subtit: ["제품 모두 보기", "유형", "사랑받는 제품"],
                dd1: ["핸드크림", "바디", "하이드레이터", "토너", "쉐이빙"],
                dd2: ["중성", "건성", "지성", "복합성"],
                dd3: ["파슬리 씨드 안티 옥시던트 인텐스 세럼", "이그절티드 아이 세럼", "비 트리플 씨 페이셜 밸런싱 젤"],
                imgsrc: "./images/gnb_1.jpg",
                imgtit: "이솝 에센셜 아로마 케어 번들",
                desc: "효과적인 수분 공급, 퍼스널 케어를 경험해보세요.",
            },
            perfume: {
                maintit: "향수",
                maindesc:"이솝 향수는 개발하는 동안 느꼈던 즐거움을 고객들이 사용하면서 만끽할 수 있기를 바라며 만들어졌습니다. 각각의 향수는 플로럴, 프레쉬, 우디, 오퓰런트 계열로 나뉘며, 경우에 따라 두 가지에 속하기도 합니다.",
                subtit: ["제품 모두 보기", "인기 향수", "신제품"],
                dd1: ["플로럴", "프레쉬", "우디", "오퓰런트"],
                dd2: ["글롬", "이더시스", "미라세티", "카르스트","에레미아"],
                dd3: [
                    "글롬 오 드 퍼퓸",
                ],
                imgsrc: "./images/gnb_2.jpg",
                imgtit: "아더토피아 퍼퓸 시리즈",
                desc: "독특한 프래그런스 5종으로 구성된 오 드 퍼퓸 시리즈",
            },
            home: {
                maintit: "홈",
                maindesc: "홈 케어 제품은 침실, 선반, 창가 등에 놓여지며 가정용으로만 생각될 수 있지만 사무실, 호텔 객실, 자동차 등 다양한 환경에서 실내 공간을 한층 풍성하게 가꿔 주는 데에도 적합합니다.",
                subtit: ["제품 모두 보기", "홈 기프트", "사랑받는 제품"],
                dd1: ["인센스", "캔들", "룸스프레이", "문학"],
                dd2: ["애니멀", "룸스프레이 트리오", "아로마틱 룸스프레이", "브라스 오일 버너"],
                dd3: ["포스트-푸-드롭스", "올루스 아로마틱 룸 스프레이", "사라시나 아로마틱 인센스"],
                imgsrc: "./images/gnb_3.jpg",
                imgtit: "매력적인 아로마 3종",
                desc: "대나무 심지가 없는 독특한 인센스 스틱 3종",
            },
            gift: {
                maintit: "선물",
                maindesc: "진심 어린 감사의 마음을 전하기 위한 셀렉션으로, 효과적인 스킨 케어, 퍼스널 향수, 만족감을 주는 홈 케어 제품들이 있습니다.",
                subtit: ["제품 모두 보기", "신제품", "사랑받는 제품"],
                dd1: ["시즈널 기프트 키트", "스킨 케어 키트", "바디&핸드 케어 키트", "트래블"],
                dd2: ["마블러스 멘토", "콘그루어스", "이그니어스"],
                dd3: ["진저 플라이트", "어라이벌", "인더스트리어스"],
                imgsrc: "./images/gnb_4.jpg",
                imgtit: "마블러스 멘토 기프트 키트",
                desc: "소중한 분들에게 관심과 마음을 전하세요.",
            },
            // post: {
            //     maintit: "칼럼",
            //     subtit: ["이솝 칼럼 시리즈", "이솝"],
            //     dd1: [
            //         "이솝 프래그런스 컬렉션의 새로운 장: 글롬 오 드 퍼퓸",
            //         "홈 프래그런스 가이드",
            //         "정원에서의 사색",
            //         "섬세한 눈가 피부 관리법",
            //         "존재의 울림: 이더시스 오 드 퍼퓸",
            //     ],
            //     dd2: ["브랜드스토리", "디자인", "제품"],
            //     // dd3: ["기프트 인기제품 목록입니다", "기프트 인기제품 목록입니다", "기프트 인기제품 목록입니다"],
            //     imgsrc: "./images/post_1.jpg",
            //     imgtit: "내면 세계로의 여정",
            //     desc: "이솝 프래그런스 컬렉션의 새로운 장: 글롬 오 드 퍼퓸",
            // },
        }, ////////// gnb /////////


        //////////////////////////////////////

        // 대분류/중분류 변수
        setsubtit: "",
        setdd1: "",
        setdd2: "",
        setdd3: "",
        
        // thumb박스 변수
        setimgsrc: "",
        settit: "",
        setdesc: "",
        
        // lnb 사용 변수
        setlnb: "",
        catnum: "",

        // 현재 url 변수
        curUrl: "",
        curUrl0: "",
        curUrl1: "",

        // 디테일 기본
        dtname: "",
        dtdata_desc: "",
        dtdata_img: "",
        dtprice: "",
        dtinfo: "",
        dtimg:"",
        dtdata:"",
        // 디테일 상세정보
        dttit:"",
        dtcont:"",


        result: 1,


    }, /////// state 구역 ////////

    // (2) 데이터 변경 메서드구역:
    mutations: {
        // chgNavdt(st, pm) {
        //     //////// 클릭된 gnb 번호로 업데이트하기 //////////////

        //     st.navnum = pm;
        //     console.log("뮤테이션구역 넘어온 값:",st.navnum)
            
        //     ///////////////////////////////////////////////
        // },
        
        getLink(st,pm) {

            // 1. Get방식으로 넘어온 값 받기!
            st.curUrl = location.href;
            // console.log("넘어온 url 주소 ",st.curUrl);
            // console.log(st.curUrl.indexOf("?"));

            // 2. index페이지에선 작동 안하게하기
            if(st.curUrl.indexOf("?") === -1)return;

            // url에서 물음표로 값을 잘라오기 중 뒤엣값[1]
            // split(자를기준문자열) -> 배열에 담긴다!
            st.curUrl = st.curUrl.split("?")[1];
            // // 이퀄(=)로 잘라서 뒤엣값[1] -> (키=값) 중 (값)만!
            st.curUrl = st.curUrl.split("=")[1];
            st.curUrl0 = st.curUrl.split("&")[0];
            st.curUrl1 = st.curUrl.split("&")[1];
            
            // // encodeURIComponent로 변환해서 보냈으므로 
            // // decodeURIComponent로 재변환!
            st.curUrl = decodeURIComponent(st.curUrl);
            st.curUrl0 = decodeURIComponent(st.curUrl0);
            st.curUrl1 = decodeURIComponent(st.curUrl1);
            console.log("넘어온 url 복원값:",st.curUrl,"/",st.curUrl0,"/",st.curUrl1);
        }
    },
}); ///////////// 뷰엑스 인스턴스 /////////////
