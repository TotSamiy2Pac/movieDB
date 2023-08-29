import React from 'react';
import Header from "../components/header/Header";
import SwiperComponents from "../components/swiper/SwiperComponents";
import Genres from "../components/sections genres/Genres";
import Layout from "../components/layout";
import RatedMovies from "../components/rated/RatedMovies";
import Modal from "react-modal";

import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
// };

const HomePages = () => {

    // let subtitle;
    // const [modalIsOpen, setIsOpen] = React.useState(false);
    //
    // function openModal() {
    //     setIsOpen(true);
    // }
    //
    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }
    //
    // function closeModal() {
    //     setIsOpen(false);
    // }

    return (
        <Layout>
            <main>
                {/*<div>*/}
                {/*    <button onClick={openModal}>Open Modal</button>*/}
                {/*    <Modal*/}
                {/*        isOpen={modalIsOpen}*/}
                {/*        onAfterOpen={afterOpenModal}*/}
                {/*        onRequestClose={closeModal}*/}
                {/*        style={customStyles}*/}
                {/*        contentLabel="Example Modal"*/}
                {/*    >*/}
                {/*        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>*/}
                {/*        <button onClick={closeModal}>close</button>*/}
                {/*        <div>I am a modal</div>*/}
                {/*        <form>*/}
                {/*            <input />*/}
                {/*            <button>tabnavigation</button>*/}
                {/*            <button>stays</button>*/}
                {/*            <button>inside</button>*/}
                {/*            <button>the modal</button>*/}
                {/*        </form>*/}
                {/*    </Modal>*/}
                {/*</div>*/}
                <section className={'slider-section'}>
                    <SwiperComponents/>
                </section>
                <section className={'genre'}>
                    <div className="container">
                        <RatedMovies/>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default HomePages;