import React, { Component } from 'react'
import axios from 'axios'
import style from './Menu.module.css'
import logo from '../../assets/logo/logo.jpeg'

class Menu extends Component {

    state = {
        "menu": [
        ]
    }

    componentDidMount() {
        axios.get('https://aryal-restaurant.firebaseio.com/menu.json')
            .then(response => {
                console.log(response);
                return this.setState({ "menu": response.data });
            })
            .catch(error => console.log(error));
    }

    render() {
        console.log(this.state.menu);
        const myMenu = this.state.menu;
        const menulist = myMenu.map(eachMenuItem =>
            <div key={eachMenuItem.id}>
                <img src={logo} className={style.Image} alt="thumbnail" />
                <div>
                    <h2>{eachMenuItem.item}</h2>
                    <p>{eachMenuItem.description}</p>
                </div>

            </div>
        );

        const vegAppetizerList = myMenu.filter(item => item.type === "Appetizer" && item.category === "Veg")
            .map(eachMenuItem =>
                <div key={eachMenuItem.id}>
                    <img src={logo} className={style.Image} alt="thumbnail" />
                    <div>
                        <h2>{eachMenuItem.item}</h2>
                        <p>{eachMenuItem.description}</p>
                    </div>

                </div>);

        const nonVegAppetizerList = myMenu.filter(item => item.type === "Appetizer" && item.category === "Non-veg")
            .map(eachMenuItem =>
                <div key={eachMenuItem.id}>
                    <img src={logo} className={style.Image} alt="thumbnail" />
                    <div>
                        <h2>{eachMenuItem.item}</h2>
                        <p>{eachMenuItem.description}</p>
                    </div>

                </div>);

        const vegEntreeList = myMenu.filter(item => item.type === "Entree" && item.category === "Veg")
            .map(eachMenuItem =>
                <div key={eachMenuItem.id}>
                    <img src={logo} className={style.Image} alt="thumbnail" />
                    <div>
                        <h2>{eachMenuItem.item}</h2>
                        <p>{eachMenuItem.description}</p>
                    </div>

                </div>);

        const nonVegEntreeList = myMenu.filter(item => item.type === "Entree" && item.category === "Non-veg")
            .map(eachMenuItem =>
                <div key={eachMenuItem.id}>
                    <img src={logo} className={style.Image} alt="thumbnail" />
                    <div>
                        <h2>{eachMenuItem.item}</h2>
                        <p>{eachMenuItem.description}</p>
                    </div>

                </div>);
        /*this.state.menu ?
            menulist = this.state.menu.map(
                eachMenu => {
                    return (
                        <div>
                            <h2>{eachMenu.item}</h2>
                            <p>{eachMenu.description}</p>
                        </div>
                    );
                }
            ) : <p>Loading Menu...</p>
                */
        return (
            <>
                <section className={style.Menu}>
                    <h2 className={style.Title}>Menu</h2>
                    <h3 className={style.SubHead}>Veg Appetizer</h3>
                    {vegAppetizerList}
                    <h3 className={style.SubHead}>Non-veg Appetizer</h3>
                    {nonVegAppetizerList}
                    <h3 className={style.SubHead}>Veg Entree</h3>
                    {vegEntreeList}
                    <h3 className={style.SubHead}>Non-Veg Entree</h3>
                    {nonVegEntreeList}
                </section>
            </>
        )
    }
}

export default Menu;
