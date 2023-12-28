import useMenu from "../../Hooks/UseMenu";
import MenuItem from "../Share/MenuItem/MenuItem";
import SectionTitle from "../Share/SectionTitle/SectionTitle";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div className="w-4/5 m-auto">
            <SectionTitle
             heading="From Our Menu"
             subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
            {
                popular.map(item => <MenuItem
                   key={item._id}
                   item={item}
                ></MenuItem>)
            }
            </div>
        </div>
    );
};

export default PopularMenu;