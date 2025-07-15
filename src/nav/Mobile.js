import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Mob.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart} from './Crete';
import { Navigation } from 'swiper/modules';


function Mobile() {
    const mobile = [{
        id: "1",
        title: "Xiaomi 15 Ultra",
        price: "$1,09,9999",
        img: "https://i03.appmifile.com/305_item_in/11/03/2025/2d4702802a20bba096cbe741814ae87b.png?thumb=1&w=500&f=webp&q=85"

    }, {
        id: "2",
        title: "Xiaomi 14 Ultr",
        price: "$80,000",
        img: "https://i03.appmifile.com/329_item_in/11/04/2025/2a9e8ffe9a3772b764bc3b9cb4e83576.png?thumb=1&w=500&f=webp&q=85"
    }, {
        id: "3",
        title: "Xiaomi 14 CIVI",
        price: "$50,000",
        img: "https://i03.appmifile.com/327_item_in/06/08/2024/784824caf4ebe3e6cef22a2c34de5e66.jpg?thumb=1&w=500&f=webp&q=85"
    },]
    const redmi = [{
        id: "4",
        title: "Redmi Note 14 Pro+ 5G",
        price: "20,000",
        img: "https://i03.appmifile.com/942_item_in/17/12/2024/35ce3d67c8df46482bcf534c9339e578.png?thumb=1&w=500&f=webp&q=85"
    }, {
        id: "5",
        title: "Redmi Note 14 Pro 5",
        price: "15,000",
        img: "https://i03.appmifile.com/201_item_in/17/12/2024/0321927c81d71d28eb19b7ac43b4c86d.png?thumb=1&w=500&f=webp&q=85"
    }, {
        id: "6",
        title: "Redmi Note 14 Pro 5",
        price: "15,000",
        img: "https://i03.appmifile.com/201_item_in/17/12/2024/0321927c81d71d28eb19b7ac43b4c86d.png?thumb=1&w=500&f=webp&q=85"
    }]
// const MobileData=useSelector((state)=>state.cart.CartItem)
const dis=useDispatch()

const add=(bag)=>{
    dis(addCart(bag))
}



    return (
        <div>
            <hr></hr>
            
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src='https://i03.appmifile.com/749_operator_in/02/05/2025/d48cdcc6f8cdcb9a11b0438dc3b76eb5.png?thumb=1&w=2560&f=webp&q=85' alt='mobile'></img></SwiperSlide>
                                <SwiperSlide><img src='https://i03.appmifile.com/305_operator_in/21/05/2025/007480688b7bb8dc0e86c3b40ed2ee2c.png?thumb=1&w=2560&f=webp&q=85' alt='mobile'></img></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                
                <section>
                     <div className='container-fluid'>
                    <h1 style={{textAlign: "center",color:"black",fontSize:"40px"}}>Xiaomi</h1>
                </div>
                    <div className='container-fluid '>
                        <div className='row'>
                            {mobile.map((bag) => (
                                <div className='col-6  lap' key={bag.id} style={{ marginRight: "20px" }}>
                                    <h2 style={{ color: "white", textAlign: "center", marginTop: "100px" }}>{bag.tittle}</h2>
                                    <img style={{ borderRadius: "140px", height: "400px", width: "400px", position: "relative", left: "110px" }} src={bag.img} alt='mobile'></img>
                                    <br></br>
                                    <br></br>
                                    <h4>{bag.price}</h4>
                                    <button style={{ position: "relative", top: "-15px", left: "270px" }} onClick={()=>add(bag)} className='btn btn-dark'>Buy now</button>


                                </div>

                            ))
                            }
                        </div>
                    </div>
                 
                  
                </section>
                <div className='container-fluid'>
                    <h1 style={{textAlign: "center",color:"black",fontSize:"40px"}}>Redmi</h1>
                </div>
                <section>
                    <div className='container-fluid' >
                        <div className='row'>
                            {
                                redmi.map((bag) => (
                                    <div className='col lap' key={bag.id} style={{ marginRight: "20px" }}>
                                        <h1 style={{ color: "white", textAlign: "center", marginTop: "100px" }}>{bag.tittle}</h1>
                                        <img style={{ borderRadius: "140px", height: "400px", width: "400px", position: "relative", left: "110px" }} src={bag.img} alt='mobile'></img>
                                        <br></br>
                                        <br></br>
                                        <h4>{bag.price}</h4>
                                        <button style={{ position: "relative", top: "-15px", left: "270px" }} onClick={()=>add(bag)} className='btn btn-dark'>Buy now</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <br></br>
                <br></br>
        </div>
    )
}
export default Mobile
