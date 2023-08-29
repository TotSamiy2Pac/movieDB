import React from 'react';
import Genres from "../components/sections genres/Genres";
import Layout from "../components/layout";
import SwiperComponents from "../components/swiper/SwiperComponents";

const GenresPages = () => {
    return (
        <Layout>
            <main>
                <section className={'slider-section'}>
                    <SwiperComponents/>
                </section>
                <section className={'genre'}>
                    <Genres/>
                </section>
            </main>
        </Layout>
    );
};

export default GenresPages;