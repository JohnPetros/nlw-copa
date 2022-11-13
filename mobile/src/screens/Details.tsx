import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Share } from "react-native";
import { VStack, HStack, useToast } from "native-base";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { PoolCardProps } from "../components/PoolCard";
import { PoolHeader } from "../components/PoolHeader";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";
import { Option } from "../components/Option";
import { Guesses } from "../components/Guesses";

import { api } from "../services/api";

interface RouteParams {
  id: string;
}

export function Details() {
  const [optionSelected, setOptionSelected] = useState<"guesses" | "ranking">(
    "guesses"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [poolDetails, setPoolDetais] = useState<PoolCardProps>(
    {} as PoolCardProps
  );

  const route = useRoute();
  const { id } = route.params as RouteParams;

  const toast = useToast();

  async function fetchDetails() {
    try {
      setIsLoading(true);

      const response = await api.get(`/pool/${id}`);
      setPoolDetais(response.data.pool);
    } catch (error) {
      console.error(error);

      toast.show({
        title: "Não foi possível carregar os detalhes do bolão!",
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCodeShare() {
    await Share.share({
      message: poolDetails.code,
    });
  }

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header
        title={poolDetails.title}
        showBackButton
        showShareButton
        onShare={handleCodeShare}
      />

      {poolDetails._count?.participants > 0 ? (
        <VStack px={5} flex={1}>
          <PoolHeader data={poolDetails} />
          <HStack bgColor="gray.800" p={1} rounded="sm" mb={5}>
            <Option
              title="guesses"
              isSelected={optionSelected === "guesses"}
              onPress={() => setOptionSelected("guesses")}
            />
            <Option
              title="ranking"
              isSelected={optionSelected === "ranking"}
              onPress={() => setOptionSelected("ranking")}
            />
          </HStack>

          <Guesses poolId={poolDetails.id} code={poolDetails.code} />
        </VStack>
      ) : (
        <EmptyMyPoolList code={poolDetails.code} />
      )}
    </VStack>
  );
}
