type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

export default async function AulaPage({ params }: PageParams) {
  return (
    <div>
      <main>
        <h1>
          Aula: {params.curso} / {params.aula}
        </h1>
      </main>
    </div>
  );
}
