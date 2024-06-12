import React, { forwardRef } from "react"
import classes from './Home.module.css';
import Typewriter from 'typewriter-effect';

const Home = forwardRef(function Home(props, ref) {

    return(
        <section className={classes.section} ref={ref}>
            <div className={classes.content}>
                <div className={classes.txt}>Hello</div>
                <div className={classes.txt2}>
                    <Typewriter
                        options={{
                            strings: ['I am <span>PHP Developer</span>.', 'I am <span>Front-End Developer.</span>'],
                            autoStart: true,
                            loop: false,
                        }}
                    />
                </div>
            </div>
        </section>
    )
});

export default Home;