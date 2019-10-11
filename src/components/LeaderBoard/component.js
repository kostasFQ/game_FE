import React, { Fragment, PureComponent } from 'react';
import { leaderBoard } from 'api/urls';
import cn from 'classnames';
import styles from './LeaderBoard.module.scss';

class LeaderBoard extends PureComponent {
  state = { list: [], tableHeaders: [], loading: false }

  async componentDidMount() {
    this.getLeaders();
  }

  getLeaders = async () => {
    try {
      const { makeCall, size } = this.props;
      this.setState(() => ({ loading: true }));
      const { data: { response: list } } = await makeCall(leaderBoard(size));
      if (list.length !== 0) {
        const tableHeaders = Object.keys(list[0]).slice(1, 5);
        tableHeaders.unshift('place');
        this.setState(() => ({ list, tableHeaders}));
      }
      this.setState(() => ({ loading: false }));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  render() {
    const { list, tableHeaders, loading } = this.state;
    const { game: { userPlace, userName } } = this.props;

    if (loading) {
      return (
        <h3>Loading...</h3>
      )
    }

    return (
      <Fragment>
        <table className={styles.leaderBoard__table} border='1'>
          <caption><h3>{ list.length !== 0 && 'TOP 10' }</h3></caption>
          <thead>
            <tr >
              {tableHeaders.map(i => (<th key={i} className={cn(i === 'average' && styles.leaderBoard__table__average)} >{i.toUpperCase()}</th>))}
            </tr>
          </thead>
          <tbody>
            {
              list.map((i, index) => (
                <tr key={i.name} className={ cn(i.name === userName && styles.leaderBoard__table__div )}>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.score}</td>
                  <td className={styles.leaderBoard__table__average}>{i.average}</td>
                  <td>{i.seconds}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {
          userPlace &&
          <div className={styles.leaderBoard__table__userPlace}>
            {userName}, your place is <span className={styles.leaderBoard__table__average}>{userPlace}</span>
          </div>
        }
      </Fragment>
    )
  }
}

export default LeaderBoard;