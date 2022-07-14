import React, { useEffect, useState } from "react";
import sanityClient from "../../client";
import SeatBooking from '../seatBooking/seatBooking';
import { AnimationOnScroll } from 'react-animation-on-scroll';
//import ScrollAnimation from 'react-animate-on-scroll';
// import AnimatedText from 'react-animated-text-content';
import Modal from 'react-modal';
import style from './dashboard.module.css';
import "animate.css/animate.min.css";

let animate = {
    "0": "animation_0",
    "1": "animation_1",
    "2": "animation_2",
    "3": "animation_3",
    "4": "animation_4",
    "5": "animation_5",
    "6": "animation_4",
    "7": "animation_2",
    "8": "animation_5",
    "9": "animation_4"
}

const customStyles = {
    content: {
      top: '30%',
      left: '30%',
      right: 'auto',
      bottom: 'auto',
      transform: 'tanslate(-50%, -50%)',
      width: '35%',
      height: '30%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  }

const Dashboard = () => {
    const [allMoviesData, setAllMovies] = useState([]);
    const [cloneMoviesData, SetCloneMoveData] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [seatmodalIsOpen, setSeatIsOpen] = useState(false);
    const [movieBooking, changeMovieBooking] = useState({});
    const [bgcolor, changeBgColor] = useState('black');
    const [searchmovie, setSearchMovie] = useState('');

    const movieSearch = (e) => {
        setSearchMovie(e.target.value);
        if(e.target.value === '') {
            setAllMovies([...cloneMoviesData]);
        } else {
            var result = [];
            result = allMoviesData.filter((movie) => {return movie.title.toLowerCase().includes(e.target.value.toLowerCase())});
            if(result.length > 0){
                setAllMovies([...result]);
            } else {
                setAllMovies([...cloneMoviesData]);
            }
        }
    }

    const listenScrollEvent = () => {
        if (window.scrollY > 0 && window.scrollY < 1000) {
            changeBgColor('black');
        } else if (window.scrollY > 1000 && window.scrollY < 2000) {
            changeBgColor('linear-gradient(95deg, rgb(90 28 94) 36%, rgb(32 60 60) 50%)');
        } else if (window.scrollY > 2000 && window.scrollY < 3000) {
            changeBgColor('linear-gradient(95deg, rgb(12 48 20) 36%, rgb(100 95 29) 50%)')
        } else if (window.scrollY > 3000 && window.scrollY < 4000) {
            changeBgColor('black');
        } else if (window.scrollY > 4000 && window.scrollY < 5000) {
            changeBgColor('linear-gradient(95deg, rgb(90 28 94) 36%, rgb(32 60 60) 50%)');
        } else if (window.scrollY > 5000 && window.scrollY < 6000) {
            changeBgColor('linear-gradient(95deg, rgb(12 48 20) 36%, rgb(100 95 29) 50%)')
        } else if (window.scrollY > 6000 && window.scrollY < 7000) {
            changeBgColor('linear-gradient(95deg, rgb(90 28 94) 36%, rgb(32 60 60) 50%)');
        } else if (window.scrollY > 7000 && window.scrollY < 8000) {
            changeBgColor('linear-gradient(95deg, rgb(12 48 20) 36%, rgb(100 95 29) 50%)')
        } else if (window.scrollY > 9000 && window.scrollY < 10000) {
            changeBgColor('black');
        } else if (window.scrollY > 10000 && window.scrollY < 11000) {
            changeBgColor('linear-gradient(95deg, rgb(90 28 94) 36%, rgb(32 60 60) 50%)');
        } else if (window.scrollY > 11000 && window.scrollY < 12000) {
            changeBgColor('linear-gradient(95deg, rgb(12 48 20) 36%, rgb(100 95 29) 50%)')
        }
    }

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "movie"]{
                    title,
                    slug,
                overview,
                releaseDate,
                externalId,
                popularity,
                "posterImage": poster.asset->url
                }`
            )
            .then((data) => {
                setAllMovies(data);
                SetCloneMoveData([...data]);
            })
            .catch(console.error);
        window.addEventListener('scroll', listenScrollEvent)
    }, []);

    const bookTicket = (movie) => {
        changeMovieBooking({ ...movie });
        setIsOpen(true);
    }

    return (
        <div className={style.dashboardContainer} style={{ "background": bgcolor }}>
            <div className={`${style.header} width-100 flex justify-content-center align-items-center`}>
                <div className="width-95 flex justify-content-between align-items-center">
                    <div>
                        <div className={style.colorHeader}>Total: {allMoviesData.length}</div>
                    </div>
                    <div>
                    <span className={style.colorHeader}>Upcoming Movies List</span>
                    </div>
                    <div className='width-20'>
                        <input className={style.filterMovie} type='text' placeholder="Search By Movie Name" autoComplete="off" value={searchmovie} onChange={(e) => movieSearch(e)}/>
                    </div>
                </div>
            </div>
            <div className="width-100 flex justify-content-center">
                <div className="width-95 mg-tp2">
                    {allMoviesData &&
                        allMoviesData.map((movie, index) => {
                            return (
                                // <ScrollAnimation animateIn="fadeIn" key={index}>
                                <AnimationOnScroll animateIn="animate__bounceIn" key={index}>
                                    <div className={`${style.eachMovie} flex`}>
                                        <div className="width-20">
                                            <img className={`${style.imageMovie} ${animate[index]}`} src={movie.posterImage} alt={movie.slug.current} />
                                        </div>
                                        <div className={`${style.movieDescription} width-80`}>
                                            <div>
                                                <span className={style.headtext}>Name:</span>
                                                <span className={`${style.headValue} mg-left-half`}>{movie.title}</span>
                                            </div>
                                            <div className="mg-tp1 flex justify-content-between align-items-center">
                                                <div>
                                                    <span className={style.headtext}>Popularity:</span>
                                                    <span className={`${style.headValue} mg-left-half`}>{movie.popularity}</span>
                                                </div>
                                                <div>
                                                    <span className={style.headtext}>Release Date:</span>
                                                    <span className={`${style.headValue} mg-left-half`}>{movie.releaseDate}</span>
                                                </div>
                                                <div>
                                                    <span className={style.headtext}>Id:</span>
                                                    <span className={`${style.headValue} mg-left-half`}>{movie.externalId}</span>
                                                </div>
                                            </div>
                                            <div className="mg-tp1">
                                                <div>
                                                    <span className={style.headtext}>Overview:</span>
                                                </div>
                                                <div className="mg-tp1">
                                                    {/* <AnimatedText
                                                    type="words" // animate words or chars
                                                    animation={{
                                                        x: '100px',
                                                        y: '-20px',
                                                        scale: 0,
                                                        ease: 'ease-in-out',
                                                    }}
                                                    animationType="lights"
                                                    interval={0}
                                                    duration={0}
                                                    tag="span"
                                                    className={`${style.headValue} mg-left-half fnt-fmly animated-paragraph`}
                                                    includeWhiteSpaces
                                                    threshold={0.0}
                                                    rootMargin="20%"
                                                >
                                                    {movie.overview[0].children[0].text} */}
                                                    <span className={`${style.headValue} mg-left-half`}>{movie.overview[0].children[0].text}</span>
                                                    {/* </AnimatedText>; */}
                                                </div>
                                            </div>
                                            <div className="mg-tp2">
                                                <button className={`width-100 ${style.btnSecondary}`} onClick={() => bookTicket(movie)}>
                                                    <span className={`${style.bookTicket}`}>Book Tickets</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </AnimationOnScroll>
                                // </ScrollAnimation>
                            )
                        }
                        )}
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
            >
                <div>
                    <span className={style.headtext}>Name:</span>
                    <span className={`${style.headValueModal} mg-left-half`}>{movieBooking.title}</span>
                </div>
                <div>
                    <span className={style.headtext}>Release Date:</span>
                    <span className={`${style.headValueModal} mg-left-half`}>{movieBooking.releaseDate}</span>
                </div>
                <div>
                    <span className={style.headtext}>Price:</span>
                    <span className={`${style.headValueModal} mg-left-half`}>500 /-</span>
                </div>
                <div className="mg-tp1">
                    <button className={`width-100 ${style.btnPrimary}`} onClick={() => setSeatIsOpen(true)}>
                        Initiate Payment
                    </button>
                </div>
            </Modal>
            <Modal
                isOpen={seatmodalIsOpen}
                onRequestClose={() => setSeatIsOpen(false)}
            >
                <SeatBooking />
            </Modal>
        </div>
    );
}

export default Dashboard;
