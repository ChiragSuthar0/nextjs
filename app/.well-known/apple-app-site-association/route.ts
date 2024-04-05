import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type Data = {
    applinks: {
        apps: string[],
        details: {
            appID: string,
            paths: string[]
        }[]
    }
};

export async function GET() {
    return NextResponse.json(aasa);
}

const aasa = {
    "applinks": {
        "details": [
            {
                "appIDs": [
                    "94578VNHQR.com.dev.techuz.testingproject"
                ],
                "components": [
                    {
                        "#": "no_universal_links",
                        "exclude": true,
                        "comment": "Matches any URL with a fragment that equals no_universal_links and instructs the system not to open it as a universal link."
                    },
                    {
                        "/": "/post/*",
                        "comment": "Matches any URL with a path that starts with /post/."
                    },
                    {
                        "/": "/help/website/*",
                        "exclude": true,
                        "comment": "Matches any URL with a path that starts with /help/website/ and instructs the system not to open it as a universal link."
                    },
                    {
                        "/": "/help/*",
                        "?": {
                            "articleNumber": "????"
                        },
                        "comment": "Matches any URL with a path that starts with /help/ and that has a query item with name 'articleNumber' and a value of exactly four characters."
                    },
                    {
                        "/": "/path/*",
                    },
                ]
            }
        ]
    }
};