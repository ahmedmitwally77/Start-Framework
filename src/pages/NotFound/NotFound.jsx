import img from "../../assets/image.png";
export default function NotFound() {
  return (
    <div className="py-6">
      <h1 className="text-4xl text-green-600 font-bold  mt-12 md:mt-5  mb-2 text-center">Page Not Found</h1>
      <div className="not-found  flex justify-center items-center">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
