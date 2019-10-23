import { connect } from 'react-redux';
import SetTimer from './SetTimerComponent';
import { setGameTimer } from 'store/game/actions';
import seconds from 'helpers/secondsArray';

const mapDispatchToProps = dispatch => ({
  setGameTimer: seconds => dispatch(setGameTimer(seconds)),
})

const mapStateToProps = state => ({
  game: state.game,
  seconds
});

export default connect(mapStateToProps, mapDispatchToProps)(SetTimer);