// import React from 'react';
import useMenu from '../../Hooks/UseMenu';
import menuImg from '../../assets/menu/banner3.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import Cover from '../Share/Cover/Cover';
import MenuCategory from '../Share/MenuCategory/MenuCategory';
import SectionTitle from '../Share/SectionTitle/SectionTitle'

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const desserts = menu.filter(item => item.category === 'dessert');
    return (
        <div>
            <Cover img={menuImg} title='OUR MENU'></Cover>
            <SectionTitle subHeading="Don't Miss" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={soup} img={soupImg} title="soup"></MenuCategory>
            <MenuCategory items={salad} img={saladImg} title="salad"></MenuCategory>
            <MenuCategory items={pizza} img={pizzaImg} title="pizza"></MenuCategory>
            <MenuCategory items={desserts} img={dessertImg} title="dessert"></MenuCategory>
        </div>
    );
};

export default Menu;