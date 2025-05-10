import { Link, href } from "react-router-dom";

import { rqClient } from "@/shared/api/instance";
import { ROUTES } from "@/shared/model/routes";

function BoardsListPage() {
    const { data: boardsList } = rqClient.useQuery("get", "/boards");

    return (
        <div>
            <h1>Boards list</h1>
            {boardsList?.map((board) => (
                <div key={board.id}>
                    <Link to={href(ROUTES.BOARD, { boardId: board.id })}>{board.name}</Link>
                </div>
            ))}
        </div>
    );
}

export const Component = BoardsListPage;
