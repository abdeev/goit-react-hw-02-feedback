import css from './FeedbacksStyles.module.css';

const Section = ({ title, children }) => (
        <section>
            {title && <h2 className={css.feedback_header}>{title}</h2>}
            {children}
        </section>
);
    
export default Section