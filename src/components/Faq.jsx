import FaqList from "./FaqList";
const dummyData = [
  {
    id: 1,
    qustion: "What is Gaming",
    answer:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis sapiente qui magnam officia neque! Quod officiis rerum atque excepturi, debitis pariatur nulla consequuntur tenetur quae, quo, ipsum aliquid natus. ",
  },
  {
    id: 2,
    qustion: "What is Gaming",
    answer:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis sapiente qui magnam officia neque! Quod officiis rerum atque excepturi, debitis pariatur nulla consequuntur tenetur quae, quo, ipsum aliquid natus. ",
  },
  {
    id: 3,
    qustion: "What is Gaming",
    answer:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis sapiente qui magnam officia neque! Quod officiis rerum atque excepturi, debitis pariatur nulla consequuntur tenetur quae, quo, ipsum aliquid natus. ",
  },
  {
    id: 4,
    qustion: "What is Gaming",
    answer:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis sapiente qui magnam officia neque! Quod officiis rerum atque excepturi, debitis pariatur nulla consequuntur tenetur quae, quo, ipsum aliquid natus. ",
  },
  {
    id: 5,
    qustion: "What is Gaming",
    answer:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis sapiente qui magnam officia neque! Quod officiis rerum atque excepturi, debitis pariatur nulla consequuntur tenetur quae, quo, ipsum aliquid natus. ",
  },
];

const Faq = () => {
  return (
    <section className="bg-black py-16">
      <div className="w-10/12 mx-auto flex sm: flex-col md:flex-row justify-between">
        <div className="lg:w-1/3 ">
          <h1 className="font-body font-bold text-4xl text-white pb-8 md:pb-0">
            QUESTIONS?
            <br /> WE GOT THE ANSWERS!
          </h1>
        </div>
        {/**List of question Render Here*/}
        <div className="space-y-6 md:w-3/4 lg:w-2/3">
          {dummyData.map((data) => {
            return <FaqList key={data.id} data={data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
