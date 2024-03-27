import React from "react"
import 'bulma/css/bulma.min.css';

function Project(){
    return(
        <article className='article'>
          <section class="hero is-primary is-small">
            <div class="hero-body">
              <div class="container has-text-centered">
                <p class="title">Project</p>
                {/* <p class="subtitle">Subtitle</p> */}
              </div>
            </div>
          </section>
          <section className="section">
            <div class="columns">
              <div class="column ">
                <div class="box">
                  <figure class="image is-128x128">
                    <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
                  </figure>
                  <p class="title is-5">Narrow column</p>
                  <p class="subtitle">This column is only 200px wide.</p>
                </div>
              </div>
              <div class="column">
                <div class="box">
                  <p class="title is-5">Narrow column</p>
                  <p class="subtitle">This column is only 200px wide.</p>
                </div>
              </div>
              <div class="column">
                <div class="box">
                  <p class="title is-5">Narrow column</p>
                  <p class="subtitle">This column is only 200px wide.</p>
                </div>
              </div>
              <div class="column">
                <div class="box">
                  <p class="title is-5">Flexible column</p>
                  <p class="subtitle">
                    This column will take up the remaining space available.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
        </article>
    )
}

export default Project;