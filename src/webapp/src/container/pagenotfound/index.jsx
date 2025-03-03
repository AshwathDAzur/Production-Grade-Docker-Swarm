import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Error from '../../assets/NotFound/404.svg';
import Astronaut from '../../assets/NotFound/astronaut.svg';
import Moon from '../../assets/NotFound/moon.svg';
import Rocket from '../../assets/NotFound/rocket.svg';
import Earth from '../../assets/NotFound/earth.svg';

function PageNotFound() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className="bg-purple" style={{ height: '100vh', width: '100vw' }}>
            <div className="stars">
                <div className="central-body">
                    <img className="image-404" src={Error} width="300px" alt="404 Error" />
                    <button onClick={handleClick} className="btn-go-home">
                        GO BACK
                    </button>
                </div>
                <div className="objects">
                    <img className="object_rocket" src={Rocket} width="40px" alt="Rocket" />
                    <div className="earth-moon">
                        <img className="object_earth" src={Earth} width="100px" alt="Earth" />
                        <img className="object_moon" src={Moon} width="80px" alt="Moon" />
                    </div>
                    <div className="box_astronaut">
                        <img className="object_astronaut" src={Astronaut} width="140px" alt="Astronaut" />
                    </div>
                </div>
                <div className="glowing_stars">
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
