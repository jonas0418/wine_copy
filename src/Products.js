import { Layout, Space, Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { Popup, CheckList, Picker } from "antd-mobile";
import React, { useState } from "react";

function Products() {
  const navigate = useNavigate();
  const [optionModal, setOptionModal] = useState({
    visible: false,
  });
  const products = [
    {
        title:"商品Ａ"
    },
    {
        title:"商品B"
    },
    {
        title:"商品C"
    },
    {
        title:"商品D"
    },
    {
        title:"商品E"
    },
    {
        title:"商品F"
    },
    {
        title:"商品G"
    },
  ]
  return (
    <div>
      <Row>
      </Row>
    </div>
  );
}

export default Products;