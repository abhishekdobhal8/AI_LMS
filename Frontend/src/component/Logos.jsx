import React from 'react'
import { MdCastForEducation } from "react-icons/md"
import { FaInfinity, FaHandsHelping, FaUsers } from "react-icons/fa"
import { BiDollarCircle } from "react-icons/bi"

function Logos() {
  return (
    <div className="w-[100vw] min-h-[90px] flex items-center justify-center flex-wrap gap-4 md:mb-[50px]">
      
      {/* Courses */}
      <div className="flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer text-[#03394b]">
        <MdCastForEducation className="w-[35px] h-[35px] fill-[#03394b]" />
        20k+ online Courses
      </div>
      
      {/* Lifetime Access */}
      <div className="flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer text-[#03394b]">
        <FaInfinity className="w-[35px] h-[35px] fill-[#03394b]" />
        Lifetime Access
      </div>
      
      {/* Value for Money */}
      <div className="flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer text-[#03394b]">
        <BiDollarCircle className="w-[35px] h-[35px] fill-[#03394b]" />
        Value for money
      </div>
      
      {/* Lifetime Support */}
      <div className="flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer text-[#03394b]">
        <FaHandsHelping className="w-[35px] h-[35px] fill-[#03394b]" />
        Lifetime Support
      </div>
      
      {/* Community Support */}
      <div className="flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer text-[#03394b]">
        <FaUsers className="w-[35px] h-[35px] fill-[#03394b]" />
        Community Support
      </div>
      
    </div>
  )
}

export default Logos
