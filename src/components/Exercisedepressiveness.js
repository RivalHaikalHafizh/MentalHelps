import React from 'react'
import olahragaimg from "../assets/images/olahraga.jpg";
import depresiimg from "../assets/images/depresi.jpg";

function Exercisedepressiveness() {
  const [exercise,setExercise] = React.useState("");
  const [depresivenes,setDepresivenes] = React.useState("");
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("Exercise", JSON.stringify(exercise));
    localStorage.setItem("Depresivenes", JSON.stringify(depresivenes));
  });
    return (
        <div className="flex flex-col w-full bg-white p-px lg:flex-row lg:justify-evenly" id='olahraga'  onMouseEnter={() => {
        setToken(JSON.parse(localStorage.getItem("token")));
      }}>
          <div className="w-full rounded-md pd-5">
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-primary">lebih sering mana olahraga apa depresi</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-secondary">
                <img src={olahragaimg} alt=""/>
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-accent">
              <img src={depresiimg} alt=""/>
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-success">
              {exercise === ''?'...': `olahraga sih ${exercise}`}
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-success">
              {depresivenes === ''?'...': `kalo depresi ${depresivenes}`}
              </div>
            </div>
          </div>
          <div className="w-full flex  justify-center p-5 lg:h-96">
            <div className="card w-80 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">lebih sering yang mana ayo 🙂</h2>
                <div className="card-actions justify-end">
                {token === "" ? (
                <select className="select w-full max-w-xs" disabled>
                  <option> harus login untuk bisa mengisi ini</option>
                </select>
              ) : (
                  <select required className="select select-bordered w-full max-w-xs" onInput={(e) => {
                  setExercise(e.target.value);
                }}>
                    <option disabled selected>
                      seberapa sering berolahraga?
                    </option>
                    <option>Always</option>
                    <option>Never</option>
                    <option>Rarely</option>
                    <option>Sometimes</option>
                  </select>
              )}
                </div>
                <div className="card-actions justify-end">
                {token === "" ? (
                <select className="select w-full max-w-xs" disabled>
                  <option> harus login untuk bisa mengisi ini</option>
                </select>
              ) : (
                  <select className="select select-bordered w-full max-w-xs" onInput={(e) => {
                  setDepresivenes(e.target.value);
                }}>
                    <option disabled selected>
                    seberapa sering depresi?
                    </option>
                    <option>All the time</option>
                    <option>Never</option>
                    <option>Occasionally</option>
                    <option>Rarely</option>
                  </select>
              )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Exercisedepressiveness
