import React,  { forwardRef } from "react"
import classes from "./Style.module.css"
//import classes from "./Project.module.css"
import blog from '../images/screen_blog.png'; // with import
import Portfolio from '../images/screen_pf.png'; // with import


const Project = forwardRef(function Project(props, ref) {

  const reactPortfolio = "https://portfolio-bek.vercel.app/";
  const gatsbyblog = "https://bang04.github.io/";

    return(
      <section className={classes.section} ref={ref}>
        <div  className={classes.header}>
          <p className={classes.title}>Project</p>
          <p className={classes.subtitle}>React 기반의 개인 프로젝트</p>
        </div>

        <div className={classes.row2}>
          <div className={classes.column}>
              <div className={classes.box}>
                <figure>
                  <img src={blog}  className={classes.thumbnail}/>
                </figure>
              </div>

              <div className={classes.box_content}>
                <button onClick={()=> {window.open(gatsbyblog)}} className={classes.visit_small}>Gatsby 블로그 방문하기</button>
                <div className={classes.title}>Gatsby blog</div>
                <div className={classes.desciption}>마크다운 파일을 활용한 gatsby 프레임워크 블로그</div>
                <div className={classes.stack}>
                  <div className={classes.title}>기능</div>
                  <p><span>1.검색</span>: 검색어가 제목과 내용에 포함된 경우 조회</p>
                  <p><span>2.카테고리</span>: 카테고리별 목록</p>
                  <p><span>3.태그</span> : 해당되는 태그 포함된 게시글 목록</p>
                  <p><span>4.반응형웹 </span> : 웹과 모바일 최적화 </p>
      
                  <div className={classes.title}>기술스택</div>
                  <div className={classes.badges}>
                    <div className={classes.badge}>Html</div>
                    <div className={classes.badge}>Css3</div>
                    <div className={classes.badge}>React</div>
                  </div>
                  {/* 반응형 웹 
                  라이트/다크 모드
                  이메일 전송 */}
               
              </div>
            </div>
          </div>
          
          <div className={classes.column}>
              <div className={classes.box}>
                <figure>
                  <img src={Portfolio}  className={classes.thumbnail}/>
                </figure>
              </div>
              <div className={classes.box_content}>
                <button onClick={()=> {window.open(reactPortfolio)}}  className={classes.visit_small}>React Protfolio 방문하기</button>
                <div className={classes.title}>React Portfolio</div>
                <div className={classes.desciption}>리액트 기반의 포트폴리오</div>
                <div className={classes.stack}>
                
                
                  <div className={classes.title}>기능</div>
                  <p><span>1.메뉴 슬라이딩</span> : useRef() 이용한 스크롤 이동</p>
                  <p><span>2.메인 타이핑 효과</span> : Typewriter 사용</p>
                  <p><span>3.반응형웹 </span> : 웹과 모바일 최적화 </p>
          
                  <div className={classes.title}>기술스택</div>
                  <div className={classes.badges}>
                    <div className={classes.badge}>Html</div>
                    <div className={classes.badge}>Css3</div>
                    <div className={classes.badge}>React</div>
                  </div>
                  
                
              </div>
            </div>

          </div>

          
        </div> 
      </section>
    )

});

export default Project;