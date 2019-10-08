import { connect } from 'react-redux';
import FinalCount from './component';
import { saveCount, toggleGameStarted, toggleGameOver } from 'store/game/actions';

const mapDispatchToProps = dispatch => ({
  saveCount: count => dispatch(saveCount(count)),
  toggleGameStarted: bool => dispatch(toggleGameStarted(bool)),
  toggleGameOver: bool => dispatch(toggleGameOver(bool)),
})

const mapStateToProps = state => ({
  game: state.game,
});

export default connect(mapStateToProps, mapDispatchToProps)(FinalCount);