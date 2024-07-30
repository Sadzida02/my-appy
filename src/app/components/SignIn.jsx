import React from 'react'
import { useState } from 'react';
const SignIn  = ( {isVisible, onClose} ) => {
  if ( !isVisible ) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur flex justify-center items-center'>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-myBrown text-white px-4 py-2 rounded-md hover:bg-chocolate"
              
            >
              Sign In
            </button>
            <button
              type="button"
              className="  text-chocolate px-4 py-2 rounded-md bg-pink-200" onClick={() => onClose()}
              
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
        

      </div>

  )
}

export default SignIn



















