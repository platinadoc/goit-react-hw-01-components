import s from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const StatisticsItem = ({ label, percentage }) => {
  const color = getRandomHexColor();
  return (
    <li className={s.item} style={{ backgroundColor: color }}>
      <span className={s.label}>{label} </span>
      <span className={s.percentage}>{percentage + `%`}</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};