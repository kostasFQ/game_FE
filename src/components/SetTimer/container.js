import { connect } from 'react-redux';
import SetTimer from './component';
import { setGameTimer } from 'store/game/actions';
import seconds from 'assets/helpers/secondsArray';

const mapDispatchToProps = dispatch => ({
  setGameTimer: seconds => dispatch(setGameTimer(seconds)),
})

const mapStateToProps = state => ({
  game: state.game,
  seconds
});

export default connect(mapStateToProps, mapDispatchToProps)(SetTimer);