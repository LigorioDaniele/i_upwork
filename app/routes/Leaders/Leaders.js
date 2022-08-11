import React, {Component} from 'react';
import Chart from "react-apexcharts";


import { getAssetPerPortfolio} from '../API/api.js'


import {Link} from 'react-router-dom'

import {
    Container,
    Row,
    Button,
    Card,
    CardBody,
    CardDeck,
    CardHeader,
    CardTitle,
    Col,
    Badge,
    Table,

} from '../../components'

import {
    TinyAreaChart
} from "../components/Analytics/TinyAreaChart";
import { HeaderMain } from "../components/HeaderMain";

import {
  TinyDonutChart
} from "../components/Monitor/TinyDonutChart";

import Table_test_hne from '../../assetsnew/Table_test_hne';

class Leaders extends Component {
    constructor(props) {
        super(props);
        var settore;
        switch (this.props.match.params.pillar) {
            case 'CE':
              settore = "Clean Energy";
              break;
            case 'AI':
                settore = "IMAGES";
              break;
            case 'FH':
                settore = "Future Health";
          }

        this.state = {
            tickers:null,
            pillar:this.props.match.params.pillar,
            settore:settore,
            asset: null,
            options: {
                chart: {
                    height: 350,
                    type: 'treemap'
                  }
            },
            series: [{
                data:[{
                    x: 'Technology',
                    y: 218
                  },
                  {
                    x: 'IT',
                    y: 149
                  },
                  {
                    x: 'Agriculture',
                    y: 184
                  },
                  {
                    x: 'Consumer Staple',
                    y: 55
                  },]
            }],


            // radial
            options3: {
                series3: [46],
                chart: {
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '70%',
                  }
                },
              },
              labels: [' Allocation'],
              },


            // radar

            seriesr: [{
                name: 'Impact Exposure (%)',
                data: [12.5, 25, 12.5, 12.5, 12.5, 12.5, 12.5],

              }],
              optionsr: {
                chart: {
                height: 450,

                  type: 'radar',
                },
                xaxis: {
                  categories: ['Alcohol', 'Animal Testing', 'Catholic', 'Coal', 'Weapons', 'Military','Nuclear']
                }
              },


