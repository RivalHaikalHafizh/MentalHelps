import React from "react";

function Age() {
  const [token, setToken] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [age, setAge] = React.useState("");

  function munculkannama() {
    const localusername = JSON.parse(localStorage.getItem("username"));
    setUsername(localusername);
  }
  React.useEffect(() => {
    localStorage.setItem("Age", JSON.stringify(age));
  }, [age]);
  return (
    <div
      id="umur" className="flex flex-col w-full bg-white p-px lg:flex-row lg:justify-evenly"
      onMouseEnter={() => {
        setToken(JSON.parse(localStorage.getItem("token")));
      }} 
    >
      <div className="w-full rounded-md pd-5" >
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary">
            {token === "" ? "Halo" : "udah ada token"}
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-secondary">
            aku robohealth,kita ngobrol yuk?
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-accent">
            emmm,boleh tahu umur kamu ?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-info">iya boleh</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-success">
            {age === "" ? "..." : `sekitar ${age}`}
          </div>
        </div>
      </div>
      <div className="w-full flex  justify-center p-5 ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Halo!</h2>
            <p>
              Tahukah kamu bahwa umur dapat mempengeruhi kondisi mental
              seseorang Menurut hasil survei yang dipublikasikan oleh The Royal
              Women Hospital, sebanyak 75 persen anak muda yang membutuhkan
              bantuan profesional kesehatan mental tidak memeriksakan dirinya
              dan membiarkan gejala gangguan.
            </p>
            <div className="card-actions justify-end">
              {token === "" ? (
                <select className="select w-full max-w-xs" disabled>
                  <option> harus login untuk bisa mengisi ini</option>
                </select>
              ) : (
                <select
                  required
                  className="select select-bordered w-full max-w-xs"
                  onInput={(e) => {
                    setAge(e.target.value);
                  }}
                >
                  <option disabled selected value={""}>
                    berapa umur kamu?
                  </option>
                  <option value={"13 to 15 years"}>13 to 15 years</option>
                  <option value={"16 to 18 years"}>16 to 18 years</option>
                  <option value={"18 to 22 years"}>18 to 22 years</option>
                  <option value={"23 to 26 years"}>23 to 26 years</option>
                </select>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Age;
