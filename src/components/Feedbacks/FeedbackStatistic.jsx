import React, { Component } from 'react';
import css from './FeedbacksStyles.module.css';

class Statistics extends Component {
    countTotalFeedback = ({good, neutral, bad}) => {
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
            <div>
                <span className={css.counter_good}>Good: {this.state.good}</span>
                <span className={css.counter_neutral}>Neutral: {this.state.neutral}</span>
                <span className={css.counter_bad}>Bad: {this.state.bad}</span>
                <span className={css.counter_total}>Total: {this.countTotalFeedback()}</span>
                <span className={css.counter_percentage}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</span>
            </div>
        );
    }
}

export default Statistics;