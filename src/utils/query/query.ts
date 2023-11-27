import { QueryClient } from "@tanstack/react-query";
import Pocketbase from 'pocketbase';

const pb = new Pocketbase('https://biota.ryvenna.dev')

const queryClient = new QueryClient();

export {
  pb,
  queryClient
}
