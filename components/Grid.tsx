type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode;
};

const Grid: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        gap: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
