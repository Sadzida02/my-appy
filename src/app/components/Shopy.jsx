import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
// import { initialize } from "next/dist/server/lib/render-server";

// async function getCards() {
//     const response = await fetch('http://localhost:3000/cards', {
//         next: {
//             revalidate: 0
//         }
//     })
//     return response.json()
// }

export default function Shopy() {
    // const cards = await getCards()

    return(
        <section className="font-lexend md:mx-[200px] mt-[100px] sm:mx-[100px]">
             <div className="flex sm:text-[12px] md:text-base">
                <div className="text-chocolate w-1/2 tracking-[4px]">SHOP HERE</div>
                <div className="flex w-1/2 justify-end tracking-[4px]">
                    <label for="search" className="px-3">SEARCH</label>
                    <input type="text" id="search" className="bg-pink-200 rounded-md p-2 text-chocolate" placeholder="e.g. roses"/>
                    
                    <select className="rounded-md ml-3 bg-pink-200" name="category" id="category">
                        <option selected>ALL</option>
                        <option className >Food</option>
                        <option>Custom</option>
                        <option>Figurines</option>
                        <option>Necklaces</option>
                        <option>Magnets</option>
                        <option>Flowers</option>
                    </select> 
                    <button id="searchButton" className=" bg-pink-200 rounded-md px-2 py-1 hover:bg-pink-300 ml-3">FILTER</button> 
                </div>
            </div>
            <div className="container mx-auto">
                <div id="grid-container" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4 max-w-[1240px]">
                {/* {cards.map((card) => (
                    <div key={cards.id} id="card" className="bg-white rounded-md overflow-hidden shadow-xl flex-col flex">
                    <Image
                    src={card.image}
                    alt={card.name}
                    width={250}
                    height={350}
                    style={{ objectFit: 'cover'}}
                    />
                    <div className="p-4">
                        <div className="flex justify-between">
                            <span className="text-slate-400 px-2 text-sm">{card.category}</span>
                            <FontAwesomeIcon className="inline w-5 left-0" icon={faHeart}/>
                        </div>
                        <span className="font-bold md:text-xl px-2">{card.name}</span>
                        <span className="flex text-xl p-2 text-myBrown">{card.price}</span> 
                        <div className="flex justify-end">
                            <button className="flex justify-items-end bg-myBrown hover:bg-[#9E5C25] p-2 rounded text-white text-[14px] ">
                            <FontAwesomeIcon icon={faCartShopping} className="inline w-5"/>&nbsp; Add to cart</button>  
                        </div>
                    </div>
                </div>
                ))}
                {cards.length === 0 && (
                    <p className="text-center">There are no available products!</p>
                )} */}
                
            </div>
            </div>
        </section>
    );
}
