import * as crypto from 'crypto';

class Transaction {
    constructor(
        public amount: number,
        public payer: string,
        public payee: string
    ) {}

    toString() {
        return JSON.stringify(this);
    }
}

class Block {
    constructor(
        public prevHash: string,
        public transaction: Transaction,
        public ts = Date.now()
    ) {}

    get hash() {
        const str = JSON.stringify(this);
        const hash = crypto.createHash('SHA256');
        hash.upate(str).end();
        return hash.digest('hex');
    }
}