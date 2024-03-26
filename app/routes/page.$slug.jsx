// Import necessary modules or functions here

export async function loader({ params } /* LoaderFunctionArgs */) {
    try {
        const page = await db.page.findOne({
            where: { slug: params.slug },
        });

        if (!page) {
            throw new Response(null, {
                status: 404,
                statusText: "Not Found",
            });
        }

        return json(page);
    } catch (error) {
        console.error("Loader function error:", error);
        throw error; // Rethrow the error for further handling, e.g., by ErrorBoundary
    }
}

export function ErrorBoundary() {
    const error = useRouteError();

    return (
        <html>
            <head>
                <title>Oops!</title>
                {/* Import Meta, Links, and Scripts components here if needed */}
                {/* <Meta /> */}
                {/* <Links /> */}
            </head>
            <body>
                <h1>
                    {isRouteErrorResponse(error)
                        ? `${error.status} ${error.statusText}`
                        : error instanceof Error
                            ? error.message
                            : "Unknown Error"}
                </h1>
                {/* Import Scripts component here if needed */}
                {/* <Scripts /> */}
            </body>
        </html>
    );
}
