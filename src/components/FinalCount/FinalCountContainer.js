import { connect } from 'react-redux';
import FinalCount from './FinalCountComponent';
import { saveCount, toggleGameStarted, toggleGameOver, setUserPlace, setUserName } from 'store/game/actions';
import { saveResultUrl } from 'api/urls';
import makeCall from 'api/call';

const mapDispatchToProps = dispatch => ({
  saveCount: count => dispatch(saveCount(count)),
  toggleGameStarted: bool => dispatch(toggleGameStarted(bool)),
  toggleGameOver: bool => dispatch(toggleGameOver(bool)),
  setUserPlace: place => dispatch(setUserPlace(place)),
  setUserName: name => dispatch(setUserName(name)),
  saveResult: value => makeCall(saveResultUrl(saveResultUrl), value)
})

const mapStateToProps = state => ({
  game: state.game,
});

export default connect(mapStateToProps, mapDispatchToProps)(FinalCount);