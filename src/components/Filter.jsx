const Filter = ({ staticTags }) => {
  return (
    <div className="flex flex-wrap">
      {staticTags.map((tag, i) => (
        <button
          className="my-1 text-xs font-medium px-3 py-2 rounded-3xl mr-4 text-customCyan-900 bg-customCyan-100"
          key={i}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default Filter;
