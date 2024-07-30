const kolaci = new URL("../images/kolaci1.png", import.meta.url)
const lancici = new URL("../images/lancici.png", import.meta.url)
const kahva = new URL("../images/kahva.png", import.meta.url)

export default function Posters() {
    return(
        <div className="mx-auto font-lexend    md:mx-[200px] mt-[100px] sm:mx-[100px]">
            <h1 className="flex sm:text-[12px] md:text-[16px] tracking-[4px] text-chocolate">DIFFERENT CATEGORIES</h1>

            <div id="grid" className="flex mt-10 gap-3 text-chocolate align-middle justify-start">

                <div className="flex md:w-[650px] md:h-[262px] bg-myBeige rounded-3xl sm:w-[300px] sm:h-[162px] drop-shadow-xl"> 
                <div className="flex flex-col p-3 justify-middle items-start pl-4 absolute">
                    <span className="md:text-[16px] sm:text-[10px] p-2">Category</span>
                    <span className="md:text-4xl py-2 px-3 sm:text-xl bg-myBrown rounded-md text-white">Keychains</span>
                    <span className="bg-chocolate bg-opacity-25 md:mt-7 sm:mt-2 p-2 rounded-2xl md:text-[20px] sm:text-sm">From $5.99</span>
                    <span className="tracking-wide text-[10px] underline md:text-[15px] p-1">SHOP HERE</span>
                </div>  
                    <img className="md:ml-[150px] md:mb-3"src={kolaci}/>
                </div>
                
                <div className="flex flex-col gap-3 text-chocolate">

                    <div className="md:w-[350px] md:h-[125px] bg-pink-200 border-white border-4 rounded-3xl sm:w-[200px]
                    sm:h-[75px] relative">
                        <div className="flex flex-col justify-middle items-start z-10 pl-4 absolute">
                        <span className="md:text-[12px] sm:text-[7px] p-1">Category</span>
                <span className="md:text-xl sm:text-[13px] bg-myBrown rounded-sm text-white py-1 px-2">Magnets</span>
                <span className="bg-chocolate bg-opacity-25 md:mt-2 sm:mt-1 px-2 rounded-2xl md:text-[12px] sm:text-[7px]">From $7.99</span>
                <span className="tracking-wide sm:text-[5px] underline md:text-[10px] p-1">SHOP HERE</span>
                        </div>
                        <img className=" md:ml-[170px] md:w-[140px] md:mb-3" src={kahva} alt="" />
                </div>
               
                    

                    <div className="md:w-[350px] md:h-[125px] bg-myBrown rounded-3xl sm:w-[200px]
                    sm:h-[75px] flex flex-col p-1 justify-middle items-start z-10 text-white">
                        <div className="flex flex-col pl-3 justify-middle items-start z-10 absolute">
                        <span className="md:text-[12px] sm:text-[7px] p-1">Category</span>
                <span className="md:text-xl sm:text-[13px] py-1 px-2 bg-myBeige rounded-sm text-chocolate">Necklaces</span>
                <span className="bg-chocolate bg-opacity-25 md:mt-2 sm:mt-1 px-2 rounded-2xl md:text-[12px] sm:text-[7px]">From $7.99</span>
                <span className="tracking-wide sm:text-[5px] underline md:text-[10px] p-1">SHOP HERE</span>   
                </div>
                <img className="md:ml-[170px] md:w-[140px] md:mb-3" src={lancici} alt="" />                 
                    </div>

                </div>
            </div>
        </div>
    )
}