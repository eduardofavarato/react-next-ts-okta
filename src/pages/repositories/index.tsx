import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

type Repository = {
  name: string
}

type RepositoriesProps = {
  repositories: Repository[]
  date: Date
}

const Repositories: React.FC<RepositoriesProps> = ({ repositories, date }: RepositoriesProps) => {
  return (
    <div className={`p-4`}>
      <h1 className="text-2xl lg:text-4xl text-center font-bold">Repos</h1>
      <h1 className="text-2xl lg:text-4xl text-center font-bold">{date.toString()}</h1>

      <ul className="m-2 list-disc list-inside">
        {repositories.map((repository) => (
          <li key={repository.name}>{repository.name}</li>
        ))}
      </ul>

      <Link className="text-sm underline" href={'/'}>{`< Profile`}</Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/eduardofavarato/repos')
  const repositories: Repository[] = await response.json()

  return {
    props: {
      repositories,
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}

export default Repositories
