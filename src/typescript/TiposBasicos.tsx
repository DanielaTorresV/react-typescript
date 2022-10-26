const TiposBasicos = () => {
  const nombre: string = "Fernando";
  const edad: number = 35;
  const estaActivo: boolean = true;

  const poderes: string[] = ["Velocidad", "Volar", "Respirar en el Agua"];
  return (
    <>
      <h3>Tipos Básicos</h3>
      {nombre}, {edad}, {estaActivo ? "Activo" : "No Activo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};

export default TiposBasicos;
