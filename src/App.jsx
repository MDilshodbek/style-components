import "./App.css";

import { Badge } from "antd";
import { Wrapper } from "./style";
import { Button } from "antd";

// icons
import { ShoppingCartOutlined } from "@ant-design/icons";

const App = () => {
  return (
    <Wrapper>
      <Wrapper.nav>
        <Wrapper.left>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            className="img"
          />
        </Wrapper.left>
        <Wrapper.middle>
          <Wrapper.middle.Item>Home</Wrapper.middle.Item>
          <Wrapper.middle.Item>Shop</Wrapper.middle.Item>
          <Wrapper.middle.Item>Plant Care</Wrapper.middle.Item>
          <Wrapper.middle.Item>Blogs</Wrapper.middle.Item>
        </Wrapper.middle>
        <Wrapper.right>
          <Badge
            style={{ backgroundColor: "rgba(70, 163, 88, 1)", color: "white" }}
            dot
          >
            <ShoppingCartOutlined className="cart" />
          </Badge>
          <Button
            style={{ backgroundColor: "rgba(70, 163, 88, 1)", color: "white" }}
            type="primary"
          >
            Login
          </Button>
        </Wrapper.right>
      </Wrapper.nav>
      <Wrapper.hero>
        <Wrapper.hero.left>
          <Wrapper.hero.left.item.welcome>
            Welcome to GreenShop
          </Wrapper.hero.left.item.welcome>
          <Wrapper.hero.left.item.green>
            Let’s Make a Better Planet
          </Wrapper.hero.left.item.green>
          <Wrapper.hero.left.itemdescript>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </Wrapper.hero.left.itemdescript>
          <Button>SHOP NOW</Button>
        </Wrapper.hero.left>
      </Wrapper.hero>
    </Wrapper>
  );
};

export default App;
