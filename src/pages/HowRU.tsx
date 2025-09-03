import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const HowRU: React.FC = () => {
  return (
    <div>
      <div className="bg-white ">
        <Link to="/content">
          <ArrowBackIcon />
        </Link>
      </div>
      <h1>are you actually OKAY?</h1>
    </div>
  );
};

export default HowRU;
