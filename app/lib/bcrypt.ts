import bcrypt from 'bcrypt';

export async function hash(string: string): Promise<string>{
    console.log('BCRYPT - HASH');

    return await bcrypt.hash(string, 10);
}

export async function compare(stringA: string, stringB: string){
    console.log('BCRYPT - COMPARE');

    return await bcrypt.compare(stringA, stringB);
}