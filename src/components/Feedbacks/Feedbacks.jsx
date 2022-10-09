import React, { Component } from 'react';
import css from './FeedbacksStyles.module.css';

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
        let positivePercentage = Math.ceil(this.state.good * 100 / this.countTotalFeedback());
        if (isNaN(positivePercentage)) {
            return 0
        }
        return positivePercentage;
    }


    render() {
    return (
      <div className={css.feedback_wrapper}>
            <h2 className={css.feedback_header}>Please, leave your feedback!</h2>
        <div className={css.feedback_buttons}>
                <button className={css.good_button} onClick={this.onGoodClick}>Good</button>
                <button className={css.neutral_button} onClick={this.onNeutralClick}>Neutral</button>
                <button className={css.bad_button} onClick={this.onBadClick}>Bad</button>
            </div>
            <div className={css.statistic_container}>
                <h2 className={css.statistic_header}>Feedback statistics:</h2>
                <span className={css.counter_good}>Good: {this.state.good}</span>
                <span className={css.counter_neutral}>Neutral: {this.state.neutral}</span>
                <span className={css.counter_bad}>Bad: {this.state.bad}</span>
                <span className={css.counter_total}>Total: {this.countTotalFeedback()}</span>
                <span className={css.counter_percentage}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</span>
                
            </div>
        
      </div>
    );
  }
}

export default Feedbacks;