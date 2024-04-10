import React from "react"
import classes from './Home.module.css';
import Typewriter from 'typewriter-effect';

function Home(){
   
    return(
        <section className={classes.section}>
            <div className={classes.content}>
                <div className={classes.txt}>Hello</div>
                <div className={classes.txt2}>
                    <Typewriter
                        options={{
                            strings: ['I am <span>PHP Developer</span>.', 'I am <span>Front-End Developer.</span>'],
                            autoStart: false,
                            loop: false,
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Home;