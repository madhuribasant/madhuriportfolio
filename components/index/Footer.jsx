import { BsFillTelephoneFill } from "react-icons/bs";
import { SiAdobe , SiCanva , SiAdobeillustrator , SiFigma } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="bg-black flex justify-center text-slate-100 py-2 px-4 gap-2">
        <div className="flex items-center font-normal flex-grow justify-end p-2 text-base">
          <BsFillTelephoneFill /> &nbsp; 9931113032
        </div>
        <div className="flex items-center justify-start flex-grow text-base">
          <SiAdobe/>
          &nbsp;
        <SiCanva/>
          &nbsp;
          <SiAdobeillustrator/>
          &nbsp;
          <SiFigma/>
        </div>
      </footer>
    </>
  );
};

export default Footer;
