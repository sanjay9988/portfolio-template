import {useState} from 'react';

import {MenuFold,MenuUnfold} from '@icon-park/react';
const Nav = (() => {
    const menuIcons=[<MenuFold size={30} key="menuFold"/>, <MenuUnfold  size={30} key="menu"/> ]
    const [menu,selectMenu]=useState(1)
    const toggleMenu =()=>{
        if(menu){
        selectMenu(0)
        }
        else{
        selectMenu(1)
        }
    }
    return (
        <nav className="flex p-2 justify-between gap-4 opacity-90" >

            <ul className='flex gap-4'>

                <div className='cursor-pointer text-orange-400' onClick={()=>toggleMenu()}>

                    {
                        menuIcons[menu]
                    }
                </div>

                <li className="text-2xl font-mono tracking-wider sm:flex hidden"> SANJAY SHAH </li>
            </ul>

            <ul className="flex gap-4 mt-1">
                <li> PROJECTS </li>
                <li> GIT </li>
                <li> ABOUT </li>
                <li> </li>
            </ul>
        </nav>

    )
})


export default Nav;