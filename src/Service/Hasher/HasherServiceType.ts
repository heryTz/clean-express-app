export interface IHasherService {
    compare: (text: string, hash: string) => boolean
    hash: (text: string) => string
}