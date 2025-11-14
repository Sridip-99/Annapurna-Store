import React from 'react'
import { motion } from 'framer-motion'
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
            name: 'Diary',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Diary.webp',
        },
        {
            id: 2,
            name: 'Notebook',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/NoteBook.webp',
        },
        {
            id: 3,
            name: 'Pen',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Pen.webp',
        },
        {
            id: 4,
            name: 'Geometry Box',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Geometry Box.webp',
        },
        {
            id: 5,
            name: 'Drawing Book',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Drawing Book.webp',
        },
        {
            id: 6,
            name: 'Office Essentials',
            image: 'https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/Products/Office essentials.webp',
        }
    ];
    const slideFade = (dir = 1, axis = 'x') => {
        const initial = { opacity: 0, [axis]: 30 * dir }
        const whileInView = { opacity: 1, [axis]: 0 }
        return {
        initial,
        whileInView,
        viewport: { once: true, amount: 0.6 },
        transition: { duration: 0.8, ease: 'easeInOut' }
        }
    }
    return (
    <section id="sell">
        <div className="container">
            <h2>Products We <span>Sell</span></h2>
            <div className="flex-container">
                <div className="product-container" id="daily-essentials-container">
                    <h3>Daily Essentials</h3>
                    <motion.div className="products-slider" {...slideFade(1, 'x')}>
                        {dailyEssentials.map(item => (
                            <Product key={item.id} itemName={item.name} image={item.image} />
                        ))}
                    </motion.div>
                </div>
                <div className="product-container" id="fast-food-container">
                    <h3>Fast Food</h3>
                    <motion.div className="products-slider" {...slideFade(1, 'x')}>
                        {fastFood.map(item => (
                            <Product key={item.id} itemName={item.name} image={item.image} />
                        ))}
                    </motion.div>
                </div>
                <div className="product-container" id="stationery-items-container">
                    <h3>Stationery Items</h3>
                    <motion.div className="products-slider" {...slideFade(1, 'x')}>
                        {stationeryItems.map(item => (
                            <Product key={item.id} itemName={item.name} image={item.image} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default sell
