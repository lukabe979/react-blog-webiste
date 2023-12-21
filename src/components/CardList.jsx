import Card from "./Card";
import { useLocation } from "react-router-dom";

const CardList = ({ staticTags, customCard }) => {
  const { pathname } = useLocation();

  const wrap = pathname.endsWith("/home") ? "flex-wrap" : "flex-nowrap";

  return (
    <div className={`flex justify-between ${wrap}`}>
      <Card staticTags={staticTags} />
      <Card staticTags={staticTags} />
      <Card staticTags={staticTags} />
      <Card staticTags={staticTags} />
      <Card staticTags={staticTags} />
      <Card staticTags={staticTags} />
    </div>
  );
};

export default CardList;
