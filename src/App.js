import React, { useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/global';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectCurrentUser } from 'store/slices/currentUserSlice';
import { auth, generateUserDocument } from 'utils/firebaseConfig';
import Landing from 'pages/Landing';
import Authentication from 'pages/Authentication';
import Error from 'pages/404';
import NavBar from 'components/Nav';
import Chats from 'pages/Chats';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser)

  const persistAuth = useCallback(() => {
    auth.onAuthStateChanged(async userAuth => {
      const userData = await generateUserDocument(userAuth);
      dispatch(setUser(userData));
    });
  }, [dispatch]);

  useEffect(() => {
    persistAuth()
  }, [persistAuth])

  const signOut = () => {
    auth.signOut();
    dispatch(setUser({}))
  }

  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <NavBar
            signOut={signOut}
            user={user}
          />
          <Route path="/" exact component={Landing} />
          <Route path="/auth/:slug" component={Authentication} />
          <Route path="/chats" component={Chats} />
          <Route component={Error} />
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
