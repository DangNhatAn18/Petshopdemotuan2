import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function EditProduct() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({

        name: "",
        breed: "",
        price: 0,
        description: "",
        imageUrl: ""
    });
    const { name, breed, price, description, imageUrl } = data;


    useEffect(() => {
        loadPro();
    }, []);

    function onSubmit(e) {
        e.preventDefault();
        axios.put(`https://62811baf1020d8520585969c.mockapi.io/api/v1/products/${id}`, data).then(

            navigate("/product")

        )
        
    }
    const loadPro = async () => {
        const result = await axios.get(`https://62811baf1020d8520585969c.mockapi.io/api/v1/products/${id}`);
        setData(result.data);
    };

    return (
        <div className="main">
        <div className="main-header">
            <div className="mobile-toggle" id="mobile-toggle">
                <i className='bx bx-menu-alt-right'></i>
            </div>
            <div className="main-title">
                -Quản lí thú cưng -Thêm mặt hàng
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
                                        <label for="exampleFormControlInput1">Tên thú cưng</label>
                                        <input value={name}
                                            onChange={(e) => setData({ ...data, name: e.target.value })}
                                            type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Loại</label>
                                        <input value={breed}
                                            onChange={(e) => setData({ ...data, breed: e.target.value })}
                                            type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Giá tiền</label>
                                        <input value={price}
                                            onChange={(e) => setData({ ...data, price: e.target.value })}
                                            type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">mô tả</label>
                                        <textarea value={description}
                                            onChange={(e) => setData({ ...data, description: e.target.value })}
                                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div className="custom-file">

                                        <label className="custom-file-label" for="customFile">Them anh</label>
                                        <input value={imageUrl}
                                                onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
                                            type="text" className="custom-file-input" id="customFile" />

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
export default EditProduct