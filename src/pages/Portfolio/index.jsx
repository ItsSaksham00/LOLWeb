import './index.css'
import habsImg from '../../assets/images/habs.png'
import swiperImg from '../../assets/images/swiper.png'
import personalport2 from '../../assets/images/personal1.png'
import personalport1 from '../../assets/images/personal2.png'
import todoImg from '../../assets/images/todo.png'
import Headings from '../../components/Headings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faUser } from '@fortawesome/free-regular-svg-icons'
import { faCode, faShare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import ConfirmBox from '../../components/ConfirmBox'

const PortfolioData = [
    {
        portNo:1,
        portName:'Organizational Website',
        portLink:'https://habs-final.vercel.app/',
        portLanguage:'React, Css3 ',
        portClientName:'Hamro Awaj Baal Sanjal',
        portLinkName:'hamroawaj.view',
        portImg:habsImg,
        portFit:'contain',
    },
    {
        portNo:2,
        portName:'Swiper Portfolio',
        portLink:'https://swiper-portflio.vercel.app/',
        portLanguage:'React, Nextjs, SwiperJs',
        portClientName:'Manoj Gautam',
        portImg:swiperImg,
        portFit:'cover',
        portLinkName:'Swiper-Portfolio.view',
    },
    {
        portNo:3,
        portName:'Organizational Website',
        portLink:'https://www.hamroawaj.org.np/',
        portLanguage:'React, Css3 ',
        portClientName:'Hamro Awaj Baal Sanjal',
        portLinkName:'hamroawaj.org.np',
        portFit:'contain',
        portImg:habsImg,
    },
    {
        portNo:4,
        portName:'Responsive Personal Website',
        portLink:'https://personalportfolio1.vercel.app/',
        portLanguage:'HTML, Css3, Js ',
        portClientName:'Aadit Poudel',
        portLinkName:'personalportfolio.view',
        portFit:'contain',
        portImg:personalport1,
    },
    {
        portNo:5,
        portName:'Responsive Personal Website',
        portLink:'https://personal-portfolio2-saksham.vercel.app/',
        portLanguage:'HTML, Css3, Js ',
        portClientName:'Amrit Rijal',
        portLinkName:'personalportfolio.view',
        portFit:'contain',
        portImg:personalport2,
    },
    {
        portNo:6,
        portName:'Goal Tracker / Todo',
        portLink:'https://goal-tracker-bysaksham.vercel.app/',
        portLanguage:'React ',
        portClientName:'Self Local Project',
        portLinkName:'goaltracker.view',
        portFit:'cover',
        portImg:todoImg,
    },
]


const Portfolio = () => {
    const [portData ,setportData] = useState(PortfolioData);
    const [portBoxOpen ,setportBoxOpen] = useState(false);

    const OpenPortBox = (portID) => {
        const filterdPortData = PortfolioData.filter(data => data.portNo == portID)
        setportBoxOpen(!portBoxOpen)
        setportData(filterdPortData)
    }
    const toggleportBox =() => {
        setportBoxOpen(!portBoxOpen)

    }

    return(
        <>

            <div className="portfolioContainer">
            <Headings frontHeading={'My Portfolio'} backHeading={'Works'} />

                {PortfolioData.map((e) => {
                    return(
                        <div key={e.portNo} className="portfolioBox" onClick={() => OpenPortBox(e.portNo)}>
                            <img 
                                 style={{objectFit:`${e.portFit}`}}
                                src={e.portImg}
                                alt={e.portClientName}
                            />
                            <div className='PortHoverBox'>
                                    <h3>{e.portName}</h3>
                            </div>
                    </div>
                    );
                })}
                    
            </div>
{
    portBoxOpen && (
    
        <div className="portWholeInfo" onClick={toggleportBox}>

                {
                    portData.map((e) => {
                            return(
                                <div key={e.portID} className="PortMoreBox">
                    <div className="PortHead">
                        <h1>{e.portName}</h1>
                    </div>
                    <div className="portDetails">
                        <div className="portDetail">
                             <FontAwesomeIcon className='PortIcon' icon={faFile} />
                            <h2>Project : {e.portName}</h2>
                        </div>
                        <div className="portDetail">
                             <FontAwesomeIcon className='PortIcon' icon={faUser} />
                            <h2>Client : {e.portClientName}</h2>
                        </div>
                        <div className="portDetail">
                             <FontAwesomeIcon className='PortIcon' icon={faCode} />
                            <h2>Language : {e.portLanguage}</h2>
                        </div>
                        <div className="portDetail">
                             <FontAwesomeIcon className='PortIcon' icon={faShare} />
                            <h2>Preview : <a target='_blank' href={e.portLink}>{e.portLinkName}</a></h2>
                        </div>
                    </div>
                    <div className="portImage">
                            <img
                            style={{objectFit:`${e.portFit}`}}
                                src={e.portImg}
                            />
                    </div>
                    <FontAwesomeIcon  onClick={toggleportBox} className='CloseBtnPort' icon={faXmark} />
                </div>
                            );
                    })
                }

            </div>
    )
}
            <ConfirmBox />
        </>
    );
}

export default Portfolio;