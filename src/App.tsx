import { Img } from "react-image";
import qr from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="w-screen h-screen bg-lightGray flex items-center justify-center">
      <div className="bg-white px-4 pt-4 rounded-2xl flex flex-col items-center shadow-2xl shadow-grayishBlue/20">
        <div className="relative w-64 h-64 rounded-lg overflow-hidden mb-6">
          <Img
            src={qr}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <h1 className="max-w-60 text-darkBlue text-center text-xl font-bold leading-6 mb-4">
          Improve your front-end skills by building projects
        </h1>
        <p className="max-w-[240px] text-center text-[14px] text-grayishBlue font-normal mb-10 leading-4">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
