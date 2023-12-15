import { FacebookFilled, TwitterCircleFilled, LinkedinFilled, InstagramFilled } from '@ant-design/icons';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import gold from '../assets/gold.png';
import silver from '../assets/silver.png';
import bronze from '../assets/bronze.png';
import platinum from '../assets/platinum.png'
export default function Section(){
    return(
        <div className="section">
            <div className="sec1">
                <p style={{fontSize: "2rem", fontWeight: "700"}}>Welcome to The GENIUS LOGIX</p>
                <p style={{fontSize: "0.7rem"}}>Genius System Logix Pvt Ltd is a premier software house dedicated to crafting state-of-the-art business applications.</p>
                <button style={{fontSize: "1.3rem", fontWeight: "700", color: "white", backgroundColor: "blue", padding: "0.8rem", border: "none", borderRadius: "12px", margin: "1rem 0"}}>Let's Talk</button>
            </div>
            <div>
                <ul className="sec2">
                    <li><FacebookFilled /></li>
                    <li><TwitterCircleFilled /></li>
                    <li><LinkedinFilled /></li>
                    <li><InstagramFilled /></li>
                </ul>
            </div>
            <div className='section2'>
                <div>
                    <img src={platinum} alt="1" style={{width: "6rem"}}/>
                    <p>AW1</p>
                </div>
                <div >
                    <img src={gold} alt="1" style={{width: "6rem"}}/>
                    <p>AW2</p>
                </div>
                <div>
                    <img src={silver} alt="1" style={{width: "6rem"}}/>
                    <p>AW3</p>
                </div>
                <div>
                    <img src={bronze} alt="1" style={{width: "6rem"}}/>
                    <p>AW4</p>
                </div>
            </div>
            <div style={{marginBottom: "15rem"}}>
                <p style={{color: "#fff", textAlign: "center", paddingBottom: "6rem"}}><ArrowBackOutlinedIcon style={{ fontSize: "2.5rem"}}/> <MoreHorizOutlinedIcon style={{ fontSize: "2.5rem"}}/> <ArrowForwardOutlinedIcon style={{ fontSize: "2.5rem"}}/></p>
            </div>
        </div>
    )
}