import { getCurso } from "@/api/cursos";

type PageParams = {
  params: {
    curso: string;
  };
};

export default async function CursoPage({ params }: PageParams) {
  const curso = await getCurso(params.curso);

  return (
    <div>
      <main>
        <h1>{curso.nome}</h1>
      </main>
    </div>
  );
}
