import React, { Component } from 'react';
import Statistics from './FeedbackStatistic';
import css from './FeedbacksStyles.module.css';
import FeedbackOptions from './FeedbackOptions';

class Feedbacks extends Component {
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        };

    }

    onGoodClick = () => {
        this.setState(prevState => ({
        good: prevState.good += 1,})
        );
    };
    onNeutralClick = () => {
        this.setState(prevState => ({
        neutral: prevState.neutral += 1,
        }));
        
    };
    onBadClick = () => {
        this.setState(prevState => ({
        bad: prevState.bad += 1,
        }));
        
    };
    countTotalFeedback = () => {
        let totalFeedbacks = this.state.good + this.state.neutral + this.state.bad;
        return totalFeedbacks;
    }
    countPositiveFeedbackPercentage = () => {
        let positivePercentage = Math.floor(this.state.good * 100 / this.countTotalFeedback());
        if (isNaN(positivePercentage)) {
            return 0
        }
        return positivePercentage;
    }


    render() {
    return (
      <div className={css.feedback_wrapper}>
            <h2 className={css.feedback_header}>Please, leave your feedback!</h2>
            <FeedbackOptions
                onGoodClick={this.onGoodClick}
                onNeutralClick={this.onNeutralClick}
                onBadClick={this.onBadClick}
            />

            <Statistics
                goodValue={this.state.good}
                neutralValue={this.state.neutral}
                badValue={this.state.bad}
                totalFeedbackValue={this.countTotalFeedback()}
                percentageValue={this.countPositiveFeedbackPercentage()}
            />
      </div>
    );
  }
}

export default Feedbacks;