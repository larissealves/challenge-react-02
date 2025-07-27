import {login} from '../src/utils';

test("Correct login", async () => {
    const result = await login({email: 'teste@email.com', password: 'password123' });
    expect(result).toBeUndefined();
})


test("Error login", async () => {
    try {
        await login({email: 'teste@email.com', password: 'passwordWrong' });
        throw new Error('Esperado ERRO, MAS o login passou');
    } catch(err){
        expect(err).toEqual({ message: 'e-mail or password wrong.' });
    }
    
   
})