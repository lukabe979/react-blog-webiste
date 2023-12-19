import headerLogo from "/public/header-logo.svg"; // Adjust the path based on your project structure

const Header = () => {
  return (
    <div className="flex justify-between items-center h-20 bg-white px-24 drop-shadow-sm">
      <img className="w-36 h-6" src={headerLogo} alt="Header Logo" />
      <button className="px-5 py-2.5 rounded-lg bg-mainPurple text-sm font-medium text-white">
        შესვლა
      </button>
    </div>
  );
};

export default Header;
