import { testimonialData } from "./TestimonialData";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ClientTestimonial = () => {
  return (
    <div className="bg-[#F7F3F0]">
      <div className="my-container text-center">
        <h2>Happy Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {testimonialData &&
            testimonialData.length > 0 &&
            testimonialData?.map((testimonial) => (
              <div key={testimonial.id}>
                <Rating
                  style={{ maxWidth: 70 }}
                  value={testimonial.rating}
                  readOnly
                />
                <h4>{testimonial.message}</h4>
                <p>
                  {testimonial.name}, {testimonial.state}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
