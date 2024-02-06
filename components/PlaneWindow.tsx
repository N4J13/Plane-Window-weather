import Image from "next/image";
import Arch from "./Arch";

const PlaneWindow = () => {
  return (
    <div className="flexCenter bg-[#eef0f4] backdrop-blur-3xl rounded-[60px] px-20 py-10">
      <div className="flexCenter p-6 rounded-[150px] bg-[#d8dbdf] border-2 border-[#b5bec6] shadow-outline-blue">
        <div className=" h-[380px] w-full rounded-[150px] p-4 overflow-hidden bg-[url('/window.jpg')] bg-no-repeat bg-origin-border bg-cover bg-clip-padding  border-[14px] border-black/30  relative  before:absolute before:-inset-[12px] before:-z-[1]  before:border-transparent  before:rounded-[150px] before:blur-lg before:bg-[url('/window.jpg')] before:border-[14px]   before:bg-clip-border before:box-border   ">
          <Arch />
        </div>
      </div>
    </div>
  );
};

export default PlaneWindow;
