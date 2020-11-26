export default function Square(props) {
  const { key, width, height } = props;
  return (
    <div
      key={key}
      className="grey-on-hover squares"
      style={{
        width: `calc(80vw/${width})`,
        height: `calc(80vh/${height})`,
      }}
    />
  );
}
