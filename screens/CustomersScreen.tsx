import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

const CustomersScreen = () => {
  const tw = useTailwind();
  return (
    <ScrollView>
      <Text style={tw("text-red-600")}>CustomersScreen</Text>
    </ScrollView>
  );
};

export default CustomersScreen;
