import React, { FC, useState, useEffect } from "react";
import { Col, Row } from "antd";
import {
  Button,
  Dialog,
  Space,
  Toast,
  Divider,
  CenterPopup,
} from "antd-mobile";
import { CheckOutline, CloseOutline } from "antd-mobile-icons";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import "wired-elements";

import Loading from "./Loading";
const wineCategory = [
  {
    title: "Wine",
  },
  {
    title: "Liquor",
  },
  {
    title: "Orange",
  },
  {
    title: "Rosé",
  },
  {
    title: "Sparkling",
  },
];
const specials = [
  {
    title: "Leaderboard",
  },
  {
    title: "Divination",
  },
  {
    title: "Constellation",
  },
  {
    title: "Service",
  },
];
function WineCategory() {
  const navigate = useNavigate();
  const cardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "-webkit-fill-available",
    textAlign: "center",
    fontFamily: "MyFont",
    fontWeight: "bold",
  };
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setVisible(true);
    }, 1000);
  });
  return visible ? (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Row style={{ padding: "15px" }}>
        {wineCategory.map((item) => {
          return (
            <Col span={8} key={item.title}>
              <wired-card
                style={cardStyle}
                onClick={() => {
                  setModalVisible(true);
                  // Modal.alert({
                  // header: (
                  //   <div style={{ fontFamily: "MyFont" }}>
                  //     <wired-button>OK</wired-button>
                  //   </div>
                  // ),
                  // content: renderOption(),
                  // onConfirm: () => {
                  //   console.log("Confirmed");
                  // },
                  // confirmText:"OK"
                  // confirmText: <button>test</button>,
                  // });
                }}
              >
                <p>{item.title}</p>
              </wired-card>
            </Col>
          );
        })}
      </Row>
      <Row style={{ padding: "15px" }}>
        {specials.map((special) => {
          return (
            <Col span={8} key={special.title}>
              <wired-card
                style={cardStyle}
                // onClick={() => {
                //   if (special.title == "Constellation") {
                //     Modal.alert({
                //       header: (
                //         <div style={{ fontFamily: "MyFont" }}>
                //           <wired-button>OK</wired-button>
                //         </div>
                //       ),
                //       content: "人在天边月上明",
                //       onConfirm: () => {
                //         console.log("Confirmed");
                //       },
                //     });
                //   }
                // }}
              >
                <p>{special.title}</p>
              </wired-card>
            </Col>
          );
        })}
      </Row>
      {/* <CenterPopup
        visible={modalVisible}
        onMaskClick={() => {
          setModalVisible(false);
        }}
      >
        <div style={{ padding: "15px", fontFamily: "Myfont" }}>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}> flavor</div>
          <div>
            <wired-checkbox style={{ padding: "5px" }}>Acid</wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>Floral</wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>Fruity</wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>
              Refreshing
            </wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>
              Full-bodied
            </wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>Grass</wired-checkbox>
          </div>
          <div
            style={{ fontSize: "18px", fontWeight: "bold", paddingTop: "15px" }}
          >
            Place of origin
          </div>
          <div>
            <wired-checkbox style={{ padding: "5px" }}>France</wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>USA</wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>
              Australia
            </wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>
              New Zealand
            </wired-checkbox>
          </div>
          <div className="test">
            <wired-button className="test">Confirm</wired-button>
          </div>
        </div>
      </CenterPopup> */}
      <Modal title={null} closable={false} open={modalVisible} footer={null}>
        <div style={{ padding: "15px", fontFamily: "Myfont" }}>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}> flavor</div>
          <div>
            <wired-checkbox style={{ padding: "5px" }}>Acid</wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>Floral</wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>Fruity</wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>
              Refreshing
            </wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>
              Full-bodied
            </wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>Grass</wired-checkbox>
          </div>
          <div
            style={{ fontSize: "18px", fontWeight: "bold", paddingTop: "15px" }}
          >
            Place of origin
          </div>
          <div>
            <wired-checkbox style={{ padding: "5px" }}>France</wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>USA</wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>
              Australia
            </wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>
              New Zealand
            </wired-checkbox>
          </div>
          <div
            style={{ fontSize: "18px", fontWeight: "bold", paddingTop: "15px" }}
          >
            Grape variety
          </div>
          <div>
            <wired-checkbox style={{ padding: "5px" }}>
              Cabernet Sauvignon
            </wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>Merlot</wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>Syrah</wired-checkbox>
            <wired-checkbox style={{ padding: "5px" }}>Grenache</wired-checkbox>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <wired-button
              style={{ marginRight: "10px", fontSize: "20px" }}
              onClick={() => {
                setModalVisible(false);
              }}
            >
              <CloseOutline />
            </wired-button>
            <wired-button
              style={{ color: "#50a14f", fontSize: "20px" }}
              onClick={() => {
                setModalVisible(false);
              }}
            >
              <CheckOutline />
            </wired-button>
          </div>
        </div>
      </Modal>
    </div>
  ) : (
    <Loading />
  );
}

export default WineCategory;
