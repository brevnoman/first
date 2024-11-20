import './Practice.css'
import logo from './logo2.svg'
import close from './close.png'

const Practice = () => {
    return (
        <header>
            <div class="header-left">
                <a href='localhost:3000'>
                    <img width='17%' src={logo} alt='Friskay Logo'/>
                    <div class="devider"></div>
                </a>
            </div>
            
            <nav>
                <a href='#' class='menu-open hide-desktop'>
                    <img src={logo} width='17%'></img>
                </a>  
                <ul>
                    <li>
                        <a href="#">
                            <img width='17%' src={close} alt="close menu" />
                        </a>
                        <li><a href="#">Our food</a></li>
                        <li><a href="#">Ingredients</a></li>
                        <li><a href="#">Studies</a></li>
                        <li><a href="#">FAQ</a></li>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Practice