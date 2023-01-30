import { BsArrowRight, BsFacebook, BsGoogle } from "react-icons/bs";
function App() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-200 font-poppins">
      <div className="flex w-full max-w-5xl m-3 bg-white shadow-2xl rounded-2xl">
        {/* Item 1 */}
        <div className="flex-[2] p-5 md:p-12">
          <h1>Log In</h1>
          <p className="mb-8 light-text">
            Log in to your account to upload or download pictures, videos or
            music.
          </p>
          <input
            className="w-full px-5 py-5 mb-4 text-sm text-gray-400 border-2 rounded-lg light-text"
            type="text"
            placeholder="Enter your email address"
          />
          <div className="flex flex-col items-center justify-between mb-8 space-y-2 text-cyan-600 md:flex-row md:space-y-0 md:space-between">
            <p>Forgot password</p>
            <button className="flex items-center justify-center w-full px-8 mt-3 font-semibold text-white rounded-lg move-up-animation md:mt-0 md:w-fit py-7 bg-cyan-700">
              Next
              <BsArrowRight className="ml-5 text-2xl" />
            </button>
          </div>
          <div className="w-full mb-8 border-b-2 bg-slate-300"></div>
          <p className="mb-8 text-center light-text">or log in with</p>
          <div>
            <div className="flex flex-col mx-auto space-y-10 w-fit md:flex-row md:space-y-0 md:space-x-10">
              <button className="flex items-center justify-center px-20 py-4 border-2"><img src={require("./images/facebook.png")} className="w-10 mr-5" alt="fb"/>Facebook</button>
              <button className="flex items-center justify-center px-20 py-4 border-2"><img src={require("./images/google.png")} className="w-10 mr-5" alt="gl"/>Google</button>
            </div>
          </div>
        </div>
        {/* Item 2 */}
        <div className="relative flex-1 hidden rounded-r-2xl md:block bg-cyan-500">
          <img
            src={require("./images/ocean.jpg")}
            class="w-full h-full rounded-r-2xl object-cover"
            alt=""
          />
          <div className="absolute flex items-center justify-center w-10 h-10 p-2 text-black bg-white rounded-full cursor-pointer move-up-animation right-2 top-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
            >
              <path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
