import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: "100%";
  height: "450px";
  display: flex;
`;
CarouselWrapper.Left = styled.div`
  width: 60%;
  height: 450px;

  .textWrapper {
    margin-top: 68px;
    text-transform: uppercase;
    margin-left: 40px;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-align: left;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 70px;
    font-weight: 900;
    line-height: 70px;
    text-align: left;
  }

  span {
    color: rgba(70, 163, 88, 1);
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    width: 60%;
    text-align: left;
    text-transform: lowercase;
  }

  button {
    width: 140px;
    height: 40px;
    background-color: rgba(70, 163, 88, 1);
    border: none;
    border-radius: 6px;
    margin-top: 44px;
  }
`;

CarouselWrapper.Right = styled.div`
  width: 40%;
  height: 450px;
  position: relative;
  overflow: hidden;

  .bigImg {
    width: 418px;
    height: 418px;
    position: absolute;
    bottom: 3px;
    left: 60px;
  }

  .smallImg {
    width: 135px;
    height: 135px;
    position: absolute;
    z-index: 10;
    bottom: 30px;
    left: 60px;
  }
`;
