import { connect } from 'react-redux';
import { toggleGameStarted, toggleGameOver, setGameTimer } from 'store/game/actions';
import Timer from './component';

const mapStateToProps = state => ({
  game: state.game,
});

const mapDispatchToProps = dispatch => ({
  toggleGameStarted: bool => dispatch(toggleGameStarted(bool)),
  toggleGameOver: bool => dispatch(toggleGameOver(bool)),
  setGameTimer: seconds => dispatch(setGameTimer(seconds)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer);