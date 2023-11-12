import css from './statistics.module.css';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statistics_list}>
      <li className={css.statistics_item}>Good: {good}</li>
      <li className={css.statistics_item}>Neutral: {neutral}</li>
      <li className={css.statistics_item}>Bad: {bad}</li>
      <li className={css.statistics_item}>Total: {total}</li>
      <li className={css.statistics_item}>
        Positive Feedback: {positivePercentage}%
      </li>
    </ul>
  );
};
