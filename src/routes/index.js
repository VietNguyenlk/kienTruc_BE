const MonHoc = require('./MonHocRouter');
const LopHocPhan = require('./LopHocPhanRouter')
const routes = (app) => {
    app.use('/api/monhoc', MonHoc);
    app.use('/api/lophocphan', LopHocPhan);
};

module.exports = routes;
