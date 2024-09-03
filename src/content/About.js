import React, {useState, useEffect, forwardRef } from "react"
import classes_a from "./About.module.css"
import classes from "./Style.module.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


//icone
import velog from '../images/icone/velog_icon.png'; // with import
import github from '../images/icone/github-icon.png'; // with import
import cellphone from '../images/icone/cellphone-line.png'; // with import
import email from '../images/icone/mail-line.png'; // with import

//project screen
import sol_main from '../images/sol_main.png'; // with import
import sol_pw_day_d from '../images/sol_pw_day_d.png'; // with import
import sol_re_inv from '../images/sol_re_inv.png'; // with import
import sol_pw_day_g from '../images/pw_day_g.png'; // with import
import sol_m_login from '../images/sol_m_login.png'; // with import
import sol_m_create from '../images/sol_m_create.png'; // with import
import sol_m_module from '../images/sol_m_module.png'; // with import

import nrems_main from '../images/nrems_main.png'; // with import
import nrems_login from '../images/nrems_login.png'; // with import
import nrems_admin from '../images/nrems_admin.png'; // with import
import nrems_hour from '../images/nrems_sub1.png'; // with import
import nrems_gr from '../images/nrems_sub2.png'; // with import


const About = forwardRef(function About(props, ref) {

  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const slideImages = [
      { url: sol_main, caption: '메인화면'},
      { url: sol_pw_day_d, caption: '하루 발전량 표'},
      { url: sol_re_inv, caption: '인버터 발전량'},
      { url: sol_pw_day_g, caption: '하루 발전량 그래프'},
    ];
   // console.log("windowSize : "+width);
      // slideImages = [
      //   { url: sol_m_login, caption: '메인화면'},
      //   { url: sol_m_create, caption: '하루 발전량 표'},
      //   { url: sol_m_module, caption: '인버터 발전량'},
      // ];
    const slideImages2 = [
      { url: nrems_login, caption: '로그인'},
      { url: nrems_main, caption: '메인화면'},
      { url: nrems_admin, caption: '관리자 모드'},
      { url: nrems_hour, caption: '하루 발전량 차트'},
      { url: nrems_gr, caption: '하루 발전량 그래프'},
      
    ];

    // const slideImages2 = [
    
    //   {
    //     url: sol_m_login,
    //     caption: 'main'
    //   },
    //   {
    //     url: sol_m_create,
    //     caption: 'main'
    //   },
    //   {
    //     url: sol_m_module,
    //     caption: 'main'
    //   },
    // ];
    const nrems_web = "http://www.nrems.co.kr/login.php";
    const nrems_app = "https://play.google.com/store/apps/details?id=kr.co.nrems";

    return(
      <section className={classes.section} ref={ref}>
        <div  className={classes.header}>
          <p className={classes.title}>About</p>
          <p className={classes.sub_title}>기본정보 / 스킬 / 최근프로젝트</p>
        </div>


        <div className={classes.row2}>

          {/* 기본정보 /스킬뱃지 */}
          <div className={classes.box}>
            <div className={classes_a.line}>
              <div className={classes.box_content}>
                {/* <div className={classes_a.name}>방은경</div> */}

                <div className={classes_a.item}>
                  <img src={email} className={classes_a.icon}/>
                  <p>eunkyeong_b@naver.com</p>
                </div>
                 
                <div className={classes_a.item}>
                  <img src={github} className={classes_a.icon}/>
                  <a href="https://github.com/Bang04/Bang04" target="_blank">
                    <p>github 방문하기 </p>
                  </a>
                </div>
                
                <div className={classes_a.item}>
                  <img src={velog} className={classes_a.icon}/>
                  <a href="https://velog.io/@bang04"  target="_blank">
                    <p>velog 방문하기 </p>
                  </a>
                </div>
               
              </div>
            </div>

            <div className={classes_a.line}>
              <div className={classes.box_content}>
                <div className={classes_a.group}>
                  <div className={classes_a.type}>Front-End:</div>
                  <div className={classes.badges}>
                    <div className={classes.badge}>html5</div>
                    <div className={classes.badge}>css3</div>
                    <div className={classes.badge}>javascript</div>
                    <div className={classes.badge}>jquery</div>
                    <div className={classes.badge}>bootstrap</div>
                  </div>
                </div>

                <div className={classes_a.group}>
                  <div className={classes_a.type}>Back-End:</div>
                  <div className={classes.badges}>
                    <div className={classes.badge}>php</div>
                  </div>
                </div>

                <div className={classes_a.group}>
                  <div className={classes_a.type}>Database: </div>
                  <div className={classes.badges}>
                    <div className={classes.badge}>mysql</div>
                  </div>
                </div>

                <div className={classes_a.group}>
                  <div className={classes_a.type}>Studying:</div>
                  <div className={classes.badges}>
                    <div className={classes.badge}>react</div>
                    <div className={classes.badge}>NextJS</div>
                    <div className={classes.badge}>typescript</div>
                    <div className={classes.badge}>git</div>
                  </div>
                </div>

                <div className={classes_a.group}>
                  <div className={classes_a.type}>Experience:</div>
                  <div className={classes.badges}>
                    <div className={classes.badge}>java</div>
                    <div className={classes.badge}>spring</div>
                    <div className={classes.badge}>oracle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* 프로젝트 */}
          {/* 프로젝트1 */}
          <div className={classes.box}>
              <div className={classes_a.line}>
                <Slide>
                  {slideImages.map((slideImage, index)=> (
                      <div key={index}>
                        <div className={classes_a.slide_web} style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                          <span className={classes_a.slide_span}>{slideImage.caption}</span>
                        </div>
                      </div>
                    ))} 
                </Slide>
         
                <div className={classes.box_content}>
                  <div className={classes.title}>솔라리버 태양광 모니터링 Web& QR Scanner APP​​​</div>
                  <div className={classes.desciption}>모듈 발전현황을 모니터링하고 앱을 통해 현장에 설치된 모듈을 QR 코드 스캔하여 등록 후 상태 관리를 한다. </div>
                  <div className={classes.stack}>
                    <p><span>기간</span>2022-08-01 ~ 2023-04-01</p>
                    <p><span>역할</span>web, app 기획, 설계, 개발, 빌드, 배포 경험 (80%)</p>
                    <p><span>기술스택</span></p>
                    <div className={classes.badges}>
                      <div className={classes.badge}>Html</div>
                      <div className={classes.badge}>Css3</div>
                      <div className={classes.badge}>PHP</div>
                      <div className={classes.badge}>JavaScript</div>
                      <div className={classes.badge}>Mysql</div>
                      <div className={classes.badge}>Ajax</div>
                      <div className={classes.badge}>Jquery</div>
                      <div className={classes.badge}>Android</div>
                    </div>

                    <div className={classes.title}>업무성과</div>
                    <p>1. AmChart 를 이용한 데이터 시각봐</p>
                    <p>2. QR 스캐너 라이브러리를 이용한 하이브리드 앱 개발  ​</p>
                    <p>3. Android App 배포 경험</p> 
                  </div>
                </div>
              </div>
          </div>  
          {/* 프로젝트2 */}
          <div className={classes.box}>
            <div className={classes_a.line}>
              <Slide>
                {slideImages2.map((slideImage, index)=> (
                    <div key={index}>
                      <div className={classes_a.slide_m} style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                        <span className={classes_a.slide_span}>{slideImage.caption}</span>
                      </div>
                    </div>
                  ))} 
              </Slide>
         
              <div className={classes.box_content}>
                <div className={classes.title}>REMP 태양광 모니터링 Web& 하이브리드 APP</div>
                <div className={classes.desciption}>통합 모니터링 시스템은 다수의 발전소를 일괄적으로 관리할 수 있는 시스템</div>
                <div className={classes.stack}>
                  <p><span>기간</span>2022-03-01 ~ 2022-06-01</p>
                  <p><span>역할</span>web, app 유지보수 및 배포 경험 (50%)</p>
                  <p><span>기술스택</span></p>
                  <div className={classes.badges}>
                    <div className={classes.badge}>Html</div>
                    <div className={classes.badge}>Css3</div>
                    <div className={classes.badge}>PHP</div>
                    <div className={classes.badge}>JavaScript</div>
                    <div className={classes.badge}>Mysql</div>
                    <div className={classes.badge}>Ajax</div>
                    <div className={classes.badge}>Jquery</div>
                    <div className={classes.badge}>Android</div>
                  </div>
                  <div className={classes.title}>업무성과</div>
                  <p>1. Firebase 클라우드 메시징 푸시 기능​ 개선 ​</p>
                  <p>2. 토큰 생성 API 업데이트</p>
                  <p>3. 레거시 코드 리팩토링(login, webview)</p> 
                
                  <p><span>Web </span>  
                    <button onClick={()=> {window.open(nrems_web)}}  className={classes.visit_small}>Web 방문하기</button>
                  </p>
                  <p><span>App </span>
                    <button onClick={()=> {window.open(nrems_app)}}  className={classes.visit_small}>App Store 방문하기</button>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    )

});

export default About;