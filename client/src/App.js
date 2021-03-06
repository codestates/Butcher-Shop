import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Main from './pages/Main';
import axios from 'axios';
import Resipes from './pages/Resipes'
import ChangePassword from './pages/ChangePassword';
import Dropsign from './pages/Dropsign';
import Basket from './pages/Basket'
import ChangeUserInfo from './pages/ChangeUserInfo';
 
export default function App () {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState({});
  const [meat, setmeat] = useState([])
  const history = useHistory();
  const isAuthenticated = () => {
    axios.get('https://localhost:4000/auth').then((data)=> {
      setUserinfo(data.data);
      console.log(userinfo)
      setIsLogin(true); 
      history.push('/');
    })
    .catch((err)=> {
      if(err.response.status===401) {
        setIsLogin(false);
        history.push('/');
      }
    })
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  const handleLogout = () => {
    axios.post('https://localhost:4000/signout').then((res) => {
      setUserinfo(null);
      setIsLogin(false);
      history.push('/');
    });
  };
  const handleMeatData = (data,count) => {
    data[0].count = count;
    setmeat([...meat,...data])
  }

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      <Switch>
        <Route path='/login'>
          <Login
            isLogin={isLogin}
            handleResponseSuccess={handleResponseSuccess}
          />
        </Route>
        <Route exact path='/signup'>
          <Signup isLogin={isLogin} />
        </Route>
        <Route exact path='/changePassword'>
          <ChangePassword />
        </Route>
        <Route exact path='/changeUserInfo'>
          <ChangeUserInfo  />
        </Route>
        <Route exact path='/basket'>
          <Basket meatdata = {meat} userinfo={userinfo}/>
        </Route>
        <Route exact path='/resipes'>
          <Resipes meatdata = {meat}/>
        </Route>        
        <Route exact path='/dropsign'>
          <Dropsign handleLogout={handleLogout} />
        </Route>
        <Route exact path='/mypage'>
          <Mypage userinfo={userinfo} handleLogout={handleLogout} />
        </Route>
        <Route path='/'>
          <Main isLogin={isLogin} handleLogout={handleLogout} handleMeatData={handleMeatData} />
          {/* {isLogin ? <Redirect to='/mypage' /> : <Redirect to='/login' />}  */}
        </Route>
      </Switch>
    </div>
  );
}

/*
<Route path='/'>
          <Main isLogin={isLogin}/>
          {/* {isLogin ? <Redirect to='/mypage' /> : <Redirect to='/login' />} 
          </Route>
*/