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

  img {
    cursor: pointer;
  }
`;

Wrapper.left = styled.div``;
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
  display: flex;
  justify-content: space-between;
`;
Wrapper.hero.left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
Wrapper.hero.right = styled.div`
  display: flex;
  width: 50%;
`;
Wrapper.hero.left.item = {};
Wrapper.hero.left.item.welcome = styled.h2`
  text-transform: uppercase;
`;
Wrapper.hero.left.item.green = styled.h2``;
Wrapper.hero.left.item.descript = styled.h2``;

export { Wrapper };
