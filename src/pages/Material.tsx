import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Material: React.FC = () => {
  return (
    <>
      <Link to="/content">
        <ArrowBackIcon />
      </Link>
      <h1>Material</h1>
    </>
  );
};

export default Material;
