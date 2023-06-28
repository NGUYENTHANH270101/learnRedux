import { useCallback, useState } from "react"
import { useFetching } from "../Utils/UtilHook"
import {
    Card,
    Row,
    Col,
    Pagination,
} from 'antd'
import { Link } from 'react-router-dom'


const Meta = Card
export default function UserList() {
    const [userList, setUserList] = useState([])
    const [paging, setPaging] = useState({
        total: 0,
        current: 1,
        pageSize: 10
    })

    const handleFetchingData = useCallback((res) => {   // nếu không dùng usecall back thì fuction này(mới) nó  sẽ gọi
        let data = res.data                             // liên tục nên sẽ render nhiều lần ảnh hưởng đến hiệu năng
        setUserList(data.data)
        setPaging(oldPaging => ({
            ...oldPaging,
            current: data.current,
            total: data.total
        }))
    }, [])
    useFetching(`/users?page=${paging.current}&size=${paging.pageSize}`, handleFetchingData)

    return (
        <>

            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify='center'>

                <Pagination current={paging.current} pageSize={paging.pageSize} total={paging.total}

                    onChange={(page, pageSize) => {
                        // console.log(page, pageSize);
                        setPaging(oldPaging => ({
                            ...oldPaging,
                            current: page,
                            pageSize: pageSize
                        }))
                    }}
                />

            </Row>
            <br />

            <Row
                gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
            >

                {userList.map((user) => {
                    return (
                        <Link to={`/${user._id}`} key={user._id}>
                            <Col className="gutter-row product-list" span={6}   >
                                <Card
                                    hoverable
                                    style={{
                                        width: 240,
                                    }}
                                    cover={<img alt={user.name} src={user.avatar} />}
                                >
                                    <Meta title={user.name} description={user.email} />
                                </Card>
                            </Col>

                        </Link>

                    )
                })}
            </Row>

        </>
    )
}