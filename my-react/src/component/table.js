import React from 'react';
import Data from './dataTable';


function Chemin(props){
    return (
        <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item"><a href="index.html">{props.link1}</a></li>
            <li className="breadcrumb-item active">{props.link2}</li>
        </ol>
    );
}

function Title(props) {
    return (
        <h1 className="mt-4">{props.title}</h1>
    );
}

function Card(props) {
    return (
    <div className="card mb-4">
        <div className="card-body">
            {props.firstText}            
            <a target="_blank" href="https://datatables.net/">{props.secText}</a>
            .
        </div>
    </div>);
}

function High() {
    return (
    <div className="card-header">
        <i className="fas fa-table me-1"></i>
        DataTable Example
    </div>
    );
}

function List(props) {
    return(
        <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
        </tr>
    );
}

function Table() {
    return (
    <main>
        <div className="container-fluid px-4">
            <Title title="Tables"/>
            <Chemin link1="Dashboard" link2="Tables"/>
            <Card firstText="DataTables is a third party plugin that is used to generate the demo table below. For more information 
            about DataTables, please visit the " secText="official DataTables documentation"/>
            <div className="card mb-4">
                <High/>
                <div class="card-body">
                    <table id="datatablesSimple">
                        <thead>
                            <List/>
                        </thead>
                        <tfoot>
                            <List/>
                        </tfoot>
                        <Data/>
                    </table>
                </div>
            </div>
        </div>
    </main>

    );
}

function Content() {
    return(
    <div id="layoutSidenav_content">
        <Table/>
    </div>
    );
};

export default Content;