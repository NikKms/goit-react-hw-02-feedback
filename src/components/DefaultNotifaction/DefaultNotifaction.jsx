import PropTypes from 'prop-types';
import { Notification } from './DefaultNotifaction.styled';

export const DefaultNotifaction = ({ text }) => (
  <Notification>{text}</Notification>
);

DefaultNotifaction.propTypes = {
  text: PropTypes.string.isRequired,
};
