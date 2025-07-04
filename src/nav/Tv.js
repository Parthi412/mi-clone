import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
function Tv() {
    const mobile = [{
        id: "1",
        tittle: "redmi Tv",
        price: "$1,09,9999",
        img: "https://i03.appmifile.com/686_item_in/09/05/2025/361cc66a93a7cf9dbc6785adccbc15b1.png?thumb=1&w=500&f=webp&q=85"

    }, {
        id: "2",
        tittle: "Redmi pad 2 wifi +celluer",
        price: "$80,000",
        img: "https://i03.appmifile.com/710_item_in/13/05/2025/e11ca9689290449482d7156139c4df0d.png?thumb=1&w=500&f=webp&q=85"
    }, {
        id: "3",
        tittle: "Xiaomi pad 7",
        price: "$50,000",
        img: "https://i03.appmifile.com/180_item_in/14/03/2025/f5243b381322174bdab419f6339af213.png?thumb=1&w=500&f=webp&q=85"


    },]
    const redmi = [{
        id: "1",
        tittle: "Redmi Note 14 Pro+ 5G",
        price: "20,000",
        img: "https://i03.appmifile.com/686_item_in/09/05/2025/361cc66a93a7cf9dbc6785adccbc15b1.png?thumb=1&w=500&f=webp&q=85"
    }, {
        id: "2",
        tittle: "Redmi Note 14 Pro 5",
        price: "15,000",
        img: "https://i03.appmifile.com/986_item_in/07/05/2025/d78a66fa0d7939e8880ca05bc4a22516.png?thumb=1&w=500&f=webp&q=85"
    }, {
        id: "3",
        tittle: "Redmi Note 14 Pro 5",
        price: "15,000",
        img: "https://i03.appmifile.com/4_item_in/07/05/2025/a9603e7913689129777761e152535f9a.png?thumb=1&w=500&f=webp&q=85"
    }]
    return (
        <div>
            <hr></hr>
            <div >
               
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src='https://i03.appmifile.com/362_operator_in/15/05/2025/c4b0e22a0f3cf1146c05d84da2e6e1be.jpg?thumb=1&w=2560&f=webp&q=85' alt='tv'></img></SwiperSlide>
                                <SwiperSlide><img src='https://i03.appmifile.com/249_operator_in/15/05/2025/fc37f38f293ec198ca906762911709b7.jpg?thumb=1&w=2560&f=webp&q=85' alt='tv'></img></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
               
                <section>

 <div className='container'>
                    <h1 style={{ textAlign: "center", color: "black",fontSize:"40px"}}>Xiamomi Tv</h1>

                </div>
                    <div className='container-fluid '>

                        <div className='row'>
                            {mobile.map((bag) => (
                                <div className='col-6  lap' key={bag.id} style={{ marginRight: "20px" }}>
                                    <h1 style={{ color: "white", textAlign: "center", marginTop: "100px", }}>{bag.tittle}</h1>
                                    <img style={{ borderRadius: "140px", height: "400px", width: "400px", position: "relative", left: "110px" }} src={bag.img} alt='tv'></img>
                                    <br></br>
                                    <br></br>
                                    <h4>{bag.price}</h4>
                                    <button style={{ position: "relative", top: "-15px", left: "270px" }} className='btn btn-dark'>Buy now</button>


                                </div>

                            ))
                            }
                        </div>
                    </div>
                   

                </section>
                <div className='container-fluid'>
                    <h1 style={{ textAlign:"center",color:"black",fontSize:"40px"}}>Redmi Tv</h1>


                </div>
                <section>
                    <div className='container-fluid' >
                        <div className='row'>
                            {
                                redmi.map((bag) => (
                                    <div className='col lap' key={bag.id} style={{ marginRight: "20px" }}>
                                        <h1 style={{ color: "white", textAlign: "center", marginTop: "100px" }}>{bag.tittle}</h1>
                                        <img style={{ borderRadius: "140px", height: "400px", width: "400px", position: "relative", left: "110px" }} src={bag.img} alt='tv'></img>
                                        <br></br>
                                        <br></br>
                                        <h4>{bag.price}</h4>
                                        <button style={{ position: "relative", top: "-15px", left: "270px" }} className='btn btn-dark'>Buy now</button>


                                    </div>

                                ))
                            }

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

export default Tv
