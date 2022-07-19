import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
// import 'swiper/react'
import profilepic1 from '../../img/profile1.jpg'
import profilepic2 from '../../img/profile2.jpg'
import profilepic3 from '../../img/profile3.jpg'
import profilepic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {

    const clients=[
        {
            img:profilepic1,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint praesentium unde sapiente temporibus atque. "
        },
        {
            img:profilepic2,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint praesentium unde sapiente temporibus atque. "
        },
        {
            img:profilepic3,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint praesentium unde sapiente temporibus atque. "
        },
        {
            img:profilepic4,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint praesentium unde sapiente temporibus atque. "
        },
    ]
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional work </span>
            <span>from me...</span>

            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>

        </div>

        {/* slider */}

        <Swiper
        modules={[Pagination]}
        slidesPerview={1}
        pagination={{clickable:true}}
        >

            {clients.map((client,index)=>{
                return(
                <SwiperSlide key={index}>
                    <div className="testimonial" id='Testimonials'>
                    <img src={client.img} alt="" />
                    <span>{client.review}</span>

                    </div>
                    
                </SwiperSlide>

                )
            })}
           
        </Swiper>
    </div>
  )
}

export default Testimonials