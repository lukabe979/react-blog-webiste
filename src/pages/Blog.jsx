import BlogCard from "../components/BlogCard";
import SimilarBlogSlider from "../components/SimilarBlogSlider";
const staticTags = [
  { name: "მარკეტი", color: "customYellow" },
  { name: "აპლიკაცია", color: "customGreen" },
  { name: "ხელოვნური ინტელექტი", color: "" },
  { name: "UI/UX", color: "" },
  { name: "კვლევა", color: "" },
  { name: "Figma", color: "" },
];

const Blog = () => {
  return (
    <div className="px-24">
      <div className="flex  relative justify-center mt-16">
        <button className="absolute left-0 w-11 h-11">
          {" "}
          <img src="/back-button.svg" alt="Back Button" />
        </button>
        <BlogCard staticTags={staticTags} />
      </div>
      <div className="text-3xl font-bold mb-10">მსგავსი სტატიები</div>
      <SimilarBlogSlider staticTags={staticTags} />
    </div>
  );
};

export default Blog;
