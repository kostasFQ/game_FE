import React, { Fragment, PureComponent } from 'react';
import { leaderBoard } from 'api/urls';
import styles from './LeaderBoard.module.scss';

class LeaderBoard extends PureComponent {
  state = { list: [], tableHeaders: [], loading: false }

  componentDidMount() {
    this.getLeaders();
  }

  getLeaders = async () => {
    try {
      const { makeCall, size } = this.props;
      this.setState(() => ({ loading: true }));
      const { data: { response: list } } = await makeCall(leaderBoard(size));
      const tableHeaders = Object.keys(list[0]).slice(1, 5);
      tableHeaders.unshift('place');
      this.setState(() => ({ list, tableHeaders, loading: false }));
    } catch(err) {
      console.log(err.message);
    }
  }

  render() {
    const { list, tableHeaders, loading } = this.state;

    if ( loading ) {
      console.log('loading')
      return (
        <h3>Loading...</h3>
      )
    }

    return (
      <Fragment>
        <table className={styles.leaderBoard__table}>
          <caption><h3>Leaders</h3></caption>
          <thead>
            <tr >
              {tableHeaders.map(i => (<th key={i}>{i.toUpperCase()}</th>))}
            </tr>
          </thead>
          <tbody>
            {
              list.map((i, index) => (
                <tr key={i.name}>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.score}</td>
                  <td>{i.average}</td>
                  <td>{i.seconds}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default LeaderBoard;