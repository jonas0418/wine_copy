import wineIcon from "./wine_icon.png";
import { Spin } from "antd";

function Loading() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin
        tip="Loading..."
        size="large"
        style={{
          fontSize: "14px",
          fontFamily: "Myfont",
          color: "black",
        }}
        indicator={<img src={wineIcon} className="rotate-image" />}
      />
    </div>
  );
}

export default Loading;
