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
                            <div className="box-header" id='add'>
                                <a href="/addProduct"><i className='bx bx-add-to-queue bx-sm'></i> Thêm thú cưng</a>
                            </div>
                            <form id="tim">
                                <i class='bx bx-search icon'></i>
                                <input className='input-field' type="text" name="search" placeholder="Tìm kiếm..." onChange={(event) => { setSearchPro(event.target.value) }} />
                            </form>
                            <div className="box-body overflow-scroll">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Hình ảnh </th>
                                            <th>Tên thú cưng</th>
                                            <th>Loại</th>
                                            <th>Trạng Thái</th>

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
                                                    <td>{pro.breed}</td>
                                                    <td>
                                                        <span className="order-status order-ready">
                                                            Còn hàng
                                                        </span>
                                                    </td>

                                                    <td>{pro.price}</td>
                                                    <td>
                                                        <div className="manage">

                                                            <Link to={`/editProduct/${pro.id}`}><i className='bx bx-edit bx-md'></i></Link>
                                                            <button
                                                                className="delete button"
                                                                onClick={() => {
                                                                    const confirmBox = window.confirm(
                                                                        "Ban co muon xoa san pham nay?"
                                                                    )
                                                                    if (confirmBox === true) {
                                                                        deletepro(pro.id)
                                                                    }
                                                                }}><i className='bx bx-trash bx-md'></i>
                                                            </button>
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