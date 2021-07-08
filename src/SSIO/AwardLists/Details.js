import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { Table } from 'semantic-ui-react';

function Details() {


    const location = useLocation()

    const [data, setdata] = useState([])

    useEffect(()=>{

        axios.post("http://localhost:3001/api/ssio/details",location.state.Course).then((res)=>{
			setdata(res.data.data)
		})
			.catch((err)=>{console.log(err)})

    },[])

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div class="container">
                    <h1>Currently Displaying Award List</h1>
                        <div class="row">
                            <div className="col-md-12">
                                <Table celled selectable>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Sr#</Table.HeaderCell>
                                            <Table.HeaderCell>Roll</Table.HeaderCell>
                                            <Table.HeaderCell>Name</Table.HeaderCell>
                                            <Table.HeaderCell>Mids</Table.HeaderCell>
                                            <Table.HeaderCell>Sessional</Table.HeaderCell>
                                            <Table.HeaderCell>Shift</Table.HeaderCell>
                                            <Table.HeaderCell>Semester</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {data.map((Student,index)=>{
                                            return(
                                                <Table.Row key={index}>
                                                    <Table.Cell>{index+1}</Table.Cell>
                                                    <Table.Cell>{Student.Roll}</Table.Cell>
                                                    <Table.Cell>{Student.Name}</Table.Cell>
                                                    <Table.Cell>{Student.Mids}</Table.Cell>
                                                    <Table.Cell>{Student.Sessional}</Table.Cell>
                                                    <Table.Cell>{Student.Shift}</Table.Cell>
                                                    <Table.Cell>{Student.Fall_Spring}</Table.Cell>
                                                </Table.Row>
                                        )
                                        })}
                                    </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Details;
