import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import Header from '../Header/Header';

function Announcement() {

    const [formData, setFormData] = useState({
		Subject: '',
		Announcement: '',
        Timing : new Date()
	  })


      const change = (e) => {
		setFormData({...formData,[e.target.name] : e.target.value})
	}

    const send = (e) => {
        e.preventDefault()
              axios.post(`http://localhost:3001/api/ssio/announcement`,formData)
              .then((res)=>{
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
            <section>
                <div id="Merit_List_Data">
                    <h2 className="Admission_Form_Category">Announcement</h2>
                    <hr/>
                    <p className="Admission_p">Subject</p>
					<input className="Admission_Form_Input" onChange={change} value={formData.Subject} type="text" name="Subject" placeholder="Subject" required=""/>
                    <p className="Admission_p">Announcement</p>
                    <hr/>
					<textarea class="form-control" onChange={change} value={formData.Announcement} id="exampleFormControlTextarea1" name="Announcement" placeholder="Announcement" rows="3"></textarea>
                    <button className="Login_Button" onClick={send} >Submit</button>
                </div>
                <div className="Student" >
            { data.map((announcement,index)=>{
                return (  
                    <div className="card m-4" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">Subject : {announcement.Subject}</h5>
                            <p className="card-text"><b>Announcement</b> : {announcement.Announcement}</p>
                            <button className="btn btn-danger" onClick={()=>Delete(announcement.id)} > Delete </button>
                        </div>
                    </div>
            )})}
            </div>
            </section>
        </React.Fragment>
    )
}

export default Announcement;
