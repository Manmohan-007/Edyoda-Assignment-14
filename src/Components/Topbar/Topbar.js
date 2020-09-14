import React from 'react'import classes from './Topbar.module.css'import {Dashboard, Cart, User} from "../../Assets/Icons";class Topbar extends React.Component {    render() {        return(            <div className={classes.TopbarContainer}>                <div className={classes.TopbarTitle}>                    Product Admin                </div>                <div className={classes.MenuItems}>                    <span className={classes.MenuContainers}>                        <span className={classes.Icons}>{Dashboard}</span>                        <span className={classes.IconsDescriptions}>Dashboard</span>                    </span>                    <span className={classes.MenuContainers}>                        <span className={classes.Icons}>{Cart}</span>                        <span className={classes.IconsDescriptions}>Products</span>                    </span>                    <span className={`${classes.MenuContainers} ${classes.ActiveMenu}`}>                        <span className={classes.Icons}>{User}</span>                        <span className={classes.IconsDescriptions}>Accounts</span>                    </span>                </div>                <div className={classes.UserDetails}>                    Admin, <b>Logout</b>                </div>            </div>        )    }}export default Topbar