import React from "react";

function Missunderstanduingoverthingking() {
  const [misund,setMisund] = React.useState("");
  const [overthingking,setOverthingking] = React.useState("");
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("Misund", JSON.stringify(misund));
    localStorage.setItem("Overthingking", JSON.stringify(overthingking));
  });
  return (
    <div className="flex flex-col w-full bg-white p-px lg:flex-row lg:justify-evenly" id="tersinggung"  onMouseEnter={() => {
      setToken(JSON.parse(localStorage.getItem("token")));
    }}>
      <div className="w-full rounded-md pd-5">
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary">
            kamu orang nya sering tersinggung ga?
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-secondary">
            apa sering overthingking?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-success">{misund === ''?'...': `${misund}`}</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-success">{overthingking === ''?'...': `${overthingking} untuk overthingking`}</div>
        </div>
      </div>
      <div className="w-full flex  justify-center p-5 lg:h-96">
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">overthingking? 🤨</h2>
            <p>
              overthinking adalah berpikir terus-menerus mengenai hal yang
              negatif.
            </p>
            <div className="card-actions justify-end">
            {token === "" ? (
                <select className="select w-full max-w-xs" disabled>
                  <option> harus login untuk mengisi ini</option>
                </select>
              ) : (
              <select required className="select select-bordered w-full max-w-xs" onInput={(e) => {
                  setMisund(e.target.value);
                }}>
                <option disabled selected>
                  apakah kamu sering tersinggung?
                </option>
                <option>Maybe</option>
                <option>No</option>
                <option>Yes</option>
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
                  setOverthingking(e.target.value);
                }}>
                <option disabled selected>
                  seberapa sering overhingking?
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
  );
}

export default Missunderstanduingoverthingking;
