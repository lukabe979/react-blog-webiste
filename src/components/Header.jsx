const Header = () => {
  return (
    <div className="flex justify-between items-center h-20 bg-white px-24 drop-shadow-sm">
      <img className="w-36 h-6" src="/header-logo.svg" alt="Header Logo" />
      <button className="px-5 py-2.5 rounded-lg bg-customPurple text-sm font-medium text-white">
        შესვლა
      </button>
    </div>
  );
};

export default Header;
