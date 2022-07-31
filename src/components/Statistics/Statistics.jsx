import s from './Statistics.module.css';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(obj => (
          <StatisticsItem label={obj.label} percentage={obj.percentage} key={obj.id} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};