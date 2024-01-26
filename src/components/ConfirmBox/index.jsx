import { useState } from 'react';
import './index.css'

const ConfirmBox = () => {
    const [openCbox, setopenCbox] = useState(true)
    return(
        <>
            {openCbox && (
                <div className="confirmBoxContainer">
                <div className="confirmBox">
                            <p>Original website urls are not used instead a demo web url is used for privacy reasons</p>
                            <button className='confirmBtn' onClick={() => {setopenCbox(!openCbox)}}>Accept</button>
                    </div> 
                </div>
            )}
        </>
    );
}

export default ConfirmBox;