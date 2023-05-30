import React, { useEffect, useRef } from "react";
import Navbar from "../Component/Navbar";
import styled from "styled-components";
import WidthPercentage from "../Responsive";
import { HeightPercentage } from "../Responsive";
import Footer from "../Component/Footer";
import "../InfoStyle.css";

const MapBox = styled.div`
  left: 24px;
  top: 117px;
  width: ${WidthPercentage(802)};
  height: 539px;
`;
const AboutBox = styled.div`
  position: absolute;
  left: 24px;
  top: 696px;
`;
const AboutText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: #a9a6a6;
`;

const Contact = () => {
  useEffect(() => {
    let marker: naver.maps.Marker;
    let infoWindow: naver.maps.InfoWindow;
    const center: naver.maps.LatLng = new naver.maps.LatLng(
      37.511749,
      127.018709
    );

    let contentString = [
      "<div>",
      "<a href='https://naver.me/xtWzi8yc' target='_blank'>ARCHINION</a>",
      "</div>",
    ].join("");

    const initMap = () => {
      let map: naver.maps.Map = new naver.maps.Map("map", {
        center: center.destinationPoint(0, 100),
        zoom: 16,
      });
      marker = new naver.maps.Marker({
        position: center,
        map: map,
      });

      infoWindow = new naver.maps.InfoWindow({
        content: contentString,

        anchorSize: new naver.maps.Size(15, 15),
        anchorSkew: true,
        maxWidth: 0,
      });

      naver.maps.Event.addListener(marker, "click", function (e) {
        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          infoWindow.open(map, marker);
        }
      });

      infoWindow.open(map, marker);
    };

    initMap();
    console.log(contentString);
  }, []);

  return (
    <div>
      <Navbar />
      <MapBox id="map"></MapBox>

      <AboutBox>
        <AboutText>서울특별시 서초구 신반포로45길 26 3층 303호</AboutText>
        <AboutText>TEL. 0507-1371-7289</AboutText>
        <AboutText>Email. abc@gmail.com</AboutText>
        <AboutText>Instagram. @archinion</AboutText>
      </AboutBox>
      <Footer />
    </div>
  );
};

export default Contact;
