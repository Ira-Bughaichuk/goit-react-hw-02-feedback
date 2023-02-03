import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {

    const element = options.map((option) => (
        <li key={option}>
            <button name={option} type="button" onClick={onLeaveFeedback}>{option}</button>
        </li>
    ));

    return (
       <ul> {element}</ul>
    )
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
}
