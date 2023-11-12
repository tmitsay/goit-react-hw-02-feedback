import { Component } from 'react';
import { Statistics } from './Statistics/statistics';
import { Sections } from './Section/section';
import { Notification } from './Notification/notification';
import { Buttons } from './FeedbackOptions/feedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const totalPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Sections title="Please leave feedback">
          <Buttons onLeaveFeedback={this.onLeaveFeedback} options={options} />
        </Sections>
        <Sections title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={totalFeedback}
              positivePercentage={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Sections>
      </div>
    );
  }
}
