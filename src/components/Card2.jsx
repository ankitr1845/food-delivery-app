import React from 'react'
import image1 from '../assets/image1.avif'
import { ImBin } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { Decrement, Increment, RemoveItem } from '../redux/cartSlice';

function Card2({name, id , price, image, qty}) {
    let dispatch = useDispatch()
  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
        <div className='w-[60%] h-full flex gap-5'>
            <div className='w-[60%] h-full overflow-hidden rounded-lg '>
                <img src = {image} alt="" className='object-cover' />
            </div>
            <div className='w-[40%] h-full flex flex-col gap-3'>
                <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                <div className='w-[100px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg text-xl font-semibold border-2 border-green-400'>
                <button className='w-[33.33%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200 cursor-pointer'
                onClick={()=>{
                    qty>1?dispatch(Decrement(id)):1
                }}
                >-</button>
                    <span className='w-[33.33%] h-full bg-slate-200 flex justify-center items-center text-green-400'>{qty}</span>
                    <button className='w-[33.33%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200 cursor-pointer'
                    onClick={()=>{
                        dispatch(Increment(id))
                    }}
                    >+</button>
            
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-end gap-6'>
            <span className='text-xl text-green-400 font-semibold'>Rs {price} /-</span>
            <ImBin className='w-[30px] h-[20px] text-red-600 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))} />
        </div>
    </div>
  )
}

export default Card2