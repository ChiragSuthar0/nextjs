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
                    "94578VNHQR.com.techuz.testingproject"
                ],
                "components": [
                    {
                        "/": "*",
                    },
                ]
            }
        ]
    }
};