import React from "react";
import { register, signin } from "../api";
import mentalimg from "../assets/images/hero.jpg";

function Hero() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [akses, setAkses] = React.useState(false);

  const daftar = {
    email: email,
    username: username,
    password: password,
  };

  React.useEffect(() => {
    localStorage.setItem("token", JSON.stringify(response.access_token));
    localStorage.setItem("username", JSON.stringify(username));
  },[response.access_token, username]);

  return (
    <div className="">
      <div
        className="hero min-h-screen bg-base-200 bg-cover bg-left pt-10 mb-2 "
        style={{ backgroundImage: `url(${mentalimg})` }}
      >
        {akses === true? (
          <div className="hero-content flex-col lg:flex-row-reverse">
   {response.access_token === undefined || response.access_token===''  ?(
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-primary">Login now!</h1>
              <p className="py-6 text-primary">
              Login sekarang untuk mendapatkan akses
              </p>
            </div>
): (
  <div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold text-primary">Berhasil Login</h1>
  <p className="py-6 text-primary">
  Akun anda akan bertahan 30 hari
  </p>
  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"><a href="#umur">Ayo Mulai</a></button>
</div>
)}
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered invalid:text-pink-700 invalid:focus:ring-pink-700 peer"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label">
                    <h6
                      href="www"
                      className="label-text-alt link link-hover"
                      onClick={() =>{
                          setAkses(false)}}
                    >register
                    </h6>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      signin(daftar).then((result) => {
                        setResponse(result.data);
                        console.log(result.data);
                        setAkses(true)
                      }).catch(error => {
                        setResponse(error.response.data)
                        console.log(error.response.data)
                      })
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-primary">Register now!</h1>
              <p className="py-6 text-primary">
                Register dan login sekrang untuk mendapatkan akses
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered invalid:text-pink-700 invalid:focus:ring-pink-700 peer"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label">
                    <h6
                      href="www"
                      className="label-text-alt link link-hover cursor-pointer"
                      onClick={() => {
                        setAkses(true)
                      }}
                    >
                      sudah punya akun
                    </h6>
                  </label>
                  {response.result === false? response.info:''}
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      register(daftar).then((result) => {
                        setResponse(result.data);
                        console.log(result.data)
                        setAkses(true)
                      }).catch(error => {
                        setResponse(error.response.data)
                        console.log(error.response.data)
                        setAkses(false)
                      })
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
