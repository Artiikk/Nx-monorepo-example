import cls from './index.module.scss';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className={cls.header}>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </nav>
    </header>
  );
};
