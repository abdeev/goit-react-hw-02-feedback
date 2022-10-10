import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


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
FeedbackOptions.propTypes = {
        onGoodClick: PropTypes.func,
        onNeutralClick: PropTypes.func,
        onBadClick: PropTypes.func,
}
export default FeedbackOptions;