import { twMerge } from 'tailwind-merge';

export const Panel = ({ children, className, ...rest }) => {
  const baseStyle = 'px-3 rounded-md shadow-md border border-slate-500 w-full';

  return (
    <div className={twMerge(baseStyle, className)} {...rest}>
      {children}
    </div>
  );
};
