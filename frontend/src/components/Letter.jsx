import React from 'react'
import Title from './Title'

const Letter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-5 max-md:px-4 my-10 mb-40">
            <Title title = "Never miss this deal" subTitle="Subscribe to get the latest offers, new arrivals, and exclusive discounts" />
        
            <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
                <input
                    className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-200"
                    type="text"
                    placeholder="Enter your email id"
                    required
                />
                <button type="submit" className="md:px-12 px-8 h-full text-black bg-orange-200 hover:bg-orange-400 transition-all cursor-pointer rounded-md rounded-l-none">
                    Subscribe to this email
                </button>
            </form>
        </div>
  )
}

export default Letter