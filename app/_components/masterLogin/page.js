const MasterLogin = () => {
  return (
<div className="h-screen w-screen flex justify-center items-center  ">
  <div className="max-w-lg mx-auto">
    <div className="text-center mb-6">
      <h2 className="text-3xl md:text-4xl font-extrabold">Sign in</h2>
    </div>
    <form action="">
      <div className="mb-6">
        <label className="block mb-2 font-extrabold" for="">Email</label>
        <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email"/>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-extrabold" for="">Password</label>
        <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********"/>
      </div>
    
      <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>
      
    </form>
  </div>
</div>
  );
};
export default MasterLogin;