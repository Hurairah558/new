import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import Header from '../Header/Header';
import { Table , Button, Modal  } from 'semantic-ui-react';

function Announcement() {

    const [formData, setFormData] = useState({
		Subject: '',
		Announcement: '',
        Timing : new Date()
	  })


      const change = (e) => {
		setFormData({...formData,[e.target.name] : e.target.value})
	}

    const [validate,setvalidate] = useState("")

    const send = (e) => {
        e.preventDefault()
              axios.post(`http://localhost:3001/api/ssio/announcement`,formData)
              .then((res)=>{
                if (res.data.message){
                    setvalidate(res.data.message)
                }
                else{
                  setvalidate(res.data)
                }
                  update()
                setFormData({
                    Subject: '',
                    Announcement: '',
                    Timing : new Date()
                })
                })
              .catch((err)=>{console.log("No",err)})
    }

    const [data,setdata] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:3001/api/student/announcements").then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{console.log(err)})
    },[])

    const update=()=>{
        axios.get("http://localhost:3001/api/student/announcements").then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{console.log(err)})
    }

    const Delete =(id)=>{
        axios.delete(`http://localhost:3001/api/ssio/announcements/${id}`).then((res)=>{
            update()
        })
    }

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div class="container">
                    <div id="Merit_List_Data">
                        <h2 className="Admission_Form_Category">Announcement</h2>
                        <hr/>
                        <p className="Admission_p">Subject</p>
                        <input className="Admission_Form_Input" onChange={change} value={formData.Subject} type="text" name="Subject" placeholder="Subject" required=""/>
                        <p className="Admission_p">Announcement</p>
                        <hr/>
                        <textarea class="form-control" onChange={change} value={formData.Announcement} id="exampleFormControlTextarea1" name="Announcement" placeholder="Announcement" rows="3"></textarea>
                        <button className="Login_Button" onClick={send} ><Modals validate={validate} /></button>
                    </div>
                    <div className="Student" >
                        <div class="row">
                            <div className="col-md-12">
                                <Table celled selectable>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Sr#</Table.HeaderCell>
                                            <Table.HeaderCell>Subject</Table.HeaderCell>
                                            <Table.HeaderCell>Announcement</Table.HeaderCell>
                                            <Table.HeaderCell>Time</Table.HeaderCell>
                                            <Table.HeaderCell>Delete</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        { data.reverse().map((announcement,index)=>{
                                            return (
                                                <Table.Row key={index}>
                                                    <Table.Cell>{index+1}</Table.Cell>
                                                    <Table.Cell><b>{announcement.Subject}</b></Table.Cell>
                                                    <Table.Cell>{announcement.Announcement}</Table.Cell>
                                                    <Table.Cell>{String(announcement.Timing).slice(0,10)}</Table.Cell>
                                                    <Table.Cell><button className="btn btn-danger" onClick={()=>Delete(announcement.id)} >Delete</button></Table.Cell>
                                                </Table.Row>
                                        )})}
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Announcement;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<Button style={{background:"transparent",color:"white",width:"100%"}} >Submit</Button>}
	  >
		<Modal.Header><h1>Response</h1></Modal.Header>
		<Modal.Content image>
			<Modal.Description>
				<h2 className="d-flex justify-content-center">{String(props.validate).replaceAll('"',"").replaceAll('_'," ")}</h2>
				<hr/>
			</Modal.Description>
		</Modal.Content>
	</Modal>
	)
  }