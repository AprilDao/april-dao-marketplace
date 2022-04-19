import { api } from '../functions';

export const getAllCollections = async () => {
  const now = await api.query.collectionModule.collections.entries();
  return now;
};

export const getCollectionByHash = async (hash: string) => {
  const now = await api.query.collectionModule.collections(hash);
  return now;
};
