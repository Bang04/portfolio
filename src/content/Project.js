import React from "react"
import classes from "./Style.module.css"
import classes_p from "./Project.module.css"
import blog from '../images/screen_blog.png'; // with import
import Portfolio from '../images/screen_pf.png'; // with import

function Project(){
  const url = "https://bang04.github.io/";

    return(
      <section className={classes.section}>
          <div  className={classes.header}>
            <p className={classes.title}>Project</p>
            <p className={classes.subtitle}>프로젝트 모음</p>
          </div>

          <div className={classes.columns}>
            <div className={classes_p.column}>
                <div className={classes_p.box}>
                  <figure>
                    <img src={blog}  className={classes_p.thumbnail}/>
                  </figure>
                </div>
                <div className={classes_p.box}>
                  <div className={classes_p.title}>Gatsby blog</div>
                  <div className={classes_p.desciption}>마크다운 파일을 활용한 gatsby 프레임워크 블로그</div>
                  <div className={classes_p.stack}>
                  
                  
                    <div className={classes_p.title}>기능</div>
                    <p><span>검색</span>: 검색어가 제목과 내용에 포함된 경우 조회</p>
                    <p><span>카테고리</span>: 카테고리별 목록</p>
                    <p><span>태그</span> : 해당되는 태그 포함된 게시글 목록</p>
                    <p><span>반응형웹 </span> : 웹과 모바일 최적화 </p>
                    <div className={classes_p.title}>기술</div>
                  <p>html5</p>
                  <p>css3</p>
                  <p>react</p>
                    {/* 반응형 웹 
                    라이트/다크 모드
                    이메일 전송 */}
                  <button onClick={()=> {window.open(url)}} >GatsbyBlog 방문</button>
                  
                </div>
              </div>

            </div>
            <div className={classes_p.column}>
                <div className={classes_p.box}>
                  <figure>
                    <img src={Portfolio}  className={classes_p.thumbnail}/>
                  </figure>
                </div>
                <div className={classes_p.box}>
                  <div className={classes_p.title}>React Portfolio</div>
                  <div className={classes_p.desciption}>리액트 기반의 포트폴리오</div>
                  <div className={classes_p.stack}>
                  
                  
                    <div className={classes_p.title}>기능</div>
                    <p><span>검색</span>: 검색어가 제목과 내용에 포함된 경우 조회</p>
                    <p><span>카테고리</span>: 카테고리별 목록</p>
                    <p><span>태그</span> : 해당되는 태그 포함된 게시글 목록</p>
                    <p><span>반응형웹 </span> : 웹과 모바일 최적화 </p>
                    <div className={classes_p.title}>기술</div>
                      <p>html5</p>
                      <p>css3</p>
                      <p>react</p>
                    <button onClick={()=> {window.open(url)}} >GatsbyBlog 방문</button>
                  
                </div>
              </div>

            </div>
          </div> 
    </section>
    )
}

export default Project;