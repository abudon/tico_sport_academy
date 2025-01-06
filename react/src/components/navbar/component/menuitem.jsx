import {useEffect, useRef, useState} from "react";
import Dropdown from "./dropdown.jsx";

const Menuitem = (props)=>{
    const { items, depthLevel} = props;
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
    const handler = (event)=>{
        if (dropdown && ref.current && !ref.current.contains(event.target)){
            setDropdown(false);
        }
    }
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return ()=>{
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }

    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };
    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return(
       <li
           className={'menu_items'}
           ref={ref}
           onMouseLeave={onMouseLeave}
           onMouseEnter={onMouseEnter}>
           {
               items.submenu?(
                   <>
                       <button type={'button'} aria-haspopup={'menu'}
                       aria-expanded={dropdown?'true':'false'}
                       onClick={()=>setDropdown(prevState => !prevState)}>
                           {items.title}
                       </button>
                       <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown}/>
                   </>
               ):(
                   <a className={''} href ={items.link} >
                       {items.title}
                   < /a>
               )
           }
       </li>
    )
};
export default Menuitem;
