import React from "react"
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
import remp_login from '../images/rem_login.png'; // with import
import remp_main from '../images/remp_main.png'; // with import
import remp_index from '../images/remp_index.png'; // with import
import remp_hour from '../images/remp_hour.png'; // with import

function About(){
  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: '100% 100%',
    height: '450px',
    backgroundRepeat: 'no-repeat'
    
  }

  const slideImages = [
    { url: sol_main, caption: '메인화면'},
    { url: sol_pw_day_d, caption: '하루 발전량 표'},
    { url: sol_re_inv, caption: '인버터 발전량'},
    { url: sol_pw_day_g, caption: '하루 발전량 그래프'},
  ];
  const slideImages2 = [
    { url: remp_login, caption: '메인화면'},
    { url: remp_main, caption: '하루 발전량 표'},
    { url: remp_index, caption: '인버터 발전량'},
    { url: remp_hour, caption: '하루 발전량 그래프'},
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

  
    return(
      <section className={classes.section}>
          <div  className={classes.header}>
            <p className={classes.title}>About</p>
            <p className={classes.sub_title}>간략한 소개</p>
          </div>
          <div className={classes.box_title}>소개</div>
          <div className={classes.box}>
              <div className={classes.box_content}>
                <div className={classes.name}>방은경</div>
                <div className={classes.box_row_2}>
                  <div><img src={cellphone} className={classes.icon}/>010.4122.0403</div>
                  <div><img src={email} className={classes.icon}/>eunkyeong_b@naver.com</div>
                  <div><img src={github} className={classes.icon}/><a href="https://github.com/Bang04/Bang04" target="_blank">github 방문하기</a></div>
                  <div><img src={velog} className={classes.icon}/><a href="https://velog.io/@bang04"  target="_blank">velog 방문하기</a> </div>
                </div>
               
               <div className={classes.box_col_1}>
                  <div><b>-</b> 정보처리기사 최종합격</div>
                  <div><b>-</b> 에이콘 아카데미 프론트엔드 양성과정 수료</div>
                  <div><b>-</b> 세종사이버대학교  졸업 </div>
                </div>
              
             </div>
          </div>

          <div className={classes.box_title}>스킬</div>
          <div className={classes.box}>
            
            <div  className={classes.box_cotent}>
              <div className={classes_a.group}>
                <div className={classes_a.type}>Front-End:</div>
                <div className={classes_a.badges}>
                  <div className={classes_a.badge}>html5</div>
                  <div className={classes_a.badge}>css3</div>
                  <div className={classes_a.badge}>javascript</div>
                  <div className={classes_a.badge}>jquery</div>
                  <div className={classes_a.badge}>bootstrap</div>
                </div>
              </div>

              <div className={classes_a.group}>
                <div className={classes_a.type}>Back-End:</div>
                <div className={classes_a.badges}>
                  <div className={classes_a.badge}>php</div>
                </div>
              </div>

              <div className={classes_a.group}>
                <div className={classes_a.type}>Database: </div>
                <div className={classes_a.badges}>
                  <div className={classes_a.badge}>mysql</div>
                </div>
              </div>

              <div className={classes_a.group}>
                <div className={classes_a.type}>Studying:</div>
                <div className={classes_a.badges}>
                  <div className={classes_a.badge}>react</div>
                  <div className={classes_a.badge}>NextJS</div>
                  <div className={classes_a.badge}>typescript</div>
                  <div className={classes_a.badge}>git</div>
                </div>
              </div>

              <div className={classes_a.group}>
                <div className={classes_a.type}>Experience:</div>
                <div className={classes_a.badges}>
                  <div className={classes_a.badge}>java</div>
                  <div className={classes_a.badge}>spring</div>
                  <div className={classes_a.badge}>oracle</div>
                </div>
              </div>
          
            </div>
          </div>

          <div className={classes.box_title}>최근 프로젝트</div>
          <div className={classes.box}>            
            <div className={classes_a.pj}>
              <div className={classes_a.pj_title}>솔라리버 태양광 모니터링 Web& QR Scanner APP​​​​</div>
              <div >
                <Slide>
                  {slideImages.map((slideImage, index)=> (
                      <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                          <span style={spanStyle}>{slideImage.caption}</span>
                        </div>
                      </div>
                    ))} 
                </Slide>
                </div>
              <div className={classes_a.pj_content}>
                <div><span className={classes_a.category}>기간</span>2022-08-01 ~ 2023-04-01</div>
                <div><span className={classes_a.category}>담당 역할</span>web, app 기획, 설계, 개발, 빌드, 배포 경험 (80%)​</div>
                <div><span className={classes_a.category}>기술 스택 </span>PHP , JavaScript , Mysql, Ajax, Jquery ,Android​</div>
                <div><span className={classes_a.category}>업무성과</span>기획, 퍼블리싱, 구현, 배포, 현장에서 어플 사용</div>
              </div>
            </div>

            <div className={classes_a.pj}>
              <div className={classes_a.sub_title}>REMP 태양광 모니터링 Web& 하이브리드 APP​​​​​​​​</div>
              <div>
              <Slide>
                  {slideImages2.map((slideImage, index)=> (
                      <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                          <span style={spanStyle}>{slideImage.caption}</span>
                        </div>
                      </div>
                    ))} 
                </Slide>
              </div>
              <div >
                <div><span className={classes_a.category}>기간</span>2022-03-01 ~ 2022-06-01</div>
                <div><span className={classes_a.category}>담당 역할</span>web, app 유지보수 및 배포 경험 (50%)​</div>
                <div><span className={classes_a.category}>기술 스택 </span>PHP , JavaScript , Mysql, Ajax, Jquery,Android​</div>
                <div><span className={classes_a.category}>업무성과</span>
                  <p>1. Firebase 클라우드 메시징 푸시 기능​ 개선 ​</p>
                  <p>2. 토큰 생성 API 업데이트</p>
                  <p>3. 레거시 코드 리팩토링(login, webview)</p>
                </div>
                <div><span className={classes_a.category}>web : </span>http://www.nrems.co.kr/login.php</div>
                <div><span className={classes_a.category}>app:</span>https://play.google.com/store/apps/details?id=kr.co.nrems&pcampaignid=web_share</div>
              </div>
            </div>
          </div>

     
      </section>
    )
}

export default About;