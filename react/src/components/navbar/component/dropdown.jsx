import Menuitem from "./menuitem.jsx";
const Dropdown = ({ submenus, dropdown,depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <  ul className = {`dropdown  ${dropdownClass}  ${dropdown ? "show" : ""}`} >
            {
                submenus.map((submenu, index) => (
                    <Menuitem items = {
                        submenu
                    }
                               key = {
                                   index
                               }
                               depthLevel = {
                                   depthLevel
                               }
                    />
                ))
            } <
        /ul>
    );
};
export default Dropdown;
