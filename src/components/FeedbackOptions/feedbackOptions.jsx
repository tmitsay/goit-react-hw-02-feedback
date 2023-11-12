import css from './feedbackOptions.module.css';

export const Buttons = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btn_list}>
      {options.map(option => (
        <li className={css.btn_items} key={option}>
          <button
            className={css.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
