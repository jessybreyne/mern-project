import React from 'react'
import Log from '../components/Log';

function Profil() {
    return (
        <div>
            <div className="profil-page">
                <div className="log-container">
                    <Log signin={false} signup={true} />
                    <div className="img-container">
                        <img src="./img/log.svg" alt="img-log"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil;
