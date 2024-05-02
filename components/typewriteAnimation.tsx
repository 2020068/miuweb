import { useState, useEffect } from "react";
interface TypewriterAnimationProps {
  children: React.ReactNode; // Define children prop
}
const TypewriterAnimation: React.FC<TypewriterAnimationProps> = ({
  children,
}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const fullText =
    "Founded in 2002, MIU stands as a beacon of higher education in Ulaanbaatar, Mongolia. Thanks to the generous support of former president Natsagiin Bagabandi, the university was granted a substantial land parcel of 17,100 ㎡ for its inaugural building. Today, MIU is renowned for its English-language programs, making it a leader in education across Central Asia. With 14 esteemed bachelor’s programs, MIU is dedicated to nurturing the next generation of global leaders from Mongolia, Russia, China, South Korea, and beyond. Education at MIU is about grasping the intricacies of our interconnected world, fostering critical thinking, and empowering students to make a positive impact on society. Anchored by a comprehensive core curriculum, MIU offers a wealth of experiential learning opportunities across a diverse range of disciplines. Encircled by a dynamic campus community, MIU equips students with essential skills to navigate and succeed in an ever-evolving global landscape";

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(fullText.substring(0, index));
      setIndex(index + 1);
    }, 40); // Adjust the speed of typing here (milliseconds)

    return () => clearTimeout(timer);
  }, [index, fullText]);

  return (
    <div className="typewriter">
      <p>{text}</p>
    </div>
  );
};

export default TypewriterAnimation;
