import menuImg from '../../assets/menu/banner3.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
// // import { Helmet } from 'react-helmet-async';
import SectionTitle from '../Share/SectionTitle/SectionTitle'
import MenuCategory from '../Share/MenuCategory/MenuCategory'
import useMenu from '../../Hooks/UseMenu'
import Cover from '../Share/Cover/Cover'


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div className='w-4/5 m-auto'>
            {/* <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet> */}
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            {/* <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle> */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;