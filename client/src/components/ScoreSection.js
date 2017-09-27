import React from 'react';
import { connect } from 'react-redux';
import { List, Header, Segment } from 'semantic-ui-react';
import ScoreRow from './ScoreRow';

class ScoreSection extends React.Component {
  total = (score, label) => {
    return(
      <List.Item key={label}>
        <Header floated='left'>{label}</Header>
        <Header floated='right' style={{ marginRight: '20px'}}>{score}</Header>
      </List.Item>
    )
  }

  generateTotals = () => {
    let { currentGame: { scores }, label } = this.props;
    const sectionScores = [];
    const sectionTotal = scores.filter( s => s.section === label.toLowerCase() )
      .reduce( (total, entry) => {
        let score = entry.score || 0
        return total + score
      }, 0)

    sectionScores.push(this.total(sectionTotal, 'Section Total'))

    return sectionScores;
  }

  render() {
    let { label, currentGame: { scores } } = this.props;
    return(
      <Segment basic>
        <Header as='h3'>{label} Section</Header>
        <List divided>
          { scores.filter( s => s.section === label.toLowerCase() ).map( (score, index) => {
            return (<ScoreRow key={index} {...score} />)
          })
        }
        { this.generateTotals() }
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame }
}

export default connect(mapStateToProps)(ScoreSection);
