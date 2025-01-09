

type Props = {
  isToggled: boolean;
  onToggle: () => void; // Callback function to toggle state
};

const ToggleButton = ({ isToggled, onToggle }: Props) => {
  return (
    <button
    onClick={onToggle}
      className={`${
        isToggled ? " bg-[#00AAF7]" : " bg-[#EAECF0]"
      } h-[20px] p-[2px] m-auto rounded-[12px] flex items-center transition ease-in-out duration-700 w-[36px]`}
    >
      <span
        className={`bg-white drop-shadow-[0px_1px_2px_rgba(16,24,40,0.06),_0px_1px_3px_rgba(16,_24,_40,_0.10)] transition duration-200 rounded-full w-4 h-4 m-0 p-0 shadow-xl   ${
          isToggled ? "translate-x-full" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
};

export default ToggleButton;
