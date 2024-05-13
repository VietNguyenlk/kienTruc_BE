const LopHocPhan = require('../models/LopHocPhan');

// createLopHocPhan
const createLopHocPhan = (newLopHocPhan) => {
    return new Promise(async (resolve, reject) => {
        const { maLopHocPhan, tenLopHocPhan, maMonHoc, soTC, soTiet, soTuan, soLuongSV, soLuongDaDangKy, soLuongConLai, tinhTrang, hocKy, namHoc, ngayBatDau, ngayKetThuc, tietHoc, giangVien, phongHoc, danhSachSinhVien } = newLopHocPhan;

        try {
            const checkLopHocPhan = await LopHocPhan.findOne({
                maLopHocPhan: maLopHocPhan,
            });
            if (checkLopHocPhan !== null) {
                resolve({
                    status: 'ERR',
                    massage: 'LopHocPhan already exists',
                });
            }
            const createLopHocPhan = await LopHocPhan.create({
                maLopHocPhan,
                tenLopHocPhan,
                maMonHoc,
                soTC,
                soTiet,
                soLuongSV,
                soLuongDaDangKy,
                tinhTrang,
                hocKy,
                namHoc,
                ngayBatDau,
                ngayKetThuc,
                tietHoc,
                giangVien,
                phongHoc,
                danhSachSinhVien,
            });
            if (createLopHocPhan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createLopHocPhan,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}
// show list LopHocPhan
const getListLopHocPhan = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const listLopHocPhan = await LopHocPhan.find();
            if (listLopHocPhan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: listLopHocPhan,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}
// show list LopHocPhan by maMonHoc
const getListLopHocPhanByMaMonHoc = (maMonHoc) => {
    return new Promise(async (resolve, reject) => {
        try {
            const listLopHocPhan = await LopHocPhan.find({
                maMonHoc: maMonHoc,
            });
            if (listLopHocPhan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: listLopHocPhan,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}
module.exports = {
    createLopHocPhan,
    getListLopHocPhan,
    getListLopHocPhanByMaMonHoc,
};