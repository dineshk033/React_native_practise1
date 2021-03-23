import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { CustomText } from "../../../typography/text.component";
import Cart from "../../../../assets/add-to-cart.png";
import Delivery from "../../../../assets/free-delivery.png";

const LaptopCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
const LaptopUICard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Price = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
`;
const Subtitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.secondary};
  padding: ${(props) => props.theme.space[1]} 0;
`;
const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const SideLeft = styled(View)`
  flex: 1;
  flex-grow: 1;
`;
const SideRight = styled(View)`
  flex: 1;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const LaptopCard = ({ detail = {} }) => {
  const {
    image = "https://images.unsplash.com/photo-1547321911-4613f6df223a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80",
    name = "Sony Laptop 8GB Ram|| 512 SSD",
    rating = 4,
    inStock = true,
    price = 45000,
  } = detail;

  return (
    <LaptopUICard elevation={5}>
      <LaptopCardCover key={name} source={{ uri: image }} />
      <Info>
        <CustomText variant="label">{name}</CustomText>
        <Section>
          <SideLeft>
            <Subtitle>Windows 10</Subtitle>
            <Price>Rs.{price}</Price>
          </SideLeft>
          <SideRight>
            {inStock && <CustomText variant="error">OUT OF STOCK</CustomText>}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 25, height: 25 }} source={Cart} />
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 25, height: 25 }} source={Delivery} />
          </SideRight>
        </Section>
      </Info>
    </LaptopUICard>
  );
};
