import { Layout, Space, Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { Popup, CheckList, Picker } from "antd-mobile";
import React, { useState } from "react";
import eventImg from "./event.jpeg";

const filters = [
  {
    title: "口味偏好",
  },
  {
    title: "產地",
  },
  {
    title: "酒莊",
  },
  {
    title: "年份",
  },
  {
    title: "品種",
  },
];
const flavors = [
  [
    {
      label: "酸",
      value: "酸",
    },
    {
      label: "清爽",
      value: "清爽",
    },
    {
      label: "果香",
      value: "果香",
    },
    {
      label: "花香",
      value: "花香",
    },
  ],
];
function WineFilter() {
  const navigate = useNavigate();
  const [optionModal, setOptionModal] = useState({
    visible: false,
  });
  return (
    <div>
      <Row>
        {filters.map((item) => {
          return (
            <Col span={8}>
              <Card
                bordered={false}
                cover={<img alt="example" src={eventImg} />}
                style={{ margin: "10px", cursor: "pointer" }}
                onClick={() => {
                  setOptionModal({
                    ...optionModal,
                    visible: true,
                  });
                }}
              >
                {item.title}
              </Card>
            </Col>
          );
        })}
      </Row>
      <Picker
        columns={flavors}
        visible={optionModal.visible}
        confirmText="確定"
        onCancel={() => {
          setOptionModal({
            ...optionModal,
            visible: false,
          });
        }}
        onConfirm={(v) => {
          navigate("/products");
        }}
      />
    </div>
  );
}

export default WineFilter;
