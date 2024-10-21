const Watch = ({ watch }) => {
  const { name, price } = watch;
  return (
    <div
      style={{
        border: "2px solid blue",
        borderRadius: "15px",
        margin: "15px",
        padding: "10px",
      }}
    >
      {/* <h3>All Watch</h3> */}
      <h4>Watch name: {name}</h4>
      <h4>Watch price: {price}</h4>
    </div>
  );
};

export default Watch;
