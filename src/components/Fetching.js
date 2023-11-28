import {
  Container,
  Heading,
  Box,
  Text,
  CircularProgress,
  CircularProgressLabel
} from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
const Fetching = () => {
    const url = "https://api.spaceflightnewsapi.net/v4/articles";

const [progress,setProg] = useState(0)

  const { data, loading, error } = useFetch(url, (progressEvent) => {
    setProg(Math.round(progressEvent.progress * 100));
  });
  return (
    <Container>
      <Heading color={"cyan"} backgroundColor={"gold"}>
        Welcome to Chakra Ui
      </Heading>
      <Box>
        {loading && (
          <CircularProgress value={progress} color="green.400">
            <CircularProgressLabel>{progress}%</CircularProgressLabel>
          </CircularProgress>
        )}
        {data !== null &&
          data.results.map((i) => (
            <Text key={i.id}>
              {i.title} <br />{" "}
            </Text>
          ))}
        {error && <Text>{error}</Text>}
      </Box>
    </Container>
  )
}

export default Fetching
