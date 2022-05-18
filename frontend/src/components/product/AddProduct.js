import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function AddProduct() {
    let navigate = useNavigate();
    const [data, setData] = useState({

        name: "",
        breed: "",
        price: 0,
        description: "",
        imageUrl: ""
    });



    function Submit(e) {
        e.preventDefault();
        axios.post("https://62811baf1020d8520585969c.mockapi.io/api/v1/products", data).then(

            navigate("/product")

        )
        
    }

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
                                            <input value={data.name}
                                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                                type="text" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Loại</label>
                                            <input value={data.breed}
                                                onChange={(e) => setData({ ...data, breed: e.target.value })}
                                                type="text" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Giá tiền</label>
                                            <input value={data.price}
                                                onChange={(e) => setData({ ...data, price: e.target.value })}
                                                type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlTextarea1">mô tả</label>
                                            <textarea value={data.description}
                                                onChange={(e) => setData({ ...data, description: e.target.value })}
                                                className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div className="custom-file">

                                            <label className="custom-file-label" for="customFile">Them anh</label>
                                            <input value={data.imageUrl}
                                                    onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
                                                type="text" className="custom-file-input" id="customFile" />

                                        </div>


                                        <input onClick={Submit} type='submit' />
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
export default AddProduct