import css from './section.module.css';

export const Sections = ({ title, children }) => {
  return (
    <div className={css.sections}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};
