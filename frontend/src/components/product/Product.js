import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



async function getData() {
    const res = await axios.get("https://62811baf1020d8520585969c.mockapi.io/api/v1/products")
    console.log(res.data)
    return res;
}
const Product = () => {

    const [allPro, getAllPro] = useState([]);

    const [flag, setFlag] = useState(false);

    useEffect(() => {

        getData().then((res) => getAllPro(res.data));
        getData().catch((err) => console.log(err));

    }, [flag]);

    function deletepro(id) {
        axios.delete(`https://62811baf1020d8520585969c.mockapi.io/api/v1/products/${id}`)
            .then(res => {
                setFlag(true);

            })

    }
    const [searchPro, setSearchPro] = useState("")


    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className='bx bx-menu-alt-right'></i>
                </div>
                <div className="main-title">
                    Quản lí thú cưng
                </div>
            </div>
            <div className="main-content">

                <div className="row">
                    <div className="col-12">

                        <div className="box">
                            <div className="box-header">
                                <a href="/addProduct"><i className='bx bx-add-to-queue bx-sm'></i> Thêm thú cưng</a>
                            </div>
                            <input type="text" name="search" placeholder="Search.." onChange={(event) => { setSearchPro(event.target.value) }} />
                            <div className="box-body overflow-scroll">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Hình ảnh </th>
                                            <th>Tên thú cưng</th>
                                            <th>Ngày thêm</th>
                                            <th>Trạng Thái Vận Chuyển</th>

                                            <th>Giá</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allPro.filter((pro) => {
                                            if (searchPro == "") {
                                                return pro
                                            } else if (pro.name.toLowerCase().includes(searchPro.toLowerCase())) {
                                                return pro
                                            }
                                        }).map((pro, index) => {
                                                return (


                                                    <tr key={index}>
                                                        <td >{pro.id}</td>
                                                        <td>
                                                            <div className="order-owner">
                                                                <img src={pro.imageUrl} alt="user image" />

                                                                <span></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span>{pro.name}</span>
                                                        </td>
                                                        <td>2021-05-09</td>
                                                        <td>
                                                            <span className="order-status order-ready">
                                                                Sẵn sàng giao hàng
                                                            </span>
                                                        </td>

                                                        <td>{pro.price}</td>
                                                        <td>
                                                            <div className="manage">

                                                                <Link to={`/editProduct/${pro.id}`}><i className='bx bx-edit bx-md'></i></Link>
                                                                <button onClick={() => deletepro(pro.id)}><i className='bx bx-trash bx-md'></i></button>
                                                            </div>

                                                        </td>
                                                        <td>

                                                        </td>
                                                    </tr>


                                                )

                                            })}

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Product