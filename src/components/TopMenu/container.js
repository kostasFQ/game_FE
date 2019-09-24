import { connect } from 'react-redux';
import { setUser } from 'store/user/actions';
import TopMenu from './component';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: () => dispatch(setUser('kst')),
  resetUser: () => dispatch(setUser(null)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);