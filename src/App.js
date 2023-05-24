import React, { FC, useState, useEffect } from "react";
import "./App.css";
import { MenuOutlined } from "@ant-design/icons";
import { TabBar } from "antd-mobile";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { FilterOutline, UserOutline } from "antd-mobile-icons";
import "wired-elements";

import MainCategory from "./MainCategory";
import WineCategory from "./WineCategory";
import PropertyCategory from "./PropertyCategory";
import Products from "./Products";

const category = [
  {
    title: "葡萄酒",
    value: "wine",
  },
  {
    title: "精釀啤酒",
    value: "craftBeer",
  },
  {
    title: "無酒精",
    value: "acolholFree",
  },
  {
    title: "手工披薩",
    value: "pizza",
  },
  {
    title: "吃點小東西",
    value: "food",
  },
  {
    title: "客製化服務",
    value: "costom",
  },
  {
    title: "會員紀錄",
    value: "member",
  },
];
const wines = [
  {
    label: "紅酒",
    value: "紅酒",
  },
  {
    label: "白酒",
    value: "白酒",
  },
  {
    label: "橘酒",
    value: "橘酒",
  },
  {
    label: "粉紅",
    value: "粉紅",
  },
  {
    label: "氣泡",
    value: "氣泡",
  },
];
const flavors = [
  {
    label: "酸",
    value: "酸",
  },
  {
    label: "花香",
    value: "花香",
  },
  {
    label: "果香",
    value: "果香",
  },
  {
    label: "清爽",
    value: "清爽",
  },
  {
    label: "濃郁",
    value: "濃郁",
  },
  {
    label: "草",
    value: "草",
  },
];

function App() {
  return (
    <div className="app" style={{ fontFamily: "Gloria Hallelujah" }}>
      <div className="top">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontFamily: "MyFont" }}>WINE BAR</h1>
        </div>
      </div>
      <div className="body">
        {/* <FloatingBubble
          style={{
            "--initial-position-bottom": "60px",
            "--initial-position-right": "24px",
            "--edge-distance": "24px",
          }}
        >
          <FilterOutline fontSize={32} />
        </FloatingBubble> */}
        <Routes>
          <Route path="/" element={<MainCategory />} />
          <Route path="/wine" element={<WineCategory />} />
          <Route path="/wine/property" element={<PropertyCategory />} />
          <Route path="/products" element={<Products />} />
          <Route path="/new" element={<Products />} />
        </Routes>
      </div>
      <div className="bottom">
        <TabBar>
          <TabBar.Item
            key={"message"}
            icon={<MenuOutlined />}
            title={<span style={{ fontFamily: "MyFont" }}>Menu</span>}
          />
          <TabBar.Item
            key={"user"}
            icon={<UserOutline />}
            title={<span style={{ fontFamily: "MyFont" }}>User</span>}
          />
        </TabBar>
      </div>
    </div>
  );
}
export default App;
