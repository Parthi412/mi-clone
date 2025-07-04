// import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Cour.css'
import { Navigation } from 'swiper/modules';
// import { Link } from 'react-router-dom';


function Home() {
const pro=[{
  id:"1",
  img:"https://5.imimg.com/data5/SELLER/Default/2023/12/372325508/ZZ/TZ/XX/180833002/tab-m10-25-65cms-10-1-4gb-64gb-storm-grey-500x500.png",
  title:"Redmi Note 14 Pro",
  price:50000


},{
    id:"2",
  img:"https://5.imimg.com/data5/SELLER/Default/2023/12/372325508/ZZ/TZ/XX/180833002/tab-m10-25-65cms-10-1-4gb-64gb-storm-grey-500x500.png",
  title:"Redmi Note 14 Pro+",
  price:70000

},{
    id:"3",
  img:"https://5.imimg.com/data5/SELLER/Default/2023/12/372325508/ZZ/TZ/XX/180833002/tab-m10-25-65cms-10-1-4gb-64gb-storm-grey-500x500.png",
  title:"Redmi Note 13 Pro",
  price:100000
},
{
  id:"4",
   img:"https://5.imimg.com/data5/SELLER/Default/2023/12/372325508/ZZ/TZ/XX/180833002/tab-m10-25-65cms-10-1-4gb-64gb-storm-grey-500x500.png",
  title:"Redmi Note 13 Pro+",
  price:50000

}


]
// const mobie=[{
//   id:"1",
//   img:"https://image01-in.oneplus.net/media/202406/19/dee6a15ca313f3a7b211f2a440e9f05e.png?x-amz-process=image/format,webp/quality,Q_80",
//   title:"Poco X2"
// }]
// const[one,setone]=useState(false)
// function game(){
//   setone(true)
// }

  return (
    <div>
      <section>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src='https://i03.appmifile.com/749_operator_in/02/05/2025/d48cdcc6f8cdcb9a11b0438dc3b76eb5.png?thumb=1&w=2560&f=webp&q=85' alt='game'></img></SwiperSlide>
        <SwiperSlide><img src='https://i03.appmifile.com/305_operator_in/21/05/2025/007480688b7bb8dc0e86c3b40ed2ee2c.png?thumb=1&w=2560&f=webp&q=85' alt='game'></img></SwiperSlide>
        <SwiperSlide><img src='https://i03.appmifile.com/598_operator_in/23/06/2025/ea787bcfa397c93cd6913204b08b6082.jpg?thumb=1&w=2560&f=webp&q=85' alt='game'></img></SwiperSlide>
        <SwiperSlide><img src='https://i03.appmifile.com/863_operator_in/02/06/2025/7143eae2ae4b02fa93663d4bfbdf4147.png?thumb=1&w=2560&f=webp&q=85' alt='game'></img></SwiperSlide>
        <SwiperSlide><img src='https://i03.appmifile.com/55_operator_in/04/04/2025/1e11c8a3ec194a851475a9da6168d359.png?thumb=1&w=2560&f=webp&q=85' alt='game'></img></SwiperSlide>
        <SwiperSlide><img src='https://i03.appmifile.com/884_operator_in/04/11/2024/69aba3a4a5d706db1a458b659e7ce39a.png?thumb=1&w=2560&f=webp&q=85' alt='game'></img></SwiperSlide>
      </Swiper>
       
      </section>
      <br>
      </br>
      <br></br>
      <section>
     
      </section>
      <section>
 <div className='container'>
  <div className='row'>
    <div className='col'>
      <br>
      </br>
      <br>
      </br>
      <h1 style={{fontWeight:"bolder"}}>Xiaomi Exclusive Offerings</h1>
    </div>
  </div>
 </div>
 <div className='container'>
  <div className='row'>
    <div className='col-4'>
      <div class="card but">
        <img src='https://i02.appmifile.com/38_operatorx_operatorx_xm/27/11/2024/f7184560e02644c9c4cf5d23b0618c6c.png?thumb=1&f=webp&q=85' alt='game'></img>
  <div class="card-body">
  <h2 style={{fontWeight:"bolder",textAlign:"center"}}>Exclusive Bundels</h2>
    <button className='btn btn-dark lern' style={{textAlign:"center"}}>Learn More</button>

  </div>
</div>
    </div>
    <div className='col-4'>
    <div class="card but">
    <img src='https://i03.appmifile.com/823_operator_in/16/06/2025/e5ae94971baf9c77036f348a6afea1e3.jpg?thumb=1&f=webp&q=85' alt='game'></img>
   <div class="card-body">
   <h2 style={{fontWeight:"bolder",textAlign:"center"}}>Spcial Rewards</h2>
    <button className='btn btn-dark lern' style={{textAlign:"center"}}>Learn More</button>

  </div>
</div>
    </div>
      <div className='col-4'>
      <div class="card but">
        <img src='https://i02.appmifile.com/500_operatorx_operatorx_xm/27/11/2024/9ea7b5fd29f11b0100e9a0b6d3eeebe8.png?thumb=1&f=webp&q=85' alt='game'></img>
  <div class="card-body">
  <h2 style={{fontWeight:"bolder",textAlign:"center"}}>Get the Xiamomi Store</h2>
  <button className='btn btn-dark lern'>Learn More</button>
  </div>
</div>
    </div>
  </div>
 </div>
 <br>
      </br>
      <br>
      </br>
      </section>

      <section>
 <div className='container'>
<div className='row'>
  <div className='col'>
    <h1 style={{fontWeight:"bolder"}}>New Launches </h1>
  </div>
</div>
<div className='row'>
  <div className='col-12'>
    
    <div style={{height:"600px",width:"100%",backgroundColor:"gray",}} className='watch'>
      <h1 style={{color:"white",position:'relative',top:"20px"}}>Redmi Watch Move</h1> <br>
      </br>
      <p style={{color:"white",position:'relative',top:"-11px"}}> your Next Big Move</p>

      <h3 style={{textDecoration:"line-through",color:"white",position:"relative",top:"450px",left:"100px"}}>$3999</h3>
      <h3 style={{color:'black',position:"relative",top:"408px"}}>$1,999</h3>
    </div>
  </div>

</div>
 </div>
 </section>
 <br>
 </br>
<br></br>
<br>
</br>
<br>
</br>
<section>
  <div className='container'>
    <div className='row'>
      <h1 style={{textAlign:"center"}}>Tabltes's</h1>
      {pro.map((bag)=>(
        <div className='col-6' key={bag.id}>
          <br>
          </br>
          <br>
          </br>
          <h1 style={{textAlign:"center",}}>{bag.title}</h1>

          <br>
          </br>
          
          <br>
          </br>
          <img src={bag.img} alt='game'></img>
          <button className='btn btn-primary' style={{position:"relative",top:"170px",right:"280px"}}>Add to card </button>
          <br>
          </br>
          <br>
          </br>
                    <p style={{position:"relative",left:"150px"}}>${bag.price}</p>

          <br>
          </br>
          <br>
          </br>
        </div>
      ))}
    </div>
  </div>
</section>
<br>
</br>
<br>
</br>
<br></br>
<section>

</section>



</div>
  )
}

export default Home
