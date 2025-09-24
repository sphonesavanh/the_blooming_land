import Japan from "/images/country_flag/japan.jpg";
import Aus from "/images/country_flag/Australia.jpg";
import Germany from "/images/country_flag/germany.png";
import Laos from "/images/country_flag/laos.png";
import Malay from "/images/country_flag/malay.jpg";
import Spain from "/images/country_flag/spain.png";
import Switz from "/images/country_flag/switz.png";

const Flag: React.FC = () => {
    return (
      <div className="flex">
        <img src={Japan} alt="japan flag" className="w-25 h-25" />
        <img src={Aus} alt="australia flag" className="w-25 h-25" />
        <img src={Germany} alt="germany flag" className="w-25 h-25" />
        <img src={Laos} alt="laos flag" className="w-25 h-25" />
        <img src={Malay} alt="malaysia flag" className="w-25 h-25" />
        <img src={Spain} alt="spain flag" className="w-25 h-25" />
        <img src={Switz} alt="switzerland flag" className="w-25 h-25" />
        <img src={Japan} alt="japan flag" className="w-25 h-25" />
        <img src={Aus} alt="australia flag" className="w-25 h-25" />
        <img src={Germany} alt="germany flag" className="w-25 h-25" />
        <img src={Laos} alt="laos flag" className="w-25 h-25" />
        <img src={Malay} alt="malaysia flag" className="w-25 h-25" />
        <img src={Spain} alt="spain flag" className="w-25 h-25" />
        <img src={Switz} alt="switzerland flag" className="w-25 h-25" />
        <img src={Japan} alt="japan flag" className="w-25 h-25" />
        <img src={Aus} alt="australia flag" className="w-9 h-25" />
      </div>
    );
}

export default Flag;