import { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const DailyNote: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-end pt-6">
      {!isOpen ? (
        // Collapsed vertical button
        <button
          onClick={toggleModal}
          className="flex flex-col items-center bg-blue-500 text-white px-2 py-4 rounded-md hover:bg-blue-600 transition"
        >
          <NavigateBeforeIcon />
          <span className="mt-2 rotate-90">Note</span>
        </button>
      ) : (
        // Expanded box
        <div className="bg-white shadow-lg rounded-lg p-4 w-64 transition-all duration-300">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">Note</span>
            <button
              onClick={toggleModal}
              className="text-gray-600 hover:text-black"
            >
              <NavigateNextIcon />
            </button>
          </div>

          <div className="mt-4 text-gray-700">
            <p>Hello 👋 This is your note!</p>
            <p>You can put more content here...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyNote;
