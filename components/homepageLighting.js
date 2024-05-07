import getRandomColor from './randomColor';

const HomePageLighting = () => {
  const color = getRandomColor();

  return (
    <div
      className={`shape bg-blur ${color} opacity-50`}
      style={{ top: `${Math.random() * 100}%` }}
    />
  );
};

export default HomePageLighting;