import { connect } from 'react-redux';
import GamePage from './GamePageComponent';
import { saveCount } from 'store/game/actions';

const mapDispatchToProps = dispatch => ({
  saveCount: count => dispatch(saveCount(count)),
})

const mapStateToProps = state => ({
  game: state.game,
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);