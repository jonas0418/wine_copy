import React, { FC, useState, useEffect } from "react";
import { CaretUpOutlined } from "@ant-design/icons";
const types = ["酒種", "口味偏好", "產地", "酒莊", "年份", "品種", "酒標"];

function Filter(props) {
  return (
    <div style={{ position: "relative" }}>
      <div className="adm-scroll-mask adm-scroll-mask-left" style={{opacity:0}}></div>
      <div className="adm-scroll-mask adm-scroll-mask-right"></div>
      <div
        className="test"
        style={{
          height: "40px",
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          overflowX: "scroll",
          padding: "0px 15px",
        }}
      >
        {types.map((type,index) => {
          return (
            <div
              key={type}
              style={{
                display: "flex",
                fontSize: "15px",
                marginRight: "10px",
                whiteSpace: "nowrap",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                props.handleClick();
              }}
            >
              <div style={{ marginRight: "5px" }}>
                {props.selected ? (
                  type === "酒種" || type === "口味偏好" ? (
                    <span style={{color:"#ff8f1f"}}>{`${type}(2)`}</span>
                  ) : (
                    type
                  )
                ) : (
                  type
                )}
              </div>
              <CaretUpOutlined />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
