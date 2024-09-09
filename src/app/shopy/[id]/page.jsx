import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Shopy from '@/app/components/Shopy';
import Navbar from '@/app/components/Navbar';
import Footer from  '@/app/components/Footer';

async function getProduct(id) {
    const response = await fetch('http://localhost:4000/cards/' + id, {
        next: {
            revalidate: 60
        }
    })
    return response.json()
  }
  

async function ProductDetails({params}) {
    const product = await getProduct(params.id)
    return (
      <div>
        <Navbar />
      <div className='bg-pink-100 w-full px-[90px] h-[550px] mt-[130px]'> 
      <nav>
        <h2 className='text-[22px] tracking-[4px] ml-[120px] pt-10 font-koulen'>PRODUCT DETAILS</h2>
      </nav> 
  
      <div className='card flex mx-[120px] justify-between'>
        <div className='flex flex-col  w-1/2'>
          <div className='text-[20px] text-slate-500 py-3'>{product.category}</div>
          <div className='text-[30px] font-bold 
          py-3'>{product.name}</div>
  
  <div className='pb-3 flex'><span className='text-sm'>Rating: </span>
        <div className='flex ml-2'>
              <FontAwesomeIcon icon={ faStar } width={24} height={24} />
              <FontAwesomeIcon icon={ faStar } width={24} height={24}/>
              <FontAwesomeIcon icon={ faStar } width={24} height={24}/>
              <FontAwesomeIcon icon={ faStar } width={24} height={24}/>
              <FontAwesomeIcon icon={ faStar } width={24} height={24}/></div>
        </div>  
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis reiciendis aut explicabo. Hic facere, incidunt perferendis quibusdam saepe inventore nulla, dolorem vero veritatis ipsa deserunt ipsam earum, vel ullam eveniet!</p>
          <div className='inline pt-5'>
          <span>Qauntity</span>
          <select className="rounded-md ml-3 bg-pink-200 px-3 w-[70px] inline" name="category" id="category ">
                          <option selected>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </select> 
          </div>
          
          <div className='inline pl-80 py-3'>
              <span>Priced at:  </span>
              <span className='text-myBrown text-[30px]'>{product.price}</span>
          </div>
                      
          
              <button className="flex bg-myBrown hover:bg-[#9E5C25] p-2 rounded text-white text-[18px] w-[150px] ml-80">
                              <FontAwesomeIcon icon={faCartShopping} className="inline w-5 pt-1 pl-1"/>&nbsp; Add to cart</button> 
        </div>
        <div>
        <div className='flex items-center justify-center'>
          <Image className='rounded-lg shadow-xl'
              src={product.image}
              alt={product.name}
              width={400}
              height={450}
              style={{ objectFit: 'cover'}}/>
          </div>
        </div>
      </div>
      
      </div>
      <div className='h-[1300px]'>
      <Shopy />
      </div>
      <Footer />
      </div>
  
  )
}

export default ProductDetails
