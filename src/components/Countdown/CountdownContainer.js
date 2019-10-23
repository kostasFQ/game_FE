import { connect } from 'react-redux';
import { toggleGameStarted } from 'store/game/actions';
import Countdown from './CountdownComponent';

const mapDispatchToProps = dispatch => ({
  toggleGameStarted: bool => dispatch(toggleGameStarted(bool)),
})

export default connect(null, mapDispatchToProps)(Countdown);