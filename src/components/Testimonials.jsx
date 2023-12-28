import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  return (
    <div className="lg:px-12 px-4 my-32 bg-bgShade py-32  " id="testimonials" >
      <div className="text-headingColor mb-20  ">
        <p className="text-xl font-semibold mb-5 ">Clients Feedback </p>
        <h2 className="md:text-5xl text-4xl font-bold ">Customer testimonials</h2>
      </div>
      {/* ourreviews goes here, we will use swiper js */}
      <ReviewCard/>
    </div>
  );
};

export default Testimonials;
