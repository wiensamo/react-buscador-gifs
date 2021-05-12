import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState (['One - Punch Man']);
    /**
     * const handleAdd =()=>{
        Las dos son formas de agregar elementos a un arreglo
        setCategories( ['HunterXHunter', ...categories]);
        setCategories(catego => [...catego, 'HunterXHunter']);
    }* 
     */
    return (
        <>
            <h2> GifExpertApp </h2>
            <hr></hr>
            <AddCategory setCategories= {setCategories} />
            <hr />
            
            <ol>
                {
                    categories.map( category =>(
                        <GifGrid
                            category={ category }
                            key={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}
 