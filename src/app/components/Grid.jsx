import 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";


async function getCards() {
    const response = await fetch('http://localhost:4000/cards', {
        next: {
            revalidate: 0
        }
    })
    return response.json()
}

export default async function Grid() {
    const cards = await getCards()

    return(
        <section className="font-lexend mt-[170px] md:mr-[100px] md:ml-[40px]">
             <div className="flex sm:text-[12px] md:text-base items-center">
            </div>
            <div className="container">
                <div id="grid-container" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-3 p-4 max-w-[1240px] ">
                {cards.map((card) => (
                    <div  key={card.id} id="card" className="bg-white rounded-md overflow-hidden shadow-xl flex-col flex hover:animate-pulse">
                    
                    <Image
                    src={card.image}
                    alt={card.name}
                    width={220}
                    height={320}
                    style={{ objectFit: 'cover'}}
                    />
                    <div className="p-4">
                        <div className="flex justify-between">
                            <span className="text-slate-400 px-2 text-sm">{card.category}</span>
                            <FontAwesomeIcon className="inline w-5 left-0" icon={faHeart}/>
                        </div>
                        <a href={`../shopy/${card.id}`}className="font-bold md:text-md px-2">{card.name}</a>
                        <span className="flex text-xl p-2 text-myBrown">{card.price}</span> 
                        <div className="flex justify-end">
                            <button className="flex justify-items-end bg-myBrown hover:bg-[#9E5C25] p-2 rounded text-white text-[12px] ">
                            <FontAwesomeIcon icon={faCartShopping} className="inline p-0 w-5"/>&nbsp; Add to cart</button>  
                        </div>
                    </div>
                </div>
                ))}
                {cards.length === 0 && (
                    <p className="text-center">There are no available products!</p>
                )}
                
            </div>
            </div>
        </section>
    );
}
