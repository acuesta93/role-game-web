import React from 'react'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    return (
        <div className='bg-neutral-900 w-2/3 m-auto text-center rounded-b-lg sticky top-0'>
            <button className='bg-neutral-900 text-neutral-300 font-bold w-1/3 h-10 hover:bg-neutral-700 active:bg-neutral-500 transition-all rounded-lg'><FontAwesomeIcon icon={faHome} /></button>
            <button className='bg-neutral-900 text-neutral-300 font-bold w-1/3 h-10 hover:bg-neutral-700 active:bg-neutral-500 transition-all rounded-lg'>Botón</button>
            <button className='bg-neutral-900 text-neutral-300 font-bold w-1/3 h-10 hover:bg-neutral-700 active:bg-neutral-500 transition-all rounded-lg'>Botón</button>
        </div>
    )
}

export default Header