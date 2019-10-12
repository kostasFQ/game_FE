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
      
      this.setState(() => ({ loading: false, list }));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  render() {
    const { list, loading } = this.state;
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
              <th>place</th>
              <th>name</th>
              <th>score</th>
              <th className={styles.leaderBoard__table__average}>average</th>
              <th>seconds</th>
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