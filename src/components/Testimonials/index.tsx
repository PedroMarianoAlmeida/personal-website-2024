import TestimonialGroup from "./TestimonialGroup";

export interface ITestimonialItem {
  name: string;
  role: string;
  pictureUrl: string;
  linkedinUrl: string;
  testimonialText: string;
  category: "mentored" | "co-worker developer" | "co-worker non-developer";
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
    category: "mentored",
  },
  {
    name: "Yago Lucas",
    role: "SQL | JavaScript | CSS | HTML | Salesforce | CRM",
    pictureUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQEswoXkWfohvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688988992170?e=1733356800&v=beta&t=TPqmGLvH5ByelKNvrxqRU_FFaCccA-pjdGLcLOWfYyU",
    linkedinUrl: "https://www.linkedin.com/in/yago-lucas-silva/",
    testimonialText:
      "Pedro is an extremely proactive person, always willing to share his vast knowledge with other developers. Not only did he help me secure my current job, but he was also essential in my professional journey through his mentorship in the 'Web Development' group. Whenever I faced technical challenges in my daily work, Pedro was there to guide me and provide effective solutions",
    category: "mentored",
  },
  {
    name: "Ivan Reis",
    role: "Desenvolvedor Full-Stack | React | Next | Javascript | Node.js | Typescript | Express | C# | .NET | ASP.NET | Python | MySQL | SQLite | Mongodb",
    pictureUrl:
      "https://media.licdn.com/dms/image/v2/D4D35AQFi4hPI3EMxfQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1701431368062?e=1728615600&v=beta&t=S9r_K0ufPpL0zsi6KBCdlzqbc75jNzvfi2zGvyif-r4",
    linkedinUrl: "https://www.linkedin.com/in/ivan-reis-b93b32248/",
    testimonialText:
      "Pedro is an invaluable resource in the ‘Desenvolvimento Web’ community. When I faced a challenging issue that blocked my project for days, Pedro stepped in and solved it within two hours, providing a clear explanation and solution. His deep knowledge of React and problem-solving abilities are remarkable, and he always goes the extra mile to ensure other developers succeed. I highly recommend Pedro for any role that values technical expertise and a willingness to help others.",
    category: "mentored",
  },
  {
    name: "Eduardo Mielo",
    role: "Project Manager & Educator",
    pictureUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQHf327ekhkjtw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701795297677?e=1733356800&v=beta&t=TvwyXK9Fcuh4xToPhUn57YqwAUhw6F_eib_lj5qMVXQ",
    linkedinUrl: "https://www.linkedin.com/in/eduardo-mielo-9663011ab/",
    testimonialText: `I have worked closely to Pedro for a few months as his PM and there's one thing I can say about this experience: I miss working with him!

    His abilities on React/React Native were amazing! He's a detail-oriented developer that works hard to meet expectations on developing a product. His tech skills are amazing and he's always trying to improve his work.
    
    Regarding his communication skills, he's great at explaining what his questions are and how's the task progress. He's responsive and responsible to and with his team. In addition to that, he's also a great person to talk to due to his friendly and kind presence!`,

    category: "co-worker non-developer",
  },
  {
    name: "Muhammad Ilham",
    role: "Frontend Developer | ReactJS | React Native | Typescript",
    pictureUrl:
      "https://media.licdn.com/dms/image/v2/C5603AQFwexHsQ31jYA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1660942999281?e=1733356800&v=beta&t=uUVchxD818B-vednst4J_NR0TvGXJ8bvMzYSMcOSSEw",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-ilham-shogir/",
    testimonialText: `I am pleased to recommend Pedro for roles in software engineering, particularly in React Native development. At Fetchly Labs, Pedro proved himself as a proficient and innovative engineer.

    His mastery of React Native significantly contributed to our projects, characterized by clean, efficient, and maintainable code. Pedro’s ability to articulate complex technical concepts made him a valuable mentor within our team.
    
    Moreover, Pedro demonstrated commendable leadership in spearheading challenging projects, showcasing his technical expertise and calm demeanor under pressure.
    
    In summary, Pedro’s technical skills, coupled with his team collaboration and leadership qualities, make him an outstanding candidate for any relevant position.`,
    category: "co-worker developer",
  },
  {
    name: "Regis Dehoux",
    role: "Backend Web Developer",
    pictureUrl:
      "https://media.licdn.com/dms/image/v2/C4E03AQGxtnrHSRKKJA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1591799275287?e=1733356800&v=beta&t=kkSl7wDhIZZBcd9z7wOZD6bVA0yTPPrLsU16pNioF10",
    linkedinUrl: "https://www.linkedin.com/in/ivan-reis-b93b32248/",
    testimonialText:
      "I really enjoed Pedro's energy and mindset, always geared towards finding a solution to any issue. This guy does not give up. Keep up the good work Pedro. I hope you find your fit soon in this big world.",
    category: "co-worker developer",
  },
  {
    name: "Phoebe Imirhe",
    role: "Scrum Master @ Groupe Dynamite | PSM I, SAFe 5",
    pictureUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQEtpRPCEMUnOA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695065014082?e=1733356800&v=beta&t=VkAbKMltXzEqfrQZyLHM_tYBEJXZ6w-7F_DlsEq0gUc",
    linkedinUrl: "https://www.linkedin.com/in/phoebe-imirhe-a4a1a27a/",
    testimonialText:
      "Pedro brings such a bright energy to the team, He integrated into the team very quickly and was impressively fast in learning about the organization’s products and development. He’s confident and is not shy to express his opinion as well as being open to learn.",
    category: "co-worker non-developer",
  },
  {
    name: "Tauan Camargo",
    role: "Senior Software Developer (FullStack) * iOS Developer * TypeScript * SwiftUI * Node.js * Javascript * React * React Native * NextJs * Go Lang",
    pictureUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQE3yuXqDRxW-w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1697164450496?e=1733356800&v=beta&t=W82tJM45TPL67vaeIsONUiGlZ2D52thoiQylKO1nGRA",
    linkedinUrl: "https://www.linkedin.com/in/phoebe-imirhe-a4a1a27a/",
    testimonialText:
      "Pedro Almeida was an incredible asset to our team during his time at MOZ as a Full Stack Developer. His drive, initiative, and ability to grasp new concepts quickly set him apart from others. Pedro’s eagerness to take on challenging projects and his knack for asking insightful questions underscore his independence and collaboration skills. His prior experience and the unique skills he brought to the table were instrumental in driving change and innovation within our team. Working alongside Pedro has been an absolute pleasure and I am confident that he will prove to be an invaluable addition to any team he joins.",
    category: "co-worker developer",
  },
];
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col justify-center items-center gap-5 pt-20"
    >
      <h2 className="text-2xl font-bold">Testimonials</h2>

      <TestimonialGroup testimonialList={testimonialList} />
    </section>
  );
};

export default Testimonials;
