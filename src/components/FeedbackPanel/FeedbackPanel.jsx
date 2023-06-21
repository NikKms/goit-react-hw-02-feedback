import PropTypes from 'prop-types';
import { FeedbackSection, FeedbackTitle } from './FeedbackPanel.styled';

export const FeedbackPanel = ({ title, children }) => {
  return (
    <FeedbackSection>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </FeedbackSection>
  );
};

FeedbackPanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
