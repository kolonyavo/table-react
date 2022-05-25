
import './App.css';
import Content from './component/table';
import Nav_bar from './component/navbar';
import Side_navbar from './component/sideNav';

function App() {
  return (
    <body className="sb-nav-fixed">
      <Nav_bar/>
      <div id="layoutSidenav">
        <Side_navbar/>
        <Content/>
      </div>
    </body>
  );
}

export default App;