import React from "react"
import classes from './Project.module.css';

import blog from '../images/screen_blog.png'; // with import
function Project(){
    return(
      <section class="hero is-small">
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">Project</p>
            <p class="subtitle">React 기반의 프로젝트</p>
          </div>
        </div>

        <div className={classes.columns}>

          <div className={classes.column}>
            <div className={classes.box}>
              <figure class="image">
                <img src={blog} />
              </figure>
              <div class="title is-3">Gatsby blog</div>
              <div class="subtitle">This column is only 200px wide.</div>
              <div className="description">
               
                <p><span>기능:</span> 반응형 웹 ,카테고리  ,e-maile 전송기능   </p>
                <p><span>기술:</span> react , </p>
              </div>
            </div>
          </div>

          <div className={classes.column}>
            <div className={classes.box}>
              <figure class="image">
                <img src={blog} />
              </figure>
              <p class="title is-3">Gatsby blog</p>
              <p class="subtitle">This column is only 200px wide.</p>
            </div>
          </div>

          <div className={classes.column}>
            <div className={classes.box}>
              <figure class="image">
                <img src={blog} />
              </figure>
              <p class="title is-3">Gatsby blog</p>
              <p class="subtitle">This column is only 200px wide.</p>
            </div>
          </div>

          <div className={classes.column}>
            <div className={classes.box}>
              <figure class="image">
                <img src={blog} />
              </figure>
              <p class="title is-3">Gatsby blog</p>
              <p class="subtitle">This column is only 200px wide.</p>
            </div>
          </div>

          <div className={classes.column}>
            <div className={classes.box}>
              <figure class="image">
                <img src={blog} />
              </figure>
              <p class="title is-3">Gatsby blog</p>
              <p class="subtitle">This column is only 200px wide.</p>
            </div>
          </div>

        </div>
    </section>
    )
}

export default Project;