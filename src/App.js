import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/signin.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { onSnapshot } from "firebase/firestore";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    const authSubscription = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (ss) => {
          setCurrentUser({
            id: ss.id,
            ...ss.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })

    return () => {
      authSubscription();
    }
  }, [])
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : <SignInPage />} />
      </Switch>
    </div>
  );
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
