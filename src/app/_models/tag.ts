export class Tag {
  static readonly ANGULAR = new Tag("Angular", "red");
  static readonly TYPESCRIPT = new Tag("TypeScript", "darkred");
  static readonly PYTHON = new Tag("Python", "blue");
  static readonly JAVA = new Tag("Java", "green");
  static readonly MYSQL = new Tag("MySQL", "purple");
  static readonly RUBY = new Tag("Ruby", "orange");
  static readonly JAVASCRIPT = new Tag("JavaScript", "teal");
  static readonly BOOTSTRAP = new Tag("Bootstrap", "lightblue");
  static readonly CSS = new Tag("CSS", "lightgreen");
  static readonly HTML = new Tag("HTML", "black");
  static readonly HUGGINGFACE = new Tag("Huggingface", "pink");

  private constructor(private readonly key: string, public readonly color: string, ) {

  }
  toString() {
    return this.key;
  }
}