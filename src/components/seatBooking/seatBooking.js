import style from './seatBooking.module.css';
import AnimatedText from 'react-animated-text-content';

const SeatBooking = () => {

    const selectSeat = (e) => {
        if(e.target.style.background === 'green') {
            e.target.style.background = 'white';
        } else {
            e.target.style.background = 'green';
        }
        
    }
    
    return (
        <div className="flex justify-content-center">
            <div className="width-95 mg-tp1">
                <div className={`width-100 ${style.screen} flex justify-content-center align-items-center`}><span>Screen</span></div>
                <div className='flex justify-content-center mg-tp2'>
                    <div className='width-95 flex justify-content-between'>
                        <div className={` ${style.seats} width-25 flex flex-wrap`}>
                            {[...Array(52)].map((seat, index) => {
                                return (<div className={style.seat} key={index} onClick={(e) => selectSeat(e)}>{index}</div>)
                            })}
                        </div>
                        <div className={` ${style.seats} width-40 flex flex-wrap`}>
                            {[...Array(100)].map((seat, index) => {
                                return (<div className={style.seat} key={index} onClick={(e) => selectSeat(e)}>{index}</div>)
                            })}
                        </div>
                        <div className={` ${style.seats} width-25 flex flex-wrap`}>
                            {[...Array(52)].map((seat, index) => {
                                return (<div className={style.seat} key={index} onClick={(e) => selectSeat(e)}>{index}</div>)
                            })}
                        </div>
                    </div>
                </div>
                <div className=' width-100 flex justify-content-center mg-tp2'>
                <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={0.8}
                    tag="p"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                    Please select your seat
                </AnimatedText>
                </div>

            </div>
        </div>)
}

export default SeatBooking;