            // sectors
            seriesx: [1.03,	3.83,	3.84,	2.69,	2.64,	23.29,	5.35,	8.88,	5.99,	3.02,	2.68,	36.77],
            optionsx: {
              chart: {
                type: 'donut',
              },
              labels: ['Technology',	'Energy',	'Industrials',	'Communication Services',	'Basic Materials',	'Financial Services',	'Consumer Cyclical',	'Healthcare',	'Consumer Defensive',	'Real Estate',	'Utilities',	'Government'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },

            // scatter test

            seriesb: [{
                name: 'ACSAY',
                data:[[1.994,32.32,32.32]],
              },
              {
                name: 'ANIM',
                data:[[2.798,21.27,21.27]],
              },
              {
                name: 'APAM',
                data:[[2.795,28.73,28.73]],
              },
              {
                name: 'ASM',
                data:[[2.509,19.41,19.41]],
              },
              {
                name: 'ASMLF',
                data:[[2.609,12.75,12.75]],
              },
              {
                name: 'AVST',
                data:[[0.216,18.69,18.69]],
              },
              {
                name: 'LD',
                data:[[1.76,29.55,29.55]],
              },
              {
                name: 'PRT',
                data:[[0.835,24.63,24.63]],
              },
              {
                name: 'DOM',
                data:[[1.621,15.38,15.38]],
              },
              {
                name: 'KOM',
                data:[[0.244,27.31,27.31]],
              },
              {
                name: 'LOG',
                data:[[1.03,25.38,25.38]],
              },
              {
                name: 'MRL',
                data:[[2.907,14.98,14.98]],
              },
              {
                name: 'BMW',
                data:[[2.588,27.1,27.1]],
              },
              {
                name: 'BNP',
                data:[[2.639,25.7,25.7]],
              },
              {
                name: 'EL',
                data:[[1.46,20.96,20.96]],
              },
              {
                name: 'ELIS',
                data:[[2.619,24.43,24.43]],
              },
              {
                name: 'AI',
                data:[[1.864,13.52,13.52]],
              },
              {
                name: 'AIR',
                data:[[2.695,28.35,28.35]],
              },
              {
                name: 'DG',
                data:[[1.724,28.27,28.27]],
              },
              {
                name: 'FP',
                data:[[2.49,42.13,42.13]],
              },
              {
                name: 'MC',
                data:[[3.799,10.03,10.03]],
              },
              {
                name: 'SAN',
                data:[[3.434,24.37,24.37]],
              },
              {
                name: 'SGO',
                data:[[3.107,20.05,20.05]],
              },
              {
                name: 'TEP',
                data:[[2.601,19.92,19.92]],
              },
              {
                name: 'HEI',
                data:[[2.925,29.31,29.31]],
              },
              {
                name: 'EXO',
                data:[[1.691,14.45,14.45]],
              },
              {
                name: 'GALP',
                data:[[0.755,26.77,26.77]],
              },
              {
                name: 'GEST',
                data:[[2.075,25.32,25.32]],
              },
              {
                name: 'IAG',
                data:[[1.746,26.05,26.05]],
              },
              {
                name: 'INGA',
                data:[[2.122,21.86,21.86]],
              },
              {
                name: 'ITX',
                data:[[2.491,9.82,9.82]],
              },
              {
                name: 'MT',
                data:[[2.934,44.09,44.09]],
              },
              {
                name: 'OCI',
                data:[[2.557,29.22,29.22]],
              },
              {
                name: 'PRX',
                data:[[2.434,22.34,22.34]],
              },
              {
                name: 'RWE',
                data:[[1.948,33.45,33.45]],
              },
              {
                name: 'SAP',
                data:[[2.544,19.36,19.36]],
              },
              {
                name: 'TGYM',
                data:[[2.728,13.94,13.94]],
              },
              
            ],
              optionsb: {
                chart: {
                    height: 350,
                    type: 'bubble',
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    opacity: 0.8
                },
                title: {
                    text: 'Simple Bubble Chart'
                },
                xaxis: {
                    min: 0,
                    max: 6,
                    tickAmount: 10,
                labels: {
                    formatter: function(val) {
                    return parseFloat(val).toFixed(1)
                    }
                }
                },
                yaxis: {
                    max: 70
                },
                tooltip: {
                    z: {
                      title: 'E:'
                    }
                  }
              },

            // scatter
            series2: [{
                data: 
                [{
                    x: 1,
                    y: 2.14,
                    z: 'title1'
                }, {
                    x: 1.2,
                    y: 2.19,
                    z: 'hey'
                }, {
                    x: 1.8,
                    y: 2.43,
                    z: 'mike'
                }, {
                    x: 2.3,
                    y: 3.8,
                    z: 'BE'
                }, {
                    x: 2.6,
                    y: 4.14,
                    z: 'aye'
                }, {
                    x: 2.9,
                    y: 5.4,
                    z: 'ral'
                }]
              },
            ],
            options2: {
                chart: {
                    height: 350,
                    type: 'scatter',
                  },
                  
                  xaxis: {
                    
                  },
                  yaxis: {
                    
                  },
                  tooltip: {
                    y: {
                        formatter: undefined,
                        title: 'E: '
                    },
                    z: {
                        formatter: undefined,
                        title: 'Title: '
                    },
                  },
                  fill: {
                    type: 'gradient',
                    gradient: {
                      shade: 'light',
                      shadeIntensity: 0.25,
                      gradientToColors: undefined,
                      inverseColors: true,
                      opacityFrom: 0.85,
                      opacityTo: 0.85,
                      stops: [50, 0, 100]
                    },
                  }
              },
        };
    }
   


    async UNSAFE_componentWillMount() {

        await getAssetPerPortfolio()
        .then(data => this.setState({ 
            asset: data})   
            )
    }
    
  
