import React from 'react'

function VerticalNav() {
  return (
    <nav className="bg-pink-200 text-chocolate sm:w-1/4 md:w-[250px] ml-[100px] rounded-md shadow-lg mt-[180px] py-[10px]">
      <ul className="list-none p-0 m-0  ">
        <li className="py-2 px-4 cursor-pointer">
          <a href="#" className="px-4 py-2" >KEYCHAINS</a>
          <ul className="list-none p-0 m-0">
            <li className="py-2 px-4 hover:bg-myBrown hover:text-white"><a href="#" >Flowers</a></li>
            <li className="py-2 px-4 hover:bg-myBrown hover:text-white"><a href="#">Food</a></li>
            <li className="py-2 px-4 hover:bg-myBrown hover:text-white"><a href="#">Animals</a></li>
            <li className="py-2 px-4 hover:bg-myBrown hover:text-white"><a href="#">Figurines</a></li>
            <li className="py-2 px-4 hover:bg-myBrown hover:text-white"><button>Custom</button></li>
          </ul>
        </li>
        <li className="py-2 px-4 cursor-pointer">
          <a href="#" className="px-4">NECKLACES</a>
          <ul className="list-none p-0 m-0">
            <li className="py-2 px-4 hover:bg-myBrown hover:text-white"><a href="#">Flower pattern</a></li>
            <li className="py-2 px-4 hover:bg-myBrown hover:text-white"><a href="#">Oval</a></li>
            <li className="py-2 px-4 hover:bg-myBrown hover:text-white"><a href="#">Circle</a></li>
          </ul>
        </li>
        <li className="py-2 px-4 cursor-pointer">
          <a href="#" className="px-4">MAGNETS</a>
          <ul className="list-none p-0 m-0">
            <li className="py-2 px-4 hover:bg-myBrown hover:text-white"><a href="#">Food</a></li>
            <li className="py-2 px-4 hover:bg-myBrown hover:text-white"><a href="#">Letters</a></li>
            <li className="py-2 px-4 hover:bg-myBrown hover:text-white"><a href="#">Home Signs</a></li>
            
          </ul>
        </li>
      </ul>
    </nav>

  )
}

export default VerticalNav
