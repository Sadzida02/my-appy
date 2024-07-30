import React from "react"

const keychainsPic = new URL("../images/keychains.jpg", import.meta.url)
const donutsPic = new URL("../images/donuts.jpg", import.meta.url)


export default function Home() {
    return( 
        <section className="bg-slate-100 mt-[140px]">
    <div className="flex flex-row  justify-center bg-myBrown md:h-[500px] sm:h-[260px]">
        <div id="col1" className="w-[500px] p-2">
            <img className="" src={keychainsPic}/>
            
        </div>
        <div id="col2" className="w-[430px] text-white flex flex-col justify-center items-center text-center pt-9">
            <h1 className="font-bold p-3 font-koulen md:text-7xl sm:text-3xl">The best place for handamade gifts</h1>
            <p className="text-sm p-1">Buy your unique product for special today here and now!</p>
            <button className="bg-pink-200 rounded-full md:w-[130px] sm:w-[80px] md:mt-4 sm:text-[12px] sm:p-1 text-chocolate md:text-lg border-4 border-white shadow-xl">See here</button>
        </div>
        <div id="col3" className="w-[500px] p-2">
            <img className="" src={donutsPic}/>  
        </div>
    </div>
    </section>
    )
}