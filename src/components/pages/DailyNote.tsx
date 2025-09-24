import { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const DailyNote: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <div className="bg-black">Hello</div>
  ) : (
    <div className="bg-white">Jalsjdfl</div>
  );
};

export default DailyNote;
