import React from "react"
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    CardBody,
    CardFooter,
    CardTitle
} from "shards-react"

class RightCard extends React.PureComponent {

    render() {
        return (
            <Card small className="mb-3 bg-dark" >
                <CardHeader className="border-bottom text-center">
                <h4 className="mb-0 text-white">Profit Today</h4>
                </CardHeader>
                <CardBody>
                    {/* where profits today go */}
                    <CardTitle  className="text-white">No Data</CardTitle>
                    <ListGroup flush>
                    <ListGroupItem className="p-4 bg-dark">
                        <strong className="text-white d-block mb-2">
                            Orders Today
                        </strong>
                        {/* where the data goes */}
                        <span className="text-white"></span>
                    </ListGroupItem>
                </ListGroup>
                </CardBody>
                 <CardFooter></CardFooter>
            </Card>
        )

    }

}

export default RightCard