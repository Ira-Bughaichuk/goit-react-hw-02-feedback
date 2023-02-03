import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    // console.log(positivePercentage);
    
    return total ?  <div>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{ bad}</p>
            <p>Total:{total}</p>
            <p>Positive feedback:{positivePercentage === 'NaN' ? "0" : positivePercentage}%</p>
      </div> : <Notification message="There is no feedback" />
       
    
}

export default Statistics;

Statistics.propTypes = {
   good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,/*?? */

}