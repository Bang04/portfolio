import React from "react"
import 'bulma/css/bulma.min.css';

function About(){
    return(
        <article className='article'>
           <section class="hero is-primary is-small">
            <div class="hero-body">
              <div class="container has-text-centered">
                <p class="title">About</p>
                {/* <p class="subtitle">Subtitle</p> */}
              </div>
            </div>
          </section>
           <section className="section">

           <div class="columns">
            <div class="column card">
              <p>
                PHP 6년 웹개발 실무 경험을 통해 새로운 언어에 대한 거부감이 줄었고,
                React로 개발자로 새로운 경험과 기회를 잡기위해 꾸준히 공부하고 있습니다.
              </p>
            </div>
            <div class="column card">Auto</div>
            <div class="column card">Auto</div>
          </div>


            
          </section>
        </article>
    )
}

export default About;