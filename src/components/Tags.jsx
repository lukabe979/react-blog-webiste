const Tags = ({ staticTags }) => {
  console.log(`text-${staticTags[0].color}`);

  return (
    <div className="flex flex-wrap">
      {staticTags.map((tag, i) => (
        <div
          className="my-1 text-xs font-medium px-3 py-2 rounded-3xl mr-4 text-customCyan-900 bg-customCyan-100"
          key={i}
        >
          {tag.name}
        </div>
      ))}
    </div>
  );
};

export default Tags;
