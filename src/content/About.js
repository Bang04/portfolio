import React from "react"
import classes_a from "./About.module.css"
import classes from "./Style.module.css"

function About(){
    return(
      <section className={classes.section}>
          <div  className={classes.header}>
            <p className={classes.title}>About</p>
            <p className={classes.sub_title}>간략한 소개</p>
          </div>
          <div className={classes.box}>
              <div className={classes.box_title}>소개</div>

              <div>
                <div><span className={classes_a.sub_title}>방은경</span>010.4122.0403</div>
                <div><span className={classes_a.sub_title}>git :</span> https://github.com/Bang04/Bang04</div>
                <div><span className={classes_a.sub_title}>velog :</span>https://velog.io/@bang04/posts </div>
                <div><span className={classes_a.sub_title}>email :</span> eunkyeong_b@naver.com</div>
                <div><span className={classes_a.sub_title}>학력</span> 세종사이버대학교 (4년) 소프트웨어공학과 2022.10  졸업 </div>
                <div><span className={classes_a.sub_title}>자격증</span> 정보처리기사 최종합격</div>
                <div><span className={classes_a.sub_title}>교육</span> 에이콘 아카데미 프론트엔드 양성과정 수료</div>
             </div>
              
          </div>


          <div className={classes.box}>
            <div className={classes.box_title}>스킬</div>
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

          <div className={classes.box}>
            <div className={classes.box_title}>최근 프로젝트</div>
            <div className={classes_a.pj}>
              <div className={classes_a.pj_title}>솔라리버 태양광 모니터링 Web& QR Scanner APP​​​​</div>
              <div className={classes_a.pj_content}>
                <div><span className={classes_a.category}>기간</span>2022-08-01 ~ 2023-04-01</div>
                <div><span className={classes_a.category}>담당 역할</span>web, app 기획, 설계, 개발, 빌드, 배포 경험 (80%)​</div>
                <div><span className={classes_a.category}>기술 스택 </span>PHP , JavaScript , Mysql, Ajax, Jquery ,Android​</div>
                <div><span className={classes_a.category}>업무성과</span>기획, 퍼블리싱, 구현, 배포, 현장에서 어플 사용</div>
              </div>
            </div>

            <div className={classes_a.pj}>
              <div className={classes_a.sub_title}>REMP 태양광 모니터링 Web& 하이브리드 APP​​​​​​​​</div>
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