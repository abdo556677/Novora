class HomeController {
    static index(req, res) {
      res.render('pages/home/index', { title: 'الصفحة الرئيسية' ,body:"main"});
    }
}
  
module.exports = HomeController;
  