import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notofication';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelFeedback = type => {
    this.setState({ [type]: this.state[type] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (good !== 0 && total !== 0) {
      return `${Math.round((good * 100) / total)}%`;
    }
    return `${0}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handelFeedback} />
        </Section>
        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            ></Statistics>
          ) : (
            <Notification messege="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
