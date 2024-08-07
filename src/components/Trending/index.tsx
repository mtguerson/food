import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import CardHorizontalFood from '../Food';

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string
}

export default function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.100.172:3000/foods");
      const data = await response.json();
      console.log(data);
      setFoods(data);
    }

    getFoods();
  }, []);

 return (
   <FlatList 
    data={foods}
    renderItem={({ item }) => <CardHorizontalFood food={item} />}
    horizontal={true}
    contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
    showsHorizontalScrollIndicator={false}
   />
  );
}