import { Text, View, ScrollView } from "react-native";
import Constants from 'expo-constants';

import Header from "../components/Header";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Section from "../components/Section";
import TrendingFoods from "../components/Trending";
import Restaurants from "../components/Restaurants";
import RestaurantVerticalList from "../components/List";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />

        <Search />
      </View>

      <Section
        name="Destaques"
        size="text-2xl"
        label="Ver tudo"
        action={() => console.log("Clicou no veja mais")}
      />

      <TrendingFoods />

      <Section
        name="Famosos"
        size="text-xl"
        label="Ver tudo"
        action={() => console.log("Clicou no veja mais")}
      />

      <Restaurants />

      <Section
        name="Restaurantes"
        size="text-xl"
        label="Ver tudo"
        action={() => console.log("Clicou no veja mais")}
      />

      <RestaurantVerticalList />
    </ScrollView>
  );
}
