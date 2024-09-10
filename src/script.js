const alunos = new Map();
alunos.set("nomes", ["Arthur, Laura, Julia, Gabriel"]);
alunos.set("notas", [9, 10, 11, 12]);

function aprovados() {
    let notas = alunos.get("notas");
    let nomes = alunos.get("nomes");
    let aprovados = [];
    nomes.forEach((nome, i) => {
        let nota = notas[i];
        if(nota >= 6) {
            aprovados.push(nome);
        }
    });
    return aprovados;
}
