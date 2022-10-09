import css from './FeedbacksStyles.module.css';

const NoFeedback = ({ message }) => (
    <p className={css.noFeedbacksMessage}>{message}</p>
)
export default NoFeedback