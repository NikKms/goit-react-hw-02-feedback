import PropTypes from 'prop-types';
import {
  OptionsList,
  OptionsItem,
  OptionsButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onIncrement }) => {
  const values = Object.keys(options);

  return (
    <OptionsList>
      {values.map(value => (
        <OptionsItem key={value}>
          <OptionsButton type="button" onClick={() => onIncrement(value)}>
            {value}
          </OptionsButton>
        </OptionsItem>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onIncrement: PropTypes.func.isRequired,
};
