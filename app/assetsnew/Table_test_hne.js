import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, numberFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

//react BootstrapTable (tablenext)
 

import {
  Container,
  Row,
  Table,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardHeader,
  CardFooter,
  CardColumns,
  Col,
  Badge
} from '../components'

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;


const sortCaret = (order) => {
  if (!order)
      return <i className="fa fa-fw fa-sort text-muted"></i>;
  if (order)
      return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
};




const columns = [{
  dataField: 'Holding',
  text: 'Holding',
  formatter: (cell) => (
    <span className="text-inverse">
        { cell }
    </span>
  ),
}, {
  dataField: 'Weight',
  text: 'Weight %',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span className="text-muted">
        { cell }
    </span>
  ),
},  {
  dataField: 'Sector',
  text: 'Sector',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span className="">
        { cell }
    </span>
  ),
}, {
  dataField: 'E_Risk',
  text: 'E Risk',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span className="text-warning">
        { cell }
    </span>
  )
}, {
  dataField: 'E_Contribution',
  text: 'E Contribution',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span className="text-muted">
        { cell }
    </span>
  )
}, {
  dataField: 'E',
  text: 'E',
  sort: true,
  sortCaret,
  style: (cell, row, rowIndex, colIndex) => {
    if (cell > 0) {
      return {
        color: '#33AE9A'
      };
    }
    return {
       color: '#ED1C24'
    };
  },
  formatter: (cell) => (
    <span>
        { cell }
    </span>
  )
}, {
  dataField: 'S',
  text: 'S',
  sort: true,
  sortCaret,
  style: (cell, row, rowIndex, colIndex) => {
    if (cell > 0) {
      return {
        color: '#33AE9A'
      };
    }
    return {
       color: '#ED1C24'
    };
  },
  formatter: (cell) => (
    <span>
        { cell }
    </span>
  )
},   {
  dataField: 'G',
  text: 'G',
  sort: true,
  sortCaret,
  style: (cell, row, rowIndex, colIndex) => {
    if (cell > 0) {
      return {
        color: '#33AE9A'
      };
    }
    return {
       color: '#ED1C24'
    };
  },
  formatter: (cell) => (
    <span>
        { cell }
    </span>
  )
}, {
  dataField: 'E_Risk_Peers',
  text: 'E Peers',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span className="text-muted">
        { cell }
    </span>
  )
}
];




class Table_test_hne extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
     
    };
  }

    



   
  render() {
  
   
   var counter=0
    var products = this.props.items.map(function(i) {
      return {





        id: counter++,
        Holding:i.Holding,
        E_Risk:i.E_Risk,
        E_Contribution:i.E_Contribution,
        E_Risk_Peers:i.E_Risk_Peers,
        Weight:i.Weights,
        Sector:i.Sector,
        E:i.E,
        S:i.S,
        G:i.G
      };
  });
    return (
      
      <Container>
        <div>
          <Card>
            <CardBody>
            <ToolkitProvider
                keyField="id"
                data={ products }
                columns={columns}
                filter={ filterFactory() }
                search
                exportCSV={ {
                  fileName: 'companies_export.csv',
                  separator: ',',
                  noAutoBOM: false
                } }
              >
                {
                  props => (
                    <div>
                      <div className="d-flex justify-content-between mb-3">
                      <SearchBar {...props.searchProps}
                        placeholder="Search..."
                      />
                      <ExportCSVButton { ...props.csvProps } className="p-0">
                        <Button color="info" outline>
                          <i className="fa fa-download mr-2"></i>
                                Export
                        </Button>
                      </ExportCSVButton>
                      </div>
                      <BootstrapTable
                        { ...props.baseProps }
                        classes="table-responsive-lg"
                        bordered={ false }
                        responsive
                        pagination={ paginationFactory() }
                      />
                      <br />
                    </div>
                  )
                }
              </ToolkitProvider>
            </CardBody>
          </Card>
        </div>
      </Container>
      
    );
  }
}

export default Table_test_hne;
