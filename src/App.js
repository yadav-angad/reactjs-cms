import './App.css';
import React from 'react';
import DataTable from 'react-data-table-component';
import deleteIcon from './images/delete.png';
import editIcon from './images/edit.png';
import HeaderComponent from './component/HeaderComponent';
import CustomerComponent from './component/CustomerComponent';

const customStyles = {
	headRow: {
		style: {
			border: 'none',
		},
	},
	headCells: {
		style: {
			color: 'black',
			fontSize: '15px',
		},
	},
	rows: {
		highlightOnHoverStyle: {
			backgroundColor: 'lightgray',
			borderBottomColor: '#FFFFFF',
			borderRadius: '25px',
			outline: '1px solid #FFFFFF',
		},
	},
	pagination: {
		style: {
			border: 'none',
		},
	},
};

const columns = [
  {
    name: 'Username',
    selector: row => row.userName,
    sortable: true,
    style: {
      width: '2%'
    }
  },
  {
    name: 'First Name',
    selector: row => row.firstName,
    sortable: true,
    style: {
      width: '10%'
    }
  },
  {
    name: 'Last Name',
    selector: row => row.lastName,
    sortable: true,
    style: {
      width: '20%'
    }
  },
  {
    name: 'Email',
    selector: row => row.emailId,
    sortable: true,
    style: {
      width: '5%'
    }
  },
  {
    name: 'Address',
    selector: row => row.address,
    sortable: true,
    style: {
      width: '5%'
    }
  },
  {
    name: 'Phone',
    selector: row => row.phone,
    sortable: true,
    style: {
      width: '5%'
    }
  },
  {
    name: 'Age',
    selector: row => row.age,
    sortable: true,
    style: {
      width: '1%'
    }
  },
  {
    cell: row => <img src={editIcon} alt='Delete' style={{ width: '20px', margin: 'auto', display: 'block' }}/>,
    allowOverflow: true,
    button: true,
    width: '40px',
  },
  {
    cell: row => <a href='#/'><img src={deleteIcon} alt='Delete' style={{ width: '20px', margin: 'auto', display: 'block' }}/></a>,
    allowOverflow: true,
    button: true,
    width: '40px',
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerDetails: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount called");
    this.fetchUserList();
  }

  fetchUserList() {
    fetch('http://localhost:8080/restapi/getCustomer')
      .then(res => res.json())
      .then((data) => {
        console.log('data : ', data);
        this.setState({
          customerDetails: data
        })
      })
      .catch(console.log);
  };

  render() {
    return (
      <div className='body'>
        <HeaderComponent />
        <CustomerComponent />
        <DataTable className='App'
          columns={columns}
          data={this.state.customerDetails}
          selectableRows
          defaultSortFieldId={1} 
          fixedHeader='true'
          fixedHeaderScrollHeight='500px'
          pagination
          customStyles={customStyles}
		      highlightOnHover
		      pointerOnHover
        />
      </div>
    );
  }
};
