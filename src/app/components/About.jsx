import React from 'react'

function About() {
  return (
    <div className='bg-white w-screen my-[100px] h-[350px] flex flex-row justify-between items-center p-[150px] text-chocolate'>
        <h1 className='font-koulen text-4xl'>Explore the world of <strong className='text-myBrown'>miniatures</strong>!</h1>

        <div className='w-2/3 flex flex-col'>
        <p className='overflow-hidden'>Unique products made from special materials with lots of love! Fimo clay is special type modelling materail that gets hardened when baked in oven! That allows to create tiniest details leading to a unique design and keychain not seen anywhere in factory production!
            <br />It is perfect idea for gift or personalized accessory for yourself. Explore our designs or order your custom...
        </p>
        <button className='bg-pink-300 text-white text-bold shadow-md text-[18px] rounded-full p-1.5 mt-4 w-[150px] hover:bg-pink-400 animate-bounce'>About us</button>
        </div>
    </div>

  )
}

export default About
