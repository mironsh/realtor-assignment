import axios from "axios";
import { useAsync } from "react-use";
import JsonData from "../types/data";

type useDataProps = [JsonData, boolean]
export default function useData(): useDataProps {
  const { value, loading } = useAsync(
    () => axios.get("/data.json"),
    []
  );

  return [value?.data, loading]
}
