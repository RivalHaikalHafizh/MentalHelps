import React from "react";
import gameimg from "../assets/images/game.jpg";

function Screentime() {
  const [screentime, setScreentime] = React.useState("");
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("Screentime", JSON.stringify(screentime));
  });

  return (
    <div
      className="flex flex-col w-full bg-white p-px lg:flex-row lg:justify-evenly"
      id="screentime"
      onMouseEnter={() => {
        setToken(JSON.parse(localStorage.getItem("token")));
      }}
    >
      <div className="w-full rounded-md pd-5">
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-secondary">
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn">
              ini Foto klik dong
            </label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <img src={gameimg} alt="" />
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn">
                    aku lagimain game nih
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-accent">
            kamu suka screen time berapa lama ?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-info">
            {screentime === "" ? "..." : `sekitar ${screentime}`}
          </div>
        </div>
      </div>
      <div className="w-full flex  justify-center p-5 ">
      <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
          <h2 className="card-title">taugasih!</h2>
            <p>
              Apa itu Screen Time? Screen time adalah waktu yang dihabiskan
              untuk: Menonton televisi, menggunakan komputer/laptop, bermain
              video game, gawai. Akibat yang terjadi pada mata Anak jika sering
              menggunakan Gawai.
            </p>
            <div className="card-actions justify-end">
            {token === "" ? (
                <select className="select w-full max-w-xs" disabled>
                  <option> harus login untuk bisa mengisi ini</option>
                </select>
              ) : (
                <select required className="select select-bordered w-full max-w-xs" onInput={(e) => {
                    setScreentime(e.target.value);
                  }}>
                    <option disabled selected>
                      jadi kamu screen time berapa lama?
                    </option>
                    <option>2 to 3 hours</option>
                    <option>3 to 4 hours</option>
                    <option>4 to 5 hours</option>
                    <option>5 to 6 hours</option>
                  </select>
              )}
            </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Screentime;
