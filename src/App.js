import React, { Fragment } from 'react';
import { Switch, Route, Link, /* Redirect */ } from "react-router-dom";
import { connect } from 'react-redux';
import { setUser } from './store/user/actions'
import HomePage from 'views/HomePage'
import LoginPage from 'views/LoginPage'
// import UserProfile from 'views/UserProfile'
import NotFound from 'views/NotFound'


// function PrivateRoute({ component: Component, name, ...rest }) {
//   console.log('----', name)

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         name ? (
//           <Component {...props} />
//         ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: props.location }
//               }}
//             />
//           )
//       }
//     />
//   )
// }

function App(props) {
  const { state: { name } } = props;
  console.log(name)

  if(!name) {
    return (
      <Fragment>
        <button onClick={props.setUser}>log</button>
        {/* <button onClick={props.resetUser}>out</button> */}
        <LoginPage />
      </Fragment>
    )
  }

  return (
    <Fragment>
      {/* <Link to='/login'>Log in</Link> */}
      <Link to='/'>Home</Link>
      <Link to='/user'>Profile</Link>
      <Link to='/xxxx'>xxxx</Link>
      <button onClick={props.setUser}>log</button>
      <button onClick={props.resetUser}>out</button>
      <div>
        <Switch>
          <Route path={'/'} exact component={HomePage} />
          {/* <Route path={'/login'} component={LoginPage} /> */}
          {/* <PrivateRoute path={'/user'} component={UserProfile} name={name} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  state: state.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: () => dispatch(setUser('kst')),
  resetUser: () => dispatch(setUser(null)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
