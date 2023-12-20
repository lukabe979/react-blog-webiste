import Card from "./Card";

const CardList = ({ staticTags }) => {
  return (
    <div className="flex flex-wrap justify-between">
      <Card staticTags={staticTags} />
      <Card staticTags={staticTags} />
      <Card staticTags={staticTags} />
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
