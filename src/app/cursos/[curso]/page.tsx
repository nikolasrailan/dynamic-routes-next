type PageParams = {
  params: {
    curso: string;
  };
};

export default async function CursoPage({ params }: PageParams) {
  return (
    <div>
      <main>
        <h1>Curso: {params.curso}</h1>
      </main>
    </div>
  );
}
