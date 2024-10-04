import TestimonialCarousel from "./TestimonialCarousel";

export interface ITestimonialItem {
  name: string;
  role: string;
  pictureUrl: string;
  linkedinUrl: string;
  testimonialText: string;
}

const testimonialList: ITestimonialItem[] = [
  {
    name: "Rodrigo Molina",
    role: "Desenvolvedor Front end | Javascript | Typescript | React.js | Vue.js",
    pictureUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQFrG0A9Ty9Dew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726860904835?e=1733356800&v=beta&t=obBqiyeOwKVkIJTZvB4tE9YKAuX8XwMAoMbtQa26af8",
    linkedinUrl:
      "https://www.linkedin.com/in/devrodrigomolina?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B8Vb%2FBqKoThehB6IxfGxbGQ%3D%3D",
    testimonialText:
      "Pedro has been a consistent source of support and mentorship in the ‘Desenvolvimento Web’ group, where he is one of the administrators. When I was learning React and working on a side project, Pedro reviewed my code with me during several meetings and helped me understand the core concepts. He guided me through debugging my issues quickly, often with just a few strategic changes to the code. His ability to simplify complex topics and provide practical solutions makes him a standout developer and mentor. Any team would benefit greatly from his expertise and collaborative spirit.",
  },
  {
    name: "Ivan Reis",
    role: "Desenvolvedor Full-Stack | React | Next | Javascript | Node.js | Typescript | Express | C# | .NET | ASP.NET | Python | MySQL | SQLite | Mongodb",
    pictureUrl:
      "https://media.licdn.com/dms/image/v2/D4D35AQFi4hPI3EMxfQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1701431368062?e=1728615600&v=beta&t=S9r_K0ufPpL0zsi6KBCdlzqbc75jNzvfi2zGvyif-r4",
    linkedinUrl: "https://www.linkedin.com/in/ivan-reis-b93b32248/",
    testimonialText:
      "Pedro is an invaluable resource in the ‘Desenvolvimento Web’ community. When I faced a challenging issue that blocked my project for days, Pedro stepped in and solved it within two hours, providing a clear explanation and solution. His deep knowledge of React and problem-solving abilities are remarkable, and he always goes the extra mile to ensure other developers succeed. I highly recommend Pedro for any role that values technical expertise and a willingness to help others.",
  },
];
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col justify-center items-center gap-5 pt-20"
    >
      <h2 className="text-2xl font-bold">Testimonials</h2>

      <TestimonialCarousel testimonialList={testimonialList} />
    </section>
  );
};

export default Testimonials;
