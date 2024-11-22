import img from "../../../public/home.svg";
import Star from "../../Components/Star/Star";
export default function Home() {
  return (
    <section
      className={`bg-[#1ABC9C] section flex justify-center items-center flex-col`}>
      <div className="inner text-center flex flex-col items-center">
        <div className="image w-64">
          <img src={img} alt="" className="w-full" />
        </div>
        <h1 className="text-4xl text-white font-bold uppercase mt-9 mb-5 text-center">start Framework</h1>
        <Star color={"white"} />
        <p className="text-white text-md mt-5">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
}
