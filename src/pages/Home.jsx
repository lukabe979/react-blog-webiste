import CardList from "../components/CardList";
import Tags from "../components/Tags";

const staticTags = [
  { name: "მარკეტი", color: "customYellow" },
  { name: "აპლიკაცია", color: "customGreen" },
  { name: "ხელოვნური ინტელექტი", color: "" },
  { name: "UI/UX", color: "" },
  { name: "კვლევა", color: "" },
  { name: "Figma", color: "" },
];

const Home = () => {
  return (
    <div className="px-24">
      <div className="flex justify-between items-center my-24">
        <h1 className="text-6xl font-bold">ბლოგი</h1>
        <div
          className="bg-cover bg-center bg-card-image w-1/2 h-52"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        ></div>
      </div>
      <div className="flex justify-center mb-20">
        <Tags staticTags={staticTags} />
      </div>
      <CardList staticTags={staticTags} />
    </div>
  );
};

export default Home;
