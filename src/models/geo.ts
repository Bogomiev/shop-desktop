export interface IGeo {
    latitude: number
    longitude: number
}

export interface IGeoPositionStore {
    setPosition(position: { coords: IGeo }): void 
}
