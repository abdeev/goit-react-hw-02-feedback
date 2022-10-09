import React from 'react';
import css from './FeedbacksStyles.module.css';

const Statistics = ({goodValue, neutralValue, badValue, totalFeedbackValue, percentageValue}) => (

<div className={css.statistic_container}>
                <h2 className={css.statistic_header}>Feedback statistics:</h2>
                <span className={css.counter_good}>Good: {goodValue}</span>
                <span className={css.counter_neutral}>Neutral: {neutralValue}</span>
                <span className={css.counter_bad}>Bad: {badValue}</span>
                <span className={css.counter_total}>Total: {totalFeedbackValue}</span>
                <span className={css.counter_percentage}>Positive feedback: {percentageValue}%</span>
                
            </div>
)

export default Statistics;