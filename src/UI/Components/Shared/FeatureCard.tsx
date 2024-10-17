import { useState } from "react";
import { Card, Ring } from "react-hexa-dev";

const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Ring
      options={{
        ringThickness: 2,
        borderThickness: 2,
        ringVariant: isHovered ? "info" : "transparent",
        borderVariant: isHovered ? "primary" : "transparent",
      }}
      className={`${isHovered ? "shadow-lg shadow-standard" : ""}`}
    >
      <Card
        options={{
          border: {
            thickness: "xl",
            variant: "standard",
          },
        }}
        className="p-4 w-[300px] h-[200px] cursor-default dark:bg-black-d dark:text-standard-l bg-white-d text-black-l"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="text-xl font-semibold mb-2 dark:text-white-l">{title}</h3>
        <p>{description}</p>
      </Card>
    </Ring>
  );
};

export default FeatureCard;
