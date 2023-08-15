import react from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState } from 'react'

const Testimonial= (props)=>{

    let reviews = props.reviews
    const [index,setIndex]=useState(0);

    function leftClickHandler()
    {
         if(index-1<0)
         {
            setIndex(reviews.length-1)
         }
         else{
            setIndex(index-1)
         }
    }
    function rightClickHandler(){
        if (index+1>reviews.length) {
            setIndex(0)
        }
        else {
            setIndex(index + 1)
        }
    }

    function onSurpriseHandler()
    {
         let randomIndex=Math.floor( Math.random()*reviews.length)
         setIndex(randomIndex)
    }

    return(
         <div className='flex flex-col justify-center items-center bg-white w-[85vw] md:w-[700px] mt-10 p-10 rounded-md transition-all duration-700 hover:shadow-xl'>
           <Card review={reviews[index]}></Card>

           
            <div className='text-violet-500 text-3xl mt-5 gap-4 font-bold'>
                <button
                onClick={leftClickHandler}
                 className='cursor-pointer hover:text-violet-700'>
                    <FiChevronLeft />
                </button>

                <button
                    onClick={rightClickHandler}
                 className='cursor-pointer hover:text-violet-700'>
                    <FiChevronRight />
                </button>


            </div>

            <div className='mt-6' >
                <button onClick={onSurpriseHandler} className='bg-violet-400 width-[4rem] hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md fond-bold text-white'>Surprise Me</button>
            </div>

         </div>
    )
}

export default Testimonial