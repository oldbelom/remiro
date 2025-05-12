import { Link, href } from "react-router-dom";

import { rqClient } from "@/shared/api/instance";
import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { Card, CardFooter, CardHeader } from "@/shared/ui/kit/card";

function BoardsListPage() {
    const { data: boardsList } = rqClient.useQuery("get", "/boards");

    return (
        <div className="container mx-auto p-5">
            <h1>Boards list</h1>
            <div className="grid grid-cols-4 gap-2">
                {boardsList?.map((board) => (
                    <Card key={board.id} className="bg-white">
                        <CardHeader>
                            <Button asChild variant={"link"}>
                                <Link to={href(ROUTES.BOARD, { boardId: board.id })}>{board.name}</Link>
                            </Button>
                        </CardHeader>
                        <CardFooter>
                            <Button variant={"destructive"}>Delete</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export const Component = BoardsListPage;
