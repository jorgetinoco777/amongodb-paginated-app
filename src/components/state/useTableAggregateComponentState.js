import { useEffect, useState } from "react";

// Services
import { findUsers } from '../../services/UsersService'

const useTableAggregateComponentState = () => {
    const [ users, setUsers ] = useState([]);
    const [ page, setPage ] = useState(0);
    const [ total, setTotal ] = useState(0);
    const [ limit, setLimit ] = useState(5);

    const handleLimit = (event) => {
        //console.log("new limit: ", event.target.value);
        setLimit(event.target.value);
        setPage(0);
    };

    const handlePage = (_, newPage) => {
        //console.log("new page: ", newPage);
        setPage(newPage);
    };

    const handleFindUsers = () => {
        findUsers("aggregate" , page, limit).then((res) => {
            if(res.data && res.data.length > 0) {
                //console.log("Users: ", res.data);
                setUsers(res.data);
            }

            if(res.metadata) {
                //console.log("Metadata: ", res.metadata);
                setTotal(res.metadata.total)
            }
        });
    };

    useEffect(() => {
        handleFindUsers();
    }, [page, limit]);

    return {
        total,
        users,
        page,
        limit,
        handleFindUsers,
        handleLimit,
        handlePage,
    };
};

export default useTableAggregateComponentState;