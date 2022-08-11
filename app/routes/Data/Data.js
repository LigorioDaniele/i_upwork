import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Mktstatus from '../components/Mktstatus/Mktstatus';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {Link} from 'react-router-dom'


import {
    Container,
    Row,
    Button,
    Card,
    CardBody,
    CardDeck,
    CardHeader,
    CardFooter,
    CardColumns,
    Col,
    Badge,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Table,
    Media,
    UncontrolledTooltip,
    UncontrolledButtonDropdown,
} from '../../components'
import {
    ProfileOverviewCard
} from "../components/Profile/ProfileOverviewCard";
import {
    TinyAreaChart
} from "../components/Analytics/TinyAreaChart";
import { HeaderMain } from "../components/HeaderMain";


class Data extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPrice: null,
            
        };
    }


render() {
    return (
        <Container>
            <Mktstatus/>
          <Container className="pl-0">
            <div className="d-flex mt-3 mb-5">
              <div>
                  <HeaderMain 
                      title="Data Products"
                      className=""
                  />
                  <div className="h3">
                    <span className="text-info mr-3">Explore our data assets</span>
                  </div>

              </div>
            </div>
            
            <CardColumns>

            <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <i className="fa fa-diamond m-2"></i>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                            <span className="fw-600">ESG </span> Leaders
                        </a>
                        <div className="text-center mt-2">
                            Frequency: <span className="text-info">Weekly</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-map-marker mr-1"></i>
                            EQUITY
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <div className="mb-2">
                            <span className="small">
                                Top users:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="yellow" className="mr-1">
                            Traders
                        </Badge>
                        <Badge pill color="pink">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            Get Access to top ESG performers on the US and EU markets across multiple asset classes.
                        </p>
                        <Link to="/Data"><Button className="mt-3" color="primary">Explore</Button></Link>                
                    </div>   
                </CardBody>
              </Card>
            
                <Card className="mb-3">
                    <CardBody>
                        <div className="d-flex">
                            <i className="fa fa-diamond m-2"></i>
                        </div>

                        <div className="mb-4 mt-3 text-center">
                            <a className="h3 text-decoration-none" href="#">
                                Mega<span className="fw-600">Trends</span>
                            </a>
                            <div className="text-center mt-2">
                                Frequency: <span className="text-info">Weekly</span>
                            </div>
                            <div className="text-center">
                                <i className="fa fa-map-marker mr-1"></i>
                                EQUITY
                            </div>
                        </div>
                        
                        <div className="text-center mb-4">
                            <div className="mb-2">
                                <span className="small">
                                    Top users:
                                </span>
                            </div>
                            <Badge pill color="primary" className="mr-1">
                                Investors
                            </Badge>
                            <Badge pill color="warning" className="mr-1">
                                Banks
                            </Badge>
                            <Badge pill color="pink">
                                Hedge Funds
                            </Badge>
                        </div>
                        <div className="text-center mb-4">
                            <p className="mb-0">
                                The companies leading the shift towards a sustainable future, organized by sector of innovation. Discover tomorrow's leaders.
                            </p>
                            <Link to="/Data"><Button className="mt-3" color="primary">Explore</Button></Link>
                                        
                        </div>   
                    </CardBody>
                </Card>

              

              

              <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <i className="fa fa-diamond m-2"></i>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                            <span className="fw-600">ESG</span> Lab
                        </a>
                        <div className="text-center mt-2">
                            Frequency: <span className="text-info">Weekly</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-map-marker mr-1"></i>
                            EQUITY
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <div className="mb-2">
                            <span className="small">
                                Top users:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="pink">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            Unlock the return potential of ESG factors by gaining a privileged view of the ESG profile of multiple assets.
                        </p>
                        <Link to="/Data"><Button className="mt-3" color="primary">Explore</Button></Link>             
                    </div>   
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <i className="fa fa-diamond m-2"></i>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                            <span className="fw-600">Carbon</span> Leaders
                        </a>
                        <div className="text-center mt-2">
                            Frequency: <span className="text-info">Monthly</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-map-marker mr-1"></i>
                            EQUITY
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <div className="mb-2">
                            <span className="small">
                                Top users:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="yellow" className="mr-1">
                            Traders
                        </Badge>
                        <Badge pill color="pink">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            Scope 1,2 and 3 GHG emissions of thousands of global corporations. Discover the actual environmental impact of corporations and empower your prediction of their future performance.
                        </p>
                        <Link to="/Data"><Button className="mt-3" color="primary">Explore</Button></Link>               
                    </div>   
                </CardBody>
              </Card>


              <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <i className="fa fa-diamond m-2"></i>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                        <span className="fw-600">Insiders</span> Trends
                        </a>
                        <div className="text-center mt-2">
                            Frequency: <span className="text-info">Weekly</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-map-marker mr-1"></i>
                            EQUITY
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <div className="mb-2">
                            <span className="small">
                                Top users:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="pink">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            The latest trends and insights from the corporate insiders trading activity of US and EU equities. An in-depth look at flows, momentum and changes coming from the most informed shareholders.
                        </p>
                        <Link to="/Data"><Button className="mt-3" color="primary">Explore</Button></Link>          
                    </div>   
                </CardBody>
              </Card>

              

            </CardColumns>

          </Container>
    </Container>
    );
  } //render
}
export default Data
