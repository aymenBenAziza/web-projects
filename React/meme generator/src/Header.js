import logo from './imgs/Troll Face.png'
const Header = _ => {
    return(
        <nav class="navbar bg-body-tertiary px-3">
            <div class="container-fluid ">
                <div className='d-flex align-items-center'>
                    <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    <a class="navbar-brand mx-2 text-white" href="#">Bootstrap</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;