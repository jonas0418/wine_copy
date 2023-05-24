import { Grid, Image } from "antd-mobile";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  MemoryRouter,
} from "react-router-dom";
import "wired-elements";

import example1 from "./example1.jpeg";
import example2 from "./example2.jpeg";
import example3 from "./example3.jpeg";
import pizza from "./pizza.jpeg";
import somefood from "./somefood.jpeg";

function MainCategory() {
  const cardStyle = {
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "-webkit-fill-available",
    textAlign: "center",
    fontFamily: "MyFont",
    fontWeight: "bold",
  };
  const navigate = useNavigate();
  return (
    <div>
      <Grid columns={3} gap={8} style={{ padding: "15px" }}>
        <div
          onClick={() => {
            navigate("/wine");
          }}
        >
          <Image src={example1} />
          <wired-card style={cardStyle}>
            <p>WINE</p>
          </wired-card>
        </div>
        <div>
          <Image src={example2} />
          <wired-card style={cardStyle}>
            <p>CRAFT BEER</p>
          </wired-card>
        </div>
        <div>
          <Image src={example3} />
          <wired-card style={cardStyle}>
            <p>ACOLHOL FREE</p>
          </wired-card>
        </div>
      </Grid>
      <Grid columns={3} gap={8} style={{ padding: "15px" }}>
        <div>
          <Image src={pizza} />
          <wired-card style={cardStyle}>
            <p>Hand Made Pizza</p>
          </wired-card>
        </div>
        <div>
          <Image src={somefood} />
          <wired-card style={cardStyle}>
            <p>Food</p>
          </wired-card>
        </div>
      </Grid>
    </div>
  );
}

export default MainCategory;
