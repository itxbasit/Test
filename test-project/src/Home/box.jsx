
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'

export default function Box() {
    return (
        <div className='box'>
            <div className='box1'>
                <img src={one} alt="1" /> 
                <p>THIS IS A TEST</p>
            </div>
            <div className='box1'>
                <img src={two} alt="2"/> 
                <p>THIS IS A TEST</p>
            </div>
            <div className='box1'>
                <img src={three} alt="3"/> 
                <p>THIS IS A TEST</p>
            </div>
        </div>
    )
}