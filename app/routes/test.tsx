import { json } from '@remix-run/node' // types: 0.0.0-nightly-49e8da1-20230823
import { useLoaderData } from '@remix-run/react' // types: 0.0.0-nightly-49e8da1-20230823

export async function loader() {
	return json({ payload: { name: 'bob' } as Record<string, any> })
}

export default function RouteComponent() {
	const data = useLoaderData<typeof loader>()

	console.log(data.payload)

	return <div>stuff</div>
}
