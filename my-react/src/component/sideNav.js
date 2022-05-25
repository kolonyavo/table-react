import React from 'react';

function Sidenav(props) {
    return (
        <div className="sb-sidenav-menu-heading">{props.title}</div>
    );
}

function Sidenav_link(props) {
    return (
        <a className="nav-link" href="index.html">
            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
            {props.link}
        </a>
    );
}

function Layouts(props) {
    return (
        <div>
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                Layouts
                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
            </a>
            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                <nav class="sb-sidenav-menu-nested nav">
                    <a class="nav-link" href="layout-static.html">Static Navigation</a>
                    <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                </nav>
            </div>
        </div>
    );
}

function Nav_link(props) {
    return (
        <a className="nav-link" href="#">{props.link}</a>
    );
}

function Addons(props) {
    return (
        <div>
            <a className="nav-link" href="charts.html">
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                {props.charts}
            </a>

            <a className="nav-link" href="tables.html">
                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                {props.tables}
            </a>
        </div>
    );
}

function Side_navbar(params) {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <Sidenav title="Core"/>
                            <Sidenav_link link="Dashboard"/>                             
                        <Sidenav title="Interface"/>
                        <Layouts/>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                            Pages
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>       
                        <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                    Authentication
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Nav_link link="Login"/>
                                        <Nav_link link="Register"/>
                                        <Nav_link link="Forgot Password"/>
                                    </nav>
                                </div>                                  
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                    Error
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Nav_link link="401 Page"/>
                                        <Nav_link link="404 Page"/>
                                        <Nav_link link="500 Page"/>
                                    </nav>
                                </div>
                            </nav>                           
                        </div>
                        <Sidenav title="Addons"/>
                            <Addons charts="Charts" tables="Tables"/>
                    </div>
                </div>
                <Footer title="Start Bootstrap" text="Logged in as:"/>
            </nav>
        </div>
    );
}

function Footer(props) {
    return (
        <div className="sb-sidenav-footer">
            <div className="small">{props.text}</div>
            {props.title}
        </div>
    );
}

export default Side_navbar;