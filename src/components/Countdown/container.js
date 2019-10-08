import { connect } from 'react-redux';
import { toggleGameStarted, toggleGameOver } from 'store/game/actions';
import Countdown from './component';

const mapDispatchToProps = dispatch => ({
  toggleGameStarted: bool => dispatch(toggleGameStarted(bool)),
  toggleGameOver: bool => dispatch(toggleGameOver(bool)),
})

export default connect(null, mapDispatchToProps)(Countdown);