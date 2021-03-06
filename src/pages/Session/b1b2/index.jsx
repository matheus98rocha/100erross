import React from 'react'
import Header from '../../../components/Header'
import ImageSlider from '../../../components/ImagerSlider/ImageSlider';
import { B1B2 } from '../../../data/session/b1b2';


function index() {
    return (
        <div className="b1b2" style={{   
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
            }}>
            <Header/>
            <ImageSlider slides={B1B2}  data={B1B2}/>
        </div>
    )
}

export default index
