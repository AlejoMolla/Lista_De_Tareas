// Genera la URL de las secciones, para darles un identificador único
const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function generateURLKey() {
    let URLKey = "";

    for(let i = 0; i < 12; i++) {
        const _rand = Math.trunc(Math.random()*caracteres.length);

        URLKey += caracteres[_rand];
    }

    return URLKey;
}
