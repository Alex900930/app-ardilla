
function App() {

  return (
    <>
       <div className="bg-gray-300  w-full h-screen relative flex justify-center">
        {/* Texto centrado y animado */}
        <h1 className="text-xl font-bold text-gray-800 animate-pulse mb-7 ">
          Interacciona con la Ardilla
        </h1>
        {/* Cola Grande */}
        <div className="w-[130px] h-[130px] absolute mt-8 ml-16 rounded-full bg-yellow-900">
        </div>
        {/* Cola Pequeña */}
        <div className="rounded-full w-[90px] h-[90px] absolute ml-[110px] mt-[118px] bg-yellow-900"></div>
        {/* Cuerpo de la Ardilla */}
        <div className="w-[80px] h-[95px] bg-yellow-700 absolute mt-[113px] ml-40 rounded-tr-[42px] flex flex-col">
          {/* Caja de Los Ojos */}
          <div className="flex -ml-1">
            {/* Ojo Izquierdo */}
            <div className="bg-white w-5 h-5 mt-6 ml-6 rounded-full p-1 flex justify-center items-center">
              <div className="bg-black w-[11px] h-[11px] rounded-full"></div>
            </div>
            {/* Ojo Derecho */}
            <div className="bg-white w-5 h-5 mt-6 ml-2 p-1 rounded-full flex justify-center items-center">
              <div className="bg-black w-[11px] h-[11px] rounded-full"></div>
            </div>
          </div>
          {/* Nariz */}
          <div className="bg-black w-1.5 rounded-b-lg h-[2px] ml-[40px]"></div>
          {/* Boca */}
          <div className="w-[18px] hover:animate-bounce h-[11px] justify-center flex bg-black ml-[34px] rounded-b-[10px] mt-1">
            {/* Dientes */}
            <div className="w-[11px] h-[6px] bg-white rounded-b-[10px]"></div>
          </div>
          {/* Barriga */}
          <div className="w-12 ml-[15.6px] mt-3 h-6 rounded-t-[100px] bg-amber-500 flex gap-10">
            {/* Pies */}
            <div className="w-2 h-1.5 bg-black mt-[18px] -ml-1 rounded-t-full"></div>
            <div className="w-2 h-1.5 bg-black mt-[18px] -mr-1 rounded-t-full"></div>
          </div>
        </div>
        {/* Orejas de la Ardilla */}
        <div className="bg-yellow-700 w-2 h-4 mt-24 absolute ml-[70px] rounded-l-[42px]"></div>
        <div className="bg-yellow-700 w-2 h-4 absolute ml-[207px] mt-24 rounded-r-[42px]"></div>
        {/* Nuez */}
        <div className="bg-yellow-700 w-3 rounded-l-full h-2 absolute mt-[200px] ml-[16rem]"></div>
        <div className="bg-yellow-900 w-1.5 rounded-r-full h-[10px] absolute mt-[199px] ml-[265px]"></div>
        <div className="bg-yellow-900 w-1 rounded-r-full h-[2px] absolute mt-[203px] ml-[271px]"></div>
      </div>
    </>
  );
}

export default App;
