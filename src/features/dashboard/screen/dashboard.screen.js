import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StatusBar, FlatList, View } from "react-native";
import styled from "styled-components/native";

import { LaptopCard } from "../component/LaptopCard.component";

const SearchBarView = styled.View`
  padding: 16px;
`;

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
export const DashBoardScreen = () => {
  return (
    <SafeAreaViewContainer>
      <SearchBarView>
        <Searchbar placeholder="Search" />
      </SearchBarView>
      {/* <LaptopList>
        <LaptopCard />
        <LaptopCard />
      </LaptopList> */}
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => <LaptopCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaViewContainer>
  );
};
