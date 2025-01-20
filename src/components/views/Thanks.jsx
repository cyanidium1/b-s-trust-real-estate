import { NavLink } from "react-router-dom";
import img from "../../images/palms.jpg";

function Thanks({ data }) {
  return (
    <div
      className="h-[70vh] w-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-white text-center text-2xl font-bold mb-4 max-w-[88%]">
        {data.investModal.thanks}
      </h2>
      <NavLink
        to="/"
        className="w-fit mb-10 select-none rounded-lg bg-amber-300 p-2 text-center align-middle font-sans text-lg font-semibold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        {data.investModal.toHome}
      </NavLink>
    </div>
  );
}

export default Thanks;
