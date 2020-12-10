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

class LeftCard extends React.PureComponent {

    render() {
        const { data: { Analytics } } = this.props
        return (
            <Card small className="mb-3 bg-dark" >
                <CardHeader className="border-bottom text-center">
                    <h4 className="mb-0 text-white">Total Orders</h4>
                </CardHeader>
                <CardBody>
                    <CardTitle className="text-white">{Analytics.totalOrders}</CardTitle>
                    <ListGroup flush>
                        <ListGroupItem className="p-4 bg-dark" >
                            <strong className="text-white d-block mb-2">
                                Best Selling
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

export default LeftCard