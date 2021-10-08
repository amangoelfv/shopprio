import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/signin.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { onSnapshot } from "firebase/firestore";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const authSubscription = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const unsub = onSnapshot(userRef, (ss) => {
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
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
