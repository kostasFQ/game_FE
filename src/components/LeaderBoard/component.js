import React, { Fragment, PureComponent } from 'react';
import { leaderBoard } from 'api/urls';
import styles from './LeaderBoard.module.scss';

class LeaderBoard extends PureComponent {
  state = { list: [], tableHeaders: [] }

  componentDidMount() {
    this.getLeaders();
  }

  getLeaders = async () => {
    const { makeCall, size } = this.props;
    const { data } = await makeCall(leaderBoard());
    const list = data.slice(0, size);
    const tableHeaders = Object.keys(list[0]).slice(1, 5);
    tableHeaders.unshift('#');
    this.setState(() => ({ list, tableHeaders }));
  }

  render() {
    const { list, tableHeaders } = this.state;
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