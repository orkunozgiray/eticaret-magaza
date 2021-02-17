import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

//hoc
import WithAuth from './hoc/withAuth';
// import WithNauth from './hoc/withNauth';

//layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
//pages
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import './default.scss';


const App = props => {
const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(checkUserSession());

  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <HomePage />
          </HomepageLayout>
          )} 
        />
        <Route path="/registration" 
          render={() => 
            // currentUser ? 
            // (<WithNauth>
            //   <MainLayout>
            //     <Registration />
            //   </MainLayout>
            // </WithNauth> 
            // ) : 
            (
              <MainLayout>
                <Registration />
              </MainLayout>
          )} 
        />
        <Route path="/login" 
          render={() => 
          // currentUser ? 
          //   (<WithNauth>
          //     <MainLayout>
          //       <Login />
          //     </MainLayout>
          //   </WithNauth> 
          //   ) : 
          (
              <MainLayout>
                <Login />
              </MainLayout>
          )} 
        />
        <Route path="/recovery" render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
          )} 
        />
        <Route path="/dashboard" render={() => (
          <WithAuth>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </WithAuth>
          )} 
        />
      </Switch>
    </div>
  );
}

export default App;
