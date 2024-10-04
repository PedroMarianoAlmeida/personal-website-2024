import { ITestimonialItem } from ".";

interface TestimonialItemProps {
  testimonialList: ITestimonialItem[];
}
const TestimonialGroup = ({ testimonialList }: TestimonialItemProps) => {
  return (
    <div className="flex gap-3 flex-col">
      {testimonialList.map(({ name, pictureUrl, role, testimonialText }) => {
        return (
          <div id={`testimonial ${name}`} key={name}>
            <div className="card bg-base-100 shadow-xl border border-primary w-auto">
              <div className="card-body">
                <div className="card-title flex align-middle ">
                  <div className="avatar">
                    <div className="w-24 rounded-full ">
                      <img className="mt-0 mb-0" src={pictureUrl} />
                    </div>
                  </div>
                  <h2 className="mb-0 mt-0 ml-2">{name}</h2>
                </div>
                <p className="text-neutral-content">{testimonialText}</p>
                <div className="card-actions justify-end">
                  <p className="">{role}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialGroup;
