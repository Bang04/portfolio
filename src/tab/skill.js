import React from "react"
import 'bulma/css/bulma.min.css';

function Skill(){
    return(
        <article className='article'>
          <section class="hero is-primary is-small">
            <div class="hero-body">
              <div class="container has-text-centered">
                <p class="title">Skill</p>
                {/* <p class="subtitle">Subtitle</p> */}
              </div>
            </div>
          </section>
          <section className="section">
             
            <div>
                <div class="card ">
                  <header class="card-header">
                    <p class="card-header-title">Front-End</p>
                  </header>
                  <div class="card-content">
                    <div>
                      <span>react : </span> 컴포넌트를 다룰수있습니다.
                    </div>
                    <div>
                      <span>next.js : </span>
                    </div>
                    <div>
                      <span>typescript : </span>
                    </div>
                    <div>
                      <span>git : </span>
                    </div>
                  </div>
                </div>
                


              {/* <div className="block">
                <div>Experience:</div>
                <div>java, spring, oracle</div>
              </div> */}
            </div>
          </section>    
        </article>
    )
}

export default Skill;