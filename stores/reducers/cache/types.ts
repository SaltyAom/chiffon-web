import IWorkspaceStore from "stores/reducers/workspace/types"

interface ISetCacheCollection {
	type: "SET_CACHE_COLLECTION"
	collection: Array<IWorkspaceStore>
}

interface IAddCacheCollection {
	type: "ADD_CACHE_COLLECTION"
	collection: Array<IWorkspaceStore>
}

interface IRemoveCacheCollection {
	type: "REMOVE_CACHE_COLLECTION"
	collection: Array<IWorkspaceStore>
}

interface IResetCacheCollection {
	type: "RESET_CACHE_COLLECTION"
	date: string
	collection: Array<IWorkspaceStore>
}

export type ICacheCollection =
	| ISetCacheCollection
	| IAddCacheCollection
	| IRemoveCacheCollection
	| IResetCacheCollection

interface IInitCacheStore {
	date: string
	collection: Array<IWorkspaceStore>
}
export default IInitCacheStore
