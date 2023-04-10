import Link from "next/link";
import { useEffect, useState } from "react";

type Repository = {
	name: string;
};

export default function Repos() {
	const [repositories, setRepositories] = useState<string[]>([]);

	useEffect(() => {
		fetch("https://api.github.com/users/eduardofavarato/repos")
			.then((response) => response.json())
			.then((repositories: Repository[]) => {
				const names = repositories.map((repository) => repository.name);
				setRepositories(names);
			});
	}, []);

	return (
		<div className={`p-4`}>
			<h1 className="text-2xl lg:text-4xl text-center font-bold">Repos</h1>

			<ul className="m-2 list-disc list-inside">
				{repositories.map((repository) => (
					<li key={repository}>{repository}</li>
				))}
			</ul>

			<Link className="text-sm underline" href={"/"}>{`< Profile`}</Link>
		</div>
	);
}
