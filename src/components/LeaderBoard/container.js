import { connect } from 'react-redux';
import LeaderBoard from './component';
import makeCall from 'api/call';

const mapDispatchToProps = () => ({
  makeCall: url => makeCall(url)
});


const mapStateToProps = state => ({
  game: state.game,
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);