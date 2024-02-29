import logo from '../assets/logo.jpg';
import { Button } from './Button';

export const Header = () => {


    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logo} alt='logo' />
                <h1>REACTFOOD</h1>
            </div>
            <Button textOnly>Cart(0)</Button>
        </header>
    );
};