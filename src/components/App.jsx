import React, { Component } from 'react';
import NoFeedback from './NoFeedback/NoFeedback';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './FeedbackStatistic/FeedbackStatistic';
import css from './App.module.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      Good: 0,
      Neutral: 0,
      Bad: 0,
    };
  }
  feedbackTitle = 'Please, leave your feedback!';
  statisticTitle = '';
  onLeaveFeedback = el => {
    this.setState(prevState => {
      return {
        [el]: prevState[el] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    let totalFeedbacks = this.state.Good + this.state.Neutral + this.state.Bad;
    return totalFeedbacks;
  };
  countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.floor(
      (this.state.Good * 100) / this.countTotalFeedback()
    );
    if (isNaN(positivePercentage)) {
      return 0;
    }
    return positivePercentage;
  };

  render() {
    const titleMessage = 'There is no feedback';
    const { Good, Neutral, Bad } = this.state;
    return (
      <div className={css.feedback_wrapper}>
        <Section title={this.feedbackTitle}>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeavefeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Section title="Current statistic:">
            <NoFeedback message={titleMessage} />
          </Section>
        ) : (
          <Section title={this.statisticTitle}>
            <Statistics
              goodValue={Good}
              neutralValue={Neutral}
              badValue={Bad}
              totalFeedbackValue={this.countTotalFeedback()}
              percentageValue={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
