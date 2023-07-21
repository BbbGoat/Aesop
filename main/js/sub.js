// 웹&앱 PJ 메인페이지 JS -main.js

window.addEventListener("DOMContentLoaded",()=>{
    
    console.log("로딩완료");
    function chgFixed() {

        const stkimg = document.querySelector(".stkimg");
        const tgbox = document.querySelector(".stkbx");
        const pageL = document.querySelector(".pageL");
        const pagewrap = document.querySelector(".pagewrap");
        const stktxt = document.querySelector(".stktxt");

        
        // 타겟 가로사이즈 변수
        let tg = tgbox.offsetWidth;
        
        // 최초 로딩시 변경
        window.onload = () => {
            // tgChg();
        }

        // 리사이즈시 업데이트
        window.onresize = () => {
            tgChg();
        }

        // 스크롤이벤트
        $(window).on("scroll load", () => {
            // console.log("스크롤");

            // 변수
            let startFix = retVal(tgbox);
            let toplimit = retVal(pageL);
            let botlimit = window.innerHeight - retValB(pagewrap);
            // console.log(botlimit);


            // 스크롤 시작점 - 픽스드박스 시작
            if (startFix < 100 || botlimit < 0) {
                // 이미지박스
                stkimg.style.position = "fixed";
                stkimg.style.top = "90px";
                // 텍스트박스
                stktxt.style.top = "40px";
                stktxt.style.opacity = 1;
                stktxt.style.transition = "opacity .4s ease";
                tgChg();
                
                
                // 상단에서 픽스드 지우기
                if (toplimit > 70) {
                    // 이미지박스
                    stkimg.removeAttribute("style");
                    // 텍스트박스
                    stktxt.style.top = "-100px";
                    stktxt.style.opacity = 0;
                }
                // 하단에서 픽스드 지우기
                else if (botlimit > 0) {
                    // 이미지박스
                    stkimg.style.position = "absolute";
                    stkimg.style.bottom = "30px";
                    stkimg.style.top = "auto";
                }
            } /////////////// if /////////////////

        }); ///////////////// onscroll 이벤트 ////////////////////////


        // 상단 한계값 구하기 함수
        function retVal(x) {
            return x = x.getBoundingClientRect().top;
        }
        
        // 하단 한계값 구하기 함수
        function retValB(x) {
            return x = x.getBoundingClientRect().bottom;
        }


        /********************** 
            사이즈변경함수
        **********************/
        function tgChg() {
            // console.log("사이즈변경")
            tg = tgbox.offsetWidth;
            stkimg.style.width = tg + "px";
        } //////// tgchg //////////////////
        
    } /////////// chgFixed /////////////////////

    // 최초호출
    chgFixed();
    // tgChg();
    
    
});