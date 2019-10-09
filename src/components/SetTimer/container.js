import { connect } from 'react-redux';
import SetTimer from './component';
import { setGameTimer } from 'store/game/actions';

const mapDispatchToProps = dispatch => ({
  setGameTimer: seconds => dispatch(setGameTimer(seconds)),
})

const mapStateToProps = state => ({
  game: state.game,
});

export default connect(mapStateToProps, mapDispatchToProps)(SetTimer);