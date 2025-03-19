import { InputAdornment, TextField, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer
      className="w-screen bg-black backdrop-blur-md p-4"
      
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <div className="mb-1 md:mb-0">
            <h2 className="text-3xl font-bold">
              Nagendra <span className="text-pink-500">Babu</span>
            </h2>
            <p className="text-gray-400 mt-2">
              I am a frontend developer from India with 3+ years of experience
              in company
              <span className="text-gray-300 font-medium"> Capgemini.</span>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row  mt-2 text-gray-400 text-sm">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">
              Term of Services
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Connect with me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
