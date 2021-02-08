import React, { useEffect } from 'react';
import './DetailMap.css';

const { kakao } = window;

const DetailMap = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
    }, []);

    return (
        <div className='DetailMap'>
            <div className='DetailMap-bar'>
                <div className='DetailMap-map' id='myMap'></div>
            </div>
        </div>
    );
}

export default DetailMap; 