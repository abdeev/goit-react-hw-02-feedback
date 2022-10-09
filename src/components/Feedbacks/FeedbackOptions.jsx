import React from 'react';
import css from './FeedbacksStyles.module.css';


const FeedbackOptions = ({
        onGoodClick,
        onNeutralClick,
        onBadClick,
}) => {
  return (
        <div className={css.feedback_buttons}>
                <button className={css.good_button} onClick={onGoodClick}>Good</button>
                <button className={css.neutral_button} onClick={onNeutralClick}>Neutral</button>
                <button className={css.bad_button} onClick={onBadClick}>Bad</button>
        </div>
  );
};

export default FeedbackOptions;