import "./App.css";

import { Badge } from "antd";
import { Wrapper } from "./style";
import { Button } from "antd";
// import RightHero from "./rightHero";
// import flower2 from "./assets/flower2.png";
// import flower3 from "./assets/flower3.png";
import { Carousel } from "antd";
import CarouselItem from "./CarouselItem";

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

      <Wrapper.CarouselWrapper>
        <Carousel autoplay>
          <CarouselItem title="1" />
          <CarouselItem title="2" />
          <CarouselItem title="3" />
        </Carousel>
      </Wrapper.CarouselWrapper>
      {/* <Wrapper.hero.left>
          <Wrapper.hero.left.item>Welcome to GreenShop</Wrapper.hero.left.item>
          <Wrapper.hero.left.item.green>
            Let’s Make a Better{" "}
            <span style={{ color: "rgba(70, 163, 88, 1)" }}>Planet</span>
          </Wrapper.hero.left.item.green>
          <Wrapper.hero.left.item.descript>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </Wrapper.hero.left.item.descript>
          <Button
            style={{
              backgroundColor: "rgba(70, 163, 88, 1)",
              color: "white",
              width: "140px",
              height: "40px",
            }}
            type="primary"
          >
            SHOP NOW
          </Button>
        </Wrapper.hero.left>
        <Wrapper.hero.right>
          <RightHero img="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILMwYQqsYTucUF6Fdy9-pQGyxLaCRsejqeFyTU9C2tUnA9RaAqN5xKCBPBtF2j7Y~zUQV73xF6uNLWJiLAhZAxy29m6Ldh002Y9kfEa8IMIZl-iH9wZsnWjT8rGC3F1QTi0IQ354wKE7qkDYMSuG0EEB9KwKxIvqLKAWcGJkzal3cEB32bSVY3wxU2LeJwpUrnQkfZrQdALKEOqnKGrU8XNJ7ypnv2B3PNpsDNDwBWnE-3EB5iWLTeRVlaDREy-RR4AePrrEZSYZRBti7jx~saFs2UBZV0SeqYr8MCVsvtbujX5d9EnQtd93cKOX1a4pN62yLwz--gqrJhL2vdaO6w__" />
          <img
            className="sideImg"
            src="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILMwYQqsYTucUF6Fdy9-pQGyxLaCRsejqeFyTU9C2tUnA9RaAqN5xKCBPBtF2j7Y~zUQV73xF6uNLWJiLAhZAxy29m6Ldh002Y9kfEa8IMIZl-iH9wZsnWjT8rGC3F1QTi0IQ354wKE7qkDYMSuG0EEB9KwKxIvqLKAWcGJkzal3cEB32bSVY3wxU2LeJwpUrnQkfZrQdALKEOqnKGrU8XNJ7ypnv2B3PNpsDNDwBWnE-3EB5iWLTeRVlaDREy-RR4AePrrEZSYZRBti7jx~saFs2UBZV0SeqYr8MCVsvtbujX5d9EnQtd93cKOX1a4pN62yLwz--gqrJhL2vdaO6w__"
            alt=""
          />
          <RightHero img="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILMwYQqsYTucUF6Fdy9-pQGyxLaCRsejqeFyTU9C2tUnA9RaAqN5xKCBPBtF2j7Y~zUQV73xF6uNLWJiLAhZAxy29m6Ldh002Y9kfEa8IMIZl-iH9wZsnWjT8rGC3F1QTi0IQ354wKE7qkDYMSuG0EEB9KwKxIvqLKAWcGJkzal3cEB32bSVY3wxU2LeJwpUrnQkfZrQdALKEOqnKGrU8XNJ7ypnv2B3PNpsDNDwBWnE-3EB5iWLTeRVlaDREy-RR4AePrrEZSYZRBti7jx~saFs2UBZV0SeqYr8MCVsvtbujX5d9EnQtd93cKOX1a4pN62yLwz--gqrJhL2vdaO6w__" />
          <img className="sideImg" alt="" src={flower2} />
          <RightHero img="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILMwYQqsYTucUF6Fdy9-pQGyxLaCRsejqeFyTU9C2tUnA9RaAqN5xKCBPBtF2j7Y~zUQV73xF6uNLWJiLAhZAxy29m6Ldh002Y9kfEa8IMIZl-iH9wZsnWjT8rGC3F1QTi0IQ354wKE7qkDYMSuG0EEB9KwKxIvqLKAWcGJkzal3cEB32bSVY3wxU2LeJwpUrnQkfZrQdALKEOqnKGrU8XNJ7ypnv2B3PNpsDNDwBWnE-3EB5iWLTeRVlaDREy-RR4AePrrEZSYZRBti7jx~saFs2UBZV0SeqYr8MCVsvtbujX5d9EnQtd93cKOX1a4pN62yLwz--gqrJhL2vdaO6w__" />
          <img className="sideImg" alt="" src={flower3} />
        </Wrapper.hero.right> */}
    </Wrapper>
  );
};

export default App;
