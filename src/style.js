import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

Wrapper.nav = styled.div`
  width: 80%;
  height: 78px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.3px solid #46a35880;
`;

Wrapper.left = styled.div`
  img {
    cursor: pointer;
  }
`;
Wrapper.middle = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;
Wrapper.middle.Item = styled.h3`
  margin: 0 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  position: relative;

  /* ${(props) => {
    return `
    color: ${props.math >= 10 ? "red" : "green"}
    `;
  }}; */

  &::before {
    content: "";
    display: none;
    position: absolute;
    width: 100%;
    font-weight: 700;
    height: 3px;
    background-color: #46a35880;
    bottom: -30px;
  }

  &:hover {
    font-weight: 700;
  }

  &:hover::before {
    display: block;
  }
`;
Wrapper.right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  cursor: pointer;

  .cart {
    font-size: 20px;
  }
`;
Wrapper.hero = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background-color: rgba(245, 245, 245, 0.5);
  margin-top: 12px;
`;
Wrapper.hero.left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 68px;
  padding-left: 43px;
`;
Wrapper.hero.left.item = styled.h2`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  color: rgba(61, 61, 61, 1);
`;
Wrapper.hero.left.item.green = styled.h2`
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 900;
  color: rgba(61, 61, 61, 1);
`;
Wrapper.hero.left.item.descript = styled.h2`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(114, 114, 114, 1);
  padding: 5px 0px 44px 3px;
`;
Wrapper.hero.right = styled.div`
  display: flex;
  width: 50%;
  position: relative;

  img {
    width: 518px;
    height: 518px;
    left: 813px;
    top: 42px;
  }
  .sideImg {
    width: 135px;
    height: 135px;
    left: 50px;
    top: 345px;
    position: absolute;
  }
`;

export { Wrapper };
