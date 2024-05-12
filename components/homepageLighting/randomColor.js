const colors = [
  "bg-teal-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-pink-500",
  // Add more colors to the array
  "bg-yellow-500",
  "bg-red-500",
  "bg-green-500",
  "bg-gray-500",
  "bg-indigo-500",
  "bg-orange-500",
  "bg-lime-500",
  "bg-emerald-500",
  "bg-fuchsia-500",
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export default getRandomColor;