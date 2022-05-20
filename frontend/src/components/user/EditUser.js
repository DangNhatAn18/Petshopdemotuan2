import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function EditUser() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
        name: "",
        phone: 0,
        address: "",
        status: "",
    });
    const { name, phone, address, status } = data;


    useEffect(() => {
        loadUs();
    }, []);

    function onSubmit(e) {
        e.preventDefault();
        axios.put(`https://62811baf1020d8520585969c.mockapi.io/api/v1/users/${id}`, data).then(

            navigate("/user")

        )

    }
    const loadUs = async () => {
        const result = await axios.get(`https://62811baf1020d8520585969c.mockapi.io/api/v1/users/${id}`);
        setData(result.data);
    };

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className='bx bx-menu-alt-right'></i>
                </div>
                <div className="main-title">
                    -Quản lí khách hàng - sửa người dùng
                </div>
            </div>
            <div className="main-content">
                <div className="row">

                </div>
                <div className="box">
                    <div className="box-header">
                        <div className="control">

                            <div className="row">

                                <div className="col-md-6">
                                    <form  >
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Tên khách hàng</label>
                                            <input value={name}
                                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                                type="text" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Số điện thoại</label>
                                            <input value={phone}
                                                onChange={(e) => setData({ ...data, phone: e.target.value })}
                                                type="text" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Địa chỉ</label>
                                            <input value={address}
                                                onChange={(e) => setData({ ...data, address: e.target.value })}
                                                type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Trạng thái</label>
                                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                                value={data.status}
                                                onChange={(e) => setData({ ...data, status: e.target.value })}>
                                                <option selected>Chọn trạng thái</option>
                                                <option value="Kích hoạt">Kích hoạt</option>
                                                <option value="Ẩn">Ẩn</option>
                                            </select>
                                        </div>
                                        <input onClick={onSubmit} type='submit' />
                                    </form>
                                </div>
                            </div>

                            <br />


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default EditUser