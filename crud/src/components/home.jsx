import React from 'react';
import {} from 'react-bootstrap';
const home = () => {
    return (
        <React.Fragment>
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a href="" className="navbar-brand">Google</a>
                <div className="navbar-nav ml-auto">
                    <a href="" className="nav-item nav-link">Home</a>
                    <a href="" className="nav-item nav-link">Contact</a>
                    <a href="" className="nav-item nav-link">About</a>
                    <a href="" className="nav-item nav-link">Services</a>
                </div>
            </div>
        </div>
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-3">
                    <form action="" method="post">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Contact</label>
                            <input type="text" name="contact" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">City</label>
                            <input type="text" name="city" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Salary</label>
                            <input type="text" name="salary" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-block btn-primary"/>
                        </div>
                    </form>
                </div>
                <div className="col-lg-9">
                    <table className="table table-bordered">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>City</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                        <tr>

                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default home;