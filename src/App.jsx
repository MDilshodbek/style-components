import "./App.css";

import { Badge } from "antd";
import { Wrapper } from "./style";
import { Button } from "antd";
import { Carousel } from "antd";
import flower2 from "./assets/flower2.png";
import flower3 from "./assets/flower3.png";

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
          <Carousel autoplay>
            <Wrapper.hero.right.pics>
              <img
                src="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILMwYQqsYTucUF6Fdy9-pQGyxLaCRsejqeFyTU9C2tUnA9RaAqN5xKCBPBtF2j7Y~zUQV73xF6uNLWJiLAhZAxy29m6Ldh002Y9kfEa8IMIZl-iH9wZsnWjT8rGC3F1QTi0IQ354wKE7qkDYMSuG0EEB9KwKxIvqLKAWcGJkzal3cEB32bSVY3wxU2LeJwpUrnQkfZrQdALKEOqnKGrU8XNJ7ypnv2B3PNpsDNDwBWnE-3EB5iWLTeRVlaDREy-RR4AePrrEZSYZRBti7jx~saFs2UBZV0SeqYr8MCVsvtbujX5d9EnQtd93cKOX1a4pN62yLwz--gqrJhL2vdaO6w__"
                alt=""
              />

              <img
                className="sideImg"
                src="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILMwYQqsYTucUF6Fdy9-pQGyxLaCRsejqeFyTU9C2tUnA9RaAqN5xKCBPBtF2j7Y~zUQV73xF6uNLWJiLAhZAxy29m6Ldh002Y9kfEa8IMIZl-iH9wZsnWjT8rGC3F1QTi0IQ354wKE7qkDYMSuG0EEB9KwKxIvqLKAWcGJkzal3cEB32bSVY3wxU2LeJwpUrnQkfZrQdALKEOqnKGrU8XNJ7ypnv2B3PNpsDNDwBWnE-3EB5iWLTeRVlaDREy-RR4AePrrEZSYZRBti7jx~saFs2UBZV0SeqYr8MCVsvtbujX5d9EnQtd93cKOX1a4pN62yLwz--gqrJhL2vdaO6w__"
                alt=""
              />
            </Wrapper.hero.right.pics>
            <Wrapper.hero.right.pics>
              <img src={flower2} alt="" />
              <img className="sideImg" src="./assets/flower2" alt="" />
            </Wrapper.hero.right.pics>
            <Wrapper.hero.right.pics>
              <img src={flower3} alt="" />
              <img className="sideImg" src="./assets/flower3" alt="" />
            </Wrapper.hero.right.pics>
          </Carousel>
        </Wrapper.hero.right>
      </Wrapper.hero>
    </Wrapper>
  );
};

export default App;

// import React from "react";
// import { Carousel } from "antd";
// import { Wrapper } from "./style";
// const contentStyle = {
//   height: "560px",
//   Width: "400px",
//   color: "#b41818",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#d8c309",
// };
// const App = () => (
//   <Wrapper>
//     <Carousel autoplay>
//       <div>
//         <img
//           style={contentStyle}
//           src="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILMwYQqsYTucUF6Fdy9-pQGyxLaCRsejqeFyTU9C2tUnA9RaAqN5xKCBPBtF2j7Y~zUQV73xF6uNLWJiLAhZAxy29m6Ldh002Y9kfEa8IMIZl-iH9wZsnWjT8rGC3F1QTi0IQ354wKE7qkDYMSuG0EEB9KwKxIvqLKAWcGJkzal3cEB32bSVY3wxU2LeJwpUrnQkfZrQdALKEOqnKGrU8XNJ7ypnv2B3PNpsDNDwBWnE-3EB5iWLTeRVlaDREy-RR4AePrrEZSYZRBti7jx~saFs2UBZV0SeqYr8MCVsvtbujX5d9EnQtd93cKOX1a4pN62yLwz--gqrJhL2vdaO6w__"
//           alt="flower"
//         />
//       </div>
//       <div>
//         <img
//           style={contentStyle}
//           src="https://s3-alpha-sig.figma.com/img/586c/8523/1ab58d21463d86aa3768f5c6c78f8a1f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F2N5BIDStxkQFegnJUebRpADHOQXYJstQtxI5q3mvv0rMUPKUJdpZTCIYWdq5Uzq6GglNOV9ibIKZtIAaxmul-uSjRwsxvfdnWkH5OhUSSTqjcUZN~NJkHTKP2xKLLsAitgSOc2AIg79t6Eaz606d4Alh3FcxvQxiBHvO7KyJzBsDgmQ4eqRWxCnBpSSkV3IyKnAnfTocE79FhPqrDPiTB1P~OCeeN1K9JC2DoVWZmrWDlKXd68ksHJaqm3gXxFcTBvlLwnBkxRssWCqQwgbOJD2hOFNokB4uU1vA2F-w3bflPpXTVbRK~GFuNk6PSfVKlMyRGQgn3p6TiT0nUmRRA__"
//           alt="flower2"
//         />
//       </div>
//       <div>
//         <img
//           style={contentStyle}
//           src="https://s3-alpha-sig.figma.com/img/7c59/7aa9/1ee5df5d1fd65d8184246c0c9918f920?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iuYv6TrEIE3I3v8hQle5G4gQqQBYA6LcnG2KGUE5YhbtkyJJ~l6n7vYMRvdQrerM6yYAWYfvUPUYl4p-pcpJ~KIPe9hDndFpWfZVVW0X0GyD2o-gmbhA04G894iompGe4yvPxsBe~qZ6ZB9fjZTuhz-TAkeecNSk032m2NjZE8QdFZE4oWWP26Cf0sHDZ60XfhJzUsZ-Yp5Cq8SRuLUzoK8YeL0QZ1hFOGDnZ~PdXB~OueRmsqDcwLqTtudvcWuyQR3dAL3LDuO8X~JSm0UxeIbttDzjyAP2K7dCaXYfA0u1e-JfOccedaqJ8tE3yH72ao5IIid1N0gcTAV76Ei~kA__"
//           alt="flower3"
//         />
//       </div>
//       <div>
//         <img
//           style={contentStyle}
//           src="https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EA9Gvy-a3rP0oM5S547iY9p-2cYCJkVmm-d1zd5j94y~88BebNIvrIrgc6iHf56T8lG5oNwHmKIqzE4E-wK~nMuJIa-3XoGjsCggBEgXWWdmht0ejPfgwwrrPMjVhGZsiUB~snV0BYsqMIsz7cMHsyEJZLdRv4xpAturPS4kJIM6oVvsZ9IRmDI8Uh6bpxSqSWrur~8nDHsmIyq4vQXJYqZv8etz3vomkWZw8xI5nd~sbe8F3xAmPt0SKXBWK4vVqyq65bd26XbLjoLleJ6r771k5-bTfNAoEj45WiybRyIXRByPB7-YEh3p~hZ0dh-5O8Y6TDARqpHrWzrGwLtbQQ__"
//           alt="flower4"
//         />
//       </div>
//     </Carousel>
//   </Wrapper>
// );

// export default App;
