import {navlink} from '../data/navlink.js'
import Menuitem from "./menuitem.jsx";

 const Nav = () => {

  return(
      <nav className={'w-full'}>
          <ul className={'flex items-center justify-center w-full  '}>
              {
                navlink.map(
                    (menu, index)=>{
                        const depthLevel=0;
                        return(
                            <Menuitem items={menu} key={index} depthLevel={depthLevel}/>
                        )
                    }
                )
              }
          </ul>
      </nav>
  )
}
export default Nav;
