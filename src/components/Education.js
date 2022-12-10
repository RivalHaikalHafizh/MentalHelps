import React from "react";
import pendidikanimg from "../assets/images/pendidikan.jpg";
function Education() {
  const [education,setEducation] = React.useState("");
  const [token, setToken] = React.useState("");
  
  React.useEffect(() => {
    localStorage.setItem("Education", JSON.stringify(education));
  });

  return (
    <div className="flex flex-col w-full bg-white p-px lg:flex-row lg:justify-evenly" id="pendidikan"  onMouseEnter={() => {
      setToken(JSON.parse(localStorage.getItem("token")));
    }}>
      <div className="w-full rounded-md pd-5">
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-secondary">
            owh iya, kalo aku belom satu tahun juga belum
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary">hahahaha</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-accent">
            kalo tingkat pendidikan kamu gimana ?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-info">{education === ''?'...': ` ${education}`}</div>
        </div>
      </div>
      <div className="w-full flex  justify-center p-5 ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={pendidikanimg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
            {token === "" ? (
                <select className="select w-full max-w-xs" disabled>
                  <option> harus login untuk bisa mengisi ini</option>
                </select>
              ) : (
              <select required className="select select-bordered w-full max-w-xs" onInput={(e) => {
                  setEducation(e.target.value);
                }}>
                <option disabled selected>
                  Apa Tingkat Pendidikan Kamu?
                </option>
                <option>Higher Secondary School</option>
                <option>Post Graduate</option>
                <option>Secondary School</option>
                <option>Under Graduate</option>
              </select>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
