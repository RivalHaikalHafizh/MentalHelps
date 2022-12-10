import React from 'react'

function Numerik() {
  const [course,setCourse] = React.useState("");
  const [medsos,setMedsos] = React.useState("");
  const [hoby,setHoby] = React.useState("");
  const [sleep,setSleep] = React.useState("");
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("Course", JSON.stringify(course));
    localStorage.setItem("Medsos", JSON.stringify(medsos));
    localStorage.setItem("Hoby", JSON.stringify(hoby));
    localStorage.setItem("Sleep", JSON.stringify(sleep));
  });
    return (
        <div className="flex flex-col w-full bg-white p-px lg:flex-row lg:justify-evenly" id='berapajam'  onMouseEnter={() => {
          setToken(JSON.parse(localStorage.getItem("token")));
        }}>
          <div className="w-full rounded-md pd-5">
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-primary">lebih sering mana olahraga apa depresi</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-secondary">
                wahhh,bisa ceritain lagi tentang kamu yang lain
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-success">
              {course === ''?'...': `aku melakukan kursus online ${course} jam`}
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-success">
              {medsos === ''?'...': `bermain sosial media ${medsos} jam`}
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-primary">
              {hoby === ''?'...': `melakukan hoby aku sekitar ${hoby} jam`}
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-primary">
              {sleep === ''?'...': `dan aku menambah waktu tidur ${sleep} jam`}
              </div>
            </div>
          </div>
          <div className="w-full flex  justify-center p-5 lg:h-96">
            <div className="card w-80 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">ceritain lagi kebiasaan kamu gimana</h2>
                <div className="card-actions justify-end">
                {token === "" ? (
                <select className="select w-full max-w-xs" disabled>
                  <option> harus login untuk bisa mengisi ini</option>
                </select>
              ) : (
                  <select required className="select select-bordered w-full max-w-xs"onInput={(e) => {
                  setCourse(e.target.value);
                }}>
                    <option disabled selected>
                      berapa jam kursus/belajar online ?
                    </option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>more than 3</option>
                  </select>
              )}
                </div>        
                <div className="card-actions justify-end">
                {token === "" ? (
                <select className="select w-full max-w-xs" disabled>
                  <option> harus login untuk bisa mengisi ini</option>
                </select>
              ) : (
                  <select required className="select select-bordered w-full max-w-xs"onInput={(e) => {
                  setMedsos(e.target.value);
                }}>
                    <option disabled selected>
                    berapa jam bermain sosial media?
                    </option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
              )}
                </div>
                <div className="card-actions justify-end">
                {token === "" ? (
                <select className="select w-full max-w-xs" disabled>
                  <option> harus login untuk bisa mengisi ini</option>
                </select>
              ) : (
                  <select required className="select select-bordered w-full max-w-xs"onInput={(e) => {
                  setHoby(e.target.value);
                }}>
                    <option disabled selected>
                    berapa jam melakukan hoby?
                    </option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
              )}
                </div>
                <div className="card-actions justify-end">
                {token === "" ? (
                <select className="select w-full max-w-xs" disabled>
                  <option> harus login untuk bisa mengisi ini</option>
                </select>
              ) : (
                  <select required className="select select-bordered w-full max-w-xs"onInput={(e) => {
                  setSleep(e.target.value);
                }}>
                    <option disabled selected>
                    berapa jam menambah waktu tidur?
                    </option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
              )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Numerik