export class MessageMedia {
    constructor(
        private id: string,
        private name: string,
        private content: string,
        private timeStamp: string,
        private url?: string,
        private tags: string[] = null) { }
}