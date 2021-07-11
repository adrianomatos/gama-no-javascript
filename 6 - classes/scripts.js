class Livro{
    constructor(titulo, autor, quantPaginas){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = quantPaginas;
    }
    ler(){
        return `Lendo o livro ${this.titulo}`;
    }
}

/* let meuLivro = new Livro("Arduino Básico", "McRoberts", 199);
console.log(meuLivro.ler());

let outroLivro = new Livro("Eletrônica para makers", "Charles Platt",255);
console.log(outroLivro.ler());

console.log(meuLivro, outroLivro);  */

class JavaLivro extends Livro{
    constructor (titulo, autor, quantPaginas, editora){
        super(titulo, autor, quantPaginas);
        this.editora = editora;
    }
    ler(){
        return `Lendo o livro de java: ${this.titulo}`
    }
}
let meuJavaLivro = new JavaLivro("Use a cabeça JAVA", "Sierra & Bates", 326, "Alta Books");
console.log(meuJavaLivro.ler())

// FALTANDO ENCAPSULAMENTO......................................................... 10MIN