render() {
    

    
    if (!this.state.asset) {
        return <div>Loading Data Engine <i className="fa fa-fw fa-spinner fa-spin text-info"></i></div>;   
      }
      const final = this.state.asset;

    return (
        <Container>


          
          <Container className="pl-0">
            <div className="d-flex mt-3 mb-5">
              <div>
                  <HeaderMain 
                      title={this.state.settore}
                      className=""
                  />
                  <div className="h3">
                  <span className="text-info mr-3">M</span>
                  <span className="mx-2">·</span>
                  <span>10</span>
          

                </div>

              </div>
            </div>

            <CardDeck>
            { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <div>
                            <div className="mb-4">
                                <h5 className="mb-1 text-info">TOTAL HOLDINGS</h5>
                                <p>Weekly Snapshot</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">60</h2>
                                    <span>Change: <span className="text-info">-</span></span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-info"></i> Class: Multiasset
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-primary"></i> Region: EU
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-gray-300"></i> Risk: 6/10
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card className="mb-3">
                    <CardBody>
                        <div>
                            <div className="mb-4">
                                <h5 className="mb-1 text-info">PERFORMANCE</h5>
                                <p> YTD Return</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">18.01%</h2>
                                    <span><span className="text-info">+3.32%</span> from Benchmark</span>
                                </div>
                            </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="text-center">
                                        <h6 className="mb-0">17.45%</h6>
                                        <span><Badge pill color="danger">SPY</Badge></span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">12.84%</h6>
                                        <span><Badge pill color="secondary">NDX</Badge></span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">14.31%</h6>
                                        <span><Badge pill color="primary">DJI</Badge></span>
                                    </div>
                                </div>
                        </div>
                    </CardBody>
                </Card>
            { /* START Card Widget */}

                <Card className="mb-3">
                    <CardBody>
                        <div>
                            <div className="mb-4">
                                <h5 className="mb-1 text-info">VALUATION &amp; SIZE</h5>
                                <p>Key Metrics</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">7,048 M</h2>
                                    <span className="text-info">NAV</span>
                                </div>
                            </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="text-center">
                                        <h6 className="mb-0">3.2%</h6>
                                        <span>Volatility</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">9</h6>
                                        <span>P/E</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">1.21</h6>
                                        <span>Beta</span>
                                    </div>
                                </div>
                        </div>
                    </CardBody>
                </Card>

                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <div>
                            <div className="mb-4">
                                <h5 className="mb-1 text-info">TREND</h5>
                                <p>Key Metrics</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">Bullish</h2>
                                    <span>Avg. <span className="text-info">MarketCap</span></span>
                                </div>
                            </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="text-center">
                                        <h6 className="mb-0"><Badge color="info">BULLISH</Badge></h6>
                                        <span>Sentiment</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0"><Badge color="warning">AVERAGE</Badge></h6>
                                        <span>Momentum</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">250M</h6>
                                        <span>Volume</span>
                                    </div>
                                </div>
                        </div>
                    </CardBody>
                </Card>
            { /* START Card Widget */}
        </CardDeck>

        <Row className="mt-3">
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody className="pb-0">
                            <CardTitle tag="h5" className="text-info">
                                E Profile
                            </CardTitle>
                            <p className="mb-3">
                                Overview of
                            </p>
                            
                            <div>
                                <Link to="../Disclosures">
                                    <Button outline className="mb-3" color="info">
                                        Explore
                                    </Button>
                                </Link>
                           
                                <Button className="mb-3 ml-3" color="info">
                               
                                </Button>
                            </div>
                            <Row>
                            <Col sm={4}>
                            <div className="d-flex mb-4 justify-content-center">
                            
                            </div>
                        <div className="text-center mb-4">
                            <h2>
                               E-Aligned 
                                <i className="fa fa-envira text-info ml-2"></i> 
                            </h2>
                       
                            
                        </div>
                            <CardBody className="p-0">
                                <TinyAreaChart />
                            </CardBody>

                            </Col>    


                            <Col sm={ 4 }>
                                <div className="mb-4">
                                    <div>
                                        <h5 className="mb-1 text-info">Portfolio  Score</h5>
                                        <p>Fund Aggregate Score</p>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <TinyDonutChart />
                                        <div className="ml-2 align-self-center">
                                            <span>Score</span>
                                            <h2 className="mb-0">
                                            59.1
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-info"></i> E
                                            </div>
                                            <h6 className="mb-0">
                                            65.8
                                            </h6>
                                        </div>
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-primary"></i> S
                                            </div>
                                            <h6 className="mb-0">
                                            74.1
                                            </h6>
                                        </div>
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-gray-300"></i> G
                                            </div>
                                            <h6 className="mb-0">
                                            70.0
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                  
                              </Col>
                              <Col sm={ 4 }>
                              <Table size="sm">
                                    <div className="mb-3">
                                        <h5 className="text-info">CONTR</h5> 
                                        <p>Average: <span className="text-warning">3.0</span></p>
                                    </div>
                                  <tbody>
                                      <tr>
                                          <td className="text-inverse bt-0">Total Cont</td>
                                          <td className="text-right bt-0">
                                            19
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Top Cat</td>
                                          <td className="text-right">
                                              <Badge color="info" pill>Medio Ambiente</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Most contr</td>
                                          <td className="text-right">
                                              LOREM
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Ben</td>
                                          <td className="text-right">
                                              2,94 
                                          </td>
                                      </tr>
                                  </tbody>
                              </Table>
                            </Col>
                              
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>



            <CardDeck className="mb-3">
                <Card>
                    <CardBody className="pb-0">
                        <CardHeader className="text-info mb-4 bg-white" tag="h4">
                        Ev
                        </CardHeader>
                        <div>
                            <Chart options={this.state.options3} series={this.state.options3.series3} type="radialBar"/>
                        </div>
                       
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardHeader className="text-info mb-4 bg-white" tag="h4">
                            Sector Classes Distribution
                        </CardHeader>
                    <div>
                    <Chart options={this.state.optionsx} series={this.state.seriesx} type="donut" height={400} />
                        
                    </div>
                    
                        <div>
                            <div className="mt-3">
                            <h4>Monthly Snapshot: <span className="text-info">May 2022</span></h4>
                    
                            </div>
                        </div>

                    </CardBody>
                </Card>
            </CardDeck>
        


            
           
            <Row>
              <Table_test_hne items={final}/> 
            </Row>
          </Container>
          
    </Container>
    );
  } //render
   //<Tablestock items={final} />
}
export default Leaders
