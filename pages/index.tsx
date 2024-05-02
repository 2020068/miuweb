import Banner from "@/components/banner";
import HomePage from "./homepage";
import Bubbles from "@/components/bubbles";

const App = () => {
  return (
    <div className="bg-white">
      <HomePage />
      <Banner />
      <Bubbles />
      <div className="h-64">dsa</div>
    </div>
  );
};

export default App;
