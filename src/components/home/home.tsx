import React, { useState } from 'react';
import homeStyle from './home.module.scss';
import * as text from '../../assets/languages';
import Projects from '../projects/projects';

function Home() {
    const [language, setlanguage] = useState<number>(0);

    return (
        <div style={language ? { direction: 'rtl', fontFamily: 'Oswald, sans-serif' } : {}}>
            <div style={language ? { marginRight: '20%' } : {}} className={homeStyle.Language}><span onClick={() => setlanguage(0)}>ENG </span> / <span onClick={() => setlanguage(1)}>עבר</span></div>
            <header className={homeStyle.Header}>
                <h1><span>{text.name[language]}</span> {text.projects[language]}</h1>
                <p>{text.lastedWork[language]}</p>
            </header>

            <div className={homeStyle.Container}>
                <Projects />
            </div>
        </div>
    )
}

export default Home;
