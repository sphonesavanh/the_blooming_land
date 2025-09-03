import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Abroad: React.FC = () => {
  return (
    <div>
      <Link to="/content">
        <ArrowBackIcon />
      </Link>
      <h1>Life Abroad</h1>
    </div>
  );
};

export default Abroad;
