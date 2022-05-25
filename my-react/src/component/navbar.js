import React from 'react';

function Navbar_brand(props) {
    return (
        <a className="navbar-brand ps-3" href="index.html">{props.text}</a>
    );
}

function Button_menu(){
    return (
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
    );
}

function Search_bar() {
    return (
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
            </div>
        </form>
    );
}

function Drop(props) {
    return (
        <li><a className="dropdown-item" href="#!">{props.option}</a></li>
    );
}

function User() {
    return (
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <Drop option="Settings"/>
                    <Drop option="Activity Log"/>
                    <li><hr className="dropdown-divider" /></li>
                    <Drop option="Logout"/>
                </ul>
            </li>
        </ul>
    );
}

function Nav_bar() {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <Navbar_brand text="Start Bootstrap"/>
            <Button_menu/>
            <Search_bar/>
            <User/>
        </nav>
    );
}

export default Nav_bar;