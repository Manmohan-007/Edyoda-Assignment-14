import React from 'react'import classes from './AccountSettings.module.css'import ButtonGenerator from "../ButtonGenerator/ButtonGenerator";const AccountSettings = (props) => {    let accountsPageData = props.accountsPage    let initialValues = {        email: '',        name: '',        password: '',        phone: '',        profilePic: ''    }    if(props.currentAccount !== '') {        if(accountsPageData[props.currentAccount] != undefined) {            initialValues['name'] = accountsPageData[props.currentAccount].name            initialValues['password'] = accountsPageData[props.currentAccount].password            initialValues['phone'] = accountsPageData[props.currentAccount].phone            initialValues['email'] = accountsPageData[props.currentAccount].email            initialValues['profilePic'] = accountsPageData[props.currentAccount].profilePic        }    }    let updatedValues = {        email: '',        name: '',        password: '',        phone: '',        profilePic: ''    }    const handleUpdatedData = (event) => {        switch (event.target.name) {            case 'name' : updatedValues['name'] = event.target.value; break;            case 'password' : updatedValues['password'] = event.target.value; break;            case 'phone' : updatedValues['phone'] = event.target.value; break;            case 'email' : updatedValues['email'] = event.target.value; break;            case 'profile' : updatedValues['profilePic'] = props[props.currentAccount].profilePic; break;            default: return null        }    }    const UpdateData = () => {        props.changingData(updatedValues)        props.history.push('dashboard')        props.changeActivePage('dashboard')    }    const deleteData = () => {        props.deletingData(props.currentAccount)        props.history.push('dashboard')        props.changeActivePage('dashboard')    }    return(        <div className={classes.MainContainer}>            <h4 className={classes.MainTitle}>Account Settings</h4>            <form className={classes.FormContainer}>                <div className={classes.FormLeft}>                    <div className={classes.FormFieldContainers}>                        <label className={classes.FormLabels}>Account Name</label>                        <input onChange={(e) => handleUpdatedData(e)} name='name' type='text' placeholder={initialValues.name} className={classes.FormInputFields}/>                    </div>                    <div className={classes.FormFieldContainers}>                        <label className={classes.FormLabels}>Password</label>                        <input onChange={(e) => handleUpdatedData(e)} name='password' type='password' className={classes.FormInputFields} placeholder={initialValues.password}/>                    </div>                    <div className={classes.FormFieldContainers}>                        <label className={classes.FormLabels}>Phone</label>                        <input onChange={(e) => handleUpdatedData(e)} name='phone' type='phone' className={classes.FormInputFields} placeholder={initialValues.phone}/>                    </div>                </div>                <div className={classes.FormRight}>                    <div className={classes.FormFieldContainers}>                        <label className={classes.FormLabels}>Account Email</label>                        <input onChange={(e) => handleUpdatedData(e)} name='email' type='email' className={classes.FormInputFields} placeholder={initialValues.email}/>                    </div>                    <div className={classes.FormFieldContainers}>                        <label className={classes.FormLabels}>Re-enter Password</label>                        <input type='password' className={classes.FormInputFields} placeholder={initialValues.password}/>                    </div>                    <div className={classes.FormFieldContainers}>                        <ButtonGenerator updateData={UpdateData} BtnTitle={'Update Your Profile'} />                    </div>                </div>            </form>            <ButtonGenerator deleteData={deleteData} BtnTitle={'Delete Your Account'}/>        </div>    )}export default AccountSettings