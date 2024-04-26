import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
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
Wrapper.CarouselWrapper = styled.div`
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );
  width: 80%;
  height: 450px;
  margin: auto;
  margin-top: 12px;
`;


export { Wrapper };
