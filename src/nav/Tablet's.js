import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import Nav from './Nav';

import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
function Tablte() {
    const mobile = [{
        id: "1",
        tittle: "redmi pad 2",
        price: "$1,09,9999",
        img: "https://i03.appmifile.com/953_item_in/16/06/2025/b90889ab567040b1cfba15a97c54360c.jpg?thumb=1&w=500&f=webp&q=85"

    }, {
        id: "2",
        tittle: "Redmi pad 2 wifi +celluer",
        price: "$80,000",
        img: "https://i03.appmifile.com/52_item_in/16/06/2025/864e4ca7b0685b5dbabe0e1b972ff7cc.jpg?thumb=1&w=500&f=webp&q=85"
    }, {
        id: "3",
        tittle: "Xiaomi pad 7",
        price: "$50,000",
        img: "https://i03.appmifile.com/34_item_in/09/01/2025/7e331eabd3f6cc6bd377a81bca3d6735.png?thumb=1&w=500&f=webp&q=85"


    },]
    const redmi = [{
        id: "1",
        tittle: "Redmi Note 14 Pro+ 5G",
        price: "20,000",
        img: "https://i03.appmifile.com/891_item_in/24/07/2024/0c9d82a2bf77824a9639f7827fad16a9.png?thumb=1&w=500&f=webp&q=85"
    }, {
        id: "2",
        tittle: "Redmi Note 14 Pro 5",
        price: "15,000",
        img: "https://i03.appmifile.com/993_item_in/24/07/2024/c703c358336b791d0a75523e7bda954b.png?thumb=1&w=500&f=webp&q=85"
    }, {
        id: "3",
        tittle: "Redmi Note 14 Pro 5",
        price: "15,000",
        img: "https://i03.appmifile.com/208_item_in/04/07/2024/0caa372f65852c4713f266d23f832b09.png?thumb=1&w=500&f=webp&q=85"
    }]
    return (
        <div>
            <Nav></Nav>
            <hr></hr>
            <div >
               
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src='https://i03.appmifile.com/598_operator_in/23/06/2025/ea787bcfa397c93cd6913204b08b6082.jpg?thumb=1&w=2560&f=webp&q=85' alt='tab'></img></SwiperSlide>
                                <SwiperSlide><img src='https://i03.appmifile.com/863_operator_in/02/06/2025/7143eae2ae4b02fa93663d4bfbdf4147.png?thumb=1&w=2560&f=webp&q=85' alt="tab"></img></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <section>
                     <div className='container'>
                    <h1 style={{ textAlign: "center", color: "black", fontSize:"40px"}}>Xiaomi</h1>

                </div>

                    <div className='container-fluid '>

                        <div className='row'>
                            {mobile.map((bag) => (
                                <div className='col-6  lap' key={bag.id} style={{ marginRight: "20px" }}>
                                    <h1 style={{ color: "black", textAlign: "center", marginTop: "80px", }}>{bag.tittle}</h1>
                                    <img style={{ borderRadius: "140px", height: "400px", width: "400px", position: "relative", left: "110px" }} src={bag.img} alt='tab'></img>
                                
                                    <h4 style={{backgroundColor:"black",position:"relative",bottom:"530px",width:"250px",color:"white"}} className='hot'>Hot Sales</h4>

                                    <h4>{bag.price}</h4>
                                    <button style={{ position: "relative", bottom:'40px', left: "270p/" }} className='btn btn-dark'>Buy now</button>


                                </div>

                            ))
                            }
                        </div>
                    </div>
                  

                </section>
                <div className='container-fluid mt-5'>
                    <h1 style={{ textAlign: "center",color:"black",fontSize:"40px"}}>Redmi</h1>


                </div>
                <section>
                    <div className='container-fluid mt-5' >
                        <div className='row'>
                            {
                                redmi.map((bag) => (
                                    <div className='col lap' key={bag.id} style={{ marginRight: "20px" }}>
                                        <h1 style={{ color: "black", textAlign: "center", marginTop: "100px" }}>{bag.tittle}</h1>
                                        <img style={{ borderRadius: "140px", height: "400px", width: "400px", position: "relative", left: "110px" }} src={bag.img} alt='mobile'></img>
                                        <br></br>
                                        <br></br>
                                        <h4 style={{backgroundColor:"black",position:"relative",bottom:"570px",width:"250px",color:"white"}} className='hot'>Hot Sales</h4>

                                        <h4>{bag.price}</h4>
                                        <button style={{ position: "relative",bottom:"50px", }} className='btn btn-dark'>Buy now</button>


                                    </div>

                                ))
                            }

                        </div>
                    </div>
                </section>
                <section>
                    <h1 style={{textAlign:"center",marginTop:"20px"}}>Upcoming offer's</h1>
                     <div className='container-fluid mt-5'>
                    <div className='row'>
                        <div className='col'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src='https://i03.appmifile.com/598_operator_in/23/06/2025/ea787bcfa397c93cd6913204b08b6082.jpg?thumb=1&w=2560&f=webp&q=85' alt='tab'></img></SwiperSlide>
                                <SwiperSlide><img src='https://i03.appmifile.com/863_operator_in/02/06/2025/7143eae2ae4b02fa93663d4bfbdf4147.png?thumb=1&w=2560&f=webp&q=85' alt="tab"></img></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>

                </section>

            </div>
            <br>
            </br>
            <br></br>


        </div>
    )
}

export default Tablte
