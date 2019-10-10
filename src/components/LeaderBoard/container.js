import { connect } from 'react-redux';
import LeaderBoard from './component';
import makeCall from 'api/call';

const mapDispatchToProps = () => ({
  makeCall: url => makeCall(url)
})

export default connect(null, mapDispatchToProps)(LeaderBoard);