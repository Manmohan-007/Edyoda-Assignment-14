import React from 'react';
import './App.css';
import { Route, BrowserRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";
import AccountsPage from './Pages/AccountPage/AccountsPage'
import LoginPage from './Pages/Login Page/LoginPage'
import AddProductPage from "./Pages/AddProductPage/AddProductPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { getAllData } from "./Utils/CommonMethods";
import Loader from "./Components/Loader/Loader";
import ProductDetailsForm from "./Components/ProductDetailsForm/ProductDetailsForm";

class App extends React.Component {

    state = {
        activePage: 'login',
        menuHidden: true,
    }

    changeActivePage = (pathname) => {
        this.setState({activePage: pathname})
    }

    componentDidMount() {
        getAllData()
            .then((response) => {
                this.props.changeData(response)
            })
    }

    menuHidden = () => {
        this.setState({menuHidden: !this.state.menuHidden})
    }


    render() {
        return (
            <BrowserRouter>
                <Route path={'/'} render={(props) => <Topbar changeActivePage={this.changeActivePage} isHidden={this.state.menuHidden} activePage={this.state.activePage} menuHidden={this.menuHidden} {...props}/> }/>
                <div className="App">
                    <Loader isLoaded={this.props}>
                        <Route exact path={'/dashboard'} render={(props) => <Dashboard {...props}/>}/>
                        <Route exact path={'/accounts_page'} render={(props) => <AccountsPage changeActivePage={this.changeActivePage} {...props}/> }/>
                        <Route exact path={'/login'} render={(props) => <LoginPage changeActivePage={this.changeActivePage} {...props}/> }/>
                        <Route exact path={'/products'} render={(props) => <ProductsPage {...props}/> }/>
                        <Route exact path={'/add_product'} render={(props) => <AddProductPage {...props} changeActivePage={this.changeActivePage}/> }/>
                        <Route exact path={'/product_data/:id'} render={(props) => <ProductDetailsForm {...props}/>} />
                    </Loader>
                </div>
                <Route path={'/'} render={() => <Footer/> }/>
            </BrowserRouter>
        );
    }
}

let getDataFromGlobalStore = (globalStore) => {
    return globalStore
}

let dispatchToGlobalStore = (dispatch) => {
    return {
        changeData: (response) => dispatch({type: 'UPDATE_DATA', data: response}),
    }
}

export default connect(getDataFromGlobalStore,dispatchToGlobalStore)(App);
