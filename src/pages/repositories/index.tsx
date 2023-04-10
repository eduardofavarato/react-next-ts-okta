import { GetServerSideProps } from 'next'
import Link from 'next/link'

type Repository = {
  name: string
}

type RepositoriesProps = {
  repositories: Repository[]
}

export default function Repositories({ repositories }: RepositoriesProps) {
  return (
    <div className={`p-4`}>
      <h1 className="text-2xl lg:text-4xl text-center font-bold">Repos</h1>

      <ul className="m-2 list-disc list-inside">
        {repositories.map((repository) => (
          <li key={repository.name}>{repository.name}</li>
        ))}
      </ul>

      <Link className="text-sm underline" href={'/'}>{`< Profile`}</Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    'https://api.github.com/users/eduardofavarato/repos',
  )
  const repositories: Repository[] = await response.json()

  return {
    props: {
      repositories,
    },
  }
}
