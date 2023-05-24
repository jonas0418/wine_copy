import React, { FC, useState, useEffect } from "react";
import "./App.css";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  TabBar,
  CapsuleTabs,
  Grid,
  Popup,
  Selector,
  Space,
  Button,
  FloatingBubble,
  Modal,
  Stepper,
  List,
  Image,
  Divider
} from "antd-mobile";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  MemoryRouter,
} from "react-router-dom";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import "wired-elements";

import wineImg from "./wine.jpeg";
import foodImg from "./food.jpeg";
import lunchImg from "./lunch.jpeg";

import MainCategory from "./MainCategory";
import WineCategory from "./WineCategory";
import PropertyCategory from "./PropertyCategory";
import Products from "./Products";
import Filter from "./Filter";

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
  const [products, setProducts] = useState([
    "品項1",
    "品項2",
    "品項3",
    "品項4",
    "品項5",
    "品項6",
  ]);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(false);
  const [carts, setCarts] = useState([]);
  return (
    <div className="app">
      <FloatingBubble
        defaultOffset={{ x: 0, y: -80 }}
        style={{
          "--initial-position-bottom": "24px",
          "--initial-position-right": "24px",
          "--edge-distance": "24px",
        }}
        onClick={() => {
          Modal.alert({
            title: "明細",
            content: (
              <List>
                <List.Item
                  key={"品項1"}
                  prefix={
                    <Image
                      src={wineImg}
                      style={{ borderRadius: 20 }}
                      fit="cover"
                      width={40}
                      height={40}
                    />
                  }
                  description={"this is description"}
                >
                  品項1
                </List.Item>
                <List.Item
                  key={"品項2"}
                  prefix={
                    <Image
                      src={wineImg}
                      style={{ borderRadius: 20 }}
                      fit="cover"
                      width={40}
                      height={40}
                    />
                  }
                  description={"this is description"}
                >
                  品項2
                </List.Item>
              </List>
            ),
            closeOnMaskClick: true,
            confirmText: "確認送出",
            onConfirm: () => {},
          });
        }}
      >
        <ShoppingCartOutlined style={{ fontSize: "26px" }} />
      </FloatingBubble>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        position="right"
        bodyStyle={{ padding: "10px", width: "60vw" }}
      >
        <Space direction="vertical">
          <Space direction="vertical">
            <div style={{ fontSize: "16px" }}>酒種</div>
            <Selector
              options={wines}
              multiple={true}
              columns={3}
              style={{
                "--border-radius": "100px",
                "--border": "solid transparent 1px",
                "--checked-border": "solid var(--adm-color-primary) 1px",
              }}
              showCheckMark={false}
            />
          </Space>
          <Space direction="vertical">
            <div style={{ fontSize: "16px" }}>口味偏好</div>
            <Selector
              options={flavors}
              multiple={true}
              columns={3}
              style={{
                "--border-radius": "100px",
                "--border": "solid transparent 1px",
                "--checked-border": "solid var(--adm-color-primary) 1px",
              }}
              showCheckMark={false}
            />
          </Space>
        </Space>
        <div style={{ position: "fixed", bottom: "30px", width: "100%" }}>
          <Space
            style={{
              display: "flex",
              justifyContent: "end",
              margin: "0 20px",
            }}
          >
            <Button block>清除</Button>
            <Button
              block
              color="primary"
              onClick={() => {
                setVisible(false);
                setSelected(true);
                setProducts([ "品項1"])
              }}
            >
              確定
            </Button>
          </Space>
        </div>
      </Popup>
      <CapsuleTabs
        style={{
          '--fixed-active-line-width': '20px',
        }}
      >
        {category.map((item,index) => {
          return (
            <CapsuleTabs.Tab title={item.title} key={item.value}>
              {/* <Input
                placeholder="搜尋產品"
                style={{
                  borderBottom: "1px solid #979797",
                  marginBottom: "20px",
                }}
              /> */}
              <Filter
                selected={selected}
                handleClick={() => {
                  setVisible(true);
                }}
              />
              <Divider style={{margin:"0px"}}/>
              <Grid columns={3} gap={8}>
                {products.map((product, index) => {
                  return (
                    <Grid.Item key={{product}}>
                      <Card
                        bordered={false}
                        cover={<img alt="example" src={wineImg} />}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          Modal.alert({
                            title: product,
                            content: (
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Stepper
                                  defaultValue={1}
                                  style={{
                                    "--border": "1px solid #f5f5f5",
                                    "--border-inner": "none",
                                    "--height": "36px",
                                    "--input-width": "70px",
                                    "--input-font-size": "18px",
                                    "--input-background-color":
                                      "var(--adm-color-background)",
                                    "--active-border": "1px solid #1677ff",
                                  }}
                                />
                              </div>
                            ),
                            closeOnMaskClick: true,
                            confirmText: "確定",
                            onConfirm: () => {
                              setCarts([...carts, `葡萄酒 ${index + 1}`]);
                            },
                          });
                        }}
                      >
                        {product}
                      </Card>
                    </Grid.Item>
                  );
                })}
              </Grid>
            </CapsuleTabs.Tab>
          );
        })}
      </CapsuleTabs>
      <div
        style={{
          fontSize: "16px",
          position: "fixed",
          bottom: "0",
          background: "#f3f3f3",
          width: "100%",
          height: "50px",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>訂單小計：＄</div>
        <Button style={{ marginRight: "15px" }} shape="rounded" color="warning">
          確定送出
        </Button>
      </div>
      {/* <div className="top">
        <NavBar
          onBack={() => {
            navigate(-1);
          }}
        >標題</NavBar>
      </div>
      <div className="body">
        <Routes>
          <Route path="/" element={<MainCategory />} />
          <Route path="/wine" element={<WineCategory />} />
          <Route path="/wine/property" element={<PropertyCategory />} />
          <Route path="/products" element={<Products />} />
          <Route path="/new" element={<Products />} />
        </Routes>
      </div>
      <div className="bottom">
        <Bottom />
      </div> */}
    </div>
  );
}
export default App;
