import Tag from "./Tag";

const Card = ({ staticTags }) => {
  return (
    <div className="flex flex-col w-125 h-130 mb-12">
      <div
        className="bg-cover bg-center bg-card-image w-full h-80 rounded-2xl"
        style={{ backgroundImage: "url('/card-img.jpg')" }}
      ></div>
      <div className="flex flex-col">
        <div className="text-base font-medium mt-5 mb-2">ლილე კვარაცხელია</div>
        <div className="text-xs font-regular text-gray-400">02.11.2023</div>
        <div className="text-xl font-bold leading-7 my-3">
          მოსმენა ყველს უფრო გემრიელს ხდის?
        </div>
        <div>
          <Tag staticTags={staticTags} />
        </div>
        <p className="text-base leading-7 my-3">
          6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
          სიზუსტისთვის, ეს პროცესი...
        </p>
        <div className="flex">
          <a href="#" className="text-customPurple font-medium text-sm">
            სრულად ნახვა
          </a>
          <img src="/link-arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
