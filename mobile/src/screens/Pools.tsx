import { useCallback, useState } from "react";
import { VStack, Icon, useToast, FlatList } from "native-base";
import { Octicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { api } from "../services/api";

import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { PoolCard, PoolCardProps } from "../components/PoolCard";
import { EmptyPoolList } from "../components/EmptyPoolList";

export function Pools() {
  const toast = useToast();
  const [isLoading, setLoading] = useState(true);
  const [pools, setPools] = useState<PoolCardProps[]>([]);

  const { navigate } = useNavigation();

  async function fetchPools() {
    try {
      setLoading(true);

      const response = await api.get("/pools");
      setPools(response.data.pools);
    } catch (error) {
      console.error(error);

      toast.show({
        title: "Não foi possível carregar os botões!",
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchPools();
    }, [])
  );
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />
      <VStack
        mt={6}
        mx={5}
        borderBottomWidth={1}
        borderBottomColor="gray.600"
        pb={4}
        mb={4}
      >
        <Button
          title="BUSCAR BOLÃO POR CÓDIGO"
          leftIcon={
            <Icon as={Octicons} name="search" color="black" size="md" />
          }
          onPress={() => navigate("find")}
          isLoading={isLoading}
        />

        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={pools}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PoolCard data={item} onPress={() => navigate("details", { id: item.id })} />
            )}
            px={5}
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{ mb: 10 }}
            ListEmptyComponent={() => <EmptyPoolList />}
          />
        )}
      </VStack>
    </VStack>
  );
}
