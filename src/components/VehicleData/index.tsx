interface IvehicleData {
    colorSpanYQ?: string;
    backgroundYQ?: string;
    colorP?: string;
}


const VehicleData = ({ colorSpanYQ, backgroundYQ, colorP }: IvehicleData) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "20px",
            }}
        >
            <div style={{
                display: "flex",
                gap: "10px",
            }}
            >

                <span style={{
                    width: "50px",
                    height: "32px",
                    padding: "5px",
                    boxSizing: "border-box",
                    borderRadius: "4px",
                    background: backgroundYQ,
                    color: colorSpanYQ,
                }}>
                    2013
                </span>
                <span style={{
                    width: "50px",
                    height: "32px",
                    padding: "5px",
                    boxSizing: "border-box",
                    borderRadius: "4px",
                    background: backgroundYQ,
                    color: colorSpanYQ,
                }}>
                    0 km
                </span>
            </div>
            <span
                style={{ color: colorP }}
            >
                R$ 00.000,00
            </span>
        </div>
    )
}

export default VehicleData