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
                "appIDs": ["94578VNHQR.com.dev.techuz.drgalaxymobile"],
                "components": [
                    {
                        "/": "/*",
                        "comment": "Matches any URL beginning with /"
                    },
                    {
                        "/": "/path/1/*",
                        "exclude": true,
                        "comment": "Matches any URL beginning with /path/1/ and instructs the system not to open it as a universal link"
                    },
                ]
            }
        ]
    }
};