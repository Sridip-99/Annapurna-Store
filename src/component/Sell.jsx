import React from 'react'
import Product from './Product'

const sell = () => {
    const dailyEssentials = [
        {
            id: 1,
            name: 'Toothpaste',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Toothpaste.webp',
        },
        {
            id: 2,
            name: 'Soap',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Soap.webp',
        },
        {
            id: 3,
            name: 'Shampoo',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Shampoo.webp',
        },
        {
            id: 4,
            name: 'Conditioner',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Conditioner.webp',
        },
        {
            id: 5,
            name: 'Hair Oil',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Hair Oil.webp',
        },
        {
            id: 6,
            name: 'Body Lotion',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Body Lotion.webp',
        }
    ];
    const fastFood = [
        {
            id: 1,
            name: 'Biscuit',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Biscuit.webp',
        },
        {
            id: 2,
            name: 'Cakes',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Cake.webp',
        },
        {
            id: 3,
            name: 'Chocolates',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Chocolate.webp',
        },
        {
            id: 4,
            name: 'Chips',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Chips.webp',
        },
        {
            id: 5,
            name: 'Namkeen',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Namkeen.webp',
        },
        {
            id: 6,
            name: 'Tea',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Tea.webp',
        }
    ];
    const stationeryItems = [
        {
            id: 1,
            name: 'Book',
            image: 'https://picsum.photos/id/301/200/220',
        },
        {
            id: 2,
            name: 'Notebook',
            image: 'https://picsum.photos/id/302/200/220',
        },
        {
            id: 3,
            name: 'Pen',
            image: 'https://picsum.photos/id/309/200/220',
        },
        {
            id: 4,
            name: 'Pencil',
            image: 'https://picsum.photos/id/304/200/220',
        },
        {
            id: 5,
            name: 'Geometry Box',
            image: 'https://picsum.photos/id/305/200/220',
        },
        {
            id: 6,
            name: 'Scale',
            image: 'https://picsum.photos/id/306/200/220',
        }
    ];

    return (
    <section id="sell">
        <div className="container">
            <h2>Products We <span>Sell</span></h2>
            <div className="flex-container">
                <div className="product-container" id="daily-essentials-container">
                    <h3>Daily Essentials</h3>
                    <div className="products-slider">
                        {dailyEssentials.map(item => (
                            <Product key={item.id} itemName={item.name} image={item.image} />
                        ))}
                    </div>
                </div>
                <div className="product-container" id="fast-food-container">
                    <h3>Fast Food</h3>
                    <div className="products-slider">
                        {fastFood.map(item => (
                            <Product key={item.id} itemName={item.name} image={item.image} />
                        ))}
                    </div>
                </div>
                <div className="product-container" id="stationery-items-container">
                    <h3>Stationery Items</h3>
                    <div className="products-slider">
                        {stationeryItems.map(item => (
                            <Product key={item.id} itemName={item.name} image={item.image} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}


export default sell

