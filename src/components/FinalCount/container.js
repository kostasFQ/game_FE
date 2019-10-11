import { connect } from 'react-redux';
import FinalCount from './component';
import { saveCount, toggleGameStarted, toggleGameOver, setUserPlace, setUserName } from 'store/game/actions';
import makeCall from 'api/call';

const mapDispatchToProps = dispatch => ({
  saveCount: count => dispatch(saveCount(count)),
  toggleGameStarted: bool => dispatch(toggleGameStarted(bool)),
  toggleGameOver: bool => dispatch(toggleGameOver(bool)),
  setUserPlace: place => dispatch(setUserPlace(place)),
  setUserName: name => dispatch(setUserName(name)),
  makeCall: (url, value) => makeCall(url, value)
})

const mapStateToProps = state => ({
  game: state.game,
});

export default connect(mapStateToProps, mapDispatchToProps)(FinalCount);