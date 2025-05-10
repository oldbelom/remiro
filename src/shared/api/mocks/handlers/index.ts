import { HttpResponse } from "msw";

import { ApiSchemas } from "../../schema";
import { http } from "../http";

const boards: ApiSchemas["Board"][] = [
    {
        id: "board-1",
        name: "Marketing Campaign",
    },
    {
        id: "board-2",
        name: "Product Roadmap",
    },
];

export const handlers = [
    http.get("/boards", () => {
        return HttpResponse.json(boards);
    }),
];
