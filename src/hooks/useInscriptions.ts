import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

type Plantao = number;

export default function useInscriptions() {
  const [parsedList, setParsedList] = useState<Plantao[]>([]);

  useEffect(() => {
    const loadPlantaoList = async () => {
      try {
        const ListPlantao = await AsyncStorage.getItem("plantoes");
        const parsed: Plantao[] = ListPlantao ? JSON.parse(ListPlantao) : [];
        setParsedList(parsed);
      } catch (error) {
        console.error("Erro ao carregar plantões:", error);
      }
    };
    loadPlantaoList();
  }, []);

  const addPlantao = useCallback(
    async (newPlantao: Plantao) => {
      try {
        const updatedList = [...parsedList, newPlantao];
        setParsedList(updatedList);
        await AsyncStorage.setItem("plantoes", JSON.stringify(updatedList));
      } catch (error) {
        console.error("Erro ao adicionar plantão:", error);
      }
    },
    [parsedList]
  );

  const removePlantao = useCallback(
    async (id: Plantao) => {
      try {
        const updatedList = parsedList.filter((plantao) => plantao !== id);
        setParsedList(updatedList);
        await AsyncStorage.setItem("plantoes", JSON.stringify(updatedList));
      } catch (error) {
        console.error("Erro ao remover plantão:", error);
      }
    },
    [parsedList]
  );

  return { parsedList, addPlantao, removePlantao };
}
