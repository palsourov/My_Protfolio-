import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Logo = () => {
    return (
        <div>
             <h1 className="lg:text-4xl text-xl md:text-3xl font-bold mb-4 
                     bg-gradient-to-r from-indigo-400 via-white 
                     bg-clip-text text-transparent">
       <div className="flex items-center gap-x-2">
           <FaAngleLeft className="text-white" />
            Sourov Pal
            <FaAngleRight className="text-white" />

       </div>
       
 
        </h1>
        </div>
    );
};

export default Logo;