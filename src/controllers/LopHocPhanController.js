const LopHocPhanService = require('../services/LopHocPhanServices');
const JwtService = require('../services/JwtService');

// create LopHocPhan
const createLopHocPhan = async(req, res) => {
    try {
        console.log("r",req.body);
        const { maLopHocPhan, tenLopHocPhan, maMonHoc, soLuongSV, soTiet, thu, phongHoc, giangVien, hocKy, namHoc } = req.body;
        if (!maLopHocPhan || !tenLopHocPhan || !maMonHoc || !soLuongSV || !soTiet  || !phongHoc || !giangVien || !hocKy || !namHoc) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        } else {
            const response = await LopHocPhanService.createLopHocPhan(req.body);
            return res.status(200).json(response);
        }
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
}
// show list LopHocPhan
const getListLopHocPhan = async(req, res) => {
    try {
        const response = await LopHocPhanService.getListLopHocPhan();
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
}

// show list LopHocPhan by maMonHoc
const getListLopHocPhanByMaMonHoc = async(req, res) => {
    try {
        const { maMonHoc } = req.params;
        const response = await LopHocPhanService.getListLopHocPhanByMaMonHoc(maMonHoc);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
}

module.exports = {
    createLopHocPhan,
    getListLopHocPhan,
    getListLopHocPhanByMaMonHoc,
};