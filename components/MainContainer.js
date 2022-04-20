import React from 'react';
import Head from "next/head";
import A from './A';

const MainContainer = ({title, children}) => {
    return (
        <>
            <Head>
                <meta keywords="nextjs, react"></meta>
                <title>{title ?? "Главная"}</title>
            </Head>
            <div className="navbar">
                <A href="/">Главная</A>
                <A href="/users/">Пользователи</A>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;