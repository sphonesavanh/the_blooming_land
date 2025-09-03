import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Passions: React.FC = () => {
  return (
    <div>
      <div className="bg-white ">
        <Link to="/content">
          <ArrowBackIcon />
        </Link>
      </div>
      <h1>Explore the World</h1>
    </div>
  );
};

export default Passions;
