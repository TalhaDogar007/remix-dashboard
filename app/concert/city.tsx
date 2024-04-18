import type { LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import fucn, { Params, Gist} from "./cityData/cityData"


export async function loader({ params }: LoaderFunctionArgs) {
  const resData = await fucn.getdata();
  await fucn.getParam(params as unknown as Params);
  return resData;
}


export default function City() {
  const gists = useLoaderData<typeof loader>();

  return (
    <>
      <div>this is a concert city page</div>
      <ul>
        {gists.map((gist: Gist) => (
          <li key={gist.id}>
            <a href={gist.html_url}>{gist.id}</a>
          </li>
        ))}
      </ul>
    </>
  );
}


