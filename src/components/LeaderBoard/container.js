import { connect } from 'react-redux';
import LeaderBoard from './component';
import { leaderBoard } from 'api/urls';
import makeCall from 'api/call';

const mapDispatchToProps = () => ({
  makeCall: url => makeCall(url)
});


const mapStateToProps = state => ({
  game: state.game,
  leaderBoard: leaderBoard
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);