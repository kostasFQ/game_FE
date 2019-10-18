import { connect } from 'react-redux';
import LeaderBoard from './component';
import { leaderBoard } from 'api/urls';
import makeCall from 'api/call';

const mapDispatchToProps = () => ({
  getLeaders: size => makeCall(leaderBoard(size))
});

const mapStateToProps = state => ({
  game: state.game,
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);