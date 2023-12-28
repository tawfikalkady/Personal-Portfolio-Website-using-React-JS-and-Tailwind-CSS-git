// https://swiperjs.com/demos#responsive-breakpoints
// https://codesandbox.io/p/sandbox/f7kswt?file=%2Fsrc%2FApp.jsx%3A1%2C1-12%2C45

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';

//creating array of objects
const reviews=[
    {id:1,name:'Dianne Russell',company:'Starbucks',image:'/src/assets/persone1.png',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.'},
    {id:2,name:'Kristin Watson',company:'Louis Vuitton',image:'/src/assets/persone2.png',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.'},
    {id:3,name:'Kathryn Murphy',company:"McDonald's'",image:'/src/assets/persone3.png',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.'},
    {id:4,name:'Dianne Russell',company:'Starbucks',image:'/src/assets/persone1.png',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.'},
    {id:5,name:'Kristin Watson',company:'Louis Vuitton',image:'/src/assets/persone2.png',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.'},
    {id:6,name:'Kathryn Murphy',company:"McDonald's'",image:'/src/assets/persone3.png',comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.'},
]

const ReviewCard = () => {
    return (
        <>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
        //   pagination={{
        //     clickable: true,
        //   }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        //   modules={[Pagination]}
          className="mySwiper"
        >
          {/* <SwiperSlide>slide1</SwiperSlide> */}
          {
            reviews.map(review => <SwiperSlide key={review.id} className='border border-[#006b6a] p-8 rounded '>
              <div>
                <img src="/src/assets/Stars.png" alt="" className='h-4' />
                <p className='my-5'>{review.comment}</p>
                <div className='flex items-center gap-4'>
                  <img src={review.image} alt="" className='h-10 w-10' />
                  <div >
                    <p className='font-semibold'>{review.name}</p>
                    <p className='text-sm'>{review.company}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>)
          }

        </Swiper>
      </>
    );
};

export default ReviewCard;