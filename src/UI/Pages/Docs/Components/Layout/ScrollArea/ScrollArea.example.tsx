import { Scrollbar } from "react-hexa-dev";
import {
  FaBaby,
  FaGalacticRepublic,
  FaHeart,
  FaScreenpal,
  FaSpaceAwesome,
  FaTv,
  FaGamepad,
} from "react-icons/fa6";

const ScrollAreaExamples = () => {
  const words = [
    <FaHeart size={50} />,
    <FaBaby size={50} />,
    <FaSpaceAwesome size={50} />,
    <FaGalacticRepublic size={50} />,
    <FaGamepad size={50} />,
    <FaScreenpal size={50} />,
    <FaTv size={50} />,
  ];

  const colors = ["blue", "green", "yellow", "purple", "orange"];

  const getRandomPosition = () => {
    return `${Math.random() * 80}%`;
  };

  return (
    <Scrollbar maxHeight="fit">
      <div className="m-auto size-[250px] gap-4 bg-white text-2xl">
        <div className="m-auto h-[500px] w-[500px] bg-red-500 text-2xl relative">
          {words.map((word, index) => (
            <div
              key={index}
              className="text-${} absolute text-white font-bold"
              style={{
                top: getRandomPosition(),
                left: getRandomPosition(),
                transform: `rotate(${Math.random() * 360}deg)`,
                color: colors[Math.floor(Math.random() * colors.length)],
              }}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </Scrollbar>
  );
};

export default ScrollAreaExamples;
