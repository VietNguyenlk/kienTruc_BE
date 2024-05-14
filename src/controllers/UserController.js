const UserServices = require('../services/UserService');

const createUser = async(req, res) => {
    try {
        console.log("r",req.body);
        const { maSV, tenSV, gioiTinh, ngaySinh, noiSinh, lop, nganh, khoaHoc, bacDaoTao, loaiHinhDaoTao } = req.body;
        if (!maSV || !tenSV || !gioiTinh || !ngaySinh || !noiSinh || !lop || !nganh || !khoaHoc || !bacDaoTao || !loaiHinhDaoTao) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        } else {
            const response = await UserServices.createUser(req.body);
            return res.status(200).json(response);
        }
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
}

module.exports = {
    createUser,
};