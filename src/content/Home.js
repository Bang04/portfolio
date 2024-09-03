import React, { forwardRef } from "react"
import classes from './Home.module.css';
import Typewriter from 'typewriter-effect';

const Home = forwardRef(function Home(props, ref) {

    return(
        <section className={classes.section} ref={ref}>
            <div className={classes.content}>
                <div className={classes.txt}>
                    <p>안녕하세요</p>
                    <p>
                        새로운 기술에  <b>흥미</b>가 많고 배움이 <b>즐거운</b> 소프트웨어 개발자 <b>은경</b>입니다.<br/>
                        제 포트폴리오를 통해 저의 기술력과 프로젝트 경험을 살펴보세요. 
                    </p>
                </div>
                <div className={classes.txt2}>
                    <Typewriter
                        options={{
                            strings: ['감사합니다.'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
        </section>
    )
});

export default Home;