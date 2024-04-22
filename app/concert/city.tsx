import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fucn, { Params, Gist } from "./cityData/cityData";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const resData = await fucn.getdata();
  const reqParam = await fucn.getParam(params as unknown as Params);

  // Access query parameters
  const url = new URL(request.url);
  const queryParams = Object.fromEntries(url.searchParams.entries());

  // Now queryParams contains all query parameters
  console.log(queryParams);
  console.log(JSON.stringify(queryParams));


  return json({ resData, reqParam, queryParams });
}

export default function City() {
  const gists = useLoaderData<typeof loader>();

  // Stringify queryParams to render it
  const queryParamsString = JSON.stringify(gists.queryParams);

  return (
    <>
      <div>
        this is a concert city page params {gists.reqParam.city},
        {queryParamsString}
      </div>
      <ul>
        {gists.resData.map((gist: Gist) => (
          <li key={gist.id}>
            <a href={gist.html_url}>{gist.id}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
