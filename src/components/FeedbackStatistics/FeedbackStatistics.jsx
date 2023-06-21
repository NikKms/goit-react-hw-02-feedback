import PropTypes from 'prop-types';
import { Statics, StaticsText } from './FeedbackStatistics.styled';
import { DefaultNotifaction } from 'components/DefaultNotifaction';

export const FeedbackStatistics = ({
  options,
  total,
  title,
  positiveFeedback,
}) => {
  const values = Object.keys(options);

  return (
    <Statics>
      <h2>{title}</h2>
      {total > 0 ? (
        <>
          {values.map(value => (
            <StaticsText key={value}>
              {value}: {options[value]}
            </StaticsText>
          ))}
          <StaticsText>total: {total}</StaticsText>
          <StaticsText>positive feedback: {positiveFeedback}%</StaticsText>
        </>
      ) : (
        <DefaultNotifaction text={'No feedback given'} />
      )}
    </Statics>
  );
};

FeedbackStatistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
