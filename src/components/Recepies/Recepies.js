import React, { Component } from 'react'
import Recepie from './Recepie/Recepie';
import style from './Recepies.module.css';

class Recepies extends Component {
    state = {
        recepies: [
            {
                "id": 1,
                "title": "Dumpling recepie",
                "url": "https://www.thespruceeats.com/thmb/VXHI8RXxjdbYVGOwq-BVitNLVSQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-pan-fried-dumplings-694499_hero-01-f8489a47cef14c06909edff8c6fa3fa9.jpg",
                "description": "Details of mom prep",
                "author": "Sambit",
            },
            {
                "id": 2,
                "title": "Noodles recepie",
                "url": "https://gdurl.com/sy8D",
                "description": "Details of momo prep",
                "author": "Sambit",
            },
            {
                "id": 3,
                "title": "Chicken recepie",
                "url": "https://via.placeholder.com/300/92c952",
                "description": "Details of mom prep",
                "author": "Sambit",
            },
            {
                "id": 4,
                "title": "Goat recepie",
                "url": "https://via.placeholder.com/300/92c952",
                "description": "Details of mom prep",
                "author": "Sambit",
            },
            {
                "id": 5,
                "title": "Cottage cheese recepie",
                "url": "https://via.placeholder.com/300/92c952",
                "description": "Details of mom prep",
                "author": "Sambit",
            },

        ]
    }
    render() {
        return (
            <section className={style.Recepies}>
                <Recepie recepies={this.state.recepies} />
            </section>
        )
    }

}

export default Recepies;
