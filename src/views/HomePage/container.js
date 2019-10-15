import { connect } from 'react-redux';
import { toggleGameStarted, toggleGameOver } from 'store/game/actions';
import HomePage from './component';

const mapStateToProps = state => ({
  game: state.game,
});

const mapDispatchToProps = dispatch => ({
  toggleGameStarted: bool => dispatch(toggleGameStarted(bool)),
  toggleGameOver: bool => dispatch(toggleGameOver(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);