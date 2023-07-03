import { useEffect, useState } from "react";
import StyledHome from "./StyledHome";
import VertGridPicture from 'assets/homepage_grid_phone_vert_230x610.webp';
import HorizontalGridPic from 'assets/composite-grid-image-home.webp';
import Logo from 'assets/therapy-space-mobile.png';
import BaseButton from 'components/reusables/BaseButton';
export default function Home() {
  return (
    <StyledHome>
      <img className="vert-pic" src={VertGridPicture} alt="grid of people and text" />
      <div className="logo-adj-wrapper">
        <img className="home-logo" src={Logo} alt="logo" />
        <div className="adj-container">
          <span className="adj-item">Honest</span>
          <span className="adj-item">Sincere</span>
          <span className="adj-item">Caring</span>
          <span className="adj-item">Effective</span>
          <span className="adj-item">Genuine</span>
          <span className="adj-item">Therapy</span>
        </div>
        <BaseButton text={'Book Now'}></BaseButton>
      </div>
    </StyledHome>
  );
}
