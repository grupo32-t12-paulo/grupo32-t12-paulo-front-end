interface IVehicleData {
  colorSpanYQ?: string;
  backgroundYQ?: string;
  colorP?: string;
  mileage: number;
  price: string;
  year: number;
}

const VehicleData = ({
  colorSpanYQ,
  backgroundYQ,
  colorP,
  mileage,
  price,
  year,
}: IVehicleData) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <span
          style={{
            height: "32px",
            padding: "6px",
            boxSizing: "border-box",
            borderRadius: "4px",
            background: backgroundYQ,
            color: colorSpanYQ,
          }}
        >
          {year}
        </span>
        <span
          style={{
            height: "32px",
            padding: "6px",
            boxSizing: "border-box",
            borderRadius: "4px",
            background: backgroundYQ,
            color: colorSpanYQ,
          }}
        >
          {mileage} km
        </span>
      </div>
      <span style={{ color: colorP }}>
        {Number(price).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </div>
  );
};

export default VehicleData;
