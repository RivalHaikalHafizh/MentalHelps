import React from 'react'

function Irregulareatinghabits() {
  const [eating,setEating] = React.useState("");
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("Eating", JSON.stringify(eating));
  });

  return (
    <div className="flex flex-col w-full bg-white p-px lg:flex-row lg:justify-evenly" id='makan'  onMouseEnter={() => {
      setToken(JSON.parse(localStorage.getItem("token")));
    }}>
      <div className="w-full rounded-md pd-5">
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary">aku lagi main game sambil makan nih </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-secondary">
            kamu udah makan belum
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-accent">
            emmm,kebiasaan makan kamu gimana ?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-info">{eating === ''?'...': `${eating}`}</div>
        </div>
      </div>
      <div className="w-full flex  justify-center p-5 ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">makan yang teratur juga penting loh!</h2>
            <div className="card-actions justify-end">
            {token === "" ? (
                <select className="select w-full max-w-xs" disabled>
                  <option> harus login untuk bisa mengisi ini</option>
                </select>
              ) : (
              <select required className="select select-bordered w-full max-w-xs" onInput={(e) => {
                  setEating(e.target.value);
                }}>
                <option disabled selected>
                 apakah makanmu tidak teratur?
                </option>
                <option>May be</option>
                <option>No</option>
                <option>Yes</option>
              </select>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Irregulareatinghabits