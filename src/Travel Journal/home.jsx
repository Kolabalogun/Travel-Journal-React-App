import DesignInterface from "./designInterface";
import Navbar from "./navBar";
import "./travelstyle.css";
import travelArray from "./travelArray";

const Home = () => {
  const newArray = travelArray.map((neww) => {
    return <DesignInterface key={neww.id} neww={neww} />;
  });

  return (
    <div className="container">
      <Navbar />
      <div className="section">
      {newArray}
      </div>
      
    </div>
  );
};

export default Home;
