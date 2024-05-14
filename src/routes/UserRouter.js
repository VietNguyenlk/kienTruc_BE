const express = require('express');
const routes = express.Router();
const userController = require('../controllers/UserController');

// tạo user
//[POST] http://localhost:3001/api/user/createUser
// {
//     "maSV":"2000001", "tenSV":"Nguyễn Thành An", 
//     "gioiTinh":"Nam", "ngaySinh":"02/02/2002", 
//     "noiSinh":"Bệnh viện Vĩnh Long", "lop":"DHKTPM16A", 
//     "nganh":"Kĩ thuật phần mềm", "khoaHoc":"2020-2021", 
//     "bacDaoTao":"Đại học", "loaiHinhDaoTao":"Chính quy"
// }
routes.post('/createUser', userController.createUser);

//[POST] http://localhost:3001/api/user/loginUser
routes.post('/loginUser', userController.loginUser);

module.exports = routes;