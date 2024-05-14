const User = require('../models/User');
const bcrypt = require('bcrypt');

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { maSV, tenSV, gioiTinh, ngaySinh, noiSinh, lop, nganh, khoaHoc, bacDaoTao, loaiHinhDaoTao, password } = newUser;

        try {
            const hash = bcrypt.hashSync(password, 10);
            const checkUser = await User.findOne({
                maSV: maSV,
            });
            if (checkUser !== null) {
                resolve({
                    status: 'ERR',
                    massage: 'User already exists',
                });
            }
            const createUser = await User.create({
                maSV,
                tenSV,
                gioiTinh,
                ngaySinh,
                noiSinh,
                lop,
                nganh,
                khoaHoc,
                bacDaoTao,
                loaiHinhDaoTao,
                password: hash,
            });
            if (createUser) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createUser,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    createUser,
};