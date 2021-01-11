import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import HeroImage from '../../components/HeroImage/HeroImage';
import Footer from '../../components/Footer/Footer';
import Recepies from '../../components/Recepies/Recepies';
import Hamburger from '../../components/Hamburger/Hamburger';
import Header from '../../components/Header/Header';
import ContactUs from '../../components/ContactUs/ContactUs';
import Menu from '../../components/Menu/Menu';

class Home extends Component {
    state = {
        header: [{
            id: 2,
            name: 'Menu',
            to: '/menu'
        }, {
            id: 3,
            name: 'Order',
            to: '/order'
        }, {
            id: 4,
            name: 'Recepies',
            to: '/recepies'
        }, {
            id: 1,
            name: 'Home',
            to: '/'
        },],
        showMenu: false,
    }


    toggleHamburgerMenu = () => {
        this.setState({ showMenu: !this.state.showMenu });
    };

    render() {
        return (
            <section >
                <Hamburger header={this.state.header} showMenu={this.state.showMenu} toggleMenu={this.toggleHamburgerMenu} />
                <Header header={this.state.header} />
                <Switch>
                    <Route path="/menu" exact>
                        <Menu />
                    </Route>
                    <Route path="/order" exact render={() => <p>This is order page</p>}></Route>
                    <Route path="/recepies" exact>
                        <Recepies />
                    </Route>
                    <Route path="/contact-us" exact>
                        <ContactUs />
                    </Route>
                    <Route path="/" exact>
                    <>
                     <HeroImage />
                     <Recepies />
                    </>
                    </Route>
                </Switch>
                <Footer />
            </section>
        )
    }
}



export default Home

