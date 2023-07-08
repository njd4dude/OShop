import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MapIcon from "@mui/icons-material/Map";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.h1`
  margin: 10px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
  
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 40px;
  object-fit: cover;
  padding-top: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NJD.</Logo>
        <Desc>The one, the only, the best</Desc>
        <SocialContainer>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>Cows</ListItem>
          <ListItem>Chickens</ListItem>
          <ListItem>Birds</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} />
          8191 ABC Street, Newark, CA
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px" }} />
          +1 234 567 7889
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px" }} />
          loremipsum@gmail.com
        </ContactItem>
        <Payment src="https://logos-world.net/wp-content/uploads/2020/04/PayPal-Emblem.png" />
        <Payment src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png" />
        <Payment src="https://i.pcmag.com/imagery/reviews/05Zr4cy33kGKkO4e92S3wV7-13.fit_scale.size_760x427.v1602794368.png" />
      </Right>
    </Container>
  );
};

export default Footer;
