import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Home() {
  const type = "Corretor";
  const name = "Marcio Saraiva";
  const plantoes = [
    {
      name: "Ed. Roberto Teixeira",
      address: "Rua Ibiapina, 236 - RJ",
      bar: 9,
      posbar: 9.45,
    },
    {
      name: "Ed. Roberto Teixeira",
      address: "Rua Ibiapina, 236 - RJ",
      bar: 9,
      posbar: 9.45,
    },
  ];
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingHorizontal: 35,
          paddingTop: 30,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 25,
          }}
        >
          <Image
            source={
              "https://classic.exame.com/wp-content/uploads/2020/09/Ricardo-Martins_imoveis.jpg?quality=70&strip=info&w=1024"
            }
            style={{
              width: 50,
              height: 50,
              borderRadius: 999,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 26,
                lineHeight: 34,
                fontWeight: "bold",
              }}
            >
              Ola, {type}
            </Text>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 24,
                fontWeight: "normal",
              }}
            >
              {name}
            </Text>
          </View>
        </View>
        <Icon name="circle-notifications" size={33} color={"orange"} />
      </View>
      <View
        style={{
          paddingLeft: 35,
          paddingTop: 40,
        }}
      >
        <View
          style={{
            marginBottom: 11,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              lineHeight: 19,
              color: "#1A1A1A",
            }}
          >
            Selecione um plantão
          </Text>
        </View>
        <FlatList
          data={plantoes}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                gap: 29,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: 320,
                  height: 440,
                  backgroundColor: "gray",
                  borderRadius: 30,
                  marginRight: 20,
                  paddingHorizontal: 17,
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 28,
                    lineHeight: 37,
                    fontWeight: "bold",
                    color: "white",
                    letterSpacing: 0,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "regular",
                    lineHeight: 29,
                    letterSpacing: 0,
                    color: "white",
                  }}
                >
                  {item.address}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    marginVertical: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 21,
                      color: "white",
                    }}
                  >
                    Barra: {item.bar}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 21,
                      color: "white",
                    }}
                  >
                    Pós-Barra: {item.posbar}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: 45,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#80BC38",
                    borderRadius: 23,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                    }}
                  >
                    Ler QR Code
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 300,
                  height: 45,
                  borderWidth: 1,
                  borderRadius: 23,
                  borderColor: "#80BC38",
                  marginHorizontal: 17,
                }}
              >
                <Text>Inserir código</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
