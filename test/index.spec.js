import { exit } from '../src/lib/index.js';// Importa la función exit desde tu archivo de Firebase

describe('exit', () => {
  it('navigates to the specified path after successful sign-out', () => {
    const navigateTo = jest.fn(); // Crea una función simulada para navigateTo
    const signOut = jest.fn().mockResolvedValue();
    // Crea una promesa resuelta simulada para signOut

    exit(navigateTo); // Llama a la función exit con la función simulada navigateTo

    expect(signOut).toHaveBeenCalled(); // Comprueba que se haya llamado a la función signOut

    return signOut().then(() => {
      expect(navigateTo).toHaveBeenCalledWith('/'); // Comprueba que navigateTo se haya llamado con el parámetro '/'
    });
  });

  it('logs the error if sign-out fails', () => {
    const navigateTo = jest.fn();
    const error = 'Sign-out error';
    const signOut = jest.fn().mockRejectedValue(error); // Crea una promesa rechazada simulada para signOut

    exit(navigateTo);

    expect(signOut).toHaveBeenCalled();

    return signOut().catch((error) => {
      expect(console.log).toHaveBeenCalledWith(error); // Comprueba que se haya llamado a console.log con el error
    });
  });
});