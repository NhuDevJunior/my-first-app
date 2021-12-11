import { Button } from "bootstrap";
import React, { Component } from "react";
export default class MainContent extends Component {
    // save variable with dynamically
    state = {
        pageTitle: "Customer",
        customersCount: 5,
        listCus: [
            { id: 1, name: "Nhu", phone: "123-456", photo: "https://scr.vn/wp-content/uploads/2020/07/avt-ng%E1%BA%A7u-cho-nam.jpg" },
            { id: 2, name: "Bin", phone: null, photo: "https://anhdep123.com/wp-content/uploads/2021/01/boy-de-thuong-ngau-lanh-lung.jpg" },
            { id: 3, name: "Sang", phone: "542-46545", photo: "https://reviewnao.com/wp-content/uploads/2021/10/hinh-anh-anime-cute-nam-6.jpg" },
            { id: 4, name: "Nam", phone: "23123-456", photo: "https://i.pinimg.com/736x/0d/c4/dd/0dc4dd7b618b03fc50e90be2dc1ccace.jpg" },
            { id: 5, name: "Minh", phone: "123-54668", photo: "https://binhkhipho.vn/avatar-anime-ngau/imager_140629.jpg" },
            { id: 6, name: "Dick", phone: "789-6546", photo: "https://aleale.com.vn/wp-content/uploads/2019/05/anh-anime-doi-27-1.jpg" }
        ]
    }
    // render html UI
    render() {
        return <div>
            <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}
                <span className="badge badge-secondary m-2">{this.state.customersCount}</span>
                <button className="btn btn-info m-3" onClick={this.onRefreshClick}>Refresh</button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Avatar </th>
                        <th>Customer Name </th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getCustomerRow()}
                </tbody>
            </table>
        </div>
    }
    // executes when the user clicks on refresh button
    onRefreshClick = () => {
        this.setState({
            customersCount: 7,
        });
    }
    // call function in reactjs
    getPhoneToRender = (phone) => {
        if (phone == null) {
            return <div className="bg-warning p-2">No Phone</div>
        }
        else {
            return phone
        }
    }
    getCustomerRow = () => {
        {
            return (
                this.state.listCus.map((cus) => {
                    return (
                        <tr key={cus.id}>
                            <td>{cus.id}</td>
                            <td>
                                <img src={cus.photo} width="100" height="100"></img>
                                {/* using call method that because avoid load all message (hello nhu....) */}
                                <div><button className="btn btn-sm btn-secondary mt-1 ml-3" onClick={() => { this.onChangePictureClick(cus) }}>Change</button></div>
                            </td>
                            <td>{cus.name}</td>
                            <td>{this.getPhoneToRender(cus.phone)}</td>
                        </tr>
                    )
                }))
        }
    }
    onChangePictureClick = (cus) => {
        console.log("hello nhu tao change " + cus.name)
        var custArr = this.state.listCus
        custArr[cus.id - 1].photo = "https://i.pinimg.com/736x/a7/5f/65/a75f65ac092a6d7ac1dcbed9f01259e1--troll-meme-meme-faces.jpg"
        this.setState({ listCus: custArr })
    }
}