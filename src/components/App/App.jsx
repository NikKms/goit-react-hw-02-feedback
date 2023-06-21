import React, { Component } from 'react';

import { FeedbackPanel } from 'components/FeedbackPanel';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { FeedbackStatistics } from 'components/FeedbackStatistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = obj => {
    const totalValue = Object.values(obj).reduce(
      (total, value) => total + value,
      0
    );
    return totalValue;
  };

  countPositiveFeedbackPercentage = (totalValue, positiveFeedback) => {
    const count = Math.round((positiveFeedback / totalValue) * 100);
    return count;
  };

  render() {
    const { state } = this;
    const { good } = state;

    const totalValue = this.countTotalFeedback(state);
    const positivePercent = this.countPositiveFeedbackPercentage(
      totalValue,
      good
    );

    return (
      <FeedbackPanel title={'Please leave feedback'}>
        <FeedbackOptions options={state} onIncrement={this.handleIncrement} />
        <FeedbackStatistics
          title={'Statistics'}
          options={state}
          total={totalValue}
          positiveFeedback={positivePercent}
        />
      </FeedbackPanel>
    );
  }
}
