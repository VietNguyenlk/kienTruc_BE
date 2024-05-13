const express = require('express');
const routes = express.Router();
const monHocController = require('../controllers/MonHocController');
const lopHocPhanController = require('../controllers/LopHocPhanController');
const { authMiddleware, authUserMiddleware } = require('../middleware/authMiddleware');

// tạo lớp học phần
//[POST] http://localhost:3001/api/lophocphan/createLopHocPhan
routes.post('/createLopHocPhan', lopHocPhanController.createLopHocPhan);

// show list lớp học phần
//[GET] http://localhost:3001/api/lophocphan/getListLopHocPhan
routes.get('/getListLopHocPhan', lopHocPhanController.getListLopHocPhan);

// show list hp theo ma mon hoc
//[GET] http://localhost:3001/api/lophocphan/getListLopHocPhanByMaMonHoc/:maMonHoc
routes.get('/getListLopHocPhanByMaMonHoc/:maMonHoc', lopHocPhanController.getListLopHocPhanByMaMonHoc);



module.exports = routes ;