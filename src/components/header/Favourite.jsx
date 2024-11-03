import heart from "../../assets/heart.svg";
const Favourite = ({ onShow }) => {
  return (
    <>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={heart} alt="" />
        <button onClick={onShow}>
          <span>Favourite Locations</span>
        </button>
      </div>
    </>
  );
};

export default Favourite;
