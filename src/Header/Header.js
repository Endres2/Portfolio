import './Header.css';

function Header() {

    return (
        <div className="Header">
            <header className="Header-header">
                <h1 className="text">Hello my name is </h1><h1 className="textName">Andres</h1>

                    <div id="wrapper">
                        <div className="static ">Let us</div>
                        <ul className="dynamic ">
                            <li><span >Create</span></li>
                            <li><span >Develop</span></li>
                            <li><span >Design</span></li>
                            <li><span >Plan it</span></li>
                        </ul>
                    </div>

            </header>
        </div>
    );
}



export default Header